'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  isFirst?: boolean;
}> = ({ item, isOpen, onToggle, isFirst = false }) => {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {item.title}
        </h3>
        <ChevronDown
          size={18}
          className={`text-white transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <ul className="space-y-3 text-sm md:text-base text-gray-300">
            {item.content.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-white font-bold flex-shrink-0">•</span>
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
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
          What makes our machines unique?
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image and Button */}
          <div className="flex flex-col items-center gap-8">
            {/* Circular Image */}
            <div className="w-full max-w-sm aspect-square rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
              <img
                src="/images/machine.png"
                alt="Coffee vending machine with a display screen showing coffee beans, dispensing a clear glass cup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Demo Button */}
            <a
              href="/demo-video"
              className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors inline-block"
            >
              🍿 Demo
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col">
            <div className="border-t border-white/20">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
