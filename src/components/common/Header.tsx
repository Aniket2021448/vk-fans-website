'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { BUSINESS_INFO } from '@/constants/business';
import ALL_PRODUCTS from '@/constants/products';
import { generateProductSlug } from '@/utils/productUtils';

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
        {/* Full-width product marquee (replaces top info bar) */}
        <div className="w-full" style={{ background: 'var(--color-warm-brass)' }}>
          <div className="w-full overflow-hidden">
            <style>{`
              .vk-marquee { display:block; }
              .vk-marquee-inner { display:inline-flex; gap:4rem; white-space:nowrap; align-items:center; min-width:200%; animation:vk-marquee 28s linear infinite; }
              .vk-marquee a { color:var(--color-on-warm-brass, #fff); font-weight:700; padding:0 1rem; font-size:1rem; }
              @keyframes vk-marquee { 0% { transform:translateX(0%);} 100% { transform:translateX(-50%);} }
            `}</style>
            <div className="vk-marquee py-3">
              <div className="vk-marquee-inner">
                {ALL_PRODUCTS.map((p) => (
                  <Link key={p.id} href={`/products/${generateProductSlug(p.name)}`} className="text-sm">
                    {p.name}
                  </Link>
                ))}
                {ALL_PRODUCTS.map((p) => (
                  <Link key={`${p.id}-dup`} href={`/products/${generateProductSlug(p.name)}`} className="text-sm">
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-[#e5e5e5] shadow-none">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section with rotating fan */}
            <Link href="/" className="flex items-center flex-shrink-0 gap-3">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#ff4c29]" aria-hidden>
                  <g className="animate-spin origin-center" fill="currentColor">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.08" />
                    <path d="M50 10 L58 50 L50 55 L42 50 Z" />
                    <path d="M90 50 L58 58 L50 50 L58 42 Z" />
                    <path d="M50 90 L42 58 L50 50 L58 58 Z" />
                    <path d="M10 50 L42 42 L50 50 L42 58 Z" />
                  </g>
                </svg>
              </div>
              <span className="text-3xl font-extrabold text-[#222] tracking-tight">
                VK Fans<span className="text-[#ff4c29]">.</span>
              </span>
            </Link>

            {/* (Navigation moved to right side next to CTA on wide screens) */}

            {/* Right Section - Navigation + Contact Sales CTA */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              <nav className="hidden lg:flex items-center gap-6 mr-2">
                <Link href="/" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Home</Link>
                <Link href="/product-catalog" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Portfolio</Link>
                <Link href="/manufacturing-story" className="text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors">Our Story</Link>
              </nav>
              <a
                href="/contact-us"
                className="px-6 py-3 text-base font-bold text-white bg-[#ff4c29] rounded border-2 border-[#ff4c29] hover:bg-[#ff6a47] hover:border-[#ff6a47] transition-colors shadow-md"
                style={{ boxShadow: '0 4px 0 #d63b1a' }}
              >
                Contact Sales
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
                <Link href="/product-catalog" className="px-4 py-2 text-base font-semibold text-[#222] hover:text-[#ff4c29] transition-colors rounded">Portfolio</Link>
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