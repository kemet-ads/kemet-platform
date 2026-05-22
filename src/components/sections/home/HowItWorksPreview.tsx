'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useBookCall } from '@/contexts/BookCallContext';

const steps = [
  {
    number: '01',
    title: 'Strategy & Setup',
    description: 'We audit your current campaigns, identify what\'s working and what isn\'t, then build a custom strategy around your goals, budget, and target audience.',
    detail: 'Including: audience research, creative strategy, tracking setup, landing page optimization.',
  },
  {
    number: '02',
    title: 'Campaign Launch & Testing',
    description: 'We launch campaigns across the right platforms and aggressively test audiences, creatives, and offers to find the highest-converting combinations.',
    detail: 'Including: A/B testing, audience segmentation, creative iteration, bid strategy optimization.',
  },
  {
    number: '03',
    title: 'Optimization & Scaling',
    description: 'Bad leads get filtered out. Winning campaigns receive more budget. We optimize daily to improve lead quality while maintaining cost efficiency.',
    detail: 'Including: daily monitoring, lead quality scoring, budget reallocation, WhatsApp flow refinement.',
  },
];

const HowItWorksPreview: React.FC = () => {
  const { openBookCall } = useBookCall();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="HOW IT WORKS"
          title="From Strategy to Scalable Results"
          subtitle="A proven three-phase process designed to generate qualified leads and reduce your cost per acquisition."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500">
                {/* Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-zinc-800 tabular-nums">{step.number}</span>
                  {idx < steps.length - 1 && (
                    <svg className="hidden lg:block w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </div>

                {/* Gradient line */}
                <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500 mb-4" />

                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                <p className="mt-3 text-[11px] text-zinc-600 leading-relaxed">{step.detail}</p>
              </div>
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
          <Button onClick={openBookCall} variant="primary" arrow>
            Start Your Growth Plan
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;