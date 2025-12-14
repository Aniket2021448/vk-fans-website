'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`relative bg-industrial-steel overflow-hidden ${className}`}>
      {/* Animated Fan Decorations */}
      {mounted && (
        <>
          <div className="absolute top-10 right-10 w-32 h-32 opacity-10 animate-fan-spin-slow pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-brass" />
              <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" className="text-warm-brass" />
              <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" className="text-warm-brass" />
              <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" className="text-warm-brass" />
              <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" className="text-warm-brass" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10 animate-fan-spin-reverse pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <path d="M50,10 L53,48 L50,50 L47,48 Z" fill="currentColor" className="text-primary" />
              <path d="M90,50 L52,53 L50,50 L52,47 Z" fill="currentColor" className="text-primary" />
              <path d="M50,90 L47,52 L50,50 L53,52 Z" fill="currentColor" className="text-primary" />
              <path d="M10,50 L48,47 L50,50 L48,53 Z" fill="currentColor" className="text-primary" />
            </svg>
          </div>
        </>
      )}

      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_167d7cfd4-1764659144088.png"
          alt="Modern industrial manufacturing facility with precision machinery and quality control stations"
          className="w-full h-full object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-steel/95 via-industrial-steel/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge with animated indicator */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Manufacturing Live Now
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision-Engineered Fans
            <span className="block text-warm-brass mt-2">
              Manufactured In-House
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the difference of direct manufacturing. Every fan is crafted with precision in our state-of-the-art facility, ensuring unmatched quality and performance for commercial and residential applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/product-catalog"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-industrial">

              Explore Products
            </Link>
            <Link
              href="/manufacturing-story"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">

              See Our Factory
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-success">25+</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Years</p>
                <p className="text-white font-semibold">Manufacturing</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">500K+</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Units</p>
                <p className="text-white font-semibold">Produced Annually</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-warm-brass/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-warm-brass">ISO</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Certified</p>
                <p className="text-white font-semibold">Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;