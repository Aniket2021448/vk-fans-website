import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
  description: string;
}

interface ProductionStatsProps {
  className?: string;
}

const ProductionStats = ({ className = '' }: ProductionStatsProps) => {
  const stats: Stat[] = [
    {
      id: 1,
      value: '500K+',
      label: 'Fans Manufactured',
      icon: 'CogIcon',
      description: 'Annual production capacity'
    },
    {
      id: 2,
      value: '99.8%',
      label: 'Quality Pass Rate',
      icon: 'CheckBadgeIcon',
      description: 'First-time quality approval'
    },
    {
      id: 3,
      value: '150+',
      label: 'Skilled Craftsmen',
      icon: 'UserGroupIcon',
      description: 'Expert manufacturing team'
    },
    {
      id: 4,
      value: '28',
      label: 'Years Experience',
      icon: 'TrophyIcon',
      description: 'Industry leadership'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background relative overflow-hidden ${className}`}>
      {/* Animated background fan */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 animate-fan-spin-slow pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-industrial-steel">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50,2 L55,45 L50,50 L45,45 Z" fill="currentColor" />
          <path d="M98,50 L55,55 L50,50 L55,45 Z" fill="currentColor" />
          <path d="M50,98 L45,55 L50,50 L55,55 Z" fill="currentColor" />
          <path d="M2,50 L45,45 L50,50 L45,55 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-4">
            Manufacturing by the Numbers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every metric we track
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:animate-fan-pulse">
                <div className="group-hover:animate-fan-wobble">
                  <Icon 
                    name={stat.icon} 
                    size={40} 
                    className="text-primary" 
                  />
                </div>
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-2">
                {stat.value}
              </div>
              
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              
              <div className="text-xs text-text-secondary">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionStats;