'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import SectionHeader from '@/components/ui/SectionHeader';
import ProcessTimeline from '@/components/sections/how-it-works/ProcessTimeline';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

const systemComponents = [
  {
    title: 'Traffic Acquisition Engine',
    description: 'AI-optimized campaigns across Meta, Google, and LinkedIn that target decision-makers with surgical precision. We find your ideal clients where they already spend time.',
    metric: '3.2x more qualified visits',
  },
  {
    title: 'AI Lead Scoring & Qualification',
    description: 'Every inbound lead is instantly analyzed, scored, and enriched with firmographic and intent data. Only high-fit prospects reach your sales team.',
    metric: '98% qualification accuracy',
  },
  {
    title: 'Multi-Channel Follow-Up',
    description: 'Personalized email, SMS, and LinkedIn sequences triggered by lead behavior. AI determines the perfect channel and timing for each touchpoint.',
    metric: '5.1x more responses',
  },
  {
    title: 'Automated Meeting Booking',
    description: 'Qualified leads are routed directly to your calendar with pre-qualification forms and smart availability matching. No back-and-forth scheduling.',
    metric: '2.4x more meetings booked',
  },
  {
    title: 'Revenue Analytics & Forecasting',
    description: 'Real-time dashboard showing pipeline velocity, conversion rates, and revenue projections. Know exactly what your next quarter looks like.',
    metric: 'Real-time visibility',
  },
];

const HowItWorksPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'How It Works | AI-Powered Lead Generation System | KEMET',
      description:
        'Discover how KEMET builds AI-powered acquisition systems for businesses in Dubai and the GCC. From ad campaigns to automated lead follow-up and meeting booking.',
      canonical: 'https://kemetads.ae/how-it-works',
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[120px] pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge>How It Works</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                Your AI-Powered{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Acquisition System
                </span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
                We build, deploy, and optimize a complete client acquisition infrastructure that runs on AI. From ad spend to closed deals — fully automated.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Start Your Acquisition System
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            badge="The System"
            title="Five components. One unified growth engine."
            subtitle="Each piece works together to create a seamless acquisition pipeline that runs on autopilot."
          />

          <div className="mt-16 space-y-4">
            {systemComponents.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-zinc-600 tabular-nums">0{idx + 1}</span>
                      <h3 className="font-semibold text-white">{comp.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">{comp.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-sm font-bold text-emerald-400 tabular-nums">{comp.metric}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-[5%] h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Build Your Acquisition System?
            </h2>
            <p className="text-base text-zinc-400 max-w-md">
              Let's map out your custom AI acquisition infrastructure. No fluff, just a clear path to predictable revenue.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book Your Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HowItWorksPage;