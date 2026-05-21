'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Bad Leads',
    description: "You're getting inquiries — but most people aren't serious buyers.",
    stat: '73%',
    statLabel: 'of ad leads are low quality',
    color: 'red',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'High CPL',
    description: 'Your campaigns keep spending more while lead quality gets worse.',
    stat: '47%',
    statLabel: 'higher costs for worse leads',
    color: 'amber',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Weak Follow-Up',
    description: 'Slow responses and poor lead handling reduce conversions fast.',
    stat: '80%',
    statLabel: 'of leads go cold within 5 minutes',
    color: 'red',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'No Optimization',
    description: 'Most campaigns are launched once and left without real testing or improvement.',
    stat: '90%',
    statLabel: 'of campaigns are never optimized',
    color: 'amber',
  },
];

const colorMap: Record<string, { iconBg: string; iconBorder: string; iconText: string; statText: string; cornerGlow: string }> = {
  red: {
    iconBg: 'bg-red-500/10',
    iconBorder: 'border-red-500/15',
    iconText: 'text-red-400',
    statText: 'text-red-400/80',
    cornerGlow: 'bg-red-500/5',
  },
  amber: {
    iconBg: 'bg-amber-500/10',
    iconBorder: 'border-amber-500/15',
    iconText: 'text-amber-400',
    statText: 'text-amber-400/80',
    cornerGlow: 'bg-amber-500/5',
  },
};

const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="THE PROBLEM"
          title="Most Businesses Aren't Losing Money On Ads."
          subtitle="They're Losing It On Bad Campaigns."
        />
        <p className="text-center text-sm text-zinc-500 mt-3 max-w-xl mx-auto">
          Poor targeting, weak creatives, and slow optimization kill performance before campaigns ever scale.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, idx) => {
            const colors = colorMap[problem.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500"
              >
                {/* Corner glow */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 ${colors.cornerGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10 flex gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${colors.iconBg} ${colors.iconBorder} flex items-center justify-center ${colors.iconText}`}>
                    {problem.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-white text-sm">{problem.title}</h3>
                      <span className={`text-xl font-bold ${colors.statText} tabular-nums flex-shrink-0`}>{problem.stat}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{problem.description}</p>
                    <p className={`text-[10px] ${problem.color === 'red' ? 'text-red-400/50' : 'text-amber-400/50'} mt-2`}>{problem.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;