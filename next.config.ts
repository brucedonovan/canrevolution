import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable X-Powered-By header to hide Next.js version
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Don't expose source maps in production
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    remotePatterns: [],
    unoptimized: true, // Disable image optimization on Netlify
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://canrevolution.com',
  },
};

export default nextConfig;
