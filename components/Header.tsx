'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnnouncementBar from './AnnouncementBar';
import MobileMenu from './MobileMenu';
import LanguagePicker from './LanguagePicker';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(LANGUAGES[0]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative bg-transparent text-white">
      <AnnouncementBar />

      {/* Main Header */}
      <div className="border-b border-white/10">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <img
                  src="/images/logo.png"
                  alt="can(RE)volution"
                  className="h-8 w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Center Navigation (empty for now, can add items later) */}
            <nav className="flex-1"></nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* Language Picker */}
              <LanguagePicker
                languages={LANGUAGES}
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              />

              {/* CTA Button */}
              <Link
                href="/appointments"
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <img
                  src="/images/logo.png"
                  alt="can(RE)volution"
                  className="h-8 w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:opacity-70 transition-opacity"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <MobileMenu
          languages={LANGUAGES}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
