'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  href: string;
}

const ProductCategories = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories: ProductCategory[] = [
  {
    id: 1,
    name: "Pedestal Fans",
    description: "Heavy-duty standing fans with adjustable height and oscillation for maximum air circulation in large spaces.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9ef7180-1764780928885.png",
    alt: "Industrial pedestal fan with chrome finish and adjustable height stand in modern office setting",
    features: ["Adjustable Height", "360° Oscillation", "Industrial Grade"],
    href: "/product-catalog"
  },
  {
    id: 2,
    name: "Wall Fans",
    description: "Space-saving wall-mounted solutions perfect for commercial kitchens, workshops, and industrial facilities.",
    image: "https://images.unsplash.com/photo-1575948085346-24f981dad936",
    alt: "Heavy-duty wall-mounted fan with metal blades installed in industrial warehouse environment",
    features: ["Space Efficient", "High Velocity", "Easy Installation"],
    href: "/product-catalog"
  },
  {
    id: 3,
    name: "Table Fans",
    description: "Compact yet powerful desktop fans engineered for personal cooling and small workspace ventilation.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b38e172e-1764876593539.png",
    alt: "Sleek table fan with modern design and chrome accents on wooden desk in contemporary office",
    features: ["Portable Design", "Quiet Operation", "Energy Efficient"],
    href: "/product-catalog"
  },
  {
    id: 4,
    name: "Exhaust Fans",
    description: "Industrial-strength ventilation systems designed for optimal air quality and temperature control.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1db5efad4-1764634987272.png",
    alt: "Large industrial exhaust fan system with protective grille mounted on factory wall",
    features: ["High CFM Rating", "Weatherproof", "Commercial Grade"],
    href: "/product-catalog"
  }];


  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Floating Fan Animation Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 animate-fan-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
            <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
            <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
            <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-32 h-32 animate-fan-spin-reverse">
          <svg viewBox="0 0 100 100" className="w-full h-full text-warm-brass">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50,10 L53,48 L50,50 L47,48 Z" fill="currentColor" />
            <path d="M90,50 L52,53 L50,50 L52,47 Z" fill="currentColor" />
            <path d="M50,90 L47,52 L50,50 L53,52 Z" fill="currentColor" />
            <path d="M10,50 L48,47 L50,50 L48,53 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precision-engineered fans for every application. From residential comfort to industrial ventilation, we manufacture solutions that deliver performance and reliability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 shadow-subtle hover:shadow-industrial relative"
            >
              {/* Animated fan icon on hover */}
              {hoveredCard === category.id && (
                <div className="absolute top-4 right-4 w-8 h-8 z-10 animate-fan-spin-fast opacity-50">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
                    <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
                    <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
                    <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
                  </svg>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                src={category.image}
                alt={category.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-linear-to-t from-industrial-steel/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.features.map((feature, index) =>
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">

                      {feature}
                    </span>
                )}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>View Products</span>
                  <Icon name="ArrowRightIcon" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>);

};

export default ProductCategories;