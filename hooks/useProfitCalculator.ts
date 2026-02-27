'use client';

import { useCallback, useMemo, useState } from 'react';
import { PLANS } from '@/constants/businessInfo';

export interface CalculationResult {
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

export const formatMoney = (value: number): string => {
  return value.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const parseNumber = (raw: string): number => {
  if (!raw) return NaN;
  return parseFloat(raw.replace(/[^\d.,]/g, '').replace(',', '.'));
};

function calculateProfit(
  selectedPackage: string,
  markupPerCan: number,
  cans: number
): CalculationResult | null {
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
          `Switching to ${k.charAt(0).toUpperCase() + k.slice(1)} saves ${formatMoney(diff)}/month`
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
}

export function useProfitCalculator() {
  const [selectedPackage, setSelectedPackage] = useState<string>('medium');
  const [extraCharge, setExtraCharge] = useState<string>('0.85');
  const [cansPerMonth, setCansPerMonth] = useState<string>('1500');

  const result = useMemo<CalculationResult | null>(() => {
    const markupPerCan = parseNumber(extraCharge);
    const cans = parseNumber(cansPerMonth);
    return calculateProfit(selectedPackage, markupPerCan, cans);
  }, [selectedPackage, extraCharge, cansPerMonth]);

  const handlePackageChange = useCallback((plan: string) => {
    setSelectedPackage(plan);
  }, []);

  const handleChargeChange = useCallback((value: string) => {
    setExtraCharge(value);
  }, []);

  const handleVolumeChange = useCallback((value: string) => {
    setCansPerMonth(value);
  }, []);

  return {
    selectedPackage,
    extraCharge,
    cansPerMonth,
    result,
    handlePackageChange,
    handleChargeChange,
    handleVolumeChange,
  };
}
