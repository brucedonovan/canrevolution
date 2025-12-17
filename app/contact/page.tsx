'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Building2, Mail, CheckCircle } from 'lucide-react';
import { theme } from '@/lib/theme';

const FORM_TIMEOUT_MS = 7000;
const INPUT_STYLE = {
  backgroundColor: theme.background.lightCard,
  color: theme.text.onLight,
  borderColor: theme.border.light,
  border: `1px solid ${theme.border.light}`,
  outlineColor: theme.primary.light,
};

const FormInput = ({
  id,
  name,
  label,
  type = 'text',
  autoComplete,
  required = false,
  disabled = false,
  isTextarea = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  isTextarea?: boolean;
}) => (
  <div className={name === 'email' || name === 'message' ? 'sm:col-span-2' : ''}>
    <label
      htmlFor={id}
      style={{ color: theme.text.onDark }}
      className="block text-sm/6 font-semibold"
    >
      {label}
    </label>
    <div className="mt-2.5">
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          disabled={disabled}
          className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
          style={INPUT_STYLE}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          disabled={disabled}
          className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50"
          style={INPUT_STYLE}
        />
      )}
    </div>
  </div>
);

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      if (!form) {
        throw new Error('Form reference is null');
      }

      const formData = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Array.from(formData.entries()) as [string, string][]
        ).toString(),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Form submission failed with status ${response.status}`);
      }

      setShowSuccess(true);
      if (form) {
        form.reset();
      }
      setTimeout(() => setShowSuccess(false), FORM_TIMEOUT_MS);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="relative" style={{ backgroundColor: theme.background.dark }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: theme.background.dark, opacity: 0.6 }}
        />

        <nav className="relative z-10 flex items-center p-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:opacity-75"
            style={{ color: theme.text.onDark }}
          >
            <ArrowLeft size={24} />
            <span className="text-sm/6 font-semibold">Back</span>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="relative isolate" style={{ backgroundColor: theme.background.dark }}>
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

          {/* Right: Form or Success */}
          <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {showSuccess ? (
                <div className="text-center">
                  <CheckCircle
                    size={80}
                    style={{ color: theme.primary.light }}
                    className="mx-auto mb-6"
                  />
                  <h3
                    className="text-3xl font-bold mb-3"
                    style={{ color: theme.text.onDark }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: theme.text.mutedDark }} className="text-lg mb-6">
                    Your message has been sent successfully. We&apos;ll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="rounded-md px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: theme.primary.light,
                      color: theme.background.dark,
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contact-form">
                  <input type="hidden" name="form-name" value="contact-form" />

                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormInput
                      id="firstName"
                      name="firstName"
                      label="First name"
                      autoComplete="given-name"
                      required
                      disabled={isSubmitting}
                    />
                    <FormInput
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      autoComplete="family-name"
                      required
                      disabled={isSubmitting}
                    />
                    <FormInput
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                    />
                    <FormInput
                      id="phone"
                      name="phone"
                      label="Phone number"
                      type="tel"
                      autoComplete="tel"
                      disabled={isSubmitting}
                    />
                    <FormInput
                      id="message"
                      name="message"
                      label="Message"
                      isTextarea
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: theme.primary.light,
                        color: theme.background.dark,
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
