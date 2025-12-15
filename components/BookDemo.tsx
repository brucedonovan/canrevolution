'use client'

import { theme } from '@/lib/theme'

const BookDemo = () => {
  return (
    <section className="w-full py-24 md:py-32" style={{ backgroundColor: theme.primary.light }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: theme.background.dark }}>
          Book a demo session
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: theme.text.onLight }}>
          Let&apos;s discuss the options and how can(RE)volution machines can transform your business.
        </p>
        <a
          href="/appointments"
          className="inline-block px-10 py-4 font-semibold rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: theme.background.dark, color: theme.primary.light }}
        >
          Book now
        </a>
      </div>
    </section>
  );
};

export default BookDemo;
