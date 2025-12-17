'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`relative h-125 lg:h-150 overflow-hidden ${className}`}>
      {/* Animated Fan Decorations */}
      {mounted && (
        <>
          <div className="absolute top-20 right-10 w-40 h-40 opacity-10 animate-fan-spin-slow pointer-events-none z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-warm-brass">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
              <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
              <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
              <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10 animate-fan-spin-reverse pointer-events-none z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50,10 L53,48 L50,50 L47,48 Z" fill="currentColor" />
              <path d="M90,50 L52,53 L50,50 L52,47 Z" fill="currentColor" />
              <path d="M50,90 L47,52 L50,50 L53,52 Z" fill="currentColor" />
              <path d="M10,50 L48,47 L50,50 L48,53 Z" fill="currentColor" />
            </svg>
          </div>
        </>
      )}

      <div className="absolute inset-0">
        <AppImage
          src="/motor-copper-wiring.webp"
          alt="Closeup of copper-wound electric motor with precision coils and stamped core"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-industrial-steel/95 via-industrial-steel/80 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center z-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-fan-pulse" />
            <span className="text-sm font-semibold text-primary">Manufacturing Excellence Since 1995</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Crafted With Pride,<br />Built to Last
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
            Step inside our state-of-the-art facility where precision engineering meets traditional craftsmanship. Every fan we produce tells a story of quality, innovation, and unwavering commitment to excellence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors shadow-lg">
              Take Virtual Tour
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors">
              Download Certifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;