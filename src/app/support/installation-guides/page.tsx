import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Installation Guides - VK Fans',
  description: 'Step-by-step installation guides for all VK Fans products. Professional installation instructions for easy setup.',
};

export default function InstallationGuidesPage() {
  const guides = [
    {
      title: 'Pedestal Fans Installation',
      icon: 'BoltIcon',
      description: 'Complete installation guide for pedestal fans including assembly, positioning, and safety checks.',
    },
    {
      title: 'Wall Fans Installation',
      icon: 'MapPinIcon',
      description: 'Detailed instructions for mounting wall fans safely and securely on different wall types.',
    },
    {
      title: 'Table Fans Installation',
      icon: 'CubeIcon',
      description: 'Easy setup guide for compact table fans with stability and placement recommendations.',
    },
    {
      title: 'Exhaust Fans Installation',
      icon: 'ArrowPathIcon',
      description: 'Professional installation procedures for exhaust fans including ductwork and ventilation setup.',
    },
    {
      title: 'Electrical Connections',
      icon: 'RocketLaunchIcon',
      description: 'Safe electrical installation procedures, wiring diagrams, and connection safety guidelines.',
    },
    {
      title: 'Speed Control Setup',
      icon: 'AdjustmentsHorizontalIcon',
      description: 'Instructions for installing and configuring speed controllers and remote controls.',
    },
  ];

  const steps = [
    { number: '1', title: 'Unpack & Inspect', description: 'Check all components and verify nothing is damaged.' },
    { number: '2', title: 'Read Manual', description: 'Review the complete instruction manual before starting.' },
    { number: '3', title: 'Prepare Workspace', description: 'Ensure adequate space and required tools are available.' },
    { number: '4', title: 'Follow Instructions', description: 'Step-by-step assembly and installation process.' },
    { number: '5', title: 'Safety Check', description: 'Verify all connections and perform safety tests.' },
    { number: '6', title: 'Test Operation', description: 'Run the fan and confirm all functions work correctly.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Installation Guides</h1>
          <p className="text-lg opacity-90">
            Professional step-by-step guides for quick and safe installation of all VK Fans products.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* General Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">General Installation Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product-Specific Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Product-Specific Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-industrial transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={guide.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.title}</h3>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <button className="text-primary font-medium hover:underline flex items-center gap-1">
                  View Guide <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Download Resources */}
        <section className="bg-surface border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Download Resources</h2>
          <p className="text-muted-foreground mb-6">
            Download installation manuals, wiring diagrams, and safety documents for offline reference.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Icon name="DocumentDownloadIcon" size={18} />
              Installation Manual (PDF)
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Icon name="DocumentDownloadIcon" size={18} />
              Wiring Diagram (PDF)
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Icon name="DocumentDownloadIcon" size={18} />
              Safety Checklist (PDF)
            </button>
          </div>
        </section>
      </main>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}
