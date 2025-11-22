import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Settings, RefreshCw, LifeBuoy } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Business Automation",
    description: "I identify repetitive tasks eating up your day and build custom workflows to handle them automatically. From email sequences to invoicing, reclaim hours of your week instantly.",
    icon: Settings
  },
  {
    title: "Seamless Integrations",
    description: "Stop manually moving data between your CRM, marketing tools, and accounting software. I ensure your entire tech stack 'talks' to each other perfectly so nothing falls through the cracks.",
    icon: RefreshCw
  },
  {
    title: "Ongoing Tech Support",
    description: "Have a 'Tech Guy' in your corner. No more Googling error codes or waiting on generic support lines. I provide reliable, personalized troubleshooting when you need it most.",
    icon: LifeBuoy
  }
];

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">How I Help You Reclaim Your Time</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          My goal isn't just to fix computers; it's to build a technical foundation that allows your business to scale effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
              <service.icon className="w-7 h-7 text-brand-accent group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};