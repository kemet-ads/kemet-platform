'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FlowStep {
  label: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
}

const steps: FlowStep[] = [
  {
    label: 'Qualified Leads',
    description: 'High-intent prospects from AI-targeted campaigns',
    metric: '+340%',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    label: 'AI Qualification',
    description: 'Instant scoring & routing to your team',
    metric: '98%',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Meetings Booked',
    description: 'Automated calendar sync & follow-ups',
    metric: '2.4x',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Revenue Closed',
    description: 'Deals won with AI-powered follow sequences',
    metric: '$2.1M+',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const AcquisitionFlow: React.FC = () => {
  return (
    <motion.div
      className="group relative w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/20 to-teal-500/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 dark:from-emerald-500/10 dark:to-teal-500/5" />

      {/* Pulsing outer glow ring */}
      <div className="absolute -inset-[6px] bg-gradient-to-br from-emerald-400/10 via-transparent to-teal-500/5 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Main panel */}
      <div className="relative backdrop-blur-2xl bg-white/[0.03] rounded-2xl border border-white/[0.08] overflow-hidden">
        
        {/* Top gradient line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-shimmer pointer-events-none" 
             style={{ animationDuration: '3s' }} />

        {/* Ambient corner glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />

        {/* Live activity dot */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 rounded-full bg-emerald-400" />
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" style={{ animationDuration: '2s' }} />
          </div>
          <span className="text-[9px] font-semibold text-emerald-400/60 tracking-widest uppercase">Live</span>
        </div>

        <div className="relative z-10 p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-emerald-400/70 uppercase mb-1.5">
              Acquisition Pipeline
            </p>
            <h3 className="text-lg font-bold text-white/90 tracking-tight">
              Your Growth Engine
            </h3>
          </div>

          {/* Flow Steps */}
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={stepVariants}>
                <div className="group/step relative">
                  {/* Step card */}
                  <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-500">
                    {/* Left gradient accent */}
                    <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-emerald-400/60 to-transparent rounded-full opacity-0 group-hover/step:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/15 to-emerald-500/5 flex items-center justify-center text-emerald-400/80 group-hover/step:text-emerald-300 group-hover/step:from-emerald-400/25 group-hover/step:to-emerald-500/10 transition-all duration-500 border border-white/[0.04]">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-white/90 text-sm group-hover/step:text-white transition-colors">
                          {step.label}
                        </p>
                        <span className="text-[11px] font-bold text-emerald-400/80 tabular-nums">
                          {step.metric}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 flex items-center">
                      <svg className="w-4 h-4 text-zinc-600 group-hover/step:text-emerald-400/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <div className="w-px h-4 bg-gradient-to-b from-emerald-400/30 to-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom insight */}
          <div className="mt-6 pt-4 border-t border-white/[0.04]">
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              <span className="text-emerald-400/70">⚡</span> Full pipeline automation — from lead to revenue in days, not months
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AcquisitionFlow;