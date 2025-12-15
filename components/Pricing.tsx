'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { theme } from '@/lib/theme'

interface PricingTier {
  name: string
  id: string
  href: string
  priceMonthly: string
  description: string
  features: string[]
  details: string[]
  image: string
  mostPopular: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Starter Plan',
    id: 'tier-starter',
    href: '/appointments',
    priceMonthly: '€500',
    description: 'Perfect for cafés and small shops just getting started with beverage canning.',
    image: '/images/pricing-starter.png',
    features: [
      'Machine Rental including installation',
      '500 cans and lids delivered monthly',
    ],
    details: [
      'Month-to-month contracts',
      '1 month notice when cancelling',
    ],
    mostPopular: false,
  },
  {
    name: 'Growth Plan',
    id: 'tier-growth',
    href: '/appointments',
    priceMonthly: '€1000',
    description: 'Best for established businesses wanting professional branding on cans.',
    image: '/images/pricing-growth.png',
    features: [
      'Machine Rental including installation',
      '500 cans and lids delivered monthly',
      'Cans professionally branded with your logo',
      'Machine screen customisable with branding',
      'Marketing automations support',
    ],
    details: [
      'Month-to-month or 12+ month contracts',
      'Logo branding included only with 12 month minimum',
      '1 month notice when cancelling',
    ],
    mostPopular: true,
  },
  {
    name: 'Scale Plan',
    id: 'tier-scale',
    href: '/appointments',
    priceMonthly: '€2000',
    description: 'Enterprise solution for high-volume operations with full customization.',
    image: '/images/pricing-scale.png',
    features: [
      'Machine Rental including installation',
      '500 cans and lids delivered monthly',
      'Cans professionally branded with logo',
      'Machine screen fully customisable',
      'Dedicated account manager',
      'Priority setup and onboarding',
    ],
    details: [
      '12-24 month contracts',
      '3 month notice when cancelling',
      'Dedicated account manager included',
    ],
    mostPopular: false,
  },
]

export default function Pricing() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null)

  const toggleTier = (tierId: string) => {
    setExpandedTier(expandedTier === tierId ? null : tierId)
  }

  return (
    <div id="pricing" style={{ backgroundColor: theme.background.light }}>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 style={{ color: theme.primary.light }} className="text-base/7 font-semibold">Pricing</h2>
            <p style={{ color: theme.text.onLight }} className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              Flexible subscription models
            </p>
          </div>
          <p style={{ color: theme.text.muted }} className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty sm:text-xl/8">
            Choose an affordable plan that's packed with the best features for your beverage business. Scale up anytime or downsize with just one month's notice.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-3xl p-8 xl:p-10 inset-ring inset-ring-1 ${
                  tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8'
                } ${tierIdx === 0 ? '-mr-px lg:rounded-r-none' : ''} ${
                  tierIdx === tiers.length - 1 ? '-ml-px lg:rounded-l-none' : ''
                }`}
                style={{
                  backgroundColor: tier.mostPopular ? theme.background.lightCard : theme.background.light,
                  borderColor: theme.border.light,
                }}
              >
                <div>
                  {/* Pricing Tier Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="h-48 w-48 overflow-hidden rounded-full bg-gray-200">
                      <img
                        src={tier.image}
                        alt={tier.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className="text-lg/8 font-semibold"
                      style={{ color: tier.mostPopular ? theme.primary.light : theme.text.onLight }}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p style={{ backgroundColor: theme.primary.light + '20', color: theme.primary.light }} className="rounded-full px-2.5 py-1 text-xs/5 font-semibold">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p style={{ color: theme.text.muted }} className="mt-4 text-sm/6">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span style={{ color: theme.text.onLight }} className="text-4xl font-semibold tracking-tight">{tier.priceMonthly}</span>
                    <span style={{ color: theme.text.muted }} className="text-sm/6 font-semibold">/month</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm/6" style={{ color: theme.text.muted }}>
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none" style={{ color: theme.primary.light }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Accordion for contract details */}
                  <button
                    onClick={() => toggleTier(tier.id)}
                    className="mt-8 w-full flex items-center justify-between text-left text-sm/6 font-semibold transition-colors hover:opacity-70"
                    style={{ color: theme.primary.light }}
                  >
                    <span>Contract & Cancellation Details</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform duration-200 ${
                        expandedTier === tier.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedTier === tier.id && (
                    <ul role="list" className="mt-4 space-y-2 text-sm/6 border-t pt-4" style={{ color: theme.text.muted, borderTopColor: theme.border.light }}>
                      {tier.details.map((detail) => (
                        <li key={detail} className="flex gap-x-3">
                          <span style={{ color: theme.primary.light }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
