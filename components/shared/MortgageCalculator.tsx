'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function MortgageCalculator() {
    const [purchasePrice, setPurchasePrice] = useState(800000)
    const [downPaymentPercent, setDownPaymentPercent] = useState(20)
    const [downPaymentAmount, setDownPaymentAmount] = useState(160000)
    const [interestRate, setInterestRate] = useState(5.5)
    const [amortization, setAmortization] = useState(25)
    const [frequency, setFrequency] = useState('Monthly')

    const [estimatedPayment, setEstimatedPayment] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    // Update amounts when percentage changes
    useEffect(() => {
        const amount = (purchasePrice * downPaymentPercent) / 100
        if (amount !== downPaymentAmount) {
            setDownPaymentAmount(amount)
        }
    }, [purchasePrice, downPaymentPercent])

    // Calculate mortgage
    useEffect(() => {
        const principal = purchasePrice - downPaymentAmount
        if (principal <= 0) {
            setEstimatedPayment(0)
            setTotalInterest(0)
            setTotalCost(purchasePrice)
            return
        }

        // Standard Canadian mortgage formula (semi-annual compounding)
        const annualRate = interestRate / 100
        const semiAnnualRate = annualRate / 2
        const effectiveAnnualRate = Math.pow(1 + semiAnnualRate, 2) - 1

        let periodsPerYear = 12
        if (frequency === 'Bi-weekly') periodsPerYear = 26
        if (frequency === 'Weekly') periodsPerYear = 52

        // Effective rate per payment period
        const effectiveRate = Math.pow(1 + effectiveAnnualRate, 1 / periodsPerYear) - 1
        const totalPeriods = amortization * periodsPerYear

        if (effectiveRate === 0) {
            const payment = principal / totalPeriods
            setEstimatedPayment(payment)
            setTotalInterest(0)
            setTotalCost(purchasePrice)
            return
        }

        const payment = (principal * effectiveRate) / (1 - Math.pow(1 + effectiveRate, -totalPeriods))
        const totalInt = (payment * totalPeriods) - principal

        setEstimatedPayment(payment)
        setTotalInterest(totalInt)
        setTotalCost(purchasePrice + totalInt)

    }, [purchasePrice, downPaymentAmount, interestRate, amortization, frequency])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <div className="bg-white border border-brand-border shadow-xl p-6 md:p-10 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Controls */}
                <div className="lg:col-span-3 space-y-8">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="purchasePrice" className="text-sm font-semibold uppercase tracking-wider text-brand-text">Purchase Price</label>
                            <span className="font-medium text-brand-accent">{formatCurrency(purchasePrice)}</span>
                        </div>
                        <input
                            id="purchasePrice"
                            type="range"
                            min="100000"
                            max="3000000"
                            step="10000"
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(Number(e.target.value))}
                            className="w-full accent-brand-accent"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="downPayment" className="text-sm font-semibold uppercase tracking-wider text-brand-text">Down Payment ({downPaymentPercent}%)</label>
                            <span className="font-medium text-brand-accent">{formatCurrency(downPaymentAmount)}</span>
                        </div>
                        <div className="flex gap-4">
                            <input
                                id="downPayment"
                                type="range"
                                min="5"
                                max="100"
                                step="1"
                                value={downPaymentPercent}
                                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                                className="w-full accent-brand-accent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="interestRate" className="block text-sm font-semibold uppercase tracking-wider text-brand-text mb-2">Interest Rate (%)</label>
                            <input
                                id="interestRate"
                                type="number"
                                step="0.1"
                                min="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full border border-brand-border px-4 py-3 bg-brand-bg focus:outline-none focus:border-brand-accent transition-colors text-brand-text"
                            />
                        </div>

                        <div>
                            <label htmlFor="amortization" className="block text-sm font-semibold uppercase tracking-wider text-brand-text mb-2">Amortization</label>
                            <select
                                id="amortization"
                                value={amortization}
                                onChange={(e) => setAmortization(Number(e.target.value))}
                                className="w-full border border-brand-border px-4 py-3 bg-brand-bg focus:outline-none focus:border-brand-accent transition-colors text-brand-text"
                            >
                                {[10, 15, 20, 25, 30].map(years => (
                                    <option key={years} value={years}>{years} Years</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="frequency" className="block text-sm font-semibold uppercase tracking-wider text-brand-text mb-2">Frequency</label>
                            <select
                                id="frequency"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                className="w-full border border-brand-border px-4 py-3 bg-brand-bg focus:outline-none focus:border-brand-accent transition-colors text-brand-text"
                            >
                                {['Monthly', 'Bi-weekly', 'Weekly'].map(freq => (
                                    <option key={freq} value={freq}>{freq}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-2 bg-brand-bg-dark text-white p-8 flex flex-col justify-center rounded-sm">
                    <h3 className="font-display text-2xl mb-8 border-b border-brand-border/20 pb-4">Estimated {frequency} Payment</h3>

                    <div className="text-5xl font-display text-brand-gold mb-8">
                        {formatCurrency(estimatedPayment)}
                    </div>

                    <div className="space-y-4 text-sm text-brand-border/80">
                        <div className="flex justify-between">
                            <span>Principal Amount:</span>
                            <span className="text-white font-medium">{formatCurrency(purchasePrice - downPaymentAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Interest Paid:</span>
                            <span className="text-white font-medium">{formatCurrency(totalInterest)}</span>
                        </div>
                        <div className="flex justify-between border-t border-brand-border/20 pt-4 mt-2">
                            <span>Total Cost of Mortgage:</span>
                            <span className="text-white font-medium text-base">{formatCurrency(totalCost)}</span>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4">
                        <Link
                            href="/contact"
                            className="block text-center bg-brand-accent hover:bg-brand-accent-light text-white font-medium px-6 py-4 uppercase tracking-wide text-xs transition-colors"
                        >
                            Talk to Abdul About This →
                        </Link>
                        <Link
                            href="/listings"
                            className="block text-center border border-brand-border/30 hover:bg-brand-border/10 text-white font-medium px-6 py-4 uppercase tracking-wide text-xs transition-colors"
                        >
                            Search Listings in This Budget →
                        </Link>
                    </div>
                </div>
            </div>

            <p className="text-xs text-brand-text-muted mt-8 text-center max-w-3xl mx-auto">
                This calculator is for estimation purposes only and uses the standard Canadian mortgage formula with semi-annual compounding. Your actual rate and payment will depend on your lender and financial situation.
            </p>
        </div>
    )
}
