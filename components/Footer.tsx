import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-50">
      {/* Main Footer Section */}
      <div className="w-full py-16 md:py-20 border-b border-amber-900">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left - Get in touch button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-amber-700 text-amber-50 font-semibold rounded-lg hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Get in touch
              </a>
            </div>

            {/* Center - Spacer (empty on mobile) */}
            <div className="hidden md:block" />

            {/* Right - Social section */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-amber-400 font-medium text-sm">Follow us on social</p>
              <a
                href="https://www.instagram.com/can.revolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-50 hover:bg-amber-700 hover:text-amber-50 transition-all duration-300 transform hover:scale-110"
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-200 text-sm">
            <div>© {currentYear} can(RE)volution. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="hover:text-amber-50 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-amber-50 transition-colors duration-200"
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
