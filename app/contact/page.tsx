'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Building2, Mail } from 'lucide-react';
import { theme } from '@/lib/theme';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Header with Back Button */}
      <header className="relative" style={{ backgroundColor: theme.background.dark }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
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

      {/* Contact Section */}
      <div className="relative isolate" style={{ backgroundColor: theme.background.dark }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
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
                    Lisbon, Portugal
                    <br />
                    Europe
                  </dd>
                </div>
                {/* <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <Phone
                      aria-hidden="true"
                      className="h-7 w-6"
                      style={{ color: theme.primary.light }}
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+351-example"
                      className="hover:opacity-75 transition-opacity"
                      style={{ color: theme.text.onDark }}
                    >
                      +351 (XXX) XXX-XXXX
                    </a>
                  </dd>
                </div> */}
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

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
            data-netlify="true"
            netlify-honeypot="bot-field"
            name="contact-form"
            method="POST"
          >
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" type="text" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact-form" />

            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {submitted && (
                <div
                  className="mb-6 p-4 rounded-lg"
                  style={{
                    backgroundColor: theme.primary.light + '20',
                    borderLeft: `2px solid ${theme.primary.light}`,
                  }}
                >
                  <p style={{ color: theme.primary.light }} className="font-semibold">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    style={{ color: theme.text.onDark }}
                    className="block text-sm/6 font-semibold"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: theme.background.lightCard,
                        color: theme.text.onLight,
                        borderColor: theme.border.light,
                        border: `1px solid ${theme.border.light}`,
                        outlineColor: theme.primary.light,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{ color: theme.text.onDark }}
                    className="block text-sm/6 font-semibold"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: theme.background.lightCard,
                        color: theme.text.onLight,
                        borderColor: theme.border.light,
                        border: `1px solid ${theme.border.light}`,
                        outlineColor: theme.primary.light,
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    style={{ color: theme.text.onDark }}
                    className="block text-sm/6 font-semibold"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: theme.background.lightCard,
                        color: theme.text.onLight,
                        borderColor: theme.border.light,
                        border: `1px solid ${theme.border.light}`,
                        outlineColor: theme.primary.light,
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    style={{ color: theme.text.onDark }}
                    className="block text-sm/6 font-semibold"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: theme.background.lightCard,
                        color: theme.text.onLight,
                        borderColor: theme.border.light,
                        border: `1px solid ${theme.border.light}`,
                        outlineColor: theme.primary.light,
                      }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    style={{ color: theme.text.onDark }}
                    className="block text-sm/6 font-semibold"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: theme.background.lightCard,
                        color: theme.text.onLight,
                        borderColor: theme.border.light,
                        border: `1px solid ${theme.border.light}`,
                        outlineColor: theme.primary.light,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div data-netlify-recaptcha="true"></div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: theme.primary.light,
                    color: theme.background.dark,
                  }}
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
