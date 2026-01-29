'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronDown, Play, Square, X } from 'lucide-react';
import { theme } from '@/lib/theme';

interface AccordionItem {
  title: string;
  content: string[];
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Features',
    content: [
      'Compact table-top machine fits on a standard counter',
      'Standard 220V power with simple plug-and-play setup',
      'Fast operation seals cans in a few seconds (25 cans per minute)',
      'One-button operation for quick training for your team',
      'Supports most common drink sizes up to 1 Litre',
    ],
  },
  {
    title: 'Dimensions and Specifications',
    content: [
      'Model: Automatic can-sealing machine (button operation)',
      'Voltage: 220V / 110V, 50–60 Hz',
      'Power: 170 W (low energy consumption)',
      'Can diameter: 55 mm (standard slim can size)',
      'Can height: 30–210 mm',
      'Sealing speed: up to 25 cans per minute',
      'Machine dimensions: 220 × 400 × 600 mm (W × D × H)',
      'Packing size: 540 × 320 × 700 mm, N.W./G.W.: 33 /38 kg',
      'Standard EU Plug type',
      'No bottom supports/spacers needed – quick height adjustment for different cans',
    ],
  },
];

const AccordionItem: React.FC<{
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div style={{ borderBottomColor: theme.border.dark }} className="border-b">
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h3 style={{ color: theme.text.onDark }} className="text-lg md:text-xl font-semibold">
          {item.title}
        </h3>
        <ChevronDown
          size={18}
          style={{ color: theme.primary.dark, rotate: isOpen ? '180deg' : '0deg' }}
          className="transition-transform flex-shrink-0"
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <ul className="space-y-3 text-sm md:text-base" style={{ color: theme.text.mutedDark }}>
            {item.content.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span style={{ color: theme.primary.dark }} className="font-bold flex-shrink-0">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function MachineSpecs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="relative w-full text-slate-50 py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: theme.background.dark }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2
          style={{ color: theme.text.onDark }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16"
        >
          What makes our machines unique?
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image and Button */}
          <div className="flex flex-col items-center gap-6">
            {/* Circular Image/Video with Overlaid Button */}
            <div
              className="w-full max-w-sm aspect-square rounded-full overflow-visible flex items-center justify-center relative"
              style={{ backgroundColor: theme.background.dark }}
            >
              {!showDemo ? (
                <Image
                  src="/images/machine.jpg"
                  alt="Coffee vending machine with a display screen showing coffee beans, dispensing a clear glass cup"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 500px"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden">
                  <video
                    autoPlay
                    controls
                    onEnded={() => setShowDemo(false)}
                    className="w-full h-full object-contain"
                  >
                    <source src="/videos/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10"
                    aria-label="Close video"
                  >
                    <X size={24} style={{ color: theme.text.onDark }} />
                  </button>
                </div>
              )}

              {/* Overlaid Demo/Stop Button */}
              <button
                onClick={() => setShowDemo(!showDemo)}
                className="absolute bottom-0 right-6 p-4 rounded-full hover:scale-110 transition-transform shadow-lg z-20 flex items-center justify-center"
                style={{ backgroundColor: theme.primary.dark, color: theme.background.dark }}
                aria-label={showDemo ? 'Stop video' : 'Play demo'}
              >
                {showDemo ? (
                  <Square size={28} fill="currentColor" />
                ) : (
                  <Play size={28} fill="currentColor" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col">
            <div style={{ borderTopColor: 'rgba(255,255,255,0.2)' }} className="border-t">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
