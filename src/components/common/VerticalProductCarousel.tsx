"use client";

import React, { useEffect, useRef, useState } from 'react';
import ALL_PRODUCTS from '@/constants/products';
import ProductCard from '@/app/product-catalog/components/ProductCard';

export default function VerticalProductCarousel() {
  const products = ALL_PRODUCTS;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState<number>(400);
  const [isPaused, setIsPaused] = useState(false);

  const GAP = 16; // px gap between items

  // Show 6 cards by calculating the container height
  const VISIBLE_CARDS = 6;

  useEffect(() => {
    function recalc() {
      const el = containerRef.current;
      if (!el) return;
      const firstCard = el.querySelector('.product-card-wrapper') as HTMLElement;
      if (firstCard) {
        setItemHeight(firstCard.offsetHeight);
      }
    }

    recalc();
    window.addEventListener('resize', recalc);
    // Recalculate after a delay to ensure images are loaded
    const timeout = setTimeout(recalc, 500);
    
    return () => {
      window.removeEventListener('resize', recalc);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let interval: number | undefined;

    function start() {
      stop();
      interval = window.setInterval(() => {
        if (isPaused || !el) return;
        const scrollAmount = itemHeight + GAP;

        if (el.scrollTop + el.clientHeight + 2 >= el.scrollHeight) {
          // reached end -> jump back to start
          el.scrollTo({ top: 0, behavior: 'auto' });
        } else {
          el.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
      }, 2800);
    }

    function stop() {
      if (interval) {
        window.clearInterval(interval);
        interval = undefined;
      }
    }

    start();

    // pause when user interacts (pointer down) for better UX
    const onPointerDown = () => setIsPaused(true);
    const onPointerUp = () => setIsPaused(false);
    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      stop();
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [itemHeight, isPaused]);

  // Calculate container height to show exactly 6 cards
  const containerHeight = itemHeight * VISIBLE_CARDS + GAP * (VISIBLE_CARDS - 1);

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-sm p-4 sticky top-24">
      <h3 className="text-lg font-bold text-industrial-steel mb-4">Explore Our Products</h3>
      
      <div className="relative">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-col gap-4 overflow-y-auto snap-y snap-mandatory scrollbar-hide"
          style={{ 
            height: `${containerHeight}px`,
            scrollBehavior: 'smooth'
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start flex-none product-card-wrapper"
            >
              <ProductCard product={product} onCompare={() => {}} isComparing={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
