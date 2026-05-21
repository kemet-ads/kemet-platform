'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'teal' | 'amber';
  className?: string;
}

const variantStyles = {
  default: 'bg-white/[0.04] border-white/[0.08] text-zinc-400',
  emerald: 'bg-emerald-500/8 border-emerald-500/15 text-emerald-400',
  teal: 'bg-teal-500/8 border-teal-500/15 text-teal-400',
  amber: 'bg-amber-500/8 border-amber-500/15 text-amber-400',
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'emerald', className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.15em] uppercase ${variantStyles[variant]} ${className}`}
    >
      {variant === 'emerald' && (
        <div className="relative w-[5px] h-[5px] flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-emerald-400" />
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" style={{ animationDuration: '2s' }} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Badge;