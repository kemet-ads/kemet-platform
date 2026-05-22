'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBookCall } from '@/contexts/BookCallContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const staggerItem = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 25,
      delay,
    },
  },
});

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBookCall } = useBookCall();
  const { lang, dir } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const isRTL = dir === 'rtl';

  return (
    <div
      ref={containerRef}
      dir={dir}
      className={`relative min-h-screen w-full overflow-hidden bg-[#050e1a] pt-[68px] ${isRTL ? 'text-right' : ''}`}
    >
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050e1a] via-[#0a1628] to-[#0a1628]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-400/[0.02] rounded-full blur-[120px]" />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isRTL ? 'lg:direction-rtl' : ''}`}>

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/15 bg-emerald-500/[0.04] w-fit ${isRTL ? 'flex-row-reverse' : ''}`}
              variants={staggerItem(0.1)}
              initial="hidden"
              animate="visible"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400/80 uppercase">
                {t('hero.badge', lang)}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="space-y-2"
              variants={staggerItem(0.2)}
              initial="hidden"
              animate="visible"
            >
              <span className={`block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white`}>
                {t('hero.heading1', lang)}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {t('hero.heading2', lang)}
                </span>
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                {t('hero.heading3', lang)}
              </span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              className="text-lg text-zinc-400 leading-relaxed max-w-xl"
              variants={staggerItem(0.3)}
              initial="hidden"
              animate="visible"
              dir={dir}
            >
              {t('hero.subtext', lang)}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 pt-2 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
              variants={staggerItem(0.4)}
              initial="hidden"
              animate="visible"
            >
              <button
                onClick={openBookCall}
                className="group relative overflow-hidden px-8 py-4 h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.97]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta-primary', lang)}
                  <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rtl-flip' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <a
                href="/contact"
                className="group px-8 py-4 h-14 flex items-center justify-center gap-2 rounded-full border border-white/[0.12] text-zinc-300 font-semibold hover:text-white hover:border-white/[0.20] hover:bg-white/[0.04] transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>{t('hero.cta-secondary', lang)}</span>
              </a>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              className="pt-6 border-t border-white/[0.06]"
              variants={staggerItem(0.5)}
              initial="hidden"
              animate="visible"
            >
              <div className={`flex flex-wrap gap-8 md:gap-12 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <div>
                  <p className="text-2xl font-bold text-white">{t('hero.stat1-value', lang)}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{t('hero.stat1-label', lang)}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{t('hero.stat2-value', lang)}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{t('hero.stat2-label', lang)}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{t('hero.stat3-value', lang)}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{t('hero.stat3-label', lang)}</p>
                </div>
              </div>
              <div className={`flex flex-wrap gap-3 mt-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <span className="text-[10px] text-zinc-600">{t('hero.industry-beauty', lang)}</span>
                <span className="text-[10px] text-zinc-700">•</span>
                <span className="text-[10px] text-zinc-600">{t('hero.industry-clinics', lang)}</span>
                <span className="text-[10px] text-zinc-700">•</span>
                <span className="text-[10px] text-zinc-600">{t('hero.industry-realestate', lang)}</span>
                <span className="text-[10px] text-zinc-700">•</span>
                <span className="text-[10px] text-zinc-600">{t('hero.industry-gyms', lang)}</span>
                <span className="text-[10px] text-zinc-700">•</span>
                <span className="text-[10px] text-zinc-600">{t('hero.industry-restaurants', lang)}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Results Preview */}
          <motion.div
            className="lg:col-span-5"
            variants={staggerItem(0.5)}
            initial="hidden"
            animate="visible"
          >
            <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">{t('hero.results-label', lang)}</span>
                </div>
                <div className="space-y-4">
                  {/* Clinic */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs font-medium text-white">Healthcare Clinic</span>
                      <span className="text-xs text-emerald-400">-41% CPL</span>
                    </div>
                    <div className={`flex items-center justify-between text-[11px] text-zinc-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>Cost per lead: 18 AED</span>
                      <span>163 WhatsApp leads</span>
                    </div>
                  </div>
                  {/* Real Estate */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs font-medium text-white">Real Estate Agency</span>
                      <span className="text-xs text-emerald-400">2.7x more leads</span>
                    </div>
                    <div className={`flex items-center justify-between text-[11px] text-zinc-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>Cost per lead: 31 AED</span>
                      <span>214 qualified leads</span>
                    </div>
                  </div>
                  {/* Service Business */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs font-medium text-white">Service Business</span>
                      <span className="text-xs text-emerald-400">3.4x inquiries</span>
                    </div>
                    <div className={`flex items-center justify-between text-[11px] text-zinc-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>97 booked calls</span>
                      <span>Lower CPL achieved</span>
                    </div>
                  </div>
                </div>
                <div className={`pt-2 flex items-center gap-2 text-[10px] text-zinc-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>{t('hero.results-updated', lang)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </div>
  );
};

export default Hero;