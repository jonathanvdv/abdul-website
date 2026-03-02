import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col md:flex-row bg-white pt-16 md:pt-20">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20 z-10 order-2 md:order-1">
                <AnimatedSection>
                    <p className="text-brand-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 md:mb-6">
                        Kitchener · Waterloo · Cambridge
                    </p>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.1] text-brand-text mb-6 md:mb-8 text-balance">
                        Real Estate That <br className="hidden lg:block" />
                        <span className="italic">Feels Like Home.</span>
                    </h1>

                    <div className="text-brand-text-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-10 md:mb-12 font-light text-pretty space-y-4">
                        <p>
                            I'm Abdul Basharmal, a REALTOR® with RE/MAX Twin City, proud to have grown up in this community and to have a strong understanding of the Waterloo Region market. I know the neighborhoods, the schools, the market trends, and what makes each area unique. Real estate is more than just a transaction to me. It is about helping people build their lives and put down roots in a place they can truly call home.
                        </p>
                        <p>
                            Whether you are buying your first property, selling and moving on to your next chapter, or looking to rent the right place for your lifestyle and budget, I am here to guide you with clear advice and local expertise every step of the way. If you are simply curious about what your home is worth in today's market, I would be happy to provide that insight as well. Let's connect and talk about your goals.
                        </p>
                    </div>

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
                            <span className="text-brand-accent">✓</span> English · Hindi · Persian · Urdu · Dari · Farsi
                        </span>
                        <span className="flex items-center gap-3">
                            <span className="text-brand-accent">✓</span> Honest advice.
                        </span>
                    </div>
                </AnimatedSection>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative order-1 md:order-2 h-[70vh] md:h-auto min-h-[500px] overflow-hidden">
                <Image
                    src="/abdul-photo-no-bg.png"
                    alt="Abdul Basharmal - Waterloo Region REALTOR"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-right-bottom"
                />
                {/* Subtle gradient overlay to blend image bottom into next section on mobile */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent md:hidden pointer-events-none"></div>
                {/* Subtle white overlay edge on desktop */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent hidden md:block pointer-events-none"></div>
            </div>
        </section>
    )
}
