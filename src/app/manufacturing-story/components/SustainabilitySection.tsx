import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SustainabilityMetric {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface SustainabilitySectionProps {
  className?: string;
}

const SustainabilitySection = ({ className = '' }: SustainabilitySectionProps) => {
  const metrics: SustainabilityMetric[] = [
  {
    id: 1,
    value: '40%',
    label: 'Energy Reduction',
    description: 'Lower energy consumption vs industry average',
    icon: 'BoltIcon'
  },
  {
    id: 2,
    value: '85%',
    label: 'Recyclable Materials',
    description: 'Components made from recyclable materials',
    icon: 'ArrowPathIcon'
  },
  {
    id: 3,
    value: '100%',
    label: 'Waste Recycling',
    description: 'Manufacturing waste recycled or repurposed',
    icon: 'TrashIcon'
  },
  {
    id: 4,
    value: 'Zero',
    label: 'Carbon Neutral',
    description: 'Net-zero carbon emissions facility',
    icon: 'CloudIcon'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background relative overflow-hidden ${className}`}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-3 -z-10">
        <div style={{
          backgroundImage: 'linear-gradient(120deg, transparent 24%, rgba(230, 126, 34, 0.08) 25%, rgba(230, 126, 34, 0.08) 26%, transparent 27%, transparent 74%, rgba(230, 126, 34, 0.08) 75%, rgba(230, 126, 34, 0.08) 76%, transparent 77%, transparent), linear-gradient(240deg, transparent 24%, rgba(230, 126, 34, 0.08) 25%, rgba(230, 126, 34, 0.08) 26%, transparent 27%, transparent 74%, rgba(230, 126, 34, 0.08) 75%, rgba(230, 126, 34, 0.08) 76%, transparent 77%, transparent)',
          backgroundSize: '70px 70px',
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
              <Icon name="SparklesIcon" size={16} className="text-success mr-2" />
              <span className="text-sm font-semibold text-success">Sustainable Manufacturing</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-6">
              Building a Greener Future
            </h2>

            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Our commitment to sustainability goes beyond compliance. We've invested in renewable energy, waste reduction programs, and eco-friendly materials to minimize our environmental impact while maintaining the highest quality standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {metrics.map((metric) =>
              <div key={metric.id} className="bg-background p-5 rounded-lg border border-border">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center mr-3">
                      <Icon name={metric.icon as any} size={20} className="text-success" />
                    </div>
                    <div className="text-2xl font-bold text-industrial-steel">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {metric.description}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-125 rounded-lg overflow-hidden shadow-industrial">
              <AppImage
                src="https://images.unsplash.com/photo-1584074648701-3894f6dc542b"
                alt="Solar panels installed on industrial factory roof with blue sky background"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-linear-to-t from-industrial-steel/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center text-success mb-2">
                    <Icon name="CheckBadgeIcon" size={20} className="mr-2" />
                    <span className="font-semibold">Green Manufacturing Certified</span>
                  </div>
                  <p className="text-sm text-foreground">
                    Powered by 100% renewable energy sources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SustainabilitySection;