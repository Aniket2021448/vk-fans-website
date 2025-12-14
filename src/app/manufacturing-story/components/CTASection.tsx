import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-linear-to-br from-primary via-primary/90 to-industrial-steel ${className}`}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Experience Manufacturing Excellence
        </h2>
        
        <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
          See the difference that in-house manufacturing makes. Schedule a facility tour or request a custom quote to discover how we can meet your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center">
            <Icon name="VideoCameraIcon" size={20} className="mr-2" />
            Schedule Virtual Tour
          </button>
          
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
            <Icon name="DocumentTextIcon" size={20} className="mr-2" />
            Request Custom Quote
          </button>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-white">
          <div className="flex flex-col items-center">
            <Icon name="PhoneIcon" size={24} className="mb-2" />
            <div className="font-semibold mb-1">Call Us</div>
            <div className="text-sm text-white/80">1-800-FAN-PROS</div>
          </div>
          
          <div className="flex flex-col items-center">
            <Icon name="EnvelopeIcon" size={24} className="mb-2" />
            <div className="font-semibold mb-1">Email Us</div>
            <div className="text-sm text-white/80">info@industrialfanpro.com</div>
          </div>
          
          <div className="flex flex-col items-center">
            <Icon name="MapPinIcon" size={24} className="mb-2" />
            <div className="font-semibold mb-1">Visit Us</div>
            <div className="text-sm text-white/80">123 Industrial Blvd, Manufacturing City</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;