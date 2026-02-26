# Abdul Basharmal - Real Estate Website

A modern, premium Real Estate Website built for Abdul Basharmal (RE/MAX Twin City Realty) using Next.js (App Router), Tailwind CSS, Framer Motion, and TypeScript.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Required Asset Updates Before Launch

Before deploying this site to production, the following placeholder assets and text must be replaced with Abdul's real information:

- **Images:**
  - Replace `/public/images/listing-placeholder.jpg` with Abdul's high-quality main headshot/hero image.
  - Or add new images into the `/public/images` folder and update the image paths in:
    - `components/home/HeroSection.tsx`
    - `components/home/AboutPreview.tsx`
    - `components/home/ContactCTA.tsx`
    - `app/about/page.tsx`
    - `app/contact/page.tsx`
    - `app/listings/[id]/page.tsx`

- **Contact Info & Links:**
  - Update the phone number `(519) 555-5555` to Abdul's actual business line across the site (e.g., `Footer.tsx`, `Navbar.tsx`, `page.tsx`, `contact/page.tsx`).
  - Update the email `abdulbashrealtor@gmail.com` to Abdul's actual work address.
  - Add real links for Instagram, Facebook, and LinkedIn in `Footer.tsx`, `page.tsx`, and `contact/page.tsx`.

## Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Contact Form Submission Service (e.g., Formspree, Resend, or SendGrid)
# Update the POST handler in app/api/contact/route.ts to use this.
EMAIL_SERVICE_KEY=your_key_here

# IDX Broker Integration
# Abdul needs to provide this API key from his IDX Broker account
IDXBROKER_API_KEY=your_idx_broker_api_key
NEXT_PUBLIC_AGENT_MLS_ID=abdul_mls_id_if_applicable
```

## IDX Broker Integration

Currently, the application uses mock data (`lib/mock-listings.ts`) so the site is visually complete and usable before the IDX Broker API key is available.

**To transition to live IDX Broker data:**
1. Abdul needs an active IDX Broker account (Platinum is recommended for robust API access).
2. Generate an API Key from the IDX Broker Middleware control panel (`Settings > Global Settings > API Control`).
3. Add the API key to your deployment environment variables as `IDXBROKER_API_KEY`.
4. In `lib/listings.ts`, update the API functions (`getListings`, `getListing`, `getFeaturedListings`) to fetch from the actual IDX Broker API endpoint (`https://api.idxbroker.com/clients/featured` etc.) instead of returning the mock data fallback. The existing mock structure closely mirrors typical IDX JSON returns to minimize mapping changes.

**Compliance Note for CREA/MLS:**
The footer (`components/layout/Footer.tsx`) and the listings pages already include the standard required CREA disclaimers regarding the MLS® trademark and DDF data feed. Double-check these against the specific rules of the Waterloo Region Association of REALTORS® (WRAR) before going live to ensure absolute compliance.

## Form Submissions
The contact form currently posts to `/api/contact/route.ts`. You will need to wire this route up to actually send emails. We recommend using a service like Resend, SendGrid, or simply ForwardEmail, depending on Abdul's existing tech stack.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Ensure that when deploying, you set your Environment Variables in the project settings on Vercel (or your hosting provider of choice).
