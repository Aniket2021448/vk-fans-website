'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TimelineStage {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  details: string[];
  duration: string;
}

interface ManufacturingTimelineProps {
  className?: string;
}

const ManufacturingTimeline = ({ className = '' }: ManufacturingTimelineProps) => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages: TimelineStage[] = [
  {
    id: 1,
    title: 'Design & Engineering',
    description: 'Precision CAD modeling and aerodynamic optimization',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9fbd79b-1764765303856.png",
    alt: 'Engineer working on computer with CAD software showing fan blade design',
    details: [
    'Advanced 3D modeling and simulation',
    'Aerodynamic efficiency testing',
    'Material selection and validation',
    'Prototype development'],

    duration: '2-3 weeks'
  },
  {
    id: 2,
    title: 'Material Sourcing',
    description: 'Premium-grade materials from certified suppliers',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfdb129b-1764847585692.png",
    alt: 'Warehouse with organized metal sheets and industrial materials on shelves',
    details: [
    'ISO-certified material suppliers',
    'Quality inspection on arrival',
    'Sustainable sourcing practices',
    'Traceability documentation'],

    duration: '1-2 weeks'
  },
  {
    id: 3,
    title: 'Precision Manufacturing',
    description: 'CNC machining and automated assembly processes',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e40dd6e-1764703106290.png",
    alt: 'CNC machine cutting metal components with precision in modern factory',
    details: [
    'Computer-controlled machining',
    'Automated quality checkpoints',
    'Expert craftsman oversight',
    'Real-time production monitoring'],

    duration: '3-4 days'
  },
  {
    id: 4,
    title: 'Quality Control',
    description: 'Rigorous testing and certification processes',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d68fc62-1764727905738.png",
    alt: 'Quality control inspector testing fan motor with electronic equipment',
    details: [
    'Multi-point inspection protocol',
    'Performance testing under load',
    'Safety certification compliance',
    'Final visual inspection'],

    duration: '1-2 days'
  },
  {
    id: 5,
    title: 'Packaging & Delivery',
    description: 'Secure packaging and efficient logistics',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff3dd2dc-1764758359256.png",
    alt: 'Workers carefully packaging industrial fans in protective materials',
    details: [
    'Custom protective packaging',
    'Inventory management system',
    'Tracked shipping logistics',
    'Customer delivery confirmation'],

    duration: '1-3 days'
  }];


  const activeStageData = stages.find((stage) => stage.id === activeStage) || stages[0];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-industrial-steel mb-4">
            Our Manufacturing Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From concept to delivery, every step is executed with precision and care
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max lg:min-w-0 px-4 lg:px-0">
            {stages.map((stage, index) =>
            <div key={stage.id} className="flex items-center">
                <button
                onClick={() => setActiveStage(stage.id)}
                className={`flex flex-col items-center transition-all duration-300 ${
                activeStage === stage.id ? 'scale-110' : 'opacity-60 hover:opacity-100'}`
                }>

                  <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                  activeStage === stage.id ?
                  'bg-primary text-primary-foreground shadow-lg' :
                  'bg-muted text-muted-foreground'}`
                  }>

                    {stage.id}
                  </div>
                  <span className="text-xs font-medium mt-2 text-center max-w-25">
                    {stage.title}
                  </span>
                </button>
                
                {index < stages.length - 1 &&
              <div
                className={`h-0.5 w-16 lg:w-24 mx-2 transition-colors ${
                activeStage > stage.id ? 'bg-primary' : 'bg-border'}`
                } />

              }
              </div>
            )}
          </div>
        </div>

        {/* Stage Details */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full mb-4">
              <Icon name="ClockIcon" size={16} className="text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">
                {activeStageData.duration}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-industrial-steel mb-4">
              {activeStageData.title}
            </h3>
            
            <p className="text-lg text-text-secondary mb-6">
              {activeStageData.description}
            </p>
            
            <ul className="space-y-3">
              {activeStageData.details.map((detail, index) =>
              <li key={index} className="flex items-start">
                  <Icon
                  name="CheckCircleIcon"
                  size={20}
                  className="text-success mr-3 mt-0.5 shrink-0" />

                  <span className="text-foreground">{detail}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-100 rounded-lg overflow-hidden shadow-industrial">
              <AppImage
                src={activeStageData.image}
                alt={activeStageData.alt}
                className="w-full h-full object-cover" />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-industrial-steel/90 to-transparent p-6">
                <div className="text-white text-sm font-semibold">
                  Stage {activeStageData.id} of {stages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ManufacturingTimeline;