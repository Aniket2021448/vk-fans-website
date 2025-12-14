'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', hasDropdown: false },
    { label: 'Products', href: '/product-catalog', hasDropdown: true },
    { label: 'Our Story', href: '/manufacturing-story', hasDropdown: false },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 ${className}`}>
      {/* Top Info Bar */}
      <div className="bg-[#f5f5f5] text-[#222] text-xs py-2 px-4 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="EnvelopeIcon" size={14} />
              <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-warm-brass transition-colors font-medium">
                {BUSINESS_INFO.contact.email}
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Icon name="MapPinIcon" size={14} />
              <span className="font-medium">15/B Miranda House, New York, US</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-warm-brass transition-colors"><Icon name="FacebookIcon" size={14} /></a>
            <a href="#" className="hover:text-warm-brass transition-colors"><Icon name="InstagramIcon" size={14} /></a>
            <a href="#" className="hover:text-warm-brass transition-colors"><Icon name="TwitterIcon" size={14} /></a>
            <a href="#" className="hover:text-warm-brass transition-colors"><Icon name="YoutubeIcon" size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-[#e5e5e5] shadow-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <span className="text-4xl font-extrabold text-[#222] tracking-tight">
                Indiro<span className="text-[#ff4c29]">.</span>
              </span>
            </Link>

            {/* Centered Navigation */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <Link href="/" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Home</Link>
              <Link href="#" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Pages <Icon name="ChevronDownIcon" size={14} /></Link>
              <Link href="#" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Portfolio <Icon name="ChevronDownIcon" size={14} /></Link>
              <Link href="#" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Shop <Icon name="ChevronDownIcon" size={14} /></Link>
              <Link href="#" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Blog <Icon name="ChevronDownIcon" size={14} /></Link>
              <Link href="#" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Features <Icon name="ChevronDownIcon" size={14} /></Link>
            </div>

            {/* Right Section - Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
              <div className="text-right mr-2">
                <div className="text-xs font-bold text-[#222] uppercase tracking-wider">OFFICE AND FACTORY</div>
                <div className="text-lg font-bold text-[#ff4c29]">(+1) 123-456 7894</div>
              </div>
              <button
                className="p-2 text-[#222] hover:text-[#ff4c29] transition-colors"
                aria-label="Search"
              >
                <Icon name="MagnifyingGlassIcon" size={22} />
              </button>
              <a
                href="#"
                className="px-7 py-3 text-base font-bold text-white bg-[#ff4c29] rounded border-2 border-[#ff4c29] hover:bg-[#ff6a47] hover:border-[#ff6a47] transition-colors shadow-md"
                style={{ boxShadow: '0 4px 0 #d63b1a' }}
              >
                REQUEST A QUOTE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[#222] hover:text-[#ff4c29] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={28} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-[#e5e5e5]">
              <nav className="flex flex-col space-y-2 mt-4">
                <Link href="/" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Home</Link>
                <Link href="#" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Pages</Link>
                <Link href="#" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Portfolio</Link>
                <Link href="#" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Shop</Link>
                <Link href="#" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Blog</Link>
                <Link href="#" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Features</Link>
                <a
                  href="#"
                  className="px-4 py-3 text-base font-bold text-white bg-[#ff4c29] rounded border-2 border-[#ff4c29] hover:bg-[#ff6a47] hover:border-[#ff6a47] transition-colors mt-4 shadow-md"
                  style={{ boxShadow: '0 4px 0 #d63b1a' }}
                >
                  REQUEST A QUOTE
                </a>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;