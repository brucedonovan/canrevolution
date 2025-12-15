'use client';

import { useEffect, useRef } from 'react';

const BookDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const startTime = Date.now();

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6; // Adjust for section height
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001; // Convert to seconds

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create radial gradient with animation
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);

      // Animated gradient following cursor (fallback to center)
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius * 0.8);

      // Dynamic color stops with subtle animation
      const hue = (elapsed * 10) % 360;
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(0.5, '#0d0d0d');
      gradient.addColorStop(1, '#000000');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle noise/texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 5;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }

      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-slate-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-100"
          style={{ mixBlendMode: 'multiply' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-4xl h-full flex flex-col justify-center items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 leading-tight">
          Book a demo session
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl leading-relaxed">
          Let's discuss the options and how can(RE)volution machines can transform your business.
        </p>

        {/* CTA Button */}
        <a
          href="/appointments"
          className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Book now
        </a>
      </div>
    </section>
  );
};

export default BookDemo;
