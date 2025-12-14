'use client';

import { useState } from 'react';

import Icon from '@/components/ui/AppIcon';

interface FacilityArea {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  size: string;
}

interface FacilityTourProps {
  className?: string;
}

const FacilityTour = ({ className = '' }: FacilityTourProps) => {
  const [selectedArea, setSelectedArea] = useState<number>(1);

  const facilityAreas: FacilityArea[] = [
  {
    id: 1,
    name: 'Production Floor',
    description: 'State-of-the-art manufacturing space with automated assembly lines',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18bc52f33-1764668468774.png",
    alt: 'Large industrial production floor with automated assembly lines and bright overhead lighting',
    features: [
    'Climate-controlled environment',
    'Automated assembly systems',
    'Real-time quality monitoring',
    'Ergonomic workstations'],

    size: '50,000 sq ft'
  },
  {
    id: 2,
    name: 'Quality Control Lab',
    description: 'Advanced testing facility ensuring every product meets our standards',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1226349d1-1764667052679.png",
    alt: 'Modern quality control laboratory with testing equipment and inspection stations',
    features: [
    'Performance testing chambers',
    'Acoustic measurement systems',
    'Vibration analysis equipment',
    'Electrical safety testing'],

    size: '8,000 sq ft'
  },
  {
    id: 3,
    name: 'Material Storage',
    description: 'Organized inventory management with climate control',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_119796f9a-1764678910525.png",
    alt: 'Organized warehouse with metal racks storing industrial materials and components',
    features: [
    'FIFO inventory system',
    'Barcode tracking',
    'Temperature monitoring',
    'Secure access control'],

    size: '15,000 sq ft'
  },
  {
    id: 4,
    name: 'R&D Center',
    description: 'Innovation hub for next-generation fan technology',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19e2a38be-1764930250481.png",
    alt: 'Research and development center with engineers working on prototypes and computer simulations',
    features: [
    'Prototype development',
    'CAD design stations',
    'Wind tunnel testing',
    'Energy efficiency research'],

    size: '12,000 sq ft'
  }];


  const selectedAreaData = facilityAreas.find((area) => area.id === selectedArea) || facilityAreas[0];

  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Animated Fan Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-5 animate-fan-spin pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-warm-brass">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
          <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
          <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
          <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warm-brass/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-warm-brass rounded-full mr-2 animate-fan-pulse" />
            <span className="text-sm font-semibold text-warm-brass">360° Virtual Experience</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-4">
            Virtual Facility Tour
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our 85,000 sq ft manufacturing facility
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityAreas.map((stop) => (
            <div
              key={stop.id}
              onClick={() => setSelectedArea(stop.id)}
              className={`group relative bg-surface rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedArea === stop.id 
                  ? 'ring-2 ring-primary shadow-industrial scale-105' 
                  : 'hover:shadow-lg'
              }`}
            >
              {/* Animated fan on active card */}
              {selectedArea === stop.id && (
                <div className="absolute top-3 right-3 w-8 h-8 animate-fan-spin-fast opacity-50 z-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
                    <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
                    <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
                    <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
                  </svg>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-industrial-steel mb-3">
                  {stop.name}
                </h3>
                
                <p className="text-foreground mb-6">
                  {stop.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-industrial-steel flex items-center">
                    <Icon name="SparklesIcon" size={20} className="text-primary mr-2" />
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {stop.features.map((feature, index) =>
                    <div key={index} className="flex items-start">
                        <Icon
                        name="CheckCircleIcon"
                        size={18}
                        className="text-success mr-2 mt-0.5 shrink-0" />

                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default FacilityTour;