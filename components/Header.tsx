'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { theme } from '@/lib/theme'

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              background: `linear-gradient(to right, ${theme.gradient.from}, ${theme.gradient.to})`,
              opacity: 0.3,
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
      </div>

      <header className="relative z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">can(RE)volution</span>
              <img
                alt="can(RE)volution"
                src="/images/logo.png"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              style={{ color: theme.text.onDark }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold transition-colors" style={{ color: theme.text.onDark }}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/appointments" className="text-sm/6 font-semibold transition-colors" style={{ color: theme.text.onDark }}>
              Book a Demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:ring-1" style={{ backgroundColor: theme.background.dark, borderLeftColor: theme.border.dark }}>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">can(RE)volution</span>
                <img
                  alt="can(RE)volution"
                  src="/images/logo.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 hover:bg-white/5"
                style={{ color: theme.text.onDark }}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y" style={{ borderTopColor: theme.border.dark, borderBottomColor: theme.border.dark }}>
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                      style={{ color: theme.text.onDark }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/appointments"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                    style={{ color: theme.text.onDark }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
