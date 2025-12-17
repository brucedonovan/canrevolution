import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable X-Powered-By header to hide Next.js version
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Don't expose source maps in production
  productionBrowserSourceMaps: false,

  // Image optimization - disable for Netlify compatibility
  images: {
    unoptimized: true,
    remotePatterns: [],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  },
};

export default nextConfig;
