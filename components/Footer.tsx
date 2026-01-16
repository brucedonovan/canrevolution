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
      <div className="w-full py-12 md:py-14">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Footer content - single line layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left - Get in touch button and Social */}
            <div className="flex items-center gap-8">
              {/* Get in touch button */}
              <a
                href="/contact"
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: theme.primary.light, color: theme.background.dark }}
              >
                Get in touch
              </a>

              {/* Social section */}
              <div className="flex flex-col items-center gap-1">
                <p style={{ color: theme.primary.dark }} className="font-medium text-xs h-4">
                  Follow us
                </p>
                <a
                  href="https://www.instagram.com/canrevolution"
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

            {/* Right - Legal links and Copyright (stacked) */}
            <div
              className="flex flex-col items-center md:items-end gap-2 text-xs"
              style={{ color: theme.text.mutedDark }}
            >
              <div className="flex gap-6">
                <a
                  href="/legal"
                  className="transition-colors duration-200"
                  style={{ color: theme.text.mutedDark }}
                  onMouseEnter={handleLinkHoverEnter}
                  onMouseLeave={handleLinkHoverLeave}
                >
                  Privacy & Terms
                </a>
              </div>
              <div>© {currentYear} can(RE)volution. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
