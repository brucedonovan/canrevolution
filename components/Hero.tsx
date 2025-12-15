import Link from 'next/link'
import { theme } from '@/lib/theme'

interface HeroProps {
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
  showSecondaryLink?: boolean
}

export default function Hero({
  title,
  description,
  ctaText = 'Book a Demo',
  ctaHref = '/appointments',
  showSecondaryLink = true,
}: HeroProps) {
  return (
    <div className="relative isolate pt-8 pb-32 md:pb-48 lg:pb-56 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-left">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl" style={{ color: theme.text.onDark }}>
              {title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8" style={{ color: theme.text.mutedDark }}>
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={ctaHref}
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: theme.primary.light, color: theme.background.dark, outlineColor: theme.primary.light }}
              >
                {ctaText}
              </Link>
              {showSecondaryLink && (
                <a href="#features" className="text-sm/6 font-semibold transition-colors hover:opacity-75" style={{ color: theme.text.onDark }}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              )}
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
  )
}
