'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'How much should I spend on ads to see results?',
    answer: 'Most of our clients start with a minimum of 5,000–10,000 AED per month per platform. The exact amount depends on your industry, target audience size, and goals. We\'ll recommend a budget during your free strategy call based on what we\'ve seen work for similar businesses in the UAE.',
  },
  {
    question: 'How long does it take to start generating leads?',
    answer: 'Most campaigns start generating leads within the first week after launch. However, we typically need 2–3 weeks of optimization to stabilize cost per lead and improve lead quality. The first 30 days are focused on testing audiences, creatives, and offers to determine what works best.',
  },
  {
    question: 'What platforms do you advertise on?',
    answer: 'We manage campaigns across Meta (Facebook & Instagram), Google (Search, Display, YouTube), TikTok, Snapchat, and LinkedIn. Most UAE businesses see the strongest results from Meta and TikTok for B2C, and Google + LinkedIn for B2B. We\'ll recommend the right mix for your business.',
  },
  {
    question: 'How is lead quality measured and improved?',
    answer: 'We track lead quality through multiple signals: form completion time, phone number validation, WhatsApp response rate, and booking conversion. Our optimization process focuses on filtering out low-intent leads early and adjusting targeting to attract serious buyers. Most clients see measurable improvement in lead quality within 30 days.',
  },
  {
    question: 'Which industries do you work with?',
    answer: 'We work with a wide range of businesses across the UAE, including beauty & salons, healthcare clinics, real estate agencies, fitness centers, restaurants, and professional services. Our approach is tailored to each industry\'s specific customer journey and conversion patterns.',
  },
  {
    question: 'What makes KEMET different from other agencies?',
    answer: 'We focus on lead quality, not just lead volume. While many agencies optimize for clicks or cheap leads, we optimize for conversion-ready pipeline. Our campaigns are built around WhatsApp-first lead delivery, AI-powered follow-up automation, and daily optimization — not weekly check-ins. We also provide transparent reporting so you always know exactly what\'s working.',
  },
  {
    question: 'Do you offer guaranteed results?',
    answer: 'We don\'t make unrealistic guarantees, but we do commit to continuous optimization and transparent reporting. Our track record shows consistent improvement in both lead volume and lead quality for clients who follow our recommended approach. The free strategy call will give you a clear picture of what we expect to achieve for your specific business.',
  },
  {
    question: 'How do I know if my campaigns are working?',
    answer: 'We provide weekly performance reports and have a shared dashboard where you can track key metrics in real time: cost per lead, lead volume, lead quality score, and conversion rate. You\'ll always know exactly where your ad spend is going and what results it\'s generating.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know about working with KEMET."
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
                className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
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
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
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