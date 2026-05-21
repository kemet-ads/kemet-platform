'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${alignClass} gap-4 ${className}`}
    >
      {badge && (
        <Badge variant={light ? 'emerald' : 'emerald'}>{badge}</Badge>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;