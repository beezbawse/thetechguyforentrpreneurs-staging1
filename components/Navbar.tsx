import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-900 p-1.5 rounded-md">
                <Terminal className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-brand-900' : 'text-brand-900'}`}>The Tech Guy</span>
                <span className="text-xs text-brand-accent font-medium tracking-wide">FOR ENTREPRENEURS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-800 hover:text-brand-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-brand-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-brand-800 transition-all shadow-sm">
              Book Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900 hover:text-brand-accent p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-brand-800 hover:text-brand-accent hover:bg-brand-bg rounded-md border-b border-gray-100"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
             <a 
                href="#contact"
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center bg-brand-900 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-brand-800"
             >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};