'use client';

import React from 'react';
import Image from 'next/image';
import { theme } from '@/lib/theme';

interface HeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: '6vw', display: 'block' }}
      >
        <defs>
          <clipPath id="section-divider-rounded" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0.3 Q 0.25,0.05 0.5,0.3 T 1,0.3 L 1,1 L 0,1 Z"
              fill="white"
            />
          </clipPath>
        </defs>
        <rect
          width="1"
          height="1"
          fill="white"
          clipPath="url(#section-divider-rounded)"
        />
      </svg>
    </div>
  );
};

export default function Hero({
  title = "can(Re)volution",
  description = "Revolutionizing beverage service, our on-the-spot canning machines let cafés and shops seal fresh drinks/snacks in seconds. Boost your brand, reduce waste, and deliver portable, ready-to-go beverages your customers love.",
  backgroundImage = "/images/hero-bg.png",
  backgroundImageAlt = "Hero background"
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Background image with overlay */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt={backgroundImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: '76.95% 50.67%', // Focal point from Squarespace config
          }}
        />

        {/* Dark overlay (15% opacity) */}
        <div className="absolute inset-0 bg-black opacity-15" />

        {/* Content wrapper - left-aligned, vertically centered */}
        <div className="relative w-full h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20">
          {/* Content max-width (50% wide on desktop) */}
          <div className="w-full max-w-xl md:max-w-2xl text-left">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ color: theme.text.onDark }}>
              {title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg leading-relaxed" style={{ color: theme.text.mutedDark }}>
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Section divider with curved top */}
      <div className="relative w-full pt-12 md:pt-16" style={{ backgroundColor: theme.background.light }}>
        {/* Optional: Add curve accent if needed */}
      </div>
    </section>
  );
}
