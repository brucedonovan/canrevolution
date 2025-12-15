'use client';

import { Instagram } from 'lucide-react';
import { theme } from '@/lib/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkHoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.text.onDark;
  };

  const handleLinkHoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.text.mutedDark;
  };

  return (
    <footer style={{ backgroundColor: theme.background.dark, color: theme.text.onDark }}>
      {/* Main Footer Section */}
      <div className="w-full py-16 md:py-20 border-b" style={{ borderBottomColor: theme.border.dark }}>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left - Get in touch button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: theme.primary.light, color: theme.background.dark }}
              >
                Get in touch
              </a>
            </div>

            {/* Center - Spacer (empty on mobile) */}
            <div className="hidden md:flex flex-1" />

            {/* Right - Social section */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p style={{ color: theme.primary.dark }} className="font-medium text-sm">Follow us on social</p>
              <a
                href="https://www.instagram.com/can.revolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 transform hover:scale-110"
                style={{ borderColor: theme.text.onDark, color: theme.text.onDark }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.primary.light;
                  e.currentTarget.style.color = theme.text.onDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.text.onDark;
                }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full py-8">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: theme.text.mutedDark }}>
            <div>© {currentYear} can(RE)volution. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="transition-colors duration-200"
                style={{ color: theme.text.mutedDark }}
                onMouseEnter={handleLinkHoverEnter}
                onMouseLeave={handleLinkHoverLeave}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="transition-colors duration-200"
                style={{ color: theme.text.mutedDark }}
                onMouseEnter={handleLinkHoverEnter}
                onMouseLeave={handleLinkHoverLeave}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
