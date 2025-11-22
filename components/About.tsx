import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Jason K. McEwan - The Tech Guy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-brand-accent/30 rounded-2xl -z-0"></div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Meet Your Tech Guy</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
            18 Years in Tech. <br/>
            <span className="text-gray-500">Dedicated to Your Peace of Mind.</span>
          </h3>
          
          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p>
              I'm Jason K. McEwan, "The Tech Guy" for entrepreneurs. For nearly two decades, I've navigated the complex world of technology so my clients don't have to. I understand that as a business owner, your time is your most valuable asset.
            </p>
            <p>
              Every minute you spend fighting with a printer, troubleshooting a CRM, or trying to link software APIs is a minute stolen from your business strategy and growth.
            </p>
            <p>
              My approach is simple: I don't just "fix things." I partner with you to understand your workflow, eliminate friction, and implement systems that work reliably in the background.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {["Expert Problem Solver", "Jargon-Free Communication", "Proactive System Monitoring"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium text-brand-900">{item}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};