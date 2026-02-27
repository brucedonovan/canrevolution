'use client';

import { CheckCircle } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { theme } from '@/lib/theme';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  isTextarea?: boolean;
}

function FormInput({
  id,
  name,
  label,
  type = 'text',
  autoComplete,
  required = false,
  isTextarea = false,
}: FormInputProps) {
  const inputStyle = {
    backgroundColor: theme.background.lightCard,
    color: theme.text.onLight,
    borderColor: theme.border.light,
    border: `1px solid ${theme.border.light}`,
    outlineColor: theme.primary.light,
  };

  return (
    <div className={name === 'email' || name === 'message' ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={id}
        style={{ color: theme.text.onDark }}
        className="block text-sm/6 font-semibold"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-2.5">
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            rows={4}
            required={required}
            className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
            style={inputStyle}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required={required}
            className="block w-full rounded-md px-3.5 py-2 text-base focus:outline-none focus:ring-2 transition-all"
            style={inputStyle}
          />
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const { showSuccess, handleSubmit, resetSuccess } = useContactForm();

  if (showSuccess) {
    return (
      <div className="text-center">
        <CheckCircle size={80} style={{ color: theme.primary.light }} className="mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-3" style={{ color: theme.text.onDark }}>
          Thank You!
        </h3>
        <p style={{ color: theme.text.mutedDark }} className="text-lg mb-6">
          Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={resetSuccess}
          className="rounded-md px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: theme.primary.light,
            color: theme.background.dark,
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="contact-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <FormInput
          id="firstName"
          name="firstName"
          label="First name"
          autoComplete="given-name"
          required
        />
        <FormInput
          id="lastName"
          name="lastName"
          label="Last name"
          autoComplete="family-name"
          required
        />
        <FormInput
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <FormInput id="phone" name="phone" label="Phone number" type="tel" autoComplete="tel" />
        <FormInput id="message" name="message" label="Message" isTextarea required />
      </div>

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
    </form>
  );
}
