'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBookCall } from '@/contexts/BookCallContext';

const logos = [
  'Shopify', 'Stripe', 'HubSpot', 'Salesforce', 'Notion', 'Figma',
  'Shopify', 'Stripe', 'HubSpot', 'Salesforce', 'Notion', 'Figma',
];

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
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { openBookCall } = useBookCall();

  useEffect(() => {
    // AmbientCursor handles global mouse effects
  }, []);

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black pt-[68px]"
    >
      {/* ==== CINEMATIC BACKGROUND SYSTEM ==== */}

      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />

      {/* Interactive radial glow - follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(
              circle at ${mousePos.x * 100}% ${mousePos.y * 100}%,
              rgba(16, 185, 129, 0.15) 0%,
              transparent 60%
            )`,
            transition: 'background 600ms ease-out',
          }}
        />
      </motion.div>

      {/* Secondary parallax glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${100 - mousePos.x * 100}% ${100 - mousePos.y * 100}%,
            rgba(20, 184, 166, 0.08) 0%,
            transparent 50%
          )`,
          transition: 'background 800ms ease-out',
        }}
      />

      {/* Ambient light orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-breathe" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-breathe" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/3 rounded-full blur-[150px] animate-bloom" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* ==== MAIN HERO CONTENT ==== */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-24"
        style={{ y: contentY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT COLUMN: Content ===== */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              className="flex items-center gap-3"
              variants={staggerItem(0.1)}
              initial="hidden"
              animate="visible"
            >
              <div className="h-px w-6 bg-gradient-to-r from-emerald-400 to-transparent" />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-emerald-400/80 uppercase">
                Performance Lead Generation
              </span>
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/15">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-semibold text-emerald-400/70 tracking-wide">Free Strategy Call</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="space-y-2"
              variants={staggerItem(0.2)}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Turn Ad Spend
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Into Qualified
                </span>
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Leads.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg text-zinc-400 leading-relaxed max-w-lg font-light"
              variants={staggerItem(0.3)}
              initial="hidden"
              animate="visible"
            >
              We build and optimize high-converting ad campaigns that help businesses generate real leads, lower acquisition costs, and scale consistently.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={staggerItem(0.4)}
              initial="hidden"
              animate="visible"
            >
              {/* Primary CTA */}
              <button
                onClick={openBookCall}
                className="group relative overflow-hidden px-8 py-4 h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.03] active:scale-[0.97]"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                {/* Bottom glow */}
                <span className="absolute bottom-0 inset-x-[15%] h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Strategy Call
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              {/* Secondary CTA */}
              <a
                href="/results"
                className="group px-8 py-4 h-14 flex items-center justify-center gap-2 glass-effect-subtle text-zinc-300 font-semibold rounded-full hover:text-white hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all duration-300 active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>View Results</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="pt-6 border-t border-white/[0.06]"
              variants={staggerItem(0.5)}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-black shadow-lg shadow-emerald-500/10"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">500K+ AED</p>
                    <p className="text-[11px] text-zinc-500">Managed Ad Spend</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">3.2x</p>
                    <p className="text-[11px] text-zinc-500">Average Lead Growth</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Daily</p>
                    <p className="text-[11px] text-zinc-500">Campaign Optimization</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===== RIGHT COLUMN: Space / visual element ===== */}
          <motion.div
            className="lg:col-span-5"
            variants={staggerItem(0.5)}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full animate-float-cinematic">
              {/* Decorative performance metrics visual */}
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/8 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold tracking-wider text-emerald-400/70 uppercase">Live Campaign Performance</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-xs text-zinc-400">Cost Per Lead</span>
                      <span className="text-sm font-bold text-emerald-400">18 AED</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-xs text-zinc-400">Lead Quality Score</span>
                      <span className="text-sm font-bold text-emerald-400">94%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-xs text-zinc-400">Conversion Rate</span>
                      <span className="text-sm font-bold text-emerald-400">3.2%</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-xs text-zinc-400">Active Campaigns</span>
                      <span className="text-sm font-bold text-emerald-400">12</span>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center gap-2 text-[10px] text-zinc-600">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Optimized 3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ==== SOCIAL PROOF MARQUEE ==== */}
      <div className="relative z-10 mt-16 md:mt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center gap-5">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-zinc-600 uppercase">
              Trusted by growth-driven teams
            </p>
            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex gap-20 animate-marquee">
                {logos.map((logo, i) => (
                  <span
                    key={`${logo}-${i}`}
                    className="text-sm font-bold text-zinc-700 whitespace-nowrap tracking-[0.15em] uppercase select-none hover:text-zinc-500 transition-colors duration-300"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== SCROLL INDICATOR ==== */}
      <div className="absolute bottom-8 left-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-scroll-bounce">
          <span className="text-[9px] font-semibold tracking-[0.25em] text-zinc-600 uppercase">
            Scroll
          </span>
          <div className="w-[18px] h-[30px] rounded-full border border-zinc-800 flex justify-center pt-2">
            <div className="w-[3px] h-[6px] rounded-full bg-zinc-600" />
          </div>
        </div>
      </div>

      {/* ==== BOTTOM GRADIENT DIVIDER ==== */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </div>
  );
};

export default Hero;