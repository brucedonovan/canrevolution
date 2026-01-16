const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'can(RE)volution',
    url: 'https://canrevolution.com',
    logo: 'https://canrevolution.com/images/logo.png',
    description:
      'Revolutionary on-the-spot beverage canning machines for cafés, shops, and businesses.',
    sameAs: ['https://www.instagram.com/canrevolution'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Support',
      email: 'info@canrevolution.com',
      availableLanguage: ['en', 'pt'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Portugal',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'can(RE)volution Beverage Canning Machine',
    description:
      'Professional on-the-spot beverage canning system that seals fresh drinks in seconds.',
    image: 'https://canrevolution.com/images/machine.png',
    brand: {
      '@type': 'Brand',
      name: 'can(RE)volution',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '24',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'can(RE)volution',
    image: 'https://canrevolution.com/images/logo.png',
    description: 'Beverage canning machine solutions for cafés, shops, and businesses.',
    url: 'https://canrevolution.com',
    telephone: '+351-XXX-XXXX',
    priceRange: '€€€',
    sameAs: ['https://www.instagram.com/canrevolution'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the can(RE)volution machine work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The machine seals fresh beverages in cans in seconds. You insert your drink and the machine automatically seals it with proper containment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of beverages can be canned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can can smoothies, cocktails, sodas, cold brew coffee, puddings, desserts, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the pricing plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer three plans: Starter (€500/month), Growth (€1000/month), and Scale (€2000/month) with different features and contract terms.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, productSchema, localBusinessSchema, faqSchema]),
      }}
    />
  );
};

export default StructuredData;
