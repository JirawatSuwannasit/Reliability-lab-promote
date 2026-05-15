import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer';

  const variants = {
    primary: 'bg-[#00AEEF] text-white hover:bg-[#0090C5] focus-visible:outline-[#00AEEF]',
    secondary: 'border border-white/60 text-white hover:bg-white/10 focus-visible:outline-white',
    ghost: 'text-[#00AEEF] hover:text-[#0090C5] focus-visible:outline-[#00AEEF]',
    dark: 'bg-[#0A1628] text-white hover:bg-[#0d1e38] focus-visible:outline-[#0A1628]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-[4px]',
    md: 'px-6 py-3 text-base rounded-[8px]',
    lg: 'px-8 py-4 text-lg rounded-[8px]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
