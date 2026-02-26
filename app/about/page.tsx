import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

export const metadata: Metadata = {
    title: 'About Abdul Basharmal | REALTOR® Kitchener-Waterloo',
    description: 'Learn about Abdul Basharmal - a data-driven REALTOR® with RE/MAX Twin City Realty in Kitchener, Ontario, serving buyers and sellers across the Waterloo Region.',
}

export default function AboutPage() {
    return (
        <div className="bg-brand-bg min-h-screen pt-20">

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
                {/* TODO: Use a real, warm hero photo for the about page */}
                <Image
                    src="https://cdn.realtor.ca/individual/TS637750507800000000/highres/1403257.jpg"
                    alt="Abdul Basharmal"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark/80 via-brand-bg-dark/40 to-transparent"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Hi, I'm <span className="italic text-brand-gold">Abdul.</span></h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-6">My Story</p>
                    <h2 className="font-display text-4xl md:text-5xl text-brand-text mb-10 leading-tight">
                        I Got Into Real Estate Because I Wanted to Actually <span className="italic text-brand-accent">Help People</span>
                    </h2>
                </div>

                <div className="prose prose-lg prose-brand max-w-none text-brand-text-muted font-light leading-relaxed">
                    <p>
                        Highly experienced in sales and customer service, I am a licensed Real Estate Agent working day-to-day with buyers and sellers in Ontario. My mission is to provide you with the knowledge, insights, and guidance you need when it comes to buying, selling, staging properties, and more.
                    </p>
                    <p>
                        Real estate is about more than just transactions. It's about building futures and finding a place where you truly belong. I go out of my way to ensure my clients are guided correctly and honestly.
                    </p>
                    <p>
                        Whether you are searching for your first home, looking to invest in the Waterloo or Toronto regions, or need expert advice on residential financing and leasing, I am here to help. I offer my services in multiple languages including <strong>English, Hindi, Persian, Urdu, Dari, and Farsi</strong>, ensuring that our community is served with clarity and respect.
                    </p>
                    <p>
                        Based in Kitchener and working with RE/MAX Twin City Realty, I bring a professional, results-oriented approach to every client interaction. Let's work together to make your real estate goals a reality.
                    </p>
                </div>
            </section>

            {/* How I Work Section */}
            <section className="py-24 bg-white border-y border-brand-border/40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="font-display text-4xl md:text-5xl text-brand-text">What You Can <span className="italic text-brand-accent">Expect From Me</span></h2>
                    </div>

                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="w-16 h-16 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-3xl shadow-sm border border-brand-border/50 group-hover:bg-brand-accent transition-colors duration-300">
                                <span className="group-hover:grayscale group-hover:brightness-200 transition-all">🏡</span>
                            </div>
                            <div>
                                <h3 className="font-display text-3xl text-brand-text mb-4">If You're Buying</h3>
                                <p className="text-brand-text-muted text-lg leading-relaxed font-light">
                                    I'll tell you honestly when something is overpriced. I'll pull the real comps, explain what the market is doing right now in that specific neighbourhood, and help you make an offer you feel good about, not one you'll second-guess at 2am.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="w-16 h-16 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-3xl shadow-sm border border-brand-border/50 group-hover:bg-brand-accent transition-colors duration-300">
                                <span className="group-hover:grayscale group-hover:brightness-200 transition-all">📈</span>
                            </div>
                            <div>
                                <h3 className="font-display text-3xl text-brand-text mb-4">If You're Selling</h3>
                                <p className="text-brand-text-muted text-lg leading-relaxed font-light">
                                    Pricing is everything, and bad pricing costs you real money. I'll give you a clear-eyed evaluation of what your home is worth in today's market, a plan to present it well, and a negotiation strategy that protects your number.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="w-16 h-16 shrink-0 rounded-full bg-brand-bg flex items-center justify-center text-3xl shadow-sm border border-brand-border/50 group-hover:bg-brand-accent transition-colors duration-300">
                                <span className="group-hover:grayscale group-hover:brightness-200 transition-all">🤝</span>
                            </div>
                            <div>
                                <h3 className="font-display text-3xl text-brand-text mb-4">Either Way</h3>
                                <p className="text-brand-text-muted text-lg leading-relaxed font-light">
                                    You get my personal number. You can call or text. I'll respond the same day. I'm not running a team where you get handed off. I keep things manageable on purpose, because I'd rather do a great job for fewer clients than a mediocre one for many.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-24 bg-brand-bg-dark text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                        {/* Background */}
                        <div>
                            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-8 border-b border-brand-border/20 pb-4">Background</p>
                            <ul className="space-y-6 text-brand-border/80 text-lg font-light">
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span><strong>Former Data Insights Analyst</strong><br /><span className="text-sm">Rogers Communications</span></span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span><strong>Former Assistant Manager, Field Sales</strong><br /><span className="text-sm">Rogers Communications</span></span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span><strong>Based in:</strong> Kitchener, Ontario</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span><strong>Languages:</strong> English, Hindi, Persian, Urdu, Dari, Farsi</span>
                                </li>
                            </ul>
                        </div>

                        {/* Credentials */}
                        <div>
                            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-8 border-b border-brand-border/20 pb-4">Credentials & Affiliations</p>
                            <ul className="space-y-6 text-brand-border/80 text-lg font-light">
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span>Licensed REALTOR® - Province of Ontario</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span>Member: Canadian Real Estate Association (CREA)</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span>Member: Waterloo Region Association of REALTORS® (WRAR)</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-brand-gold mt-1">•</span>
                                    <span>Brokerage: RE/MAX Twin City Realty Inc.</span>
                                </li>
                                {/* 
                // TODO: Add any designations or awards here
                <li className="flex gap-4">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Awards / Designations placeholder</span>
                </li> 
                */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            {/* CTA */}
            <section className="py-24 md:py-32 bg-white text-center px-4">
                <h2 className="font-display text-4xl md:text-5xl text-brand-text mb-6">
                    Let's Find Out If We're a <span className="italic text-brand-accent">Good Fit</span>
                </h2>
                <p className="text-brand-text-muted text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    No pitch, no pressure. Just a conversation about what you're trying to do and whether I'm the right person to help.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-brand-accent hover:bg-brand-accent-light text-white px-10 py-5 uppercase tracking-wider text-sm font-medium transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                    Reach Out to Abdul →
                </Link>
            </section>
        </div>
    )
}
