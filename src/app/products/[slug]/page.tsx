'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import RequestQuoteModal from '@/app/product-catalog/components/RequestQuoteModal';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import { generateProductSlug, generateWhatsAppMessage, sendWhatsAppMessage } from '@/utils/productUtils';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  price: number;
  specifications: {
    power: string;
    airflow: string;
    speed: string;
    noise: string;
  };
  features: string[];
  energyRating: string;
  description: string;
  warranty: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
}

import ALL_PRODUCTS from '@/constants/products';
import ProductCarousel from '@/components/common/ProductCarousel';
const allProducts: Product[] = ALL_PRODUCTS;

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  useEffect(() => {
    // Find product by slug
    const slug = params.slug as string;
    const foundProduct = allProducts.find((p) => generateProductSlug(p.name) === slug);
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [params.slug]);

  const handleWhatsAppClick = () => {
    if (product) {
      const message = generateWhatsAppMessage(product.name, product.category, product.price);
      sendWhatsAppMessage(message);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-12 bg-muted rounded w-3/4"></div>
                <div className="h-8 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="text-center">
            <Icon name="ExclamationTriangleIcon" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link
              href="/product-catalog"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Catalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/product-catalog" className="text-primary hover:underline">
              Product Catalog
            </Link>
            <Icon name="ChevronRightIcon" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">{product.category}</span>
            <Icon name="ChevronRightIcon" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Product Image */}
          <div>
            <div className="relative aspect-square bg-surface rounded-lg overflow-hidden mb-6 border border-border">
              <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {product.energyRating}
              </div>
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="BoltIcon" size={20} className="text-primary" />
                  <span className="text-xs text-text-secondary uppercase font-semibold">Power</span>
                </div>
                <p className="text-lg font-bold text-foreground">{product.specifications.power}</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="SignalIcon" size={20} className="text-primary" />
                  <span className="text-xs text-text-secondary uppercase font-semibold">Airflow</span>
                </div>
                <p className="text-lg font-bold text-foreground">{product.specifications.airflow}</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="SparklesIcon" size={20} className="text-primary" />
                  <span className="text-xs text-text-secondary uppercase font-semibold">Speed</span>
                </div>
                <p className="text-lg font-bold text-foreground">{product.specifications.speed}</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="SpeakerXMarkIcon" size={20} className="text-primary" />
                  <span className="text-xs text-text-secondary uppercase font-semibold">Noise</span>
                </div>
                <p className="text-lg font-bold text-foreground">{product.specifications.noise}</p>
              </div>
            </div>
          </div>

          {/* Right: Product Info & CTA */}
          <div className="space-y-8">
            {/* Category & Title */}
            <div>
              <p className="text-sm text-primary uppercase font-semibold tracking-wide mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-sm text-text-secondary uppercase font-semibold mb-2">Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <span className="text-text-secondary">Direct from factory</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border">
                    <Icon name="CheckCircleIcon" size={18} className="text-success shrink-0" />
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-xs text-text-secondary uppercase font-semibold mb-2">Warranty</p>
                <p className="text-lg font-semibold text-foreground">{product.warranty}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-semibold mb-2">Dimensions</p>
                <p className="text-lg font-semibold text-foreground">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-semibold mb-2">Weight</p>
                <p className="text-lg font-semibold text-foreground">{product.weight}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-semibold mb-2">Availability</p>
                <p className={`text-lg font-semibold ${product.inStock ? 'text-success' : 'text-error'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-foreground">Quantity:</label>
                <div className="flex items-center border border-border rounded-lg bg-surface">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock}
                    className="px-4 py-2 hover:bg-muted transition-colors disabled:opacity-50"
                  >
                    <Icon name="MinusIcon" size={18} />
                  </button>
                  <span className="px-6 py-2 text-lg font-bold border-x border-border">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                    className="px-4 py-2 hover:bg-muted transition-colors disabled:opacity-50"
                  >
                    <Icon name="PlusIcon" size={18} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  disabled={!product.inStock}
                  className={`flex-1 px-6 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-[#25D366] text-white hover:bg-[#20BA5A]'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={20} />
                  {product.inStock ? 'Chat on WhatsApp' : 'Out of Stock'}
                </button>

                <button
                  onClick={() => setShowRequestQuote(true)}
                  disabled={!product.inStock}
                  className={`flex-1 px-6 py-4 rounded-lg font-semibold text-lg transition-colors ${
                    product.inStock
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Request Quote' : 'Unavailable'}
                </button>
              </div>

              <Link href="/contact-us" className="w-full px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Icon name="PhoneIcon" size={18} />
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Request Quote Modal */}
      <ProductCarousel />
      {showRequestQuote && (
        <RequestQuoteModal
          product={product}
          onClose={() => setShowRequestQuote(false)}
        />
      )}
        <Footer />
    </div>
  );
}
