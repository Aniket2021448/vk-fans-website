'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    products: [
      { label: 'Industrial Fans', href: '/product-catalog' },
      { label: 'Domestic Fans', href: '/product-catalog' },
      { label: 'Ceiling Fans', href: '/product-catalog' },
      { label: 'Exhaust Fans', href: '/product-catalog' },
    ],
    company: [
      { label: 'Manufacturing Story', href: '/manufacturing-story' },
      { label: 'Quality Standards', href: '/manufacturing-story' },
      { label: 'Certifications', href: '/manufacturing-story' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    support: [
      { label: 'Technical Support', href: '/support/technical-support' },
      { label: 'Installation Guides', href: '/support/installation-guides' },
      { label: 'Warranty Information', href: '/support/warranty-information' },
      { label: 'Customer Service', href: '/support/customer-service' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: BUSINESS_INFO.social.facebook },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: BUSINESS_INFO.social.twitter },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: BUSINESS_INFO.social.linkedin },
    { name: 'Instagram', icon: 'PhotoIcon', href: BUSINESS_INFO.social.instagram },
  ];

  return (
    <footer className="bg-industrial-steel text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground"
                >
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M14 6 L14 22 M8 14 L20 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="14" cy="14" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold">{BUSINESS_INFO.name}</span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium industrial and domestic fans manufactured with precision. Quality, reliability, and
              performance you can trust.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 mb-6 text-sm">
              <p className="font-semibold text-white">Contact: {BUSINESS_INFO.contact.person}</p>
              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="PhoneIcon" size={16} />
                {BUSINESS_INFO.contact.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="EnvelopeIcon" size={16} />
                {BUSINESS_INFO.contact.email}
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <Icon name="MapPinIcon" size={16} className="mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {isHydrated ? `© ${currentYear}` : '© 2025'} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/product-catalog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/product-catalog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/product-catalog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;