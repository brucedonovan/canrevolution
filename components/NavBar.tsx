'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { theme } from '@/lib/theme';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Feasability Calculator', href: '#calculator' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="relative z-50 bg-transparent">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Logo on left */}
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">can(RE)volution</span>
          <Image
            alt="can(RE)volution"
            src="/images/logo.svg"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </Link>

        {/* Center navigation */}
        <div className="hidden lg:flex lg:gap-x-12 absolute left-1/2 transform -translate-x-1/2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm/6 font-semibold transition-colors hover:opacity-75"
              style={{ color: theme.text.onDark }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side - Mobile menu + Book a Demo */}
        <div className="flex lg:hidden gap-x-4">
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

        {/* Book a Demo on right (desktop) */}
        <div className="hidden lg:flex">
          <Link
            href="/appointments"
            className="text-sm/6 font-semibold transition-colors hover:opacity-75"
            style={{ color: theme.text.onDark }}
          >
            Book a Demo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:ring-1"
          style={{ backgroundColor: theme.background.dark, borderLeftColor: theme.border.dark }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">can(RE)volution</span>
              <Image
                alt="can(RE)volution"
                src="/images/logo.svg"
                width={32}
                height={32}
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
            <div className="flex flex-col h-[calc(100vh-150px)]">
              {/* Navigation links at top */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                    style={{ color: theme.text.onDark }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Book a Demo at bottom */}
              <div className="py-6 mt-auto space-y-3">
                <Link
                  href="/appointments"
                  className="block w-full rounded-lg px-4 py-3 text-center text-base/7 font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: theme.primary.light, color: theme.background.dark }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="block w-full rounded-lg px-4 py-3 text-center text-base/7 font-semibold transition-colors hover:opacity-90 border-2"
                  style={{
                    borderColor: theme.primary.light,
                    color: theme.primary.light,
                    backgroundColor: 'transparent',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
