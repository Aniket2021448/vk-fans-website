import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const TrustSignals = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: "ShieldCheckIcon"
    },
    {
      id: 2,
      name: "UL Certified",
      description: "Safety Standards Compliance",
      icon: "CheckBadgeIcon"
    },
    {
      id: 3,
      name: "Energy Star",
      description: "Energy Efficiency Certified",
      icon: "BoltIcon"
    },
    {
      id: 4,
      name: "CE Marked",
      description: "European Safety Standards",
      icon: "GlobeAltIcon"
    }
  ];

  const stats = [
    { label: "Production Capacity", value: "500K+", suffix: "units/year" },
    { label: "Quality Pass Rate", value: "99.8", suffix: "%" },
    { label: "Customer Satisfaction", value: "4.9", suffix: "/5.0" },
    { label: "Warranty Claims", value: "<0.5", suffix: "%" }
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((signal, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Animated Icon Container */}
              <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:animate-fan-pulse transition-all">
                <div className="group-hover:animate-fan-spin-slow transition-all">
                  <Icon 
                    name={signal.icon as any} 
                    size={32} 
                    className="text-primary" 
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {signal.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;