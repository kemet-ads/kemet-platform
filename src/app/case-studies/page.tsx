'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

const caseStudies = [
  {
    company: 'Nexus Ventures',
    industry: 'B2B SaaS',
    challenge: 'Nexus was spending $45k/month on paid ads with inconsistent results. Their lead quality was declining, and their sales team was spending 60% of their time on unqualified prospects.',
    approach: 'We deployed KEMET\'s full acquisition system: AI-optimized ad campaigns, intelligent lead scoring, automated multi-channel follow-up, and smart meeting routing.',
    results: [
      { label: 'Revenue Growth', value: '2.1x' },
      { label: 'CPL Reduction', value: '55%' },
      { label: 'Meetings Booked/Month', value: '87' },
      { label: 'Pipeline Value', value: '$2.4M' },
    ],
    timeframe: '90 days',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    company: 'ScaleUp Labs',
    industry: 'Professional Services',
    challenge: 'ScaleUp relied on outbound sales for client acquisition, but their team could only make 50 calls per day. They needed a scalable inbound system without hiring more salespeople.',
    approach: 'We built an AI-powered inbound acquisition engine with automated LinkedIn outreach, intelligent lead routing, and a fully automated meeting booking system.',
    results: [
      { label: 'Inbound Leads', value: '+340%' },
      { label: 'Cost Per Meeting', value: '-62%' },
      { label: 'Sales Team Efficiency', value: '3.5x' },
      { label: 'Revenue/Month', value: '$180K' },
    ],
    timeframe: '60 days',
    gradient: 'from-teal-400 to-emerald-400',
  },
  {
    company: 'ArcLight Capital',
    industry: 'Financial Services',
    challenge: 'ArcLight had high-intent traffic but was losing 80% of leads due to slow follow-up. Their competitors were booking meetings while their leads went cold.',
    approach: 'We implemented KEMET\'s AI follow-up automation with instant lead response, personalized email sequences, and automated calendar booking.',
    results: [
      { label: 'Lead Recovery Rate', value: '40%' },
      { label: 'Meeting Bookings', value: '3.2x' },
      { label: 'Response Time', value: '< 5 min' },
      { label: 'Revenue Impact', value: '$890K' },
    ],
    timeframe: '45 days',
    gradient: 'from-emerald-400 to-emerald-500',
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Case Studies | Lead Generation Success Stories | KEMET',
      description:
        'Read KEMET\'s client success stories: B2B SaaS, professional services, and financial services companies that transformed their lead generation with AI-powered acquisition systems.',
      canonical: 'https://kemetads.ae/case-studies',
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Badge>Case Studies</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Proven Results.{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Real Stories.
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
              See how we transformed acquisition systems for businesses just like yours. Real companies, real metrics, real growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 space-y-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-white">{study.company}</h2>
                      <span className="text-[10px] font-medium text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400/60 mt-1">Results achieved in {study.timeframe}</p>
                  </div>
                  <div className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent border border-emerald-500/20`}>
                    {study.timeframe} to results
                  </div>
                </div>

                {/* Challenge & Approach */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 rounded-xl bg-red-500/[0.03] border border-red-500/08">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-red-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span className="text-[10px] font-semibold tracking-wider text-red-400/60 uppercase">Challenge</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/08">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-emerald-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[10px] font-semibold tracking-wider text-emerald-400/60 uppercase">Approach</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">{study.approach}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent tabular-nums`}>
                        {result.value}
                      </span>
                      <p className="text-[10px] text-zinc-500 mt-1">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 inset-x-[5%] h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
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
              Your Success Story Starts Here
            </h2>
            <p className="text-base text-zinc-400 max-w-md">
              Let's write the next chapter. Book a strategy call and discover what KEMET can do for your business.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Start Your Case Study
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;