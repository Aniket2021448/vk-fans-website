import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import ProductCarousel from '@/components/common/ProductCarousel';
import VerticalProductCarousel from '@/components/common/VerticalProductCarousel';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Privacy Policy & Data Protection - ${BUSINESS_INFO.name}`,
  description: `VK Fans Privacy Policy. Learn how we collect, use, protect, and manage your personal information when shopping for fans online.`,
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'privacy statement',
    'GDPR compliance',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Privacy Policy`,
    description: 'Our commitment to protecting your personal data and privacy.',
    type: 'website',
    url: 'https://vkfans.com/privacy-policy',
  },
  alternates: {
    canonical: 'https://vkfans.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <div className="bg-industrial-steel text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Link 
            href="/homepage" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">Last updated: December 17, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to {BUSINESS_INFO.name}. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address, telephone numbers, and postal address.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing Data:</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To process and deliver your orders</li>
              <li>To manage our relationship with you</li>
              <li>To improve our website, products/services, marketing or customer relationships</li>
              <li>To deliver relevant website content and advertisements to you</li>
              <li>To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
              employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">6. Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may include links to third-party websites, plug-ins and applications. Clicking on those links 
              or enabling those connections may allow third parties to collect or share data about you. We do not control 
              these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you 
              with a good experience when you browse our website and also allows us to improve our site. For detailed 
              information on the cookies we use and the purposes for which we use them, please see our{' '}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
              <p><strong>Company:</strong> {BUSINESS_INFO.name}</p>
              <p><strong>Contact Person:</strong> {BUSINESS_INFO.contact.person}</p>
              <p><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="text-primary hover:underline">{BUSINESS_INFO.contact.email}</a></p>
              <p><strong>Phone:</strong> <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="text-primary hover:underline">{BUSINESS_INFO.contact.phone}</a></p>
              <p><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
            </p>
          </section>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link 
                href="/terms-of-service" 
                className="text-primary hover:underline font-medium"
              >
                Terms of Service
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/cookie-policy" 
                className="text-primary hover:underline font-medium"
              >
                Cookie Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                href="/contact-us" 
                className="text-primary hover:underline font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Vertical Product Carousel */}
          <div className="hidden lg:block lg:col-span-1">
            <VerticalProductCarousel />
          </div>
        </div>
      </div>

      {/* Horizontal Product Carousel */}
      <ProductCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}
