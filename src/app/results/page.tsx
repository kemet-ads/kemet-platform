'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import StatsCard from '@/components/ui/StatsCard';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

const kpiData = [
  { value: '$12M+', label: 'Revenue Generated for Clients', trend: 'up' as const },
  { value: '3.2x', label: 'Average Meeting Bookings Increase', trend: 'up' as const },
  { value: '47%', label: 'Average CPL Reduction', trend: 'up' as const },
  { value: '98%', label: 'Lead Qualification Accuracy' },
  { value: '5,000+', label: 'Qualified Meetings Booked' },
  { value: '500+', label: 'Businesses Onboarded' },
  { value: '94%', label: 'Client Retention Rate', trend: 'up' as const },
  { value: '2.1x', label: 'Average Pipeline Growth', trend: 'up' as const },
  { value: '60%', label: 'Average Conversion Improvement', trend: 'up' as const },
];

const ResultsPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Results | Lead Generation Metrics & KPIs | KEMET',
      description:
        'See KEMET\'s proven track record: $12M+ revenue generated for clients, 47% average CPL reduction, 94% client retention. Real metrics from real campaigns in Dubai and the GCC.',
      canonical: 'https://kemetads.ae/results',
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[120px] pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Badge>Results</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Real Metrics.{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Real Revenue.
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Every number on this page represents real client outcomes. We don't do vanity metrics — we measure what matters for your bottom line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {kpiData.map((kpi, idx) => (
              <StatsCard key={idx} {...kpi} />
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Growth Visual */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/8 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Badge variant="default">Revenue Impact</Badge>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white tracking-tight">
                How We Drive Revenue Growth
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-3xl font-bold text-emerald-400 tabular-nums">2.1x</span>
                  <h3 className="font-semibold text-white text-sm">Pipeline Growth</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Average pipeline expansion within the first 90 days of deployment.
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-3xl font-bold text-emerald-400 tabular-nums">47%</span>
                  <h3 className="font-semibold text-white text-sm">Cost Per Lead Reduction</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    AI-optimized campaigns deliver higher quality leads at significantly lower costs.
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-3xl font-bold text-emerald-400 tabular-nums">94%</span>
                  <h3 className="font-semibold text-white text-sm">Client Retention</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Our clients stay because the system delivers predictable, measurable results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Want Results Like These?
            </h2>
            <p className="text-base text-zinc-400 max-w-md">
              Let's build your custom AI acquisition system and start generating predictable revenue.
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

export default ResultsPage;