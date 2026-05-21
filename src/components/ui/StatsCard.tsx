'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down';
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  prefix,
  suffix,
  trend,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500 ${className}`}
    >
      {/* Corner glow */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col gap-2">
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-semibold ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={trend === 'up' ? 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' : 'M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6'} />
            </svg>
            <span>12%</span>
          </div>
        )}
        <div className="flex items-baseline gap-1">
          {prefix && <span className="text-sm text-zinc-400">{prefix}</span>}
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tight tabular-nums">
            {value}
          </span>
          {suffix && <span className="text-sm text-zinc-400">{suffix}</span>}
        </div>
        <p className="text-sm text-zinc-400">{label}</p>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 inset-x-[20%] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default StatsCard;