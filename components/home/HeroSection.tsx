import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[100vh] lg:min-h-[85vh] xl:min-h-[80vh] bg-white pt-24 lg:pt-32 flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
                <div className="flex flex-col lg:flex-row flex-1 h-full w-full">
                    {/* Left Content */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 pb-20 lg:pt-4 lg:pb-16 z-10 order-2 lg:order-1 lg:pr-12 lg:min-h-[600px]">
                        <AnimatedSection className="max-w-3xl">
                            <p className="text-brand-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 md:mb-6">
                                Kitchener · Waterloo · Cambridge
                            </p>

                            <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.1] text-brand-text mb-6 md:mb-8 text-balance">
                                Real Estate That <br className="hidden lg:block" />
                                <span className="italic">Feels Like Home.</span>
                            </h1>

                            <div className="text-brand-text-muted text-lg sm:text-xl max-w-xl lg:max-w-none leading-relaxed mb-10 md:mb-12 font-light text-pretty space-y-8">
                                <p>
                                    I'm Abdul Basharmal, a REALTOR® with RE/MAX Twin City. Born and raised in the Waterloo Region, I bring deep local knowledge of the neighborhoods, schools, and market trends that shape our community.
                                </p>
                                <p>
                                    Buying, selling, or renting — I'm here to guide you with clear advice and hands-on expertise every step of the way. Let's connect and talk about your goals.
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
                                    <span className="text-brand-accent">✓</span> English · Hindi · Persian · Urdu · Dari · Farsi
                                </span>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-5/12 relative order-1 lg:order-2 h-[60vh] lg:h-auto min-h-[400px] lg:min-h-[600px]">
                        <Image
                            src="/images/abdul-photo-no-bg-v2.png"
                            alt="Abdul Basharmal - Waterloo Region REALTOR"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain object-right-bottom"
                        />
                        {/* Subtle gradient overlay to blend image bottom into next section on mobile */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent md:hidden pointer-events-none"></div>
                        {/* Subtle white overlay edge on desktop */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent hidden md:block pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
