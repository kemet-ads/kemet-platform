'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variants = {
  primary:
    'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.03] active:scale-[0.97]',
  secondary:
    'glass-effect-subtle text-zinc-300 hover:text-white hover:bg-white/[0.06] hover:border-emerald-500/20 active:scale-95',
  ghost:
    'text-zinc-400 hover:text-white hover:bg-white/[0.06] active:scale-95',
  outline:
    'border border-white/[0.12] text-zinc-300 hover:text-white hover:border-emerald-500/30 hover:bg-emerald-500/5 active:scale-95',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-[15px]',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  arrow = false,
  type = 'button',
  disabled = false,
}) => {
  const base =
    'group relative overflow-hidden font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2';
  const sizeClass = sizes[size];
  const variantClass = variants[variant];

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      {variant === 'primary' && (
        <span className="absolute bottom-0 inset-x-[15%] h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <svg
            className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${sizeClass} ${variantClass} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={`${base} ${sizeClass} ${variantClass} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none' : ''
      }`}
    >
      {content}
    </motion.button>
  );
};

export default Button;