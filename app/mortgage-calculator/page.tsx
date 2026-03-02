import { Metadata } from 'next'
import { MortgageCalculator } from '@/components/shared/MortgageCalculator'

export const metadata: Metadata = {
    title: 'Mortgage Calculator | Waterloo Region Real Estate',
    description: 'Estimate your monthly mortgage payments for Waterloo Region properties. Calculate interest, down payment, and explore options with Abdul Basharmal.',
}

export default function MortgageCalculatorPage() {
    return (
        <div className="bg-brand-bg relative min-h-screen pt-[124px] lg:pt-[136px] pb-16 border-t border-brand-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 md:mb-20">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
                        Canadian Mortgage <br className="hidden md:block" /><span className="italic text-brand-accent">Calculator</span>
                    </h1>
                    <p className="text-brand-text-muted text-lg leading-relaxed font-light max-w-2xl mx-auto">
                        Use this interactive tool to estimate your required monthly or bi-weekly mortgage payments. This calculator takes Canadian compounding methods into account properly. For a fully accurate qualification, always consult directly with a mortgage broker or your bank.
                    </p>
                </div>

                <div className="my-16 flex justify-center w-full relative">
                    <MortgageCalculator />
                </div>

                <div className="mt-20 pt-16 border-t border-brand-border/40 text-center text-sm text-brand-text-muted/80 max-w-4xl mx-auto font-light leading-relaxed">
                    <h2 className="text-base font-semibold text-brand-text uppercase tracking-wider mb-4">A Note on Rates and Pre-Approvals</h2>
                    <p className="mb-4">
                        The interest rate you see here is a placeholder for calculation purposes. Current rates depend on many factors including whether the mortgage is insured (less than 20% down), your credit score, the property type, and whether you choose fixed or variable.
                    </p>
                    <p>
                        If you need a recommendation for a trusted local mortgage broker in the Waterloo Region (Kitchener, Waterloo, Cambridge, Breslau, & More) who can get you a proper pre-approval, please <a href="/contact" className="text-brand-accent hover:underline font-medium">reach out</a>. They can often secure better rates than your home branch by shopping the market for you.
                    </p>
                </div>

            </div>
        </div>
    )
}
