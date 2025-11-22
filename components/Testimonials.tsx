import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    content: "Before Jason, I was spending my weekends trying to fix our email server and website. Now, everything just works. He automated our client onboarding process, which saved me easily 10 hours a week.",
    author: "Sarah Jenkins",
    role: "Owner, Artisan Bakery Co.",
    location: "Portland, OR"
  },
  {
    content: "Jason is not just a tech guy; he's a business partner. He understood that we didn't need the most expensive software, just the right software. His integration work allowed us to scale from 5 to 15 employees without breaking our systems.",
    author: "Michael Ross",
    role: "Founder, Ross Architecture",
    location: "Austin, TX"
  },
  {
    content: "The peace of mind is worth every penny. Knowing I can text Jason when something goes wrong and it will be handled immediately lets me sleep at night. He explains things clearly without making me feel stupid.",
    author: "Elena Rodriguez",
    role: "Director, Civic Non-Profit",
    location: "Chicago, IL"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" dark className="bg-brand-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Growing Businesses</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here is what happens when you stop doing it yourself and start delegating to an expert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-brand-800 p-8 rounded-xl border border-brand-700/50 relative">
            <Quote className="w-10 h-10 text-brand-accent/20 absolute top-6 right-6" />
            <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">
              "{t.content}"
            </p>
            <div className="border-t border-brand-700 pt-6">
                <p className="font-bold text-white text-lg">{t.author}</p>
                <p className="text-brand-accent text-sm">{t.role}</p>
                <p className="text-gray-500 text-xs mt-1">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};