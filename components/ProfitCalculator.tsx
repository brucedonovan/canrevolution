"use client";

import { useState, useCallback, useMemo } from "react";
import { Check, AlertCircle, Plus, Minus } from "lucide-react";
import { theme } from "@/lib/theme";

interface Plan {
  limit: number;
  fee: number;
  extra: number;
}

interface CalculationResult {
  extraRevenue: number;
  subscriptionCost: number;
  extraCans: number;
  extraCansCost: number;
  profit: number;
  profitPerCan: number;
  yearlyProfit: number;
  isPositive: boolean;
  recommendations: string[];
}

const PLANS: Record<string, Plan> = {
  small: { limit: 500, fee: 500, extra: 0.6 },
  medium: { limit: 1500, fee: 1000, extra: 0.55 },
  large: { limit: 4000, fee: 2000, extra: 0.5 },
};

const formatMoney = (value: number): string => {
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const parseNumber = (raw: string): number => {
  if (!raw) return NaN;
  return parseFloat(raw.replace(/[^\d.,]/g, "").replace(",", "."));
};

// Form Input Component
const FormInput: React.FC<{
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  helper: string;
  prefix?: string;
  isNumeric?: boolean;
  min?: number;
  max?: number;
  decimals?: number;
}> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  helper,
  prefix,
  isNumeric = false,
  min = 0,
  max = Infinity,
  decimals = 0,
}) => {
  const numValue = isNumeric ? parseNumber(value) : null;

  const clampAndFormat = (val: number): string => {
    const clamped = Math.max(min, Math.min(max, val));
    return decimals > 0
      ? clamped.toFixed(decimals)
      : String(Math.round(clamped));
  };

  const handleIncrement = () => {
    if (isNumeric) {
      const current = numValue || 0;
      const step = id.includes("charge") ? 0.05 : 100;
      const newValue = current + step;
      onChange(clampAndFormat(newValue));
    }
  };

  const handleDecrement = () => {
    if (isNumeric) {
      const current = numValue || 0;
      const step = id.includes("charge") ? 0.05 : 100;
      const newValue = current - step;
      onChange(clampAndFormat(newValue));
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{ color: theme.text.onDark }}
        className="block text-sm font-semibold mb-2"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="relative flex-1">
          {prefix && (
            <span
              style={{ color: theme.text.onLight }}
              className="absolute left-3 top-1/2 -translate-y-1/2 font-medium"
            >
              {prefix}
            </span>
          )}
          <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all text-lg font-semibold"
            style={{
              borderColor: theme.border.light,
              color: theme.text.onLight,
              backgroundColor: theme.background.light,
              paddingLeft: prefix ? "1.75rem" : "1rem",
              paddingRight: isNumeric ? "3.5rem" : "1rem",
            }}
          />
        </div>
        {isNumeric && (
          <div className="absolute right-0 top-0 h-full flex items-center pr-1">
            <button
              type="button"
              onClick={handleDecrement}
              className="inline-flex items-center justify-center p-4 transition-colors rounded hover:opacity-75"
              style={{
                color: theme.primary.light,
              }}
            >
              <Minus size={22} strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={handleIncrement}
              className="inline-flex items-center justify-center p-4 transition-colors rounded hover:opacity-75"
              style={{
                color: theme.primary.light,
              }}
            >
              <Plus size={22} strokeWidth={3} />
            </button>
          </div>
        )}
      </div>
      <p style={{ color: theme.text.mutedDark }} className="text-xs mt-2">
        {helper}
      </p>
    </div>
  );
};

// Plan Selector Component
const PlanSelector: React.FC<{
  selected: string;
  onChange: (plan: string) => void;
}> = ({ selected, onChange }) => {
  const plans = [
    { id: "small", name: "Small Plan", limit: "500 cans", fee: "€500/mo" },
    { id: "medium", name: "Medium Plan", limit: "1500 cans", fee: "€1000/mo" },
    { id: "large", name: "Large Plan", limit: "4000 cans", fee: "€2000/mo" },
  ];

  return (
    <div>
      <label
        style={{ color: theme.text.mutedDark }}
        className="block text-sm font-semibold mb-4"
      >
        Subscription Plan
      </label>
      <fieldset aria-label="Plan selection" className="space-y-3">
        {plans.map((plan) => (
          <label
            key={plan.id}
            aria-label={plan.name}
            aria-description={`${plan.limit}, ${plan.fee}`}
            className="group relative block rounded-lg border px-6 py-4 cursor-pointer transition-all has-checked:outline-2 has-checked:-outline-offset-2 has-focus-visible:outline-3 has-focus-visible:-outline-offset-1"
            style={{
              borderColor:
                selected === plan.id ? theme.primary.light : theme.border.light,
              backgroundColor:
                selected === plan.id
                  ? theme.primary.light + "10"
                  : "transparent",
              outlineColor: theme.primary.light,
            }}
          >
            <input
              value={plan.id}
              checked={selected === plan.id}
              name="plan-selection"
              type="radio"
              onChange={(e) => onChange(e.target.value)}
              className="absolute inset-0 appearance-none focus:outline-none"
              style={{
                accentColor: theme.primary.light,
              }}
            />
            <div className="flex justify-between items-start">
              <span className="flex flex-col text-sm">
                <span
                  className="font-medium"
                  style={{
                    color:
                      selected === plan.id
                        ? theme.text.onDark
                        : theme.text.mutedDark,
                  }}
                >
                  {plan.name}
                </span>
                <span
                  style={{
                    color:
                      selected === plan.id
                        ? theme.text.mutedDark
                        : theme.text.muted,
                  }}
                  className="text-xs mt-1"
                >
                  {plan.limit} • {plan.fee}
                </span>
              </span>
              <span
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor:
                    selected === plan.id
                      ? theme.primary.light
                      : theme.border.light,
                  backgroundColor:
                    selected === plan.id ? theme.primary.light : "transparent",
                }}
              >
                {selected === plan.id && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
              </span>
            </div>
          </label>
        ))}
      </fieldset>
    </div>
  );
};

// Form Section Component
const FormSection: React.FC<{
  selectedPackage: string;
  extraCharge: string;
  cansPerMonth: string;
  onPackageChange: (plan: string) => void;
  onChargeChange: (value: string) => void;
  onVolumeChange: (value: string) => void;
}> = ({
  selectedPackage,
  extraCharge,
  cansPerMonth,
  onPackageChange,
  onChargeChange,
  onVolumeChange,
}) => (
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
      isNumeric={true}
      min={0.5}
      max={2.5}
      decimals={2}
    />
    <FormInput
      label="Monthly Volume"
      id="cans-month"
      value={cansPerMonth}
      onChange={onVolumeChange}
      placeholder="1000"
      helper="Expected cans per month"
      isNumeric={true}
    />
  </form>
);

// Results Summary Cards Component
const SummaryCards: React.FC<{ result: CalculationResult }> = ({ result }) => (
  <div className="grid md:grid-cols-2 gap-4">
    <div
      className="rounded-lg p-4"
      style={{ backgroundColor: theme.background.light }}
    >
      <p style={{ color: theme.text.muted }} className="text-sm mb-1">
        Monthly Revenue
      </p>
      <p className="text-2xl font-bold" style={{ color: theme.primary.light }}>
        {formatMoney(result.extraRevenue)}
      </p>
    </div>

    <div
      className="rounded-lg p-4"
      style={{ backgroundColor: theme.background.light }}
    >
      <p style={{ color: theme.text.muted }} className="text-sm mb-1">
        Monthly Costs
      </p>
      <p style={{ color: theme.text.onLight }} className="text-2xl font-bold">
        {formatMoney(result.subscriptionCost + result.extraCansCost)}
      </p>
    </div>
  </div>
);

// Profit Highlight Component
const ProfitHighlight: React.FC<{ result: CalculationResult }> = ({
  result,
}) => (
  <div
    className="rounded-lg p-6"
    style={{
      backgroundColor: result.isPositive ? "#dcfce7" : "#fee2e2",
    }}
  >
    <p
      className="text-sm mb-2 font-medium"
      style={{
        color: result.isPositive ? "#15803d" : "#991b1b",
      }}
    >
      {result.isPositive ? "Net Profit" : "Net Loss"}
    </p>
    <p
      className="text-4xl font-bold"
      style={{
        color: result.isPositive ? "#16a34a" : "#dc2626",
      }}
    >
      {formatMoney(Math.abs(result.profit))}
    </p>
    <p
      className="text-sm mt-3"
      style={{
        color: result.isPositive ? "#22c55e" : "#fca5a5",
      }}
    >
      {formatMoney(result.profitPerCan)} per can •{" "}
      {formatMoney(result.yearlyProfit)}/year
    </p>
  </div>
);

// Recommendations Component
const Recommendations: React.FC<{ result: CalculationResult }> = ({
  result,
}) => {
  if (result.recommendations.length > 0) {
    return (
      <div
        className="border-l-4 p-4 rounded-lg"
        style={{
          borderLeftColor: theme.primary.light,
          backgroundColor: theme.primary.light + "10",
        }}
      >
        <div className="flex gap-3">
          <AlertCircle
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: theme.primary.light }}
          />
          <div>
            <p
              style={{ color: theme.text.onLight }}
              className="font-semibold mb-3"
            >
              We found a better plan for you
            </p>
            <ul className="space-y-2">
              {result.recommendations.map((rec: string, idx: number) => (
                <li
                  key={idx}
                  style={{ color: theme.text.muted }}
                  className="text-sm"
                >
                  • {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-l-4 p-4 rounded-lg flex gap-3"
      style={{
        borderLeftColor: theme.primary.light,
        backgroundColor: theme.primary.light + "10",
      }}
    >
      <Check
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        style={{ color: theme.primary.light }}
      />
      <p style={{ color: theme.text.onLight }} className="text-sm font-medium">
        This is the most cost-effective plan for your volume
      </p>
    </div>
  );
};

// Results Section Component
const ResultsSection: React.FC<{ result: CalculationResult | null }> = ({
  result,
}) => {
  if (!result) {
    return (
      <div
        className="rounded-2xl flex items-center justify-center border-2"
        style={{
          backgroundColor: theme.background.lightCard,
          borderColor: theme.border.light,
          borderStyle: "dashed",
        }}
      >
        <p
          style={{ color: theme.text.muted }}
          className="text-center text-lg font-medium"
        >
          Complete all fields to see your profit calculation
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-8 border-2 lg:mt-10 h-full flex flex-col"
      style={{
        backgroundColor: theme.background.lightCard,
        borderColor: result.isPositive ? theme.primary.light : "#ef4444",
      }}
    >
      <div className="space-y-6">
        <SummaryCards result={result} />
        <ProfitHighlight result={result} />
        <Recommendations result={result} />
      </div>
    </div>
  );
};

// Main Calculator Component
const ProfitCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("medium");
  const [extraCharge, setExtraCharge] = useState<string>("0.85");
  const [cansPerMonth, setCansPerMonth] = useState<string>("1500");

  // Memoized calculation
  const result = useMemo<CalculationResult | null>(() => {
    const markupPerCan = parseNumber(extraCharge);
    const cans = parseNumber(cansPerMonth);

    if (!selectedPackage || isNaN(markupPerCan) || isNaN(cans) || cans <= 0) {
      return null;
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
            `Switching to ${
              k.charAt(0).toUpperCase() + k.slice(1)
            } saves ${formatMoney(diff)}/month`
          );
        }
      }
    });

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
    };
  }, [selectedPackage, extraCharge, cansPerMonth]);

  // Memoized handlers to prevent unnecessary re-renders
  const handlePackageChange = useCallback((plan: string) => {
    setSelectedPackage(plan);
  }, []);

  const handleChargeChange = useCallback((value: string) => {
    setExtraCharge(value);
  }, []);

  const handleVolumeChange = useCallback((value: string) => {
    setCansPerMonth(value);
  }, []);

  return (
    <section
      id="calculator"
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: theme.background.dark }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            style={{ color: theme.text.onDark }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Quick Profitability Calculator
          </h2>
          <p
            style={{ color: theme.text.mutedDark }}
            className="text-lg max-w-2xl mx-auto"
          >
            Discover your potential profit with our flexible subscription plans
          </p>
        </div>

        {/* Calculator Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:items-start">
          <div className="lg:col-span-1 flex flex-col h-full">
            <FormSection
              selectedPackage={selectedPackage}
              extraCharge={extraCharge}
              cansPerMonth={cansPerMonth}
              onPackageChange={handlePackageChange}
              onChargeChange={handleChargeChange}
              onVolumeChange={handleVolumeChange}
            />
          </div>

          <div className="lg:col-span-1 h-full flex flex-col">
            <ResultsSection result={result} />
            {/* CTA */}
            <div className="text-center mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
