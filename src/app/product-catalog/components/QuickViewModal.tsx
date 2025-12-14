'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export default function QuickViewModal({ product, onClose, onRequestQuote }: QuickViewModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setIsHydrated(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-industrial-steel/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-industrial w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded transition-colors"
            aria-label="Close quick view"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div>
              <div className="relative aspect-square bg-surface rounded-lg overflow-hidden mb-4">
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
              
              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="BoltIcon" size={16} className="text-primary" />
                    <span className="text-xs text-text-secondary">Power</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{product.specifications.power}</p>
                </div>
                <div className="bg-surface p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="SignalIcon" size={16} className="text-primary" />
                    <span className="text-xs text-text-secondary">Airflow</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{product.specifications.airflow}</p>
                </div>
                <div className="bg-surface p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="ArrowPathIcon" size={16} className="text-primary" />
                    <span className="text-xs text-text-secondary">Speed</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{product.specifications.speed}</p>
                </div>
                <div className="bg-surface p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="SpeakerWaveIcon" size={16} className="text-primary" />
                    <span className="text-xs text-text-secondary">Noise</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{product.specifications.noise}</p>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Title & Category */}
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</span>
                  <span className="text-sm text-text-secondary">Direct from factory</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Description</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                      <Icon name="CheckCircleIcon" size={18} className="text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Warranty</p>
                  <p className="text-sm font-medium text-foreground">{product.warranty}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Dimensions</p>
                  <p className="text-sm font-medium text-foreground">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Weight</p>
                  <p className="text-sm font-medium text-foreground">{product.weight}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Stock Status</p>
                  <p className={`text-sm font-medium ${product.inStock ? 'text-success' : 'text-error'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-foreground">Quantity:</label>
                  <div className="flex items-center border border-border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                      disabled={!product.inStock}
                    >
                      <Icon name="MinusIcon" size={16} />
                    </button>
                    <span className="px-4 py-2 text-sm font-medium border-x border-border">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                      disabled={!product.inStock}
                    >
                      <Icon name="PlusIcon" size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      onRequestQuote(product);
                      onClose();
                    }}
                    disabled={!product.inStock}
                    className={`flex-1 px-6 py-3 rounded font-semibold transition-colors ${
                      product.inStock
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Request Quote' : 'Notify When Available'}
                  </button>
                  <button className="px-6 py-3 border border-border rounded font-semibold text-foreground hover:bg-muted transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}