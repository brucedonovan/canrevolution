import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Book a Demo - can(RE)volution',
  description: 'Schedule a demo of our beverage canning machines.',
};

export default function AppointmentsPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Image - Same as header */}
        <Image
          alt="can(RE)volution appointments background"
          src="/images/hero-bg.jpg"
          fill
          className="fixed inset-0 -z-20 object-cover"
          style={{ objectPosition: '80% 50%' }}
          priority
        />
        <div className="fixed inset-0 -z-20 bg-black/40" />

        {/* Back button header */}
        <header className="relative z-50 bg-transparent">
          <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-colors hover:opacity-75 text-white"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back</span>
            </Link>
          </nav>
        </header>

        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <div
          className="relative min-h-screen py-16 md:py-24"
          style={{ backgroundColor: 'transparent' }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/kasimir-canrevolution"
              style={{ minWidth: '320px', height: '630px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
