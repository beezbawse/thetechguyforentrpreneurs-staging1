import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand-bg pt-32 pb-16 lg:pt-48 lg:pb-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-900 mb-8 leading-tight">
            Leave the <span className="text-brand-accent">tech stuff</span> to a trusted expert.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time on integrations that break and software that confuses you. Focus on what makes your business grow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto text-lg px-8 py-4"
            >
              Book Your Free 30-Minute Consultation
            </Button>
            <a href="#services" className="text-brand-900 font-medium hover:text-brand-accent flex items-center gap-2 px-6 py-3 transition-colors">
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium tracking-wide uppercase">
            18 Years Industry Experience • Specialized in Small Business
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-20 border-y border-gray-200 bg-white py-4 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="mx-8 flex items-center gap-4 text-gray-400 font-semibold text-lg uppercase tracking-widest">
                    <span>Automation</span>
                    <span className="text-brand-accent">•</span>
                    <span>Security</span>
                    <span className="text-brand-accent">•</span>
                    <span>Integrations</span>
                    <span className="text-brand-accent">•</span>
                    <span>Support</span>
                    <span className="text-brand-accent">•</span>
                </div>
            ))}
        </div>
        {/* Gradients to fade edges of marquee */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};