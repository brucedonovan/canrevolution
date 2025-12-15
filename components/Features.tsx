'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  description: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Freshness, Sealed and Delivered',
    description:
      'Serve your signature coffees, teas, juices, smoothies, or even small snacks in custom-sealed cans right in front of your customers. It\'s theatrical, exciting, and guarantees immediate freshness.',
  },
  {
    title: 'Grab-and-Go Convenience',
    description:
      'Today\'s customers want quality without the wait. Offer beautifully sealed, spill-proof drinks they can take to work, the gym, or on a weekend adventure. No compromise on taste or presentation.',
  },
  {
    title: 'A Canvas for Your Brand',
    description:
      'Turn every can into a miniature billboard. With custom labels, seasonal designs, and product storytelling, your drinks become collectible items your customers love to show off and share on social media.',
  },
];

const AccordionItem: React.FC<{
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  isFirst?: boolean;
}> = ({ item, isOpen, onToggle, isFirst = false }) => {
  return (
    <div className="border-b border-blue-300">
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
      >
        <h3 className="text-lg md:text-xl font-bold text-slate-900">
          {item.title}
        </h3>
        <ChevronDown
          size={18}
          className={`text-blue-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default function Features() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
          What you can offer your customers
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-700 mb-12 max-w-2xl">
          Unlock a new level of service and stand out from the crowd. With{' '}
          <strong>Can(Re)volution</strong> solutions, your café becomes more
          than a place to grab a drink, it becomes an experience your customers
          can take anywhere. Here's what you can offer:
        </p>

        {/* Accordion */}
        <div className="max-w-3xl">
          <div className="border-t border-blue-300">
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
    </section>
  );
}
