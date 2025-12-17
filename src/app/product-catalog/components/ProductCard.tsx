'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { generateProductSlug, generateWhatsAppMessage, sendWhatsAppMessage } from '@/utils/productUtils';

interface ProductCardProps {
  product: {
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
    inStock: boolean;
  };
  onCompare: (id: string) => void;
  isComparing: boolean;
}

export default function ProductCard({ product, onCompare, isComparing }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const productSlug = generateProductSlug(product.name);

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage(product.name, product.category, product.price);
    sendWhatsAppMessage(message);
  };

  return (
    <div 
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-industrial transition-all duration-300 relative flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Fan Icon on Hover */}
      {isHovered && (
        <div className="absolute top-2 left-2 w-10 h-10 z-10 animate-fan-spin opacity-30 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
            <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
            <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
            <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
          </svg>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-64 bg-surface overflow-hidden">
        <AppImage
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        
        {/* Energy Rating Badge with pulse animation */}
        <div className="absolute top-3 left-3 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold animate-fan-pulse">
          {product.energyRating}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Out of Stock
          </div>
        )}

        {/* Hover Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-industrial-steel/80 flex items-center justify-center gap-3 transition-opacity duration-300">
            <Link
              href={`/products/${productSlug}`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Icon name="EyeIcon" size={18} />
              <span className="text-sm font-medium">Quick View</span>
            </Link>
            <button
              onClick={() => onCompare(product.id)}
              className={`px-4 py-2 rounded transition-colors flex items-center gap-2 ${
                isComparing 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-card text-foreground border border-border hover:bg-muted'
              }`}
            >
              <Icon name={isComparing ? "CheckIcon" : "ScaleIcon"} size={18} />
              <span className="text-sm font-medium">{isComparing ? 'Selected' : 'Compare'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category & Name */}
        <div className="mb-3">
          <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-foreground min-h-[3.5rem] line-clamp-2">{product.name}</h3>
        </div>

        {/* Key Specifications */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Icon name="BoltIcon" size={16} className="text-primary" />
            <span className="text-xs text-muted-foreground">{product.specifications.power}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ArrowPathIcon" size={16} className="text-primary" />
            <span className="text-xs text-muted-foreground">{product.specifications.speed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="SignalIcon" size={16} className="text-primary" />
            <span className="text-xs text-muted-foreground">{product.specifications.airflow}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="SpeakerWaveIcon" size={16} className="text-primary" />
            <span className="text-xs text-muted-foreground">{product.specifications.noise}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 min-h-[2.5rem]">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border gap-3 mt-auto">
          <div>
            <p className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
            <p className="text-xs text-text-secondary">Direct from factory</p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded font-medium text-sm transition-colors flex items-center gap-1 whitespace-nowrap ${
              product.inStock
                ? 'bg-[#25D366] text-white hover:bg-[#20BA5A]'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} />
            {product.inStock ? 'Chat' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}