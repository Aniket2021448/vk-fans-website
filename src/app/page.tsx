import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './homepage/components/HeroSection';
import ProductCategories from './homepage/components/ProductCategories';
import ProductCarousel from '@/components/common/ProductCarousel';
import ManufacturingShowcase from './homepage/components/ManufacturingShowcase';
import TrustSignals from './homepage/components/TrustSignals';
import TestimonialCarousel from './homepage/components/TestimonialCarouel';
import SmartProductFinder from './homepage/components/SmartProductFinder';
import CTASection from './homepage/components/CTASection';
import Footer from './homepage/components/Footer';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} - Premium Industrial & Domestic Fans Manufacturer in Delhi`,
  description: `Discover ${BUSINESS_INFO.name} - India's trusted manufacturer of industrial & domestic fans. Energy-efficient ceiling fans, exhaust fans, pedestal fans. Direct from factory. ₹599 - ₹3499.`,
  keywords: [
    'industrial fans manufacturer Delhi',
    'domestic fans India',
    'ceiling fans Delhi',
    'exhaust fans manufacturer',
    'pedestal fans',
    'wall mounted fans',
    'energy efficient fans',
    'commercial ventilation fans',
    'high CFM fans',
    'fan supplier near me',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  authors: [{ name: BUSINESS_INFO.name }],
  openGraph: {
    title: `${BUSINESS_INFO.name} - Premium Industrial & Domestic Fans`,
    description: `Discover premium quality fans. Direct from Delhi manufacturer. Ceiling fans, exhaust fans, pedestal fans & more.`,
    type: 'website',
    locale: 'en_IN',
    siteName: BUSINESS_INFO.name,
    url: 'https://vkfans.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} - Premium Fans from Factory`,
    description: `Direct manufacturer of industrial & domestic fans. Energy-efficient, durable, affordable.`,
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
        <ProductCarousel />
        <ManufacturingShowcase />
        <TestimonialCarousel />
        <SmartProductFinder />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}