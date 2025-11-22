import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-brand-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg">The Tech Guy</p>
          <p className="text-sm mt-1">for Entrepreneurs</p>
        </div>
        
        <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Jason K. McEwan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};