import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Customer Service & Support - VK Fans | Fan Maintenance & Care`,
  description: `24/7 customer service support for VK Fans products. Get answers to fan maintenance, installation help, warranty support, and product care. Email, phone, and chat support available.`,
  keywords: [
    'fan customer service',
    'fan support center',
    'ceiling fan support',
    'fan maintenance help',
    'product warranty support',
    'fan installation support',
    'customer care',
    'technical assistance',
    'fan troubleshooting',
    'fan care guides',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - 24/7 Customer Support`,
    description: 'Expert support for fan installation, maintenance, and warranty services.',
    type: 'website',
    url: 'https://vkfans.com/support/customer-service',
  },
  alternates: {
    canonical: 'https://vkfans.com/support/customer-service',
  },
};

export default function CustomerServicePage() {
  const serviceChannels = [
    {
      title: 'Email Support',
      icon: 'EnvelopeIcon',
      details: 'support@vkfans.com',
      description: 'Send us your queries and we will respond within 24 hours.',
      action: 'Send Email',
    },
    {
      title: 'Phone Support',
      icon: 'PhoneIcon',
      details: '+91-XXX-XXX-XXXX',
      description: 'Call our support team for immediate assistance.',
      action: 'Call Now',
    },
    {
      title: 'Live Chat',
      icon: 'ChatBubbleLeftRightIcon',
      details: 'Available 9 AM - 6 PM IST',
      description: 'Real-time support through our live chat system.',
      action: 'Start Chat',
    },
    {
      title: 'Social Media',
      icon: 'GlobeAltIcon',
      details: '@VKFansOfficial',
      description: 'Follow us and message for support and updates.',
      action: 'Message Us',
    },
  ];

  const services = [
    {
      icon: 'SparklesIcon',
      title: 'Order Tracking',
      description: 'Track your order status in real-time from placement to delivery.',
    },
    {
      icon: 'CreditCardIcon',
      title: 'Billing & Invoices',
      description: 'View invoices, payment history, and manage billing information.',
    },
    {
      icon: 'TruckIcon',
      title: 'Delivery Support',
      description: 'Get help with delivery issues, rescheduling, or special requests.',
    },
    {
      icon: 'ArrowUturnRightIcon',
      title: 'Returns & Exchanges',
      description: 'Process returns, exchanges, or refunds with our simple procedures.',
    },
    {
      icon: 'UserIcon',
      title: 'Account Management',
      description: 'Update profile, change password, manage preferences and notifications.',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Product Consultation',
      description: 'Get expert advice on choosing the right product for your needs.',
    },
  ];

  const serviceHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST' },
    { day: 'Sunday & Holidays', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Customer Service</h1>
          <p className="text-lg opacity-90">
            We are committed to providing exceptional customer service and support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Contact Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceChannels.map((channel, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-industrial transition-shadow text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={channel.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{channel.title}</h3>
                <p className="text-primary font-medium mb-2">{channel.details}</p>
                <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Service Hours */}
        <section className="bg-surface border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Service Hours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceHours.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">{item.day}</p>
                  <p className="text-muted-foreground">{item.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Request Form */}
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Submit a Support Request</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Submit Request
            </button>
          </form>
        </section>
      </main>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}
