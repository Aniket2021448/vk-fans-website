import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './homepage/components/HeroSection';
import ProductCategories from './homepage/components/ProductCatefories';
import ManufacturingShowcase from './homepage/components/ManufacturingShowcase';
import TrustSignals from './homepage/components/TrustSignals';
import TestimonialCarousel from './homepage/components/TestimonialCarouel';
import SmartProductFinder from './homepage/components/SmartProductFinder';
import CTASection from './homepage/components/CTASection';
import Footer from './homepage/components/Footer';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} - Premium Industrial & Domestic Fans | Delhi`,
  description: BUSINESS_INFO.seo.description,
  keywords: BUSINESS_INFO.seo.keywords.join(', '),
  authors: [{ name: BUSINESS_INFO.name }],
  openGraph: {
    title: `${BUSINESS_INFO.name} - Industrial & Domestic Fan Manufacturer`,
    description: BUSINESS_INFO.seo.description,
    type: 'website',
    locale: 'en_IN',
    siteName: BUSINESS_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} - Premium Fans`,
    description: BUSINESS_INFO.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSignals />
        <ProductCategories />
        <ManufacturingShowcase />
        <TestimonialCarousel />
        <SmartProductFinder />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}