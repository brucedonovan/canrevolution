'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  imageAlt: string;
  features: string[];
  details: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter Plan',
    price: '€500',
    image: '/images/pricing-starter.png',
    imageAlt:
      'Top view of three unopened soda cans arranged in a triangle on a dark surface.',
    features: [
      'Machine Rental including installation and maintenance',
      '500 cans and lids delivered on-site every month',
    ],
    details: [
      'Month-to-month contracts',
      '1 month notice when cancelling the subscription',
    ],
  },
  {
    name: 'Growth Plan',
    price: '€1000',
    originalPrice: '€1250',
    image: '/images/pricing-growth.png',
    imageAlt:
      'Top view of eleven silver soda cans arranged in a pattern on a black surface.',
    features: [
      'Machine Rental including installation and maintenance',
      '500 cans and lids delivered on-site every month',
      'Cans professionally branded with your logo (subject to signing a 12 month contract)',
      'Machine screen customisable with your company branding/colors (subject to signing a 12 month contract)',
    ],
    details: [
      'Month-to-month contracts',
      '1 month notice when cancelling',
      'Note: Contracts of 12 months+ get branding benefits',
    ],
    popular: true,
  },
  {
    name: 'Scale Plan',
    price: '€2000',
    originalPrice: '€2500',
    image: '/images/pricing-scale.png',
    imageAlt: 'Several rows of unopened aluminum cans viewed from above.',
    features: [
      'Machine Rental including installation and maintenance',
      '500 cans and lids delivered on-site every month',
      'Cans professionally branded with your logo',
      'Machine screen customisable with your company branding/colors',
    ],
    details: [
      '12-24 month contracts',
      '3 month notice when cancelling',
    ],
  },
];

const AccordionItem: React.FC<{
  title: string;
  details: string[];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ title, details, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onToggle}
        className="w-full py-3 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <ChevronDown
          size={14}
          className={`text-gray-800 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4">
          <ul className="space-y-2 text-xs text-gray-700">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const PricingCard: React.FC<{
  plan: PricingPlan;
}> = ({ plan }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-105 ${
        plan.popular ? 'ring-2 ring-black scale-105' : 'bg-gray-50'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
          Popular
        </div>
      )}

      <div className="p-6 md:p-8 bg-white">
        {/* Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-gray-200">
          <img
            src={plan.image}
            alt={plan.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Plan Name */}
        <h3 className="text-xl font-bold text-black mb-4">{plan.name}</h3>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-black">{plan.price}</span>
            <span className="text-sm text-gray-600">monthly</span>
          </div>
          {plan.originalPrice && (
            <p className="text-sm text-gray-500 line-through mt-1">
              {plan.originalPrice}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-700">
              <span className="text-black font-bold flex-shrink-0">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Accordion */}
        <AccordionItem
          title="Duration & Details"
          details={plan.details}
          isOpen={openAccordion}
          onToggle={() => setOpenAccordion(!openAccordion)}
        />
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <section className="relative w-full bg-gray-100 text-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title and Description */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Flexible, transparent monthly subscription models
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            We offer a flexible monthly subscription based on expected usage. If
            you ever need more cans and lids simply reach out and we will get
            some delivered at a flat per can rate.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
