"use client";

import React, { useEffect, useRef, useState } from 'react';
import ALL_PRODUCTS from '@/constants/products';
import ProductCard from '@/app/product-catalog/components/ProductCard';

export default function ProductCarousel() {
  const products = ALL_PRODUCTS;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState<number>(260);
  const [isPaused, setIsPaused] = useState(false);

  const GAP = 16; // px gap between items

  function getVisibleCount(width: number) {
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  useEffect(() => {
    function recalc() {
      const el = containerRef.current;
      if (!el) return;
      const visible = getVisibleCount(el.clientWidth);
      const totalGaps = GAP * (visible - 1);
      const calculated = Math.floor((el.clientWidth - totalGaps) / visible);
      setItemWidth(calculated);
    }

    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let interval: number | undefined;

    function start() {
      stop();
      interval = window.setInterval(() => {
        if (isPaused || !el) return;
        const scrollAmount = itemWidth + GAP;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        if (el.scrollLeft + el.clientWidth + 2 >= el.scrollWidth) {
          // reached end -> jump back to start
          el.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
  }, [itemWidth, isPaused]);

  return (
    <section className="w-full py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-foreground text-center">Explore More Products</h2>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 -mx-4 px-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="snap-start flex-none h-full"
                style={{ width: `${itemWidth}px`, minHeight: '100%' }}
              >
                <div className="h-full">
                  <ProductCard product={product} onCompare={() => {}} isComparing={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
