'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const faqs = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
  { qKey: 'faq.q6', aKey: 'faq.a6' },
  { qKey: 'faq.q7', aKey: 'faq.a7' },
  { qKey: 'faq.q8', aKey: 'faq.a8' },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge={t('faq.badge', lang)}
          title={t('faq.title', lang)}
          subtitle={t('faq.subtitle', lang)}
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-200 hover:bg-white/[0.02] ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="text-sm font-medium text-white pr-4">{t(faq.qKey, lang)}</span>
                <svg
                  className={`w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className={`px-5 md:px-6 pb-5 md:pb-6 ${isRTL ? 'text-right' : ''}`}>
                      <p className="text-sm text-zinc-400 leading-relaxed">{t(faq.aKey, lang)}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
    </section>
  );
};

export default FAQSection;