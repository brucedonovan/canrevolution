'use client'

import { theme } from '@/lib/theme'

const BookDemo = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-4xl flex flex-col justify-center items-center text-center">
        {/* Heading */}
        <h1 style={{ color: theme.text.onDark }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Book a demo session
        </h1>

        {/* Description */}
        <p style={{ color: theme.text.mutedDark }} className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Let's discuss the options and how can(RE)volution machines can transform your business.
        </p>

        {/* CTA Button */}
        <a
          href="/appointments"
          className="inline-block px-10 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: theme.primary.light, color: theme.background.dark }}
        >
          Book now
        </a>
      </div>
    </section>
  );
};

export default BookDemo;
