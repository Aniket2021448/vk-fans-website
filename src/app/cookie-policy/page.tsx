import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import ProductCarousel from '@/components/common/ProductCarousel';
import VerticalProductCarousel from '@/components/common/VerticalProductCarousel';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Cookie Policy & Consent - ${BUSINESS_INFO.name}`,
  description: `VK Fans Cookie Policy. Learn how we use cookies, tracking, and similar technologies to enhance your browsing experience.`,
  keywords: [
    'cookie policy',
    'cookie consent',
    'website tracking',
    'analytics cookies',
    'cookie settings',
    'privacy cookies',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Cookie Policy`,
    description: 'How we use cookies to enhance your browsing experience.',
    type: 'website',
    url: 'https://vkfans.com/cookie-policy',
  },
  alternates: {
    canonical: 'https://vkfans.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
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
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently, as well as to provide information to the 
              owners of the site. Cookies help us understand how you use our website and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {BUSINESS_INFO.name} uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
              <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve our website's performance.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, personalized features.</li>
              <li><strong>Analytics Cookies:</strong> We use analytics tools like Google Analytics to understand how users interact with our website, helping us improve user experience.</li>
              <li><strong>Marketing Cookies:</strong> These cookies track your browsing habits to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-industrial-steel mb-3">Session Cookies</h3>
                <p className="text-gray-700">
                  These are temporary cookies that remain on your device only during your browsing session. They are 
                  deleted when you close your browser. Session cookies help us maintain your session as you navigate 
                  through our website.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-industrial-steel mb-3">Persistent Cookies</h3>
                <p className="text-gray-700">
                  These cookies remain on your device for a set period specified in the cookie or until you delete them. 
                  They help us recognize you as a returning visitor and remember your preferences.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-industrial-steel mb-3">First-Party Cookies</h3>
                <p className="text-gray-700">
                  These cookies are set directly by {BUSINESS_INFO.name} and are used to provide you with a better 
                  experience on our website.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-industrial-steel mb-3">Third-Party Cookies</h3>
                <p className="text-gray-700">
                  These cookies are set by third-party services we use, such as Google Analytics, social media platforms, 
                  and advertising networks. These cookies help us analyze website traffic and improve our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">4. Specific Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b">
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Google Analytics - Distinguishes users</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Google Analytics - Distinguishes users</td>
                    <td className="px-4 py-3">24 hours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">_gat</td>
                    <td className="px-4 py-3">Google Analytics - Throttle request rate</td>
                    <td className="px-4 py-3">1 minute</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">session_id</td>
                    <td className="px-4 py-3">Maintains user session</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">preferences</td>
                    <td className="px-4 py-3">Stores user preferences</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may set cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Google Ads:</strong> To deliver targeted advertisements</li>
              <li><strong>Facebook Pixel:</strong> To track conversions and retarget visitors</li>
              <li><strong>Social Media Platforms:</strong> To enable social sharing and embed content</li>
              <li><strong>Payment Processors:</strong> To process secure transactions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These third parties have their own privacy and cookie policies, which we recommend you review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">6. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                <p className="text-gray-700 text-sm">
                  Most web browsers automatically accept cookies, but you can usually modify your browser settings to 
                  decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Browser Instructions</h4>
                <p className="text-gray-700 text-sm mb-2">To manage cookies in your browser:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Opt-Out</h4>
                <p className="text-gray-700 text-sm">
                  You can opt out of Google Analytics by installing the{' '}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">7. Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not 
              want to have your online activity tracked. Currently, there is no standard way for websites to respond to 
              DNT signals. We do not currently respond to DNT browser signals or mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">8. Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. 
              When you first visit our website, you will be presented with a cookie consent banner. You can choose to 
              accept or reject non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">9. Impact of Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you choose to disable cookies, some features of our website may not function properly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You may not be able to access certain secure areas of the website</li>
              <li>Your preferences and settings may not be saved</li>
              <li>Some interactive features may not work correctly</li>
              <li>You may see less relevant advertisements</li>
              <li>Website performance and load times may be affected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">10. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our 
              operations, or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy 
              regularly to stay informed about our use of cookies. The "Last updated" date at the top of this page 
              indicates when this policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
            <h2 className="text-2xl font-bold text-industrial-steel mb-4">12. More Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For more information about cookies and how they work, visit{' '}
              <a 
                href="https://www.allaboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.allaboutcookies.org
              </a>. For information about your privacy rights, please see our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
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
                href="/terms-of-service" 
                className="text-primary hover:underline font-medium"
              >
                Terms of Service
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
