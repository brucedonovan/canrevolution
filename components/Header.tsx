'use client'

import Link from 'next/link'
import NavBar from './NavBar'
import { theme } from '@/lib/theme'

export default function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image - Behind everything */}
      <img
        alt="can(RE)volution hero background"
        src="/images/hero-bg.png"
        className="absolute inset-0 -z-20 size-full object-cover"
        style={{ objectPosition: '80% 50%' }}
      />
      <div className="absolute inset-0 -z-20 bg-black/40" />

      <NavBar showGradient={true} />

      {/* Hero Section */}
      <div className="relative isolate pt-8 pb-32 md:pb-48 lg:pb-56 overflow-visible">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-left">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl" style={{ color: theme.text.onDark }}>
                Revolutionary Beverage Canning Machines
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8" style={{ color: theme.text.mutedDark }}>
                Seal fresh drinks in seconds. Perfect for cafés, shops, and businesses looking to offer grab-and-go beverages with custom branding.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/appointments"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: theme.primary.light, color: theme.background.dark, outlineColor: theme.primary.light }}
                >
                  Book a Demo
                </Link>
                <a href="#features" className="text-sm/6 font-semibold transition-colors hover:opacity-75" style={{ color: theme.text.onDark }}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: '60px' }}
        >
          <path
            d="M 0,30 Q 720,60 1440,30 L 1440,60 L 0,60 Z"
            style={{ fill: theme.background.light }}
          />
        </svg>
      </div>
    </div>
  )
}
