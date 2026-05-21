'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    quote: "KEMET transformed our acquisition pipeline. We went from inconsistent leads to a predictable flow of qualified meetings every single week. Our revenue doubled in 90 days.",
    author: 'Marcus Chen',
    role: 'CEO, Nexus Ventures',
    metric: '2.1x revenue in 90 days',
  },
  {
    quote: "We were burning $40k/month on ads with no clear ROI. KEMET rebuilt our entire system. Now we know exactly what works and our CPL dropped by 55% in two months.",
    author: 'Sarah Mitchell',
    role: 'VP Growth, ScaleUp Labs',
    metric: '55% lower CPL',
  },
  {
    quote: "The AI follow-up system alone was a game changer. We went from losing 80% of leads to recovering 40% of them automatically. It's like having a 24/7 sales team.",
    author: 'David Park',
    role: 'Founder, ArcLight Capital',
    metric: '40% lead recovery rate',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by business leaders"
          subtitle="See what our clients say about working with KEMET."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Quote mark */}
                <svg className="w-8 h-8 text-emerald-400/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-auto pt-4 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{t.author}</p>
                      <p className="text-[10px] text-zinc-500">{t.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-emerald-400 tabular-nums">{t.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;