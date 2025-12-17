import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Warranty Information & Coverage - VK Fans | 2-Year Guarantee`,
  description: `VK Fans warranty details and coverage. Protect your investment with our comprehensive 2-year warranty on ceiling fans, exhaust fans, and ventilation products. Learn warranty claims process and extended protection options.`,
  keywords: [
    'fan warranty',
    'product warranty coverage',
    'fan protection plan',
    'warranty claims',
    'extended warranty',
    'fan guarantee',
    'manufacturing warranty',
    'warranty terms',
    'product protection',
    'warranty benefits',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Warranty & Protection`,
    description: 'Comprehensive warranty coverage with 2-year protection and extended warranty options.',
    type: 'website',
    url: 'https://vkfans.com/support/warranty-information',
  },
  alternates: {
    canonical: 'https://vkfans.com/support/warranty-information',
  },
};

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
