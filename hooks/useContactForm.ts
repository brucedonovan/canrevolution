'use client';

import { useCallback, useState } from 'react';

interface UseContactFormReturn {
  showSuccess: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetSuccess: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Basic validation
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      console.warn('Invalid email format');
      return;
    }

    // Explicitly encode form data to avoid FormData-to-URLSearchParams edge cases
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value as string);
    });

    // POST to the static HTML form page so Netlify's CDN intercepts
    // the submission (posting to '/' goes through the Next.js runtime
    // and bypasses Netlify Forms processing entirely)
    fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status}`);
        }
        // Show success message and reset form
        setShowSuccess(true);
        form.reset();

        // Reset after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  }, []);

  const resetSuccess = useCallback(() => {
    setShowSuccess(false);
  }, []);

  return {
    showSuccess,
    handleSubmit,
    resetSuccess,
  };
}
