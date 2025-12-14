import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  experience: string;
  image: string;
  alt: string;
  quote: string;
}

interface TeamShowcaseProps {
  className?: string;
}

const TeamShowcase = ({ className = '' }: TeamShowcaseProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Robert Chen',
    role: 'Chief Manufacturing Officer',
    department: 'Operations',
    experience: '25 years',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a7fb8d5-1764765303891.png",
    alt: 'Asian man in his fifties wearing safety glasses and blue work shirt in factory setting',
    quote: 'Quality is not an act, it is a habit. Every fan we produce reflects our commitment to excellence.'
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Quality Assurance Director',
    department: 'Quality Control',
    experience: '18 years',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1878bccce-1763293452775.png",
    alt: 'Hispanic woman with dark hair wearing white lab coat holding clipboard in quality control lab',
    quote: 'Our rigorous testing ensures that every product meets the highest standards before reaching customers.'
  },
  {
    id: 3,
    name: 'James Thompson',
    role: 'Lead Production Engineer',
    department: 'Engineering',
    experience: '22 years',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1078b8bc3-1763296698021.png",
    alt: 'Caucasian man with gray beard wearing hard hat and safety vest examining machinery',
    quote: 'Innovation drives us forward. We continuously improve our processes to deliver better products.'
  },
  {
    id: 4,
    name: 'Aisha Patel',
    role: 'Senior Assembly Technician',
    department: 'Production',
    experience: '15 years',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9d1a97d-1763298817203.png",
    alt: 'Indian woman wearing protective eyewear and blue uniform working with precision tools',
    quote: 'Every component I assemble is treated with care. I take pride in the craftsmanship of each fan.'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-card relative overflow-hidden ${className}`}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div style={{
          backgroundImage: 'linear-gradient(45deg, #E67E22 1px, transparent 1px), linear-gradient(-45deg, #E67E22 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-4">
            Meet Our Craftsmen
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The skilled professionals behind every IndustrialFan Pro product
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) =>
          <div
            key={member.id}
            className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-industrial transition-all duration-300 group">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-linear-to-t from-industrial-steel/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-industrial-steel mb-1">
                  {member.name}
                </h3>
                
                <div className="text-sm font-semibold text-primary mb-2">
                  {member.role}
                </div>
                
                <div className="flex items-center text-xs text-text-secondary mb-4 space-x-4">
                  <div className="flex items-center">
                    <Icon name="BriefcaseIcon" size={14} className="mr-1" />
                    {member.department}
                  </div>
                  <div className="flex items-center">
                    <Icon name="ClockIcon" size={14} className="mr-1" />
                    {member.experience}
                  </div>
                </div>
                
                <div className="relative">
                  <Icon
                  name="ChatBubbleLeftIcon"
                  size={20}
                  className="text-primary/20 absolute -top-2 -left-2" />

                  <p className="text-sm text-foreground italic pl-4">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamShowcase;