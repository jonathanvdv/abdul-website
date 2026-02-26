const API_BASE = process.env.IDXBROKER_API_BASE || 'https://api.idxbroker.com'
const API_KEY = process.env.IDXBROKER_API_KEY || ''

// Shared headers for every IDX Broker request
const idxHeaders = {
    'accesskey': API_KEY,
    'outputtype': 'json',
    'apiversion': '1.4.0',
    'Content-Type': 'application/json',
}

// ─── Types ──────────────────────────────────────────────────────────────

export interface Listing {
    id: string
    mlsNumber: string
    address: {
        full: string
        streetNumber: string
        streetName: string
        unitNumber: string | null
        city: string
        province: string
        postalCode: string
    }
    price: number
    beds: number
    baths: number
    sqft: number | null
    lotSize: string | null
    propertyType: string
    yearBuilt: number | null
    description: string
    photos: string[]           // array of full image URLs
    listDate: string           // ISO date string
    daysOnMarket: number
    status: 'Active' | 'Sold' | 'Pending'
    virtualTour: string | null
    features: {
        garage?: string
        heating?: string
        cooling?: string
        basement?: string
        [key: string]: string | undefined
    }
    idxLink: string            // link back to IDX Broker's hosted detail page - required by some board rules
}

export interface ListingFilters {
    minPrice?: number
    maxPrice?: number
    beds?: number
    baths?: number
    propertyType?: string
    city?: string
    limit?: number
    offset?: number
    sortField?: 'listingPrice' | 'listingDate'
    sortDirection?: 'asc' | 'desc'
}

// ─── Fetch All Listings ──────────────────────────────────────────────────

export async function getListings(filters: ListingFilters = {}): Promise<Listing[]> {
    if (!process.env.IDXBROKER_API_KEY) {
        console.warn('⚠️  No IDXBROKER_API_KEY set - returning mock listings')
        const { mockListings } = await import('./mock-listings')
        return mockListings.slice(0, filters.limit || 12)
    }

    const params = new URLSearchParams()

    if (filters.minPrice) params.set('lp', filters.minPrice.toString())
    if (filters.maxPrice) params.set('hp', filters.maxPrice.toString())
    if (filters.beds) params.set('bd', filters.beds.toString())
    if (filters.baths) params.set('ba', filters.baths.toString())
    if (filters.propertyType) params.set('pt', filters.propertyType)
    if (filters.city) params.set('city', filters.city)
    if (filters.limit) params.set('count', filters.limit.toString())
    if (filters.offset) params.set('start', filters.offset.toString())
    if (filters.sortField) params.set('sortField', filters.sortField)
    if (filters.sortDirection) params.set('sortDirection', filters.sortDirection || 'desc')

    const response = await fetch(
        `${API_BASE}/clients/listings?${params.toString()}`,
        {
            headers: idxHeaders,
            next: { revalidate: 300 }, // cache for 5 minutes - listings don't change by the second
        }
    )

    if (!response.ok) {
        console.error('IDX Broker API error:', response.status, response.statusText)
        throw new Error(`Failed to fetch listings: ${response.status}`)
    }

    const data = await response.json()

    // IDX Broker returns listings as an object keyed by listingID, not an array
    // Convert to array and normalize
    const listingsArray = Object.values(data) as any[]
    return listingsArray.map(normalizeIdxListing)
}

// ─── Fetch Single Listing ────────────────────────────────────────────────

export async function getListing(listingId: string): Promise<Listing> {
    if (!process.env.IDXBROKER_API_KEY) {
        const { mockListings } = await import('./mock-listings')
        const found = mockListings.find(l => l.id === listingId)
        if (!found) throw new Error('Listing not found')
        return found
    }

    const response = await fetch(
        `${API_BASE}/clients/listings/${listingId}`,
        {
            headers: idxHeaders,
            next: { revalidate: 300 },
        }
    )

    if (!response.ok) throw new Error(`Listing not found: ${listingId}`)

    const data = await response.json()
    return normalizeIdxListing(data)
}

// ─── Fetch Featured Listings (Abdul's own active listings) ────────────────

export async function getFeaturedListings(limit = 6): Promise<Listing[]> {
    if (!process.env.IDXBROKER_API_KEY) {
        const { mockListings } = await import('./mock-listings')
        return mockListings.slice(0, limit)
    }

    const response = await fetch(
        `${API_BASE}/clients/featured`,
        {
            headers: idxHeaders,
            next: { revalidate: 300 },
        }
    )

    if (!response.ok) {
        // If no featured listings exist yet, fall back to recent listings
        console.warn('No featured listings found, falling back to recent listings')
        return getListings({ limit, sortField: 'listingDate', sortDirection: 'desc' })
    }

    const data = await response.json()
    const listingsArray = Object.values(data) as any[]
    return listingsArray.slice(0, limit).map(normalizeIdxListing)
}

// ─── Normalize IDX Broker response to our Listing type ───────────────────
// IDX Broker field names documented at:
// https://middleware.idxbroker.com/docs/api/methods/index.html#api-Clients-GetClientListings

function normalizeIdxListing(raw: any): Listing {
    // Build the full address string
    const unitPart = raw.unitNumber ? ` Unit ${raw.unitNumber}` : ''
    const fullAddress = `${raw.streetNumber} ${raw.streetName}${unitPart}, ${raw.cityName}, ${raw.stateAbbr} ${raw.zipcode}`

    // IDX Broker returns photos as an object: { "0": "url1", "1": "url2", ... }
    const photos = raw.image
        ? Object.values(raw.image as Record<string, string>)
        : []

    return {
        id: raw.listingID,
        mlsNumber: raw.listingID,
        address: {
            full: fullAddress,
            streetNumber: raw.streetNumber || '',
            streetName: raw.streetName || '',
            unitNumber: raw.unitNumber || null,
            city: raw.cityName || '',
            province: raw.stateAbbr || 'ON',
            postalCode: raw.zipcode || '',
        },
        price: parseInt(raw.listingPrice?.replace(/[^0-9]/g, '') || '0', 10),
        beds: parseInt(raw.bedrooms || '0', 10),
        baths: parseFloat(raw.totalBaths || raw.bathsFull || '0'),
        sqft: raw.sqFt ? parseInt(raw.sqFt.replace(/[^0-9]/g, ''), 10) : null,
        lotSize: raw.lotSize || null,
        propertyType: raw.propType || raw.propSubType || 'Residential',
        yearBuilt: raw.yearBuilt ? parseInt(raw.yearBuilt, 10) : null,
        description: raw.remarksConcat || raw.publicRemarks || '',
        photos: photos as string[],
        listDate: raw.listingDate || '',
        daysOnMarket: parseInt(raw.daysOnMarket || '0', 10),
        status: normalizeStatus(raw.idxStatus),
        virtualTour: raw.virtualTourLink || null,
        features: {
            garage: raw.garage,
            heating: raw.heatType,
            cooling: raw.cooling,
            basement: raw.basement,
        },
        idxLink: raw.detailsURL || `https://www.idxbroker.com/listing/${raw.listingID}`,
    }
}

function normalizeStatus(idxStatus: string): 'Active' | 'Sold' | 'Pending' {
    const s = (idxStatus || '').toLowerCase()
    if (s === 'sold') return 'Sold'
    if (s === 'pending' || s === 'cs' || s === 'contingent') return 'Pending'
    return 'Active'
}
