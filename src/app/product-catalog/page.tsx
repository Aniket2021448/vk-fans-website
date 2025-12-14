import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCatalogInteractive from './components/ProductCatalogInteractive';
import Footer from '../homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Product Catalog - IndustrialFan Pro',
  description: 'Explore our comprehensive range of industrial and commercial fans including pedestal, wall, table, and exhaust fans with detailed specifications, energy ratings, and customization options.',
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