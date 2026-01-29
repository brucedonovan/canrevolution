import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable X-Powered-By header to hide Next.js version
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Don't expose source maps in production
  productionBrowserSourceMaps: false,

  // Image optimization disabled on Netlify (requires serverless functions)
  // Keep unoptimized: true but use sizes prop in components for best practices
  images: {
    remotePatterns: [],
    unoptimized: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://canrevolution.com',
  },
};

export default nextConfig;
