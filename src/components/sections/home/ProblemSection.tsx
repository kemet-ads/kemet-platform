'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const problems = [
  { iconKey: 'card1', key: 'card1' },
  { iconKey: 'card2', key: 'card2' },
  { iconKey: 'card3', key: 'card3' },
  { iconKey: 'card4', key: 'card4' },
];

const ProblemSection: React.FC = () => {
  const { lang, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050e1a] via-[#0a1628] to-[#050e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge={t('problem.badge', lang)}
          title={t('problem.title', lang)}
          subtitle={t('problem.subtitle', lang)}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className={`relative z-10 flex ${isRTL ? 'flex-row-reverse' : ''} gap-4`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />}
                    {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />}
                    {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />}
                    {idx === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} justify-between gap-4`}>
                    <h3 className="font-semibold text-white text-sm">{t(`problem.card${idx + 1}-title`, lang)}</h3>
                    <span className="text-xl font-bold text-red-400/80 tabular-nums flex-shrink-0">{t(`problem.card${idx + 1}-stat`, lang)}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{t(`problem.card${idx + 1}-desc`, lang)}</p>
                  <p className="text-[10px] text-zinc-600 mt-2">{t(`problem.card${idx + 1}-statlabel`, lang)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;