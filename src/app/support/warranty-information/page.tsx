'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

type WarrantyPlan = {
  title: string;
  period: string;
  icon: string;
  coverage: string[];
  ctaMessage: string;
  perks?: string[];
};

export default function WarrantyInformationPage() {
  const [selectedPlan, setSelectedPlan] = useState<WarrantyPlan | null>(null);
  const warrantyPlans: WarrantyPlan[] = [
    {
      title: 'Standard Warranty',
      period: '2 Years',
      icon: 'ShieldCheckIcon',
      coverage: [
        'Manufacturing and material defects',
        'Motor, bearings, and electrical components',
        'Service performed at VK Fans factory service center',
      ],
      perks: ['Valid from invoice date for the specific model number'],
      ctaMessage: 'Hi VK Fans, I need details about the Standard Warranty for my fan. Model: ____. Invoice date: ____.',
    },
    {
      title: 'Extended Warranty',
      period: '5 Years',
      icon: 'StarIcon',
      coverage: [
        'Everything in Standard Warranty',
        'Parts replacement beyond year 2',
        'Priority technical support via phone/WhatsApp',
        'Factory service center repairs with expedited queue',
      ],
      perks: ['Valid from invoice date for the specific model number'],
      ctaMessage: 'Hi VK Fans, I want to purchase/claim Extended Warranty. Model: ____. Invoice date: ____.',
    },
    {
      title: 'Premium Protection',
      period: '10 Years',
      icon: 'CrownIcon',
      coverage: [
        'Comprehensive coverage including motors and electronics',
        '24/7 support response window',
        'On-site service or free pickup & return to factory service center',
      ],
      perks: ['Valid from invoice date for the specific model number'],
      ctaMessage: 'Hi VK Fans, I want Premium Protection support. Model: ____. Invoice date: ____. Need onsite/free pickup.',
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
      <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-16">
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
              <div
                key={index}
                className="h-full bg-card border border-border rounded-lg p-8 hover:shadow-industrial transition-shadow text-center flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={plan.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{plan.period}</div>
                <div className="space-y-3 text-left flex-1">
                  {plan.coverage.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                  {plan.perks?.map((perk, i) => (
                    <div key={`perk-${i}`} className="flex items-center gap-2">
                      <Icon name="InformationCircleIcon" size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{perk}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  onClick={() => setSelectedPlan(plan)}
                >
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
              <strong className="text-foreground">Valid From:</strong> Warranty starts from the invoice date for the specific model number on your bill of sale. No separate registration date is required.
            </p>
            <p>
              <strong className="text-foreground">Registration:</strong> Registration is optional; keeping your invoice and model/serial number ready speeds up claim processing.
            </p>
            <p>
              <strong className="text-foreground">Exclusions:</strong> Improper installation, physical damage, liquid ingress, electrical surges, misuse, and normal wear and tear are not covered.
            </p>
            <p>
              <strong className="text-foreground">Service Center:</strong> All warranty repairs are performed at the VK Fans factory service center. Premium plans include on-site support or free pickup and return to our factory service center.
            </p>
            <p>
              <strong className="text-foreground">Documentation:</strong> Original purchase invoice (with model number) and product serial number are required for warranty claims.
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

        {selectedPlan && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-8">
            <div className="relative max-w-2xl w-full bg-card border border-border rounded-2xl shadow-2xl p-8">
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={selectedPlan.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedPlan.title}</h3>
                  <p className="text-primary font-semibold">{selectedPlan.period} coverage</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {selectedPlan.coverage.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
                {selectedPlan.perks?.map((perk, i) => (
                  <div key={`perk-${i}`} className="flex items-start gap-2">
                    <Icon name="InformationCircleIcon" size={18} className="text-primary mt-0.5" />
                    <span className="text-muted-foreground">{perk}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <Icon name="DocumentTextIcon" size={18} className="text-primary mt-0.5" />
                  <span className="text-muted-foreground">Keep your invoice (with model number) handy for faster processing.</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact-us"
                  className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Icon name="PhoneIcon" size={18} />
                  Contact Us
                </a>
                <a
                  href={`${BUSINESS_INFO.contact.whatsappLink}?text=${encodeURIComponent(selectedPlan.ctaMessage)}`}
                  className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Warranty Support</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about your warranty? Our support team is here to help.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="PhoneIcon" size={18} />
              Call Support
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.contact.email}?subject=VK%20Fans%20Warranty%20Support&body=Model%20Number:%20%0AInvoice%20Date:%20%0AIssue:%20`}
              className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              <Icon name="EnvelopeIcon" size={18} />
              Email Us
            </a>
            <a
              href={`${BUSINESS_INFO.contact.whatsappLink}?text=${encodeURIComponent('Hi VK Fans, I need warranty support. Model: ____. Invoice date: ____.')}`}
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
              WhatsApp Support
            </a>
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
