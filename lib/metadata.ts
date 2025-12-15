import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://canrevolution.com';
const SITE_NAME = 'can(RE)volution';
const DESCRIPTION =
  'Revolutionary on-the-spot beverage canning machines for cafés, shops, and businesses. Seal fresh drinks in seconds, boost your brand, reduce waste.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Revolutionary Beverage Canning Machines`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'beverage canning machine',
    'canning system',
    'fresh drink sealing',
    'beverage packaging',
    'canned drinks',
    'eco-friendly packaging',
    'grab-and-go beverages',
    'commercial canning',
    'cafés equipment',
    'beverage service',
  ],
  authors: [{ name: 'can(RE)volution' }],
  creator: 'can(RE)volution',
  publisher: 'can(RE)volution',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Revolutionary Beverage Canning Machines`,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'can(RE)volution - Beverage Canning Machines',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Revolutionary Beverage Canning Machines`,
    description: DESCRIPTION,
    images: ['/images/hero-bg.png'],
    creator: '@can_revolution',
    site: '@can_revolution',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      pt: `${SITE_URL}/pt`,
    },
  },
};

export const generateHomeMetadata = (): Metadata => {
  return {
    title: 'Revolutionary Beverage Canning Machines for Cafés & Shops',
    description:
      'Seal fresh drinks in seconds with can(RE)volution machines. Professional canning equipment for cafés, shops, and businesses. Eco-friendly, customizable, profitable.',
    keywords: [
      'beverage canning machine',
      'canning equipment',
      'fresh drink sealing',
      'eco-friendly packaging',
      'commercial canning solution',
      'beverage service equipment',
    ],
    openGraph: {
      title: 'can(RE)volution | Revolutionary Beverage Canning Machines',
      description:
        'Seal fresh drinks in seconds. Professional canning solutions for cafés, shops, and businesses.',
      type: 'website',
      url: `${SITE_URL}/`,
      images: [
        {
          url: '/images/hero-bg.png',
          width: 1200,
          height: 630,
          alt: 'can(RE)volution machine sealing beverages',
        },
      ],
    },
  };
};
