'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { theme } from '@/lib/theme';

interface Plan {
  limit: number;
  fee: number;
  extra: number;
}

const PLANS: Record<string, Plan> = {
  small: { limit: 500, fee: 500, extra: 0.6 },
  medium: { limit: 1500, fee: 1000, extra: 0.55 },
  large: { limit: 4000, fee: 2000, extra: 0.55 },
};

const ProfitCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [extraCharge, setExtraCharge] = useState<string>('');
  const [cansPerMonth, setCansPerMonth] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    calculateResults();
  }, [selectedPackage, extraCharge, cansPerMonth]);

  const parseNumber = (raw: string): number => {
    if (!raw) return NaN;
    return parseFloat(raw.replace(/[^\d.,]/g, '').replace(',', '.'));
  };

  const formatMoney = (value: number): string => {
    return value.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateResults = () => {
    const markupPerCan = parseNumber(extraCharge);
    const cans = parseNumber(cansPerMonth);

    if (!selectedPackage || isNaN(markupPerCan) || isNaN(cans) || cans <= 0) {
      setResults(null);
      setShowResults(false);
      return;
    }

    const pkg = PLANS[selectedPackage];
    const extraCans = Math.max(0, cans - pkg.limit);
    const subscriptionCost = pkg.fee;
    const extraCansCost = extraCans * pkg.extra;
    const totalCost = subscriptionCost + extraCansCost;
    const extraRevenue = markupPerCan * cans;
    const profit = extraRevenue - totalCost;
    const profitPerCan = profit / cans;
    const yearlyProfit = profit * 12;

    const recommendations: string[] = [];
    Object.entries(PLANS).forEach(([k, p]) => {
      if (k !== selectedPackage) {
        const otherExtra = Math.max(0, cans - p.limit) * p.extra;
        const otherCost = p.fee + otherExtra;
        const diff = totalCost - otherCost;
        if (diff > 0) {
          recommendations.push(
            `Switching to ${k.charAt(0).toUpperCase() + k.slice(1)} saves ${formatMoney(diff)}/month`
          );
        }
      }
    });

    setResults({
      extraRevenue,
      subscriptionCost,
      extraCans,
      extraCansCost,
      profit,
      profitPerCan,
      yearlyProfit,
      isPositive: profit >= 0,
      recommendations,
    });
    setShowResults(true);
  };

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: theme.background.lightCard }}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 style={{ color: theme.text.onLight }} className="text-3xl md:text-4xl font-bold mb-4">Quick Profitability Calculator</h2>
          <p style={{ color: theme.text.muted }} className="text-lg">
            Discover your potential profit with our flexible subscription plans
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Form Section */}
          <div className="rounded-lg p-8 shadow-sm border" style={{ backgroundColor: theme.background.light, borderColor: theme.border.light }}>
            <form className="space-y-6">
              {/* Subscription Package */}
              <div>
                <label style={{ color: theme.text.onLight }} className="block text-sm font-semibold mb-3">
                  Subscription Package
                </label>
                <p style={{ color: theme.text.muted }} className="text-sm mb-4">
                  Choose the subscription you are interested in
                </p>
                <div className="space-y-3">
                  {[
                    { id: 'small', label: 'Small (500 cans @ €500/mo)' },
                    { id: 'medium', label: 'Medium (1500 cans @ €1000/mo)' },
                    { id: 'large', label: 'Large (4000 cans @ €2000/mo)' },
                  ].map((option) => (
                    <label key={option.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="package"
                        value={option.id}
                        checked={selectedPackage === option.id}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-4 h-4"
                        style={{ accentColor: theme.primary.light }}
                      />
                      <span style={{ color: theme.text.onLight }} className="ml-3">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Charge Per Can */}
              <div>
                <label htmlFor="extra-charge" style={{ color: theme.text.onLight }} className="block text-sm font-semibold mb-2">
                  Extra Charge Per Can
                </label>
                <p style={{ color: theme.text.muted }} className="text-sm mb-3">
                  How much do you intend to increase your beverage price for the to-go can?
                </p>
                <div className="relative">
                  <span style={{ color: theme.text.muted }}>€</span>
                  <input
                    id="extra-charge"
                    type="text"
                    value={extraCharge}
                    onChange={(e) => setExtraCharge(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: theme.border.light,
                      borderWidth: '1px',
                    }}
                  />
                </div>
              </div>

              {/* Cans Per Month */}
              <div>
                <label htmlFor="cans-month" style={{ color: theme.text.onLight }} className="block text-sm font-semibold mb-2">
                  Cans Per Month
                </label>
                <p style={{ color: theme.text.muted }} className="text-sm mb-3">
                  How many cans do you expect to sell every month?
                </p>
                <input
                  id="cans-month"
                  type="text"
                  value={cansPerMonth}
                  onChange={(e) => setCansPerMonth(e.target.value)}
                  placeholder="500"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    borderColor: theme.border.light,
                    borderWidth: '1px',
                  }}
                />
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="flex flex-col">
            {!showResults ? (
              <div className="rounded-lg p-8 h-full flex items-center justify-center" style={{ backgroundColor: theme.background.lightCard }}>
                <p style={{ color: theme.text.muted }} className="text-center font-medium">
                  ✓ Fill in all fields to see your profit calculation
                </p>
              </div>
            ) : (
              <div
                className="rounded-lg p-8 h-full border-l-4"
                style={{
                  backgroundColor: results.isPositive ? theme.background.lightCard : theme.background.light,
                  borderLeftColor: results.isPositive ? theme.primary.light : '#ef4444',
                }}
              >
                <h3 style={{ color: theme.text.onLight }} className="text-lg font-bold mb-6">Results</h3>

                {/* Metrics Grid */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <span style={{ color: theme.text.muted }}>Extra revenue from cans:</span>
                    <span style={{ color: theme.text.onLight }} className="font-semibold">{formatMoney(results.extraRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span style={{ color: theme.text.muted }}>Subscription cost:</span>
                    <span style={{ color: theme.text.onLight }} className="font-semibold">{formatMoney(results.subscriptionCost)}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span style={{ color: theme.text.muted }}>Extra cans over limit:</span>
                    <span style={{ color: theme.text.onLight }} className="font-semibold">{results.extraCans}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span style={{ color: theme.text.muted }}>Extra cans cost:</span>
                    <span style={{ color: theme.text.onLight }} className="font-semibold">{formatMoney(results.extraCansCost)}</span>
                  </div>

                  {/* Divider */}
                  <div style={{ backgroundColor: theme.border.light }} className="h-px my-4"></div>

                  {/* Profit Summary */}
                  <div className="rounded p-4 space-y-3" style={{ backgroundColor: theme.background.light }}>
                    <div className="flex justify-between items-start">
                      <span style={{ color: theme.text.muted }} className="font-semibold">Net Profit (Monthly):</span>
                      <span
                        className="text-xl font-bold"
                        style={{ color: results.isPositive ? theme.primary.light : '#dc2626' }}
                      >
                        {formatMoney(Math.abs(results.profit))}
                      </span>
                    </div>
                    <div style={{ borderTopColor: theme.border.light }} className="flex justify-between items-start pt-2 border-t">
                      <span style={{ color: theme.text.muted }}>Per-can profit:</span>
                      <span style={{ color: theme.text.onLight }} className="font-semibold">
                        {formatMoney(results.profitPerCan)}
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span style={{ color: theme.text.muted }}>Estimated yearly net:</span>
                      <span style={{ color: theme.text.onLight }} className="font-semibold">
                        {formatMoney(results.yearlyProfit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div style={{ borderTopColor: theme.border.light }} className="mt-6 pt-6 border-t">
                  {results.recommendations.length > 0 ? (
                    <div className="space-y-2">
                      <p style={{ color: theme.text.onLight }} className="text-sm font-semibold mb-3">💡 Recommendations:</p>
                      {results.recommendations.map((rec: string, idx: number) => (
                        <p key={idx} style={{ color: theme.text.muted }} className="text-sm flex items-start">
                          <span className="mr-2">→</span>
                          {rec}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: theme.text.muted }} className="text-sm flex items-center">
                      <Check className="w-4 h-4 mr-2" style={{ color: theme.primary.light }} />
                      This is the most cost-effective plan at this volume.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p style={{ color: theme.text.muted }} className="text-sm mb-4">
            Like what you see, or want to discuss a custom package?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{
              backgroundColor: theme.background.dark,
              color: 'white',
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
