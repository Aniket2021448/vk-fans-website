import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCarousel from '@/components/common/ProductCarousel';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Technical Support - VK Fans',
  description: 'Get technical assistance for your VK Fans products. Expert support for troubleshooting, maintenance, and optimal performance.',
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
              <p className="text-muted-foreground mb-4">{topic.content}</p>
              <button className="text-primary font-medium hover:underline flex items-center gap-1">
                Learn More <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-surface border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our technical support team is available to help with any questions or issues you may encounter.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Icon name="PhoneIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone Support</h4>
                <p className="text-muted-foreground">+91-XXX-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="EnvelopeIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Support</h4>
                <p className="text-muted-foreground">support@vkfans.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Live Chat</h4>
                <p className="text-muted-foreground">Available 9 AM - 6 PM IST</p>
              </div>
            </div>
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
