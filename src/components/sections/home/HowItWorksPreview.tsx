'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useBookCall } from '@/contexts/BookCallContext';

const flowSteps = [
  {
    number: '01',
    title: 'Campaign Setup',
    description: 'We build your campaign structure, targeting, creatives, and tracking properly from day one.',
    color: 'from-emerald-400 to-emerald-500',
  },
  {
    number: '02',
    title: 'Testing Phase',
    description: 'We test audiences, creatives, and offers aggressively to identify what actually converts.',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    number: '03',
    title: 'Optimization',
    description: 'Bad leads get filtered out while winning campaigns receive more budget and refinement.',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    number: '04',
    title: 'Scaling',
    description: 'Once campaigns become profitable, we scale carefully while maintaining lead quality.',
    color: 'from-emerald-400 to-emerald-500',
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
          badge="HOW WE WORK"
          title="Simple Process. Better Leads. Better Results."
          subtitle="We continuously test, optimize, and improve your campaigns until we find what scales profitably."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {flowSteps.map((step, idx) => (
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
                <div className="text-4xl font-bold bg-gradient-to-br bg-clip-text text-transparent from-zinc-800 to-zinc-700 group-hover:from-emerald-400/30 group-hover:to-emerald-500/20 transition-all duration-500">
                  {step.number}
                </div>

                {/* Connector line */}
                {idx < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%_-_1rem)] w-[calc(2rem)]">
                    <div className="h-px bg-gradient-to-r from-emerald-400/30 to-transparent" />
                  </div>
                )}

                {/* Step label */}
                <div className="mt-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-zinc-600 uppercase">
                    Step {step.number}
                  </span>
                </div>

                {/* Gradient line */}
                <div className={`mt-2 w-12 h-[2px] rounded-full bg-gradient-to-r ${step.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                <h3 className="mt-4 font-semibold text-white text-sm">{step.title}</h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{step.description}</p>
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
            Book a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;