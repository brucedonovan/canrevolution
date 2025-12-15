'use client'

import { useState, useCallback, useMemo } from 'react'
import { Check, AlertCircle } from 'lucide-react'
import { theme } from '@/lib/theme'

interface Plan {
  limit: number
  fee: number
  extra: number
}

interface CalculationResult {
  extraRevenue: number
  subscriptionCost: number
  extraCans: number
  extraCansCost: number
  profit: number
  profitPerCan: number
  yearlyProfit: number
  isPositive: boolean
  recommendations: string[]
}

const PLANS: Record<string, Plan> = {
  small: { limit: 500, fee: 500, extra: 0.6 },
  medium: { limit: 1500, fee: 1000, extra: 0.55 },
  large: { limit: 4000, fee: 2000, extra: 0.50 },
}

const formatMoney = (value: number): string => {
  return value.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const parseNumber = (raw: string): number => {
  if (!raw) return NaN
  return parseFloat(raw.replace(/[^\d.,]/g, '').replace(',', '.'))
}

// Form Input Component
const FormInput: React.FC<{
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  helper: string
  prefix?: string
}> = ({ label, id, value, onChange, placeholder, helper, prefix }) => (
  <div>
    <label htmlFor={id} style={{ color: theme.text.onLight }} className="block text-sm font-semibold mb-2">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <span style={{ color: theme.text.muted }} className="absolute left-3 top-1/2 -translate-y-1/2">
          {prefix}
        </span>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
        style={{
          borderColor: theme.border.light,
          color: theme.text.onLight,
          backgroundColor: theme.background.light,
          paddingLeft: prefix ? '1.75rem' : '1rem',
        }}
      />
    </div>
    <p style={{ color: theme.text.muted }} className="text-xs mt-2">
      {helper}
    </p>
  </div>
)

// Plan Selector Component
const PlanSelector: React.FC<{
  selected: string
  onChange: (plan: string) => void
}> = ({ selected, onChange }) => {
  const plans = [
    { id: 'small', name: 'Small Plan', description: '500 cans @ €500/mo' },
    { id: 'medium', name: 'Medium Plan', description: '1500 cans @ €1000/mo' },
    { id: 'large', name: 'Large Plan', description: '4000 cans @ €2000/mo' },
  ]

  return (
    <div>
      <label style={{ color: theme.text.onLight }} className="block text-sm font-semibold mb-4">
        Subscription Plan
      </label>
      <fieldset aria-label="Plan selection" className="space-y-0 rounded-md overflow-hidden border" style={{ borderColor: theme.border.light }}>
        {plans.map((plan) => (
          <label
            key={plan.id}
            aria-label={plan.name}
            aria-description={plan.description}
            className="flex border-b p-4 cursor-pointer transition-colors last:border-b-0"
            style={{
              borderBottomColor: theme.border.light,
              backgroundColor: selected === plan.id ? theme.primary.light + '10' : 'transparent',
            }}
          >
            <input
              value={plan.id}
              checked={selected === plan.id}
              name="plan-selection"
              type="radio"
              onChange={(e) => onChange(e.target.value)}
              className="mt-0.5 shrink-0"
              style={{
                accentColor: theme.primary.light,
              }}
            />
            <span className="ml-3 flex flex-col">
              <span className="text-sm font-medium" style={{ color: selected === plan.id ? theme.text.onLight : theme.primary.light }}>
                {plan.name}
              </span>
              <span className="text-sm" style={{ color: selected === plan.id ? theme.text.muted : theme.primary.light + 'cc' }}>
                {plan.description}
              </span>
            </span>
          </label>
        ))}
      </fieldset>
    </div>
  )
}

// Form Section Component
const FormSection: React.FC<{
  selectedPackage: string
  extraCharge: string
  cansPerMonth: string
  onPackageChange: (plan: string) => void
  onChargeChange: (value: string) => void
  onVolumeChange: (value: string) => void
}> = ({
  selectedPackage,
  extraCharge,
  cansPerMonth,
  onPackageChange,
  onChargeChange,
  onVolumeChange,
}) => (
  <div
    className="lg:col-span-1 rounded-2xl p-8 h-full border"
    style={{
      backgroundColor: theme.background.lightCard,
      borderColor: theme.border.light,
    }}
  >

    <form className="space-y-8">
      <PlanSelector selected={selectedPackage} onChange={onPackageChange} />
      <FormInput
        label="Markup Per Can"
        id="extra-charge"
        value={extraCharge}
        onChange={onChargeChange}
        placeholder="0.50"
        helper="How much extra per can?"
        prefix="€"
      />
      <FormInput
        label="Monthly Volume"
        id="cans-month"
        value={cansPerMonth}
        onChange={onVolumeChange}
        placeholder="1000"
        helper="Expected cans per month"
      />
    </form>
  </div>
)

// Results Summary Cards Component
const SummaryCards: React.FC<{ result: CalculationResult }> = ({ result }) => (
  <div className="grid md:grid-cols-2 gap-4">
    <div className="rounded-lg p-4" style={{ backgroundColor: theme.background.light }}>
      <p style={{ color: theme.text.muted }} className="text-sm mb-1">
        Monthly Revenue
      </p>
      <p className="text-2xl font-bold" style={{ color: theme.primary.light }}>
        {formatMoney(result.extraRevenue)}
      </p>
    </div>

    <div className="rounded-lg p-4" style={{ backgroundColor: theme.background.light }}>
      <p style={{ color: theme.text.muted }} className="text-sm mb-1">
        Monthly Costs
      </p>
      <p style={{ color: theme.text.onLight }} className="text-2xl font-bold">
        {formatMoney(result.subscriptionCost + result.extraCansCost)}
      </p>
    </div>
  </div>
)

// Profit Highlight Component
const ProfitHighlight: React.FC<{ result: CalculationResult }> = ({ result }) => (
  <div className="rounded-lg p-6" style={{ backgroundColor: result.isPositive ? theme.primary.light + '20' : '#fee2e2' }}>
    <p style={{ color: theme.text.muted }} className="text-sm mb-2">
      Net Profit
    </p>
    <p
      className="text-4xl font-bold"
      style={{
        color: result.isPositive ? theme.primary.light : '#dc2626',
      }}
    >
      {formatMoney(Math.abs(result.profit))}
    </p>
    <p style={{ color: theme.text.muted }} className="text-sm mt-3">
      {formatMoney(result.profitPerCan)} per can • {formatMoney(result.yearlyProfit)}/year
    </p>
  </div>
)

// Recommendations Component
const Recommendations: React.FC<{ result: CalculationResult }> = ({ result }) => {
  if (result.recommendations.length > 0) {
    return (
      <div className="border-l-4 p-4 rounded-lg" style={{ borderLeftColor: theme.primary.light, backgroundColor: theme.primary.light + '10' }}>
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary.light }} />
          <div>
            <p style={{ color: theme.text.onLight }} className="font-semibold mb-3">
              💡 We found a better plan for you
            </p>
            <ul className="space-y-2">
              {result.recommendations.map((rec: string, idx: number) => (
                <li key={idx} style={{ color: theme.text.muted }} className="text-sm">
                  • {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-l-4 p-4 rounded-lg flex gap-3" style={{ borderLeftColor: theme.primary.light, backgroundColor: theme.primary.light + '10' }}>
      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary.light }} />
      <p style={{ color: theme.text.onLight }} className="text-sm font-medium">
        ✓ This is the most cost-effective plan for your volume
      </p>
    </div>
  )
}

// Results Section Component
const ResultsSection: React.FC<{ result: CalculationResult | null }> = ({ result }) => {
  if (!result) {
    return (
      <div
        className="rounded-2xl p-12 h-full flex items-center justify-center border-2"
        style={{
          backgroundColor: theme.background.lightCard,
          borderColor: theme.border.light,
          borderStyle: 'dashed',
        }}
      >
        <p style={{ color: theme.text.muted }} className="text-center text-lg font-medium">
          ✓ Fill in all fields to see your profit calculation
        </p>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-8 border-2"
      style={{
        backgroundColor: theme.background.lightCard,
        borderColor: result.isPositive ? theme.primary.light : '#ef4444',
      }}
    >
      <div className="space-y-6">
        <SummaryCards result={result} />
        <ProfitHighlight result={result} />
        <Recommendations result={result} />
      </div>
    </div>
  )
}

// Main Calculator Component
const ProfitCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [extraCharge, setExtraCharge] = useState<string>('')
  const [cansPerMonth, setCansPerMonth] = useState<string>('')

  // Memoized calculation
  const result = useMemo<CalculationResult | null>(() => {
    const markupPerCan = parseNumber(extraCharge)
    const cans = parseNumber(cansPerMonth)

    if (!selectedPackage || isNaN(markupPerCan) || isNaN(cans) || cans <= 0) {
      return null
    }

    const pkg = PLANS[selectedPackage]
    const extraCans = Math.max(0, cans - pkg.limit)
    const subscriptionCost = pkg.fee
    const extraCansCost = extraCans * pkg.extra
    const totalCost = subscriptionCost + extraCansCost
    const extraRevenue = markupPerCan * cans
    const profit = extraRevenue - totalCost
    const profitPerCan = profit / cans
    const yearlyProfit = profit * 12

    const recommendations: string[] = []
    Object.entries(PLANS).forEach(([k, p]) => {
      if (k !== selectedPackage) {
        const otherExtra = Math.max(0, cans - p.limit) * p.extra
        const otherCost = p.fee + otherExtra
        const diff = totalCost - otherCost
        if (diff > 0) {
          recommendations.push(
            `Switching to ${k.charAt(0).toUpperCase() + k.slice(1)} saves ${formatMoney(diff)}/month`
          )
        }
      }
    })

    return {
      extraRevenue,
      subscriptionCost,
      extraCans,
      extraCansCost,
      profit,
      profitPerCan,
      yearlyProfit,
      isPositive: profit >= 0,
      recommendations,
    }
  }, [selectedPackage, extraCharge, cansPerMonth])

  // Memoized handlers to prevent unnecessary re-renders
  const handlePackageChange = useCallback((plan: string) => {
    setSelectedPackage(plan)
  }, [])

  const handleChargeChange = useCallback((value: string) => {
    setExtraCharge(value)
  }, [])

  const handleVolumeChange = useCallback((value: string) => {
    setCansPerMonth(value)
  }, [])

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: theme.background.dark }}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 style={{ color: theme.text.onDark }} className="text-4xl md:text-5xl font-bold mb-4">
            Quick Profitability Calculator
          </h2>
          <p style={{ color: theme.text.mutedDark }} className="text-lg max-w-2xl mx-auto">
            Discover your potential profit with our flexible subscription plans
          </p>
        </div>

        {/* Calculator Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          <FormSection
            selectedPackage={selectedPackage}
            extraCharge={extraCharge}
            cansPerMonth={cansPerMonth}
            onPackageChange={handlePackageChange}
            onChargeChange={handleChargeChange}
            onVolumeChange={handleVolumeChange}
          />

          <div className="lg:col-span-2">
            <ResultsSection result={result} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p style={{ color: theme.text.mutedDark }} className="mb-6">
            Want to discuss custom volumes or have questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: theme.primary.light,
              color: theme.background.dark,
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProfitCalculator
