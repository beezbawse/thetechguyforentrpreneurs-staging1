import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-accent hover:bg-brand-accentHover shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "border-transparent text-brand-accent bg-white hover:bg-gray-50 shadow-sm",
    outline: "border-brand-900 text-brand-900 bg-transparent hover:bg-brand-900 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};