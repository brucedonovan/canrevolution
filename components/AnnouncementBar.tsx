'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the announcement bar has been closed before
    const stored = localStorage.getItem('announcement-bar-closed');
    if (stored === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-bar-closed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white text-black py-3 px-6 flex items-center justify-between">
      <p className="text-center flex-1 text-sm md:text-base">
        Launching soon in Lisbon, Portugal
      </p>
      <button
        onClick={handleClose}
        className="ml-4 text-black hover:opacity-60 transition-opacity flex-shrink-0"
        aria-label="Close Announcement"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
