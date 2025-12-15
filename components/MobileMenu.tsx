'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface MobileMenuProps {
  languages: Language[];
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onClose: () => void;
}

type MenuView = 'main' | 'language';

export default function MobileMenu({
  languages,
  currentLanguage,
  onLanguageChange,
  onClose,
}: MobileMenuProps) {
  const [view, setView] = useState<MenuView>('main');

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setView('main');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose}>
      <div
        className="fixed inset-0 bg-black overflow-y-auto z-40 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-black">
          <div></div>
          <button
            onClick={onClose}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {view === 'main' && (
          <div className="px-6 py-4">
            {/* Navigation Items (empty for now, can add menu items later) */}
            <nav className="mb-6 space-y-4"></nav>

            {/* Language Picker */}
            <button
              onClick={() => setView('language')}
              className="w-full px-4 py-3 border border-white/20 text-white text-left flex items-center justify-between hover:bg-white/5 transition-colors mb-4 rounded"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{currentLanguage.flag}</span>
                <span>{currentLanguage.name}</span>
              </div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href="/appointments"
              onClick={onClose}
              className="block w-full px-6 py-3 border border-white text-white text-center hover:bg-white hover:text-black transition-colors rounded"
            >
              Book a Demo
            </Link>
          </div>
        )}

        {view === 'language' && (
          <div className="px-6 py-4">
            {/* Back Button */}
            <button
              onClick={() => setView('main')}
              className="mb-6 flex items-center gap-2 text-white hover:opacity-70 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>

            {/* Language Options */}
            <div className="space-y-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full px-4 py-3 text-left rounded transition-colors ${
                    language.code === currentLanguage.code
                      ? 'bg-white/10 text-white font-medium'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-2">{language.flag}</span>
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
