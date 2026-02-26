export function ListingDisclaimer({ lastUpdated }: { lastUpdated?: string }) {
    return (
        <p className="text-xs text-brand-text-muted mt-8 leading-relaxed max-w-3xl mx-auto text-center font-light border-t border-brand-border/30 pt-8">
            Listing data provided through IDX Broker. The trademarks MLS®, Multiple Listing
            Service® and the associated logos are owned by The Canadian Real Estate Association
            (CREA) and identify the quality of services provided by real estate professionals
            who are members of CREA. All information deemed reliable but not guaranteed and
            should be independently verified.
            {lastUpdated && ` Data last updated: ${lastUpdated}.`}
        </p>
    )
}
