import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { theme } from '@/lib/theme';

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Image - Same as header */}
        <Image
          alt="can(RE)volution contact background"
          src="/images/hero-bg.png"
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

        {/* Content */}
        <div className="relative isolate px-6 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            {/* Left: Info */}
            <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2
                  style={{ color: theme.text.onDark }}
                  className="text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                  Get in touch
                </h2>
                <p style={{ color: theme.text.mutedDark }} className="mt-6 text-lg/8">
                  Have questions about our canning solutions? We&apos;d love to hear from you. Reach
                  out and let&apos;s discuss how we can help your beverage business.
                </p>

                <dl className="mt-10 space-y-4 text-base/7" style={{ color: theme.text.mutedDark }}>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <Building2
                        aria-hidden="true"
                        className="h-7 w-6"
                        style={{ color: theme.primary.light }}
                      />
                    </dt>
                    <dd style={{ color: theme.text.onDark }}>
                      Lisbon, Portugal <br /> Europe
                    </dd>
                  </div>

                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail
                        aria-hidden="true"
                        className="h-7 w-6"
                        style={{ color: theme.primary.light }}
                      />
                    </dt>
                    <dd>
                      <a
                        href="mailto:hello@canrevolution.com"
                        className="hover:opacity-75 transition-opacity"
                        style={{ color: theme.text.onDark }}
                      >
                        hello@canrevolution.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right: Form */}
            <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
