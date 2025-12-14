'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  content: string;
  type: 'b2b' | 'residential';
}

const TestimonialCarousel = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Facilities Manager",
    company: "TechCorp Industries",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c95d911-1763300968630.png",
    alt: "Professional Asian man in business suit smiling confidently in modern office environment",
    rating: 5,
    content: "We've installed over 200 IndustrialFan Pro exhaust fans across our manufacturing facilities. The build quality is exceptional, and their direct manufacturing approach means we get better pricing and faster support than with importers.",
    type: 'b2b'
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Homeowner",
    company: "Residential Customer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a7fe5ae-1763300768621.png",
    alt: "Smiling Hispanic woman with long brown hair in casual blue sweater at home",
    rating: 5,
    content: "After researching ceiling fans for months, I chose IndustrialFan Pro because they actually manufacture their products. The quality difference is noticeable—it's quieter, more powerful, and feels built to last decades.",
    type: 'residential'
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Electrical Contractor",
    company: "Thompson Electric Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1078b8bc3-1763296698021.png",
    alt: "Caucasian electrician with beard wearing safety vest and hard hat on construction site",
    rating: 5,
    content: "As a contractor, I need reliable products that reflect well on my installations. IndustrialFan Pro's technical support is outstanding, and their fans never fail inspections. The fact that they're made locally means faster delivery too.",
    type: 'b2b'
  },
  {
    id: 4,
    name: "Jennifer Lee",
    role: "Restaurant Owner",
    company: "Golden Wok Restaurant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d8b6297-1763292212286.png",
    alt: "Asian woman chef in white uniform smiling in professional commercial kitchen",
    rating: 5,
    content: "Our commercial kitchen runs 14 hours daily, and these exhaust fans handle the heat and grease without issues. The warranty support has been excellent, and knowing they're manufactured in-house gives me confidence in long-term reliability.",
    type: 'b2b'
  }];


  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Professionals & Homeowners
            </h2>
            <p className="text-lg text-muted-foreground">Loading testimonials...</p>
          </div>
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Professionals & Homeowners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from customers who chose quality and transparency
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-industrial p-8 lg:p-12 border border-border">
            {/* Type Badge */}
            <div className="flex justify-center mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
              currentTestimonial.type === 'b2b' ? 'bg-primary/10 text-primary' : 'bg-warm-brass/10 text-warm-brass'}`
              }>
                {currentTestimonial.type === 'b2b' ? 'Business Customer' : 'Residential Customer'}
              </span>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={24} variant="solid" className="text-warning" />
              )}
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <AppImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.alt}
                  className="w-full h-full object-cover" />

              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">{currentTestimonial.name}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                <p className="text-sm text-primary font-medium">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-subtle"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeftIcon" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-subtle"
            aria-label="Next testimonial">

            <Icon name="ChevronRightIcon" size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ?
              'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;