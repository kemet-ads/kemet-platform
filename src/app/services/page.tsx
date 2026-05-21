'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

interface ServiceCard {
  title: string;
  description: string;
  featureTag: string;
  featureColor: string;
  icon: React.ReactNode;
  highlighted?: boolean;
  badge?: { label: string; gradient: string };
}

const services: ServiceCard[] = [
  {
    title: 'Meta Lead Generation',
    description: 'Generate high-quality leads through targeted Meta advertising across Facebook, Instagram, and WhatsApp.',
    featureTag: 'Best for B2C & B2B',
    featureColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
      </svg>
    ),
    highlighted: true,
    badge: { label: 'Most Popular', gradient: 'from-emerald-400 to-teal-400' },
  },
  {
    title: 'TikTok Campaigns',
    description: 'High-attention creative campaigns that capture GCC audiences and drive scalable lead generation.',
    featureTag: 'Best for scaling',
    featureColor: 'text-cyan-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.5a29 29 0 00.46 5.08 2.78 2.78 0 001.94 2C5.12 19 12 19 12 19s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.04 29 29 0 00-.46-5.08z" />
        <path d="M9.75 15.02l5.5-3.52-5.5-3.52v7.04z" />
      </svg>
    ),
  },
  {
    title: 'Snapchat Campaigns',
    description: 'Strong reach across GCC audiences with high-engagement ad formats optimized for lead capture.',
    featureTag: 'GCC focused',
    featureColor: 'text-amber-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Campaigns',
    description: 'B2B targeting for serious decision-makers with precise audience layers and lead gen forms.',
    featureTag: 'B2B premium',
    featureColor: 'text-blue-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    title: 'Google Search Leads',
    description: 'Capture high-intent customers actively searching for your services with optimized Search & Display campaigns.',
    featureTag: 'Best for ROI',
    featureColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    highlighted: true,
    badge: { label: 'High ROI', gradient: 'from-amber-400 to-orange-400' },
  },
  {
    title: 'High-Converting Landing Pages',
    description: 'Conversion-optimized landing pages designed to turn ad clicks into qualified leads and booked calls.',
    featureTag: 'Conversion focused',
    featureColor: 'text-teal-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18" />
        <path d="M9 3v3" />
        <path d="M9 21v-3" />
        <path d="M15 3v3" />
        <path d="M15 21v-3" />
        <path d="M9 13v4" />
        <path d="M15 11v6" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'Lower your cost per lead and scale winning campaigns through continuous A/B testing and data-driven refinements.',
    featureTag: 'Cost reduction',
    featureColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Lead Tracking',
    description: 'Full-funnel attribution and real-time dashboards that show exactly where every lead comes from and what converts.',
    featureTag: 'Data driven',
    featureColor: 'text-purple-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Lead Flow',
    description: 'Direct messaging automation for instant lead follow-up, qualification, and conversion via WhatsApp.',
    featureTag: 'Instant response',
    featureColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

const platforms = [
  {
    name: 'Meta',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    gradient: 'from-blue-400 to-blue-500',
  },
  {
    name: 'Google',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'TikTok',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    name: 'Snapchat',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.138 1.3C10.209.892 7.803.8 5.944 2.097c-.536.399-.968.912-1.319 1.476-.196.314-.353.649-.468.998-.334.997-.404 2.075-.408 3.117-.004.839.028 1.68.113 2.514.039.387.092.773.166 1.155-.366.207-.742.39-1.058.644-.574.46-.925 1.096-1.023 1.826-.097.718.062 1.414.478 2.003.283.4.667.718 1.103.948.177.092.36.17.546.243.134.053.302.114.38.263.063.12.04.26-.01.382-.094.229-.256.419-.412.601-.194.227-.398.446-.584.679-.263.33-.484.695-.638 1.098-.234.615-.275 1.262-.13 1.889.133.576.454 1.089.914 1.468.586.483 1.327.75 2.092.82.335.03.671.034 1.006.012.428-.028.84-.13 1.25-.253.72-.215 1.374-.597 2.059-.903.367-.164.742-.32 1.139-.392.757-.135 1.503-.064 2.25.062.956.162 1.855.577 2.814.695.559.069 1.123.025 1.665-.127.746-.208 1.351-.678 1.745-1.36.066-.114.115-.236.165-.357.278-.672.264-1.395.130-2.097-.076-.401-.222-.784-.427-1.133a4.484 4.484 0 00-.399-.583c-.153-.191-.323-.368-.477-.557-.117-.144-.247-.308-.275-.502-.024-.166.037-.328.124-.461.264-.405.66-.701 1.094-.897.82-.37 1.66-.823 2.039-1.703a3.02 3.02 0 00.184-.815c.046-.341-.027-.68-.15-.997-.168-.434-.446-.807-.783-1.11-.286-.257-.61-.468-.945-.65-.02.094-.042.187-.063.28a18.22 18.22 0 01-.336 1.222c-.184.598-.518 1.15-1.018 1.53-.577.44-2.148.868-3.256.295-.878-.453-1.136-1.373-1.044-2.32.04-.408.13-.808.195-1.213.084-.52.107-1.043.093-1.566-.015-.588-.03-1.176-.09-1.76-.092-.896-.38-1.747-.897-2.486-.561-.803-1.35-1.413-2.266-1.816-.647-.284-1.349-.433-2.06-.47-.642-.034-1.284-.007-1.92.092z" />
      </svg>
    ),
    gradient: 'from-amber-300 to-yellow-400',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    gradient: 'from-blue-400 to-indigo-500',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ServicesPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Lead Generation Services | Meta Ads, Google, TikTok & More | KEMET',
      description:
        'Explore KEMET\'s full suite of lead generation services: Meta Ads, Google Search, TikTok, Snapchat, LinkedIn campaigns, landing pages, and AI-powered optimization. Scale your acquisition.',
      canonical: 'https://kemetads.ae/services',
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-[120px] pb-24 md:pb-32 overflow-hidden">
        {/* Deep gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05)_0%,transparent_60%)]" />

        {/* Animated spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/4 rounded-full blur-[140px] animate-bloom pointer-events-none" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[100px] animate-bloom pointer-events-none" style={{ animationDelay: '-5s' }} />

        {/* Grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
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
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="emerald">Our Services</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Everything Your Business Needs{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                To Get More Qualified Leads
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              We help businesses attract high-quality leads through data-driven advertising and conversion-focused systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02)_0%,transparent_60%)]" />

        {/* Grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.01] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`group relative rounded-2xl border transition-all duration-500 ${
                  service.highlighted
                    ? 'p-7 md:p-8 bg-gradient-to-br from-emerald-500/[0.04] via-emerald-500/[0.02] to-transparent border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/10'
                    : 'p-6 md:p-7 bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15'
                } ${idx === 0 || idx === 4 ? 'md:col-span-1 lg:row-span-1' : ''}`}
              >
                {/* Ambient glow */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  service.highlighted
                    ? 'bg-emerald-500/15'
                    : 'bg-emerald-500/8'
                }`} />

                {/* Subtle border shimmer on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  service.highlighted
                    ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.06)_0%,transparent_60%)]'
                    : 'bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.03)_0%,transparent_60%)]'
                }`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge (if highlighted) */}
                  {service.badge && (
                    <div className="mb-4">
                      <span className={`inline-block text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-gradient-to-r ${service.badge.gradient} text-black`}>
                        {service.badge.label}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg] ${
                    service.highlighted
                      ? 'bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 shadow-lg shadow-emerald-500/10'
                      : 'bg-white/[0.04] border border-white/[0.08] text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20'
                  }`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold tracking-tight mb-2 ${
                    service.highlighted ? 'text-lg text-white' : 'text-base text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature tag */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-1.5">
                      <svg className={`w-3 h-3 ${service.featureColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-[10px] font-semibold tracking-wider ${service.featureColor}`}>
                        {service.featureTag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TRUSTED PLATFORMS STRIP ===== */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600 mb-6">
              We Scale Campaigns Across
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {platforms.map((platform, idx) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-400`}>
                    {platform.icon}
                  </div>
                  <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-300">
                    {platform.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />

        {/* Large ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-[140px]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-float-cinematic" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400/15 rounded-full animate-float-cinematic" style={{ animationDelay: '-3s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400/15 rounded-full animate-float-cinematic" style={{ animationDelay: '-5s' }} />
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-emerald-400/10 rounded-full animate-float-cinematic" style={{ animationDelay: '-7s' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <Badge variant="emerald">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to Scale Your{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Lead Generation?
              </span>
            </h2>
            <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
              Let's build a custom acquisition system that drives real, measurable results for your business. Book a campaign review today.
            </p>

            <div className="relative mt-4">
              {/* Animated pulsing ring behind button */}
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.15, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-emerald-400/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

              <motion.a
                href="/contact"
                className="relative inline-flex items-center gap-3 px-10 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-[1.05] active:scale-[0.97] group overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(16,185,129,0.4)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Animated border glow */}
                <span className="absolute -inset-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 animate-gradient-shift" />
                  <span className="absolute inset-[1px] rounded-full bg-[#0a1628]" />
                </span>

                {/* Glow behind button */}
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer overlay */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

                {/* Floating particles on button */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300/40 rounded-full blur-[1px] animate-float-cinematic pointer-events-none" />
                <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-teal-300/30 rounded-full blur-[1px] animate-float-cinematic pointer-events-none" style={{ animationDelay: '-3s' }} />

                <span className="relative z-10 flex items-center gap-3">
                  Scale My Business
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;