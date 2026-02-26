import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col md:flex-row bg-brand-bg">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20 z-10 order-2 md:order-1 pt-24 md:pt-32">
                <AnimatedSection>
                    <p className="text-brand-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 md:mb-6">
                        Kitchener · Waterloo · Cambridge
                    </p>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.1] text-brand-text mb-6 md:mb-8 text-balance">
                        Real Estate That <br className="hidden lg:block" />
                        <span className="italic">Feels Like Home.</span>
                    </h1>

                    <p className="text-brand-text-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-10 md:mb-12 font-light text-pretty">
                        I'm Abdul - a REALTOR® with RE/MAX Twin City who grew up in this community, knows these streets, and genuinely loves helping people plant roots here. Whether you're buying your first home, selling to move on, or just trying to figure out what your place is worth - let's talk.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Link
                            href="/listings"
                            className="bg-brand-accent hover:bg-brand-accent-light text-white font-medium px-8 py-4 transition-colors text-center uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
                        >
                            Search Listings →
                        </Link>
                        <Link
                            href="/contact?type=evaluation"
                            className="border border-brand-border bg-transparent hover:bg-brand-border/10 text-brand-text font-medium px-8 py-4 transition-colors text-center uppercase tracking-wider text-sm"
                        >
                            What's My Home Worth?
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs font-medium text-brand-text-muted uppercase tracking-wider">
                        <span className="flex items-center gap-3">
                            <span className="text-brand-accent">✓</span> RE/MAX Twin City Realty
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="text-brand-accent">✓</span> English · دری · پښتو · اردو
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="text-brand-accent">✓</span> Honest advice.
                        </span>
                    </div>
                </AnimatedSection>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative order-1 md:order-2 h-[50vh] md:h-auto min-h-[400px]">
                {/* TODO: Use a real professional photo here */}
                <Image
                    src="https://cdn.realtor.ca/individual/TS637750507800000000/highres/1403257.jpg"
                    alt="Abdul Basharmal - Kitchener Waterloo REALTOR"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top filter brightness-105"
                />
                {/* Subtle gradient overlay to blend image bottom into next section on mobile */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-bg to-transparent md:hidden pointer-events-none"></div>
                {/* Subtle green overlay edge on desktop */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent hidden md:block pointer-events-none"></div>
            </div>
        </section>
    )
}
