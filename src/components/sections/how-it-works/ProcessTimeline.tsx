'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Audit & Strategy',
    subtitle: 'We analyze your current acquisition system end-to-end.',
    items: [
      'Current funnel audit and gap analysis',
      'Ad performance & creative audit',
      'Lead qualification workflow review',
      'CRM and automation stack assessment',
      'Custom acquisition strategy blueprint',
    ],
    duration: 'Week 1',
  },
  {
    phase: 'Phase 2',
    title: 'Infrastructure Build',
    subtitle: 'We deploy your AI-powered acquisition system.',
    items: [
      'AI lead scoring engine setup',
      'Multi-channel campaign deployment',
      'Automated follow-up sequences',
      'Meeting booking system integration',
      'Analytics dashboard configuration',
    ],
    duration: 'Weeks 2-3',
  },
  {
    phase: 'Phase 3',
    title: 'Optimization & Scale',
    subtitle: 'We optimize and scale for maximum ROI.',
    items: [
      'Real-time campaign optimization',
      'A/B testing at scale',
      'Lead quality refinement',
      'Conversion rate optimization',
      'Revenue forecasting & reporting',
    ],
    duration: 'Ongoing',
  },
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="Our Process"
          title="Three phases to predictable acquisition"
          subtitle="From audit to live system in weeks, not months. We move fast because your growth can't wait."
        />

        <div className="mt-16 space-y-12">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500">
                {/* Phase number badge */}
                <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400 tracking-wider">
                  {phase.phase}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-4">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      <span className="text-xs font-medium text-emerald-400/60 bg-emerald-500/8 px-3 py-1 rounded-full border border-emerald-500/10 whitespace-nowrap">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{phase.subtitle}</p>
                  </div>

                  {/* Right: Items */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-xs text-zinc-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 inset-x-[10%] h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Connector */}
              {idx < phases.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-gradient-to-b from-emerald-400/30 to-transparent" />
                    <svg className="w-4 h-4 text-emerald-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button href="/contact" variant="primary" size="lg" arrow>
            Start Your Growth Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;