import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children, dark = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-brand-900 text-white' : 'bg-brand-bg text-brand-900'} ${className}`}
    >
      <div 
        ref={domRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {children}
      </div>
    </section>
  );
};