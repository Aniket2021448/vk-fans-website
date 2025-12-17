import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/constants/business';
import ALL_PRODUCTS from '@/constants/products';

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found - VK Fans',
      description: 'The product you are looking for is not available.',
    };
  }

  const categoryKeywords: Record<string, string[]> = {
    'Ceiling Fans': ['ceiling fan', 'decorative ceiling fan', 'energy efficient ceiling fan', 'ceiling fan price'],
    'Exhaust Fans': ['exhaust fan', 'ventilation fan', 'kitchen exhaust fan', 'exhaust fan price'],
    'Pedestal Fans': ['pedestal fan', 'standing fan', 'pedestal fan price', 'portable pedestal fan'],
    'Wall Fans': ['wall fan', 'wall mounted fan', 'wall fan price', 'space saving wall fan'],
    'Table Fans': ['table fan', 'desk fan', 'table fan price', 'compact table fan'],
  };

  const productKeywords = categoryKeywords[product.category] || [];
  const allKeywords = [
    `buy ${product.name.toLowerCase()}`,
    `${product.name.toLowerCase()} price`,
    `${product.name.toLowerCase()} specifications`,
    `${product.name.toLowerCase()} online`,
    ...productKeywords,
    ...BUSINESS_INFO.seo.keywords,
  ].join(', ');

  return {
    title: `${product.name} - Buy Online | ${BUSINESS_INFO.name}`,
    description: `${product.name} - ${product.description} ₹${product.price.toLocaleString()}. ${product.energyRating} rated. Direct from manufacturer in Delhi. Free shipping.`,
    keywords: allKeywords,
    openGraph: {
      title: `${product.name} - Premium Quality Fan`,
      description: `${product.category}: ${product.description} Specifications: ${product.specifications.power}, ${product.specifications.airflow}, ${product.specifications.speed}.`,
      type: 'website',
      url: `https://vkfans.com/product-catalog/products/${id}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - ${BUSINESS_INFO.name}`,
      description: `${product.category}: ${product.description}. ₹${product.price.toLocaleString()}. Direct from factory.`,
      images: [product.image],
    },
    alternates: {
      canonical: `https://vkfans.com/product-catalog/products/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductLayout({ children }: Props) {
  return children;
}
