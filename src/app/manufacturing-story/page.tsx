import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ProductionStats from './components/ProductionStats';
import ManufacturingTimeline from './components/ManufacturingTimeline';
import TeamShowcase from './components/TeamShowcase';
import FacilityTour from './components/FacilityTour';
import CertificationsSection from './components/CertificationsSection';
import SustainabilitySection from './components/SustainabilitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProductCarousel from '@/components/common/ProductCarousel';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Manufacturing Story - VK Fans Premium Fan Manufacturing in Delhi Since 1995`,
  description: `Explore VK Fans' state-of-the-art manufacturing facility in Delhi. Learn about our ISO certified production process, skilled workforce, sustainability initiatives, and commitment to quality in ceiling fans, exhaust fans, and ventilation solutions.`,
  keywords: [
    'fan manufacturing process',
    'ceiling fan factory Delhi',
    'ISO certified fan manufacturer',
    'industrial fan production',
    'sustainable fan manufacturing',
    'fan quality standards',
    'manufacturing excellence',
    'fan facility tour',
    'engineering team',
    'production capacity',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Premium Fan Manufacturing Story`,
    description: 'State-of-the-art facility, ISO certifications, sustainable production, and manufacturing excellence.',
    type: 'website',
    url: 'https://vkfans.com/manufacturing-story',
  },
  alternates: {
    canonical: 'https://vkfans.com/manufacturing-story',
  },
};

export default function ManufacturingStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProductCarousel />
        <ProductionStats />
        <ManufacturingTimeline />
        <TeamShowcase />
        <FacilityTour />
        <CertificationsSection />
        <SustainabilitySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}