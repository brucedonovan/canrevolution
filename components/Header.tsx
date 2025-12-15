'use client'

import NavBar from './NavBar'
import Hero from './Hero'
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

      <Hero
        title="Revolutionary Beverage Canning Machines"
        description="Seal fresh drinks in seconds. Perfect for cafés, shops, and businesses looking to offer grab-and-go beverages with custom branding."
        ctaText="Book a Demo"
        ctaHref="/appointments"
        showSecondaryLink={true}
      />
    </div>
  )
}
