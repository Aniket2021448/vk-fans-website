import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Warranty Information - VK Fans',
  description: 'Comprehensive warranty coverage and protection for all VK Fans products. Terms, conditions, and claims process.',
};

export default function WarrantyInformationPage() {
  const warrantyPlans = [
    {
      title: 'Standard Warranty',
      period: '2 Years',
      icon: 'ShieldCheckIcon',
      coverage: [
        'Manufacturing defects',
        'Material defects',
        'Motor and bearings',
        'Electrical components',
      ],
    },
    {
      title: 'Extended Warranty',
      period: '5 Years',
      icon: 'StarIcon',
      coverage: [
        'All standard warranty coverage',
        'Parts replacement',
        'Technical support',
        'Emergency service',
      ],
    },
    {
      title: 'Premium Protection',
      period: '10 Years',
      icon: 'CrownIcon',
      coverage: [
        'Comprehensive coverage',
        'Free replacement',
        '24/7 support',
        'On-site service',
      ],
    },
  ];

  const faqItems = [
    {
      question: 'What does the warranty cover?',
      answer: 'Our warranty covers manufacturing and material defects, including motor, electrical components, and bearings. Normal wear and tear are not covered.',
    },
    {
      question: 'How do I file a warranty claim?',
      answer: 'Contact our support team with your product serial number and proof of purchase. We will guide you through the claim process.',
    },
    {
      question: 'Is warranty transferable?',
      answer: 'Warranty coverage is valid for the original purchaser. In case of resale, please contact us for transfer procedures.',
    },
    {
      question: 'Does warranty cover damage from misuse?',
      answer: 'No, warranty does not cover damage from improper installation, misuse, or unauthorized repairs.',
    },
    {
      question: 'How long does warranty processing take?',
      answer: 'Typically 5-7 working days from claim submission. Our team will keep you updated throughout the process.',
    },
    {
      question: 'Can I extend my warranty?',
      answer: 'Yes, extended warranty options are available during the first 30 days of purchase. Contact sales for details.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Warranty Information</h1>
          <p className="text-lg opacity-90">
            Complete warranty coverage and protection plans for all VK Fans products. We stand behind our quality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Warranty Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Warranty Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warrantyPlans.map((plan, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-industrial transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={plan.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{plan.period}</div>
                <div className="space-y-3 text-left">
                  {plan.coverage.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="bg-surface border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Warranty Terms & Conditions</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Valid From:</strong> Warranty is valid from the date of purchase as per invoice.
            </p>
            <p>
              <strong className="text-foreground">Registration Required:</strong> Product registration is recommended for faster claim processing.
            </p>
            <p>
              <strong className="text-foreground">Exclusions:</strong> Warranty does not cover damage from improper installation, physical damage, water damage, electrical surges, or normal wear and tear.
            </p>
            <p>
              <strong className="text-foreground">Service Centers:</strong> Warranty service is available at authorized VK Fans service centers across India.
            </p>
            <p>
              <strong className="text-foreground">Documentation:</strong> Original purchase invoice and product serial number are required for warranty claims.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-card border border-border rounded-lg p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground hover:text-primary">
                  {item.question}
                  <Icon name="ChevronDownIcon" size={20} />
                </summary>
                <p className="mt-4 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Warranty Support</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about your warranty? Our support team is here to help.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Icon name="PhoneIcon" size={18} />
              Call Support
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
              <Icon name="EnvelopeIcon" size={18} />
              Email Us
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
