'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { theme } from '@/lib/theme';

interface CarouselItem {
  title: string;
  image: string;
  imageAlt: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Smoothies',
    image: '/images/product-smoothies.png',
    imageAlt:
      'Two canned smoothies labeled "Kaktus" with straws, one pink and one green, on a table with cacti and wood logs in the background.',
  },
  {
    title: 'Puddings & Desserts',
    image: '/images/product-puddings.png',
    imageAlt:
      'Layered yogurt parfait with granola, blueberries, red currants, mint, in a glass jar with a metal lid, surrounded by red currants and a wooden spoon.',
  },
  {
    title: 'Cocktails',
    image: '/images/product-cocktails.png',
    imageAlt:
      'A can of sparkling water with lemon, lime, strawberry, and cucumber slices inside, and condensation on the outside of the can.',
  },
  {
    title: 'Sodas',
    image: '/images/product-sodas.png',
    imageAlt:
      'Two hands holding glass bottles of fruit-flavored soda, one with green soda and lemon slices, the other with orange soda and lemon slices, outdoors with green foliage background.',
  },
  {
    title: 'Cold Brew Coffee',
    image: '/images/product-coldbrewcoffee.png',
    imageAlt:
      'Three canned iced coffee drinks with different flavors and colors placed on a pastel-colored surface.',
  },
];

export default function ProductCarousel() {
  return (
    <section
      style={{ backgroundColor: theme.background.medium }}
      className="py-8 md:py-12 lg:py-16"
    >
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${theme.primary.light} !important;
          background-color: rgba(0, 0, 0, 0.1) !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 6px !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.2) !important;
        }

        .swiper-pagination-bullet {
          background-color: ${theme.border.light} !important;
          opacity: 0.6 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: ${theme.primary.light} !important;
          opacity: 1 !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Swiper Carousel */}
        <div className="rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="rounded-lg"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
