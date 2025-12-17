'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
type GAEventParams = Record<string, any>;

export function useGoogleAnalytics(): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId) return;

    if (!(window as any).dataLayer) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = [];
      (window as any).gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        (window as any).dataLayer.push(arguments);
      };
      
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', measurementId, {
        page_path: pathname,
      });
    }

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    (window as any).gtag('event', 'page_view', { page_path: url });
  }, [pathname, searchParams]);
}

export function trackEvent(eventName: string, eventParams: GAEventParams = {}): void {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}