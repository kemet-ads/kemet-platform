'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const caseStudies = [
  {
    title: 'Real Estate Campaign',
    metrics: [
      { label: 'Qualified Leads', value: '214' },
      { label: 'Average CPL', value: '31 AED' },
    ],
    details: ['3 Weeks Optimization Phase', '2.7x Increase In Lead Quality'],
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Clinic Campaign',
    metrics: [
      { label: 'WhatsApp Leads', value: '163' },
      { label: 'Cost Per Lead', value: '18 AED' },
    ],
    details: ['41% Lower Acquisition Cost', 'Consistent Weekly Results'],
    gradient: 'from-teal-400 to-emerald-400',
  },
  {
    title: 'Service Business Campaign',
    metrics: [
      { label: 'Booked Calls', value: '97' },
      { label: 'Qualified Inquiries', value: '3.4x' },
    ],
    details: ['Lower CPL Achieved', 'Consistent Weekly Optimization'],
    gradient: 'from-emerald-400 to-emerald-500',
  },
];

const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="case-studies">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="CASE STUDIES"
          title="Real Campaigns. Real Performance."
          subtitle="See how optimized campaigns helped businesses generate more leads while lowering acquisition costs."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-white">{study.title}</h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                      <span className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent tabular-nums`}>
                        {metric.value}
                      </span>
                      <p className="text-[9px] text-zinc-500 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {study.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[10px] text-zinc-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 inset-x-[10%] h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <Button href="/contact" variant="secondary" arrow>
            See More Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;