'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useBookCall } from '@/contexts/BookCallContext';

const industries = [
  {
    title: 'Beauty & Salons',
    description: 'Book more appointments with targeted Meta and TikTok campaigns that reach women actively looking for beauty services in your area.',
    metrics: '50+ beauty clients served',
    gradient: 'from-emerald-400 to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Healthcare & Clinics',
    description: 'Attract qualified patients actively searching for medical and dental services across Dubai, Abu Dhabi, and the wider UAE.',
    metrics: '35+ clinic campaigns active',
    gradient: 'from-teal-400 to-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    description: 'Generate qualified buyer and investor leads for off-plan, secondary market, and rental properties across the UAE.',
    metrics: '4,200+ real estate leads',
    gradient: 'from-emerald-400 to-emerald-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Fitness & Gyms',
    description: 'Fill memberships with highly targeted campaigns reaching fitness-conscious audiences across Dubai and Abu Dhabi.',
    metrics: '3.2x average lead growth',
    gradient: 'from-teal-400 to-emerald-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: 'Restaurants & F&B',
    description: 'Drive reservations, catering inquiries, and delivery orders through geo-targeted campaigns reaching hungry customers.',
    metrics: '40% lower customer acquisition cost',
    gradient: 'from-emerald-400 to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.09 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.085.768-2.015 1.837-2.174A47.78 47.78 0 0 1 6 13.12" />
      </svg>
    ),
  },
  {
    title: 'Professional Services',
    description: 'Generate qualified B2B leads for consultants, agencies, financial advisors, and legal firms across the GCC.',
    metrics: '97+ booked consultations',
    gradient: 'from-emerald-500 to-teal-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
];

const IndustriesSection: React.FC = () => {
  const { openBookCall } = useBookCall();
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          badge="INDUSTRIES"
          title="We Generate Leads For"
          subtitle="Performance-driven campaigns tailored to your industry — backed by real data and proven results."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{industry.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{industry.description}</p>
                </div>
                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-[11px] font-medium text-emerald-400/70">{industry.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button onClick={openBookCall} variant="primary" arrow>
            Book a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;