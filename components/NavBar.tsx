'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { theme } from '@/lib/theme'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Feasability Calculator', href: '#calculator' },
]

interface NavBarProps {
  showGradient?: boolean
}

export default function NavBar({ showGradient = false }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-transparent">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">can(RE)volution</span>
            <img
              alt="can(RE)volution"
              src="/images/logo.png"
              className="h-16 w-auto"
            />
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold transition-colors" style={{ color: theme.text.onDark }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            style={{ color: theme.text.onDark }}
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
        <div className="hidden lg:flex">
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
              <X aria-hidden="true" size={24} />
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
  )
}
