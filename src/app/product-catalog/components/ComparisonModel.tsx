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
  warranty: string;
  dimensions: string;
  weight: string;
}

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export default function ComparisonModal({ products, onClose, onRemove }: ComparisonModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);

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

  const comparisonRows = [
    { label: 'Price', key: 'price' },
    { label: 'Energy Rating', key: 'energyRating' },
    { label: 'Power', key: 'power' },
    { label: 'Airflow', key: 'airflow' },
    { label: 'Speed Settings', key: 'speed' },
    { label: 'Noise Level', key: 'noise' },
    { label: 'Warranty', key: 'warranty' },
    { label: 'Dimensions', key: 'dimensions' },
    { label: 'Weight', key: 'weight' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-industrial-steel/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-industrial w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Product Comparison</h2>
            <p className="text-sm text-text-secondary">Compare up to 4 products side by side</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded transition-colors"
            aria-label="Close comparison"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="bg-surface sticky top-0 z-10">
              <tr>
                <th className="w-48 px-6 py-4 text-left text-sm font-semibold text-foreground border-r border-border">
                  Specification
                </th>
                {products.map((product) => (
                  <th key={product.id} className="px-6 py-4 border-r border-border last:border-r-0">
                    <div className="space-y-3">
                      <div className="relative w-32 h-32 mx-auto bg-surface rounded overflow-hidden">
                        <AppImage
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-text-secondary uppercase">{product.category}</p>
                        <h3 className="text-sm font-semibold text-foreground mt-1">{product.name}</h3>
                      </div>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="w-full px-3 py-1.5 text-xs font-medium text-error border border-error rounded hover:bg-error hover:text-error-foreground transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={row.key} className={index % 2 === 0 ? 'bg-background' : 'bg-card'}>
                  <td className="px-6 py-4 text-sm font-medium text-foreground border-r border-border">
                    {row.label}
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="px-6 py-4 text-sm text-center border-r border-border last:border-r-0">
                      {row.key === 'price' && (
                        <span className="text-lg font-bold text-primary">
                          ${product.price.toLocaleString()}
                        </span>
                      )}
                      {row.key === 'energyRating' && (
                        <span className="inline-block bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {product.energyRating}
                        </span>
                      )}
                      {row.key === 'power' && product.specifications.power}
                      {row.key === 'airflow' && product.specifications.airflow}
                      {row.key === 'speed' && product.specifications.speed}
                      {row.key === 'noise' && product.specifications.noise}
                      {row.key === 'warranty' && product.warranty}
                      {row.key === 'dimensions' && product.dimensions}
                      {row.key === 'weight' && product.weight}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Features Row */}
              <tr className="bg-surface">
                <td className="px-6 py-4 text-sm font-medium text-foreground border-r border-border">
                  Features
                </td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 border-r border-border last:border-r-0">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-foreground">
                          <Icon name="CheckCircleIcon" size={16} className="text-success shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-surface">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">
              Comparing {products.length} of 4 products
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded hover:bg-muted transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 transition-colors">
                Request Bulk Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}