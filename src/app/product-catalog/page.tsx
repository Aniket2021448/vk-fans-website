import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCatalogInteractive from './components/ProductCatalogInteractive';
import Footer from '../homepage/components/Footer';
import { BUSINESS_INFO } from '@/constants/business';

export const metadata: Metadata = {
  title: `Premium Fans - Ceiling, Exhaust, Pedestal, Wall Fans | ${BUSINESS_INFO.name}`,
  description: `Browse ${BUSINESS_INFO.name}'s complete fan catalog. Find industrial exhaust fans, ceiling fans, pedestal fans, wall fans & more. Energy-efficient, durable, affordable. Direct from manufacturer in Delhi.`,
  keywords: [
    'buy ceiling fans online',
    'exhaust fans price',
    'pedestal fans India',
    'wall mounted fans',
    'table fans online',
    'industrial ventilation fans',
    'energy efficient fans India',
    'commercial fan prices',
    'best ceiling fans',
    'fan catalog',
    'fan comparison',
    ...BUSINESS_INFO.seo.keywords,
  ].join(', '),
  openGraph: {
    title: `${BUSINESS_INFO.name} - Premium Fan Catalog`,
    description: 'Compare and buy premium quality fans. Ceiling fans, exhaust fans, pedestal fans & more. Direct from factory.',
    type: 'website',
    url: 'https://vkfans.com/product-catalog',
  },
  alternates: {
    canonical: 'https://vkfans.com/product-catalog',
  },
};

export default function ProductCatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductCatalogInteractive />
      <Footer />
    </main>
  );
}