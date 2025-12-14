'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface FinderStep {
  question: string;
  options: { label: string; value: string; icon: string }[];
}

const SmartProductFinder = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const steps: FinderStep[] = [
    {
      question: "What type of space do you need to cool?",
      options: [
        { label: "Large Commercial", value: "commercial", icon: "BuildingOffice2Icon" },
        { label: "Industrial Facility", value: "industrial", icon: "WrenchScrewdriverIcon" },
        { label: "Home/Office", value: "residential", icon: "HomeIcon" },
        { label: "Outdoor Area", value: "outdoor", icon: "SunIcon" }
      ]
    },
    {
      question: "What's your primary requirement?",
      options: [
        { label: "Maximum Airflow", value: "airflow", icon: "BoltIcon" },
        { label: "Energy Efficiency", value: "efficiency", icon: "SparklesIcon" },
        { label: "Quiet Operation", value: "quiet", icon: "SpeakerXMarkIcon" },
        { label: "Durability", value: "durability", icon: "ShieldCheckIcon" }
      ]
    },
    {
      question: "What's your installation preference?",
      options: [
        { label: "Wall Mounted", value: "wall", icon: "Square3Stack3DIcon" },
        { label: "Ceiling/Overhead", value: "ceiling", icon: "ArrowUpIcon" },
        { label: "Portable/Standing", value: "portable", icon: "ArrowsPointingOutIcon" },
        { label: "Exhaust/Ventilation", value: "exhaust", icon: "ArrowRightCircleIcon" }
      ]
    }
  ];

  const handleSelection = (value: string) => {
    setSelections({ ...selections, [currentStep]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
  };

  const isComplete = Object.keys(selections).length === steps.length;

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Fan
            </h2>
            <p className="text-lg text-muted-foreground">Loading product finder...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-primary/5 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div style={{
          backgroundImage: 'linear-gradient(135deg, #2C5282 25%, transparent 25%), linear-gradient(225deg, #2C5282 25%, transparent 25%), linear-gradient(45deg, #2C5282 25%, transparent 25%), linear-gradient(315deg, #2C5282 25%, transparent 25%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 0, 30px -30px, 0px -30px',
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="MagnifyingGlassIcon" size={16} className="text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">Smart Product Finder</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Fan
          </h2>
          <p className="text-lg text-muted-foreground">
            Answer a few questions to get personalized product recommendations
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        {!isComplete ? (
          <div className="bg-card rounded-2xl shadow-industrial p-8 lg:p-12 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              {steps[currentStep].question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection(option.value)}
                  className="flex flex-col items-center justify-center p-6 bg-background border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={option.icon as any} size={32} className="text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-center">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="ChevronLeftIcon" size={20} className="mr-1" />
                  Back
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results Card */
          <div className="bg-card rounded-2xl shadow-industrial p-8 lg:p-12 border border-border text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Perfect! We've Found Your Match
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Based on your preferences, we recommend exploring our specialized product categories that match your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product-catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-subtle"
              >
                View Recommended Products
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-8 py-4 bg-background border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartProductFinder;