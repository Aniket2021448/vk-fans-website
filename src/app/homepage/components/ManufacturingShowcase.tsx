
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface ManufacturingStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ManufacturingShowcase = () => {
  const steps: ManufacturingStep[] = [
  {
    id: 1,
    title: "Material Selection",
    description: "Premium-grade metals and components sourced from certified suppliers",
    icon: "CubeIcon"
  },
  {
    id: 2,
    title: "Precision Engineering",
    description: "CNC machining and automated assembly for consistent quality",
    icon: "CogIcon"
  },
  {
    id: 3,
    title: "Quality Testing",
    description: "Rigorous performance and safety testing on every unit",
    icon: "CheckBadgeIcon"
  },
  {
    id: 4,
    title: "Final Inspection",
    description: "Manual quality checks before packaging and shipment",
    icon: "ShieldCheckIcon"
  }];


  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 animate-fan-spin-slow pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-industrial-steel">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50,5 L55,45 L50,50 L45,45 Z" fill="currentColor" />
          <path d="M95,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
          <path d="M50,95 L45,55 L50,50 L55,55 Z" fill="currentColor" />
          <path d="M5,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
          <div style={{
            backgroundImage: 'linear-gradient(45deg, #2C5282 1px, transparent 1px), linear-gradient(-45deg, #2C5282 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            width: '100%',
            height: '100%'
          }} />
        </div>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-fan-pulse" />
            <span className="text-sm font-semibold text-primary">Live Manufacturing</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            See Your Fan Being Made
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Unlike generic importers, we control every step of production in our state-of-the-art facility. From raw materials to final testing, witness the craftsmanship and precision that goes into every IndustrialFan Pro product.
          </p>
        </div>

        {/* Manufacturing Steps */}
        <div className="space-y-6 mb-8">
          {steps.map((step) =>
          <div key={step.id} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-warm-brass/10 rounded-lg flex items-center justify-center">
                <Icon name={step.icon as any} size={24} className="text-warm-brass" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          href="/manufacturing-story"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-subtle">

          Take Virtual Factory Tour
          <Icon name="ArrowRightIcon" size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );

};

export default ManufacturingShowcase;