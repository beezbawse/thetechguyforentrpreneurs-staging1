import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { BusinessSize } from '../types';
import { Mail, Linkedin, Calendar, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    size: BusinessSize.SMALL,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic
    alert("Thank you for your interest! In a real app, this would connect to a backend.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Context & Info */}
        <div>
          <h2 className="text-4xl font-bold text-brand-900 mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            You didn't start your business to manage IT headaches. Let's discuss your current setup and identify the low-hanging fruit for automation and improvement.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h3 className="font-semibold text-brand-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-accent" />
                Book Directly
            </h3>
            <p className="text-gray-500 mb-4 text-sm">Skip the email tag. Choose a time that works for you right now.</p>
            
            {/* Placeholder for Calendly/Booking Widget */}
            <div className="w-full h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
                <span className="font-medium">Scheduling Widget Integration</span>
                <span className="text-xs mt-2">(Calendly / Cal.com iframe)</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand-900">
                <Mail className="w-5 h-5 text-brand-accent" />
                <a href="mailto:hello@jasonkmcewan.com" className="hover:underline">hello@jasonkmcewan.com</a>
            </div>
            <div className="flex items-center gap-3 text-brand-900">
                <Linkedin className="w-5 h-5 text-brand-accent" />
                <a href="#" className="hover:underline">Connect on LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-brand-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                    <div className="relative">
                        <select 
                            id="size" 
                            name="size" 
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all appearance-none bg-white"
                            value={formData.size}
                            onChange={handleChange}
                        >
                            <option value={BusinessSize.SMALL}>1-10 Employees</option>
                            <option value={BusinessSize.MEDIUM}>11-25 Employees</option>
                            <option value={BusinessSize.LARGE}>26-50 Employees</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                           <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can I help?</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                        placeholder="Briefly describe your current tech challenges..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <Button type="submit" fullWidth className="mt-2 text-lg py-4 group">
                    Book Free Consultation <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </form>
        </div>
      </div>
    </SectionWrapper>
  );
};