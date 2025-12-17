import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import ProductCarousel from '@/components/common/ProductCarousel';
import VerticalProductCarousel from '@/components/common/VerticalProductCarousel';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Terms of Service & Conditions - ${BUSINESS_INFO.name}`,
  description: `VK Fans Terms of Service. Read our terms, conditions, and policies for purchasing, using, and returning fan products.`,
  keywords: [
    'terms of service',
    'terms and conditions',
    'usage policy',
    'purchase terms',
    'return policy',
    'legal terms',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Terms of Service`,
    description: 'Legal terms and conditions for purchasing and using our products.',
    type: 'website',
    url: 'https://vkfans.com/terms-of-service',
  },
  alternates: {
    canonical: 'https://vkfans.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the website and services of {BUSINESS_INFO.name}, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on {BUSINESS_INFO.name}'s website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated 
              by {BUSINESS_INFO.name} at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">3. Product Information and Orders</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {BUSINESS_INFO.name} strives to provide accurate product descriptions and pricing information. However:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free</li>
              <li>We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time</li>
              <li>All orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel any order for any reason</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">4. Warranty and Product Quality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {BUSINESS_INFO.name} stands behind the quality of our products:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All products come with a manufacturer's warranty as specified in the product documentation</li>
              <li>Warranty terms vary by product and are detailed in our <Link href="/support/warranty-information" className="text-primary hover:underline">Warranty Information</Link> page</li>
              <li>Products must be used according to provided instructions and guidelines</li>
              <li>Warranty may be void if products are misused, modified, or installed improperly</li>
              <li>For warranty claims, please contact our customer service team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">5. Shipping and Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              Shipping and delivery terms are provided at the time of order. Delivery times are estimates and not 
              guaranteed. {BUSINESS_INFO.name} is not responsible for delays caused by shipping carriers or circumstances 
              beyond our control. Risk of loss and title for products pass to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">6. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our return and refund policy is as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Products may be returned within 30 days of receipt in original condition</li>
              <li>Custom-manufactured or special-order products are non-returnable</li>
              <li>Returned products must be unused and in original packaging</li>
              <li>Refunds will be processed within 14 business days of receiving the returned product</li>
              <li>Shipping costs are non-refundable unless the return is due to our error</li>
              <li>Customer is responsible for return shipping costs unless product is defective</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall {BUSINESS_INFO.name} or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on our website or products, even if we or our authorized representative has been notified orally 
              or in writing of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties, 
              or limitations of liability for consequential or incidental damages, so these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">8. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the 
              property of {BUSINESS_INFO.name} or its content suppliers and is protected by international copyright laws. 
              The compilation of all content on this site is the exclusive property of {BUSINESS_INFO.name} and is protected 
              by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">9. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the website for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Collect or harvest any information about other users</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">10. Technical Support</h2>
            <p className="text-gray-700 leading-relaxed">
              Technical support is available for our products through our <Link href="/support/technical-support" className="text-primary hover:underline">Technical Support</Link> page. 
              Support is provided during business hours and response times may vary based on the nature and complexity of the issue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">11. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of our website and services is also governed by our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
              considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. The most current 
              version will always be available on this page. By continuing to access or use our website and services after 
              revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such 
              unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such 
              provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link 
                href="/privacy-policy" 
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
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
