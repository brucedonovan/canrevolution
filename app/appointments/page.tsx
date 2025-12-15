import Script from 'next/script'
import NavBar from '@/components/NavBar'
import { theme } from '@/lib/theme'

export const metadata = {
  title: 'Book a Demo - can(RE)volution',
  description: 'Schedule a demo of our beverage canning machines.',
}

export default function AppointmentsPage() {
  return (
    <>
      <NavBar />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="min-h-screen py-16 md:py-24" style={{ backgroundColor: theme.background.light }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: theme.text.onLight }}
            >
              Schedule Your Demo
            </h1>
            <p className="text-lg" style={{ color: theme.text.muted }}>
              Choose a time that works for you. It takes just a minute to book.
            </p>
          </div> */}

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/bruce-canrevolution"
            style={{ minWidth: '320px', height: '630px' }}
          />
        </div>
      </div>
    </>
  )
}
