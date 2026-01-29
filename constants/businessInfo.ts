/**
 * Business Constants
 * Includes subscription plans, social media, and contact information
 */

// ============================================
// SUBSCRIPTION PLANS
// ============================================

export interface Plan {
  limit: number;
  fee: number;
  extra: number;
}

export const PLANS: Record<string, Plan> = {
  small: { limit: 500, fee: 500, extra: 0.70 },
  medium: { limit: 1500, fee: 1000, extra: 0.60 },
  large: { limit: 4000, fee: 2000, extra: 0.50 },
};

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT = {
  email: 'hello@canrevolution.com',
  location: 'Lisbon, Portugal',
  region: 'Europe',
} as const;

// ============================================
// SOCIAL MEDIA
// ============================================

export const SOCIAL = {
  instagram: {
    url: 'https://www.instagram.com/canrevolution',
    handle: '@canrevolution',
    label: 'Instagram',
  },
  twitter: {
    url: 'https://twitter.com/can_revolution',
    handle: '@can_revolution',
    label: 'Twitter',
  },
} as const;

// ============================================
// COMPANY INFORMATION
// ============================================

export const COMPANY = {
  name: 'can(RE)volution',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://canrevolution.com',
  description:
    'Revolutionary on-the-spot beverage canning machines for cafés, shops, and businesses. Seal fresh drinks in seconds, boost your brand, reduce waste.',
} as const;

