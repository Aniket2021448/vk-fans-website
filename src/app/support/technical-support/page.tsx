import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Technical Support & Troubleshooting - VK Fans | Fan Repair & Maintenance`,
  description: `Expert technical support for VK Fans products. Troubleshooting guides, fan repair tips, maintenance schedules, and performance optimization. Fix ceiling fan noise, speed issues, and installation problems.`,
  keywords: [
    'ceiling fan troubleshooting',
    'fan noise problem',
    'fan speed issue',
    'fan not working',
    'fan motor problem',
    'fan maintenance guide',
    'fan repair tips',
    'fan installation guide',
    'technical support',
    'fan safety tips',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Technical Support & Troubleshooting`,
    description: 'Expert guides for fan troubleshooting, repair, maintenance, and optimal performance.',
    type: 'website',
    url: 'https://vkfans.com/support/technical-support',
  },
  alternates: {
    canonical: 'https://vkfans.com/support/technical-support',
  },
};

export default function TechnicalSupportPage() {
  const supportTopics = [
    {
      title: 'Common Issues & Solutions',
      icon: 'BoltIcon',
      content: 'Find quick solutions to frequently encountered issues with our products. Our comprehensive troubleshooting guide covers motor problems, noise issues, speed control, and more.',
    },
    {
      title: 'Performance Optimization',
      icon: 'SparklesIcon',
      content: 'Learn how to maximize the performance and efficiency of your fan. Discover best practices for installation, positioning, and maintenance.',
    },
    {
      title: 'Maintenance Guide',
      icon: 'WrenchIcon',
      content: 'Regular maintenance extends the life of your fan. Follow our expert-approved maintenance schedule and procedures for optimal operation.',
    },
    {
      title: 'Safety Information',
      icon: 'ShieldCheckIcon',
      content: 'Important safety guidelines and precautions for using VK Fans products. Ensure safe operation and compliance with electrical standards.',
    },
    {
      title: 'Technical Specifications',
      icon: 'DocumentIcon',
      content: 'Detailed technical data, wiring diagrams, electrical requirements, and specifications for all our product lines.',
    },
    {
      title: 'Remote Assistance',
      icon: 'ChatBubbleLeftRightIcon',
      content: 'Connect with our technical experts via chat, email, or phone for personalized assistance and real-time support.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Technical Support</h1>
          <p className="text-lg opacity-90">
            Expert technical assistance for all your VK Fans products. Find solutions, guides, and best practices.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Support Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportTopics.map((topic, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-industrial transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={topic.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
              </div>
              <p className="text-muted-foreground">{topic.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-surface border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Reach our technicians directly with your model number, invoice date, and a short description of the issue.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start gap-4">
              <Icon name="PhoneIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone Support</h4>
                <p className="text-muted-foreground">{BUSINESS_INFO.contact.phone}</p>
                <p className="text-xs text-text-secondary">9:00 AM - 6:00 PM IST (Mon-Sat)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="EnvelopeIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Support</h4>
                <p className="text-muted-foreground">{BUSINESS_INFO.contact.email}</p>
                <p className="text-xs text-text-secondary">Share model, symptoms, and a short video if possible.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp & Chat</h4>
                <p className="text-muted-foreground">{BUSINESS_INFO.contact.whatsappLink.replace('https://','')}</p>
                <p className="text-xs text-text-secondary">Best for quick troubleshooting steps.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="PhoneIcon" size={18} />
              Call Now
            </a>
            <a
              href="/contact-us"
              className="flex items-center gap-2 px-5 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              <Icon name="EnvelopeIcon" size={18} />
              Email Support
            </a>
            <a
              href={`${BUSINESS_INFO.contact.whatsappLink}?text=${encodeURIComponent('Hi VK Fans Support, I need help with my fan. Model: ____. Issue: _____. Invoice date: _____.')}`}
              className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}
