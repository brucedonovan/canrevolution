'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  title: string;
  image: string;
  imageAlt: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Smoothies',
    image: '/images/product-smoothies.png',
    imageAlt: 'Two canned smoothies labeled "Kaktus" with straws, one pink and one green, on a table with cacti and wood logs in the background.',
  },
  {
    title: 'Puddings & Desserts',
    image: '/images/product-puddings.png',
    imageAlt: 'Layered yogurt parfait with granola, blueberries, red currants, mint, in a glass jar with a metal lid, surrounded by red currants and a wooden spoon.',
  },
  {
    title: 'Cocktails',
    image: '/images/product-cocktails.png',
    imageAlt: 'A can of sparkling water with lemon, lime, strawberry, and cucumber slices inside, and condensation on the outside of the can.',
  },
  {
    title: 'Sodas',
    image: '/images/product-sodas.png',
    imageAlt: 'Two hands holding glass bottles of fruit-flavored soda, one with green soda and lemon slices, the other with orange soda and lemon slices, outdoors with green foliage background.',
  },
  {
    title: 'Cold Brew Coffee',
    image: '/images/product-coldbrewcoffee.png',
    imageAlt: 'Three canned iced coffee drinks with different flavors and colors placed on a pastel-colored surface.',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full bg-white text-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-lg">
            <div className="relative w-full aspect-square md:aspect-video">
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex absolute inset-y-0 left-0 right-0 pointer-events-none items-center justify-between px-4">
            <button
              onClick={goToPrevious}
              className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex md:hidden gap-4 mt-4 justify-center">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all ${
                  index === currentIndex
                    ? 'bg-black w-8'
                    : 'bg-gray-400 w-2 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Item Counter */}
          <div className="text-center mt-4 text-sm text-gray-600">
            Item {currentIndex + 1} of {carouselItems.length}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
          >
            Learn more about the options
          </a>
        </div>
      </div>
    </section>
  );
}
