import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Contact VK Fans - Industrial Fan Manufacturer in Delhi | Direct from Factory`,
  description: `Contact VK Fans for wholesale ceiling fans, exhaust fans, and commercial ventilation solutions. Direct manufacturer in Delhi with expert support. Call ${BUSINESS_INFO.contact.phone} or email for bulk orders.`,
  keywords: [
    'contact ceiling fan manufacturer',
    'buy fans wholesale Delhi',
    'industrial fans direct factory',
    'fan bulk orders',
    'ventilation solutions provider',
    'commercial fans supplier',
    'industrial fan distributor',
    'fan enquiry',
    'fan quote request',
    'Delhi fan manufacturer contact',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `Contact ${BUSINESS_INFO.name} - Direct from Manufacturer`,
    description: 'Get in touch for bulk orders, custom solutions, and expert support on industrial fans.',
    type: 'website',
    url: 'https://vkfans.com/contact-us',
  },
  alternates: {
    canonical: 'https://vkfans.com/contact-us',
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: 'PhoneIcon',
      title: 'Phone',
      value: BUSINESS_INFO.contact.phone,
      link: `tel:${BUSINESS_INFO.contact.phone}`,
      description: 'Call us for immediate assistance',
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Email',
      value: BUSINESS_INFO.contact.email,
      link: `mailto:${BUSINESS_INFO.contact.email}`,
      description: 'Send us an email anytime',
    },
    {
      icon: 'MapPinIcon',
      title: 'Address',
      value: BUSINESS_INFO.address.city,
      link: '#',
      description: BUSINESS_INFO.address.full,
    },
    {
      icon: 'ClockIcon',
      title: 'Hours',
      value: 'Mon - Fri',
      link: '#',
      description: '9:00 AM - 6:00 PM IST',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-card border border-border rounded-lg hover:shadow-industrial transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={method.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                      <p className="text-primary font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-surface border border-border rounded-lg overflow-hidden h-96">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3652891652606!2d77.13!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzI0LjAiTiA3N8KwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form className="space-y-6 bg-surface border border-border rounded-lg p-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="+91-XXX-XXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                  <option>General Inquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <details className="bg-surface border border-border rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground hover:text-primary">
                What are your business hours?
                <Icon name="ChevronDownIcon" size={20} />
              </summary>
              <p className="mt-4 text-muted-foreground">
                We are open Monday to Friday, 9:00 AM to 6:00 PM IST. Saturday support is available from 10 AM to 4 PM.
              </p>
            </details>

            <details className="bg-surface border border-border rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground hover:text-primary">
                How quickly will I get a response?
                <Icon name="ChevronDownIcon" size={20} />
              </summary>
              <p className="mt-4 text-muted-foreground">
                We typically respond to inquiries within 24 hours during business days. Urgent issues get priority.
              </p>
            </details>

            <details className="bg-surface border border-border rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground hover:text-primary">
                Do you offer technical support?
                <Icon name="ChevronDownIcon" size={20} />
              </summary>
              <p className="mt-4 text-muted-foreground">
                Yes, we offer comprehensive technical support. Visit our Technical Support page for more details.
              </p>
            </details>

            <details className="bg-surface border border-border rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground hover:text-primary">
                Can I request a product demo?
                <Icon name="ChevronDownIcon" size={20} />
              </summary>
              <p className="mt-4 text-muted-foreground">
                Absolutely! Contact our sales team and we'll arrange a demo or facility visit at your convenience.
              </p>
            </details>
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
