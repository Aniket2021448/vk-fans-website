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

export const metadata: Metadata = {
  title: 'Manufacturing Story - IndustrialFan Pro',
  description: 'Discover the craftsmanship behind IndustrialFan Pro. Explore our state-of-the-art facility, meet our skilled team, and learn about our commitment to quality, sustainability, and manufacturing excellence since 1995.',
};

export default function ManufacturingStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
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