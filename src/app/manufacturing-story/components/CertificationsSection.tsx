
import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection = ({ className = '' }: CertificationsSectionProps) => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2023',
      description: 'Quality Management System certification ensuring consistent product quality',
      icon: 'ShieldCheckIcon'
    },
    {
      id: 2,
      name: 'UL Listed',
      issuer: 'Underwriters Laboratories',
      year: '2023',
      description: 'Safety certification for electrical products meeting rigorous standards',
      icon: 'BoltIcon'
    },
    {
      id: 3,
      name: 'Energy Star',
      issuer: 'U.S. Environmental Protection Agency',
      year: '2024',
      description: 'Energy efficiency certification for environmentally responsible products',
      icon: 'SparklesIcon'
    },
    {
      id: 4,
      name: 'CE Marking',
      issuer: 'European Conformity',
      year: '2023',
      description: 'Compliance with EU safety, health, and environmental requirements',
      icon: 'GlobeAltIcon'
    },
    {
      id: 5,
      name: 'OSHA Compliant',
      issuer: 'Occupational Safety and Health Administration',
      year: '2024',
      description: 'Workplace safety standards compliance for manufacturing operations',
      icon: 'UserGroupIcon'
    },
    {
      id: 6,
      name: 'RoHS Certified',
      issuer: 'Restriction of Hazardous Substances',
      year: '2023',
      description: 'Environmental certification for hazardous substance restrictions',
      icon: 'BeakerIcon'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background relative overflow-hidden ${className}`}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-4 -z-10">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(44, 62, 80, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our commitment to quality is validated by industry-leading certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-industrial transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={cert.icon as any} size={28} className="text-primary" />
                </div>
                <span className="text-xs font-semibold text-text-secondary bg-muted px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-industrial-steel mb-2">
                {cert.name}
              </h3>

              <div className="text-sm font-medium text-primary mb-3">
                {cert.issuer}
              </div>

              <p className="text-sm text-text-secondary">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-industrial-steel mb-2">
                Download Our Certification Documents
              </h3>
              <p className="text-foreground">
                Access complete certification documentation and compliance reports
              </p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors shadow-lg flex items-center whitespace-nowrap">
              <Icon name="ArrowDownTrayIcon" size={20} className="mr-2" />
              Download All Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;