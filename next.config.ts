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
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://canrevolution.com',
  },
};

export default nextConfig;
