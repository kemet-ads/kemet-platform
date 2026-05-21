'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';
import {
  FaMeta,
  FaGoogle,
  FaTiktok,
  FaSnapchat,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa6';

const fakeNumbers = ['000000000', '123456789', '111111111', '222222222', '333333333', '444444444', '555555555', '666666666', '777777777', '888888888', '999999999'];

const ContactPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Contact KEMET | Campaign Review & Lead Generation Consultation',
      description:
        'Get a free campaign review from KEMET. Stop paying for low-quality leads. Book a consultation with Dubai\'s performance lead generation experts.',
      canonical: 'https://kemetads.ae/contact',
    });
  }, []);

  const [formState, setFormState] = useState({
    fullName: '',
    whatsappNumber: '',
    businessType: '',
    monthlyBudget: '',
    currentChallenges: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formStartRef = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const submitCountRef = useRef<number>(0);

  // Track when form was first focused
  useEffect(() => {
    formStartRef.current = Date.now();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const isValidNumber = (num: string): boolean => {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length < 7) return false;
    if (fakeNumbers.some(fake => cleaned.includes(fake))) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting
    if (submitCountRef.current >= 3) return;
    submitCountRef.current += 1;

    // Honeypot
    if (honeypotRef.current?.value) return;

    // Minimum 3 seconds
    const elapsed = (Date.now() - formStartRef.current) / 1000;
    if (elapsed < 3) {
      setFormStatus('error');
      return;
    }

    // Phone validation
    if (!isValidNumber(formState.whatsappNumber)) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    try {
      // Send to sales email
      const mailBody = `Campaign Review Request\n\nName: ${formState.fullName}\nWhatsApp: ${formState.whatsappNumber}\nBusiness Type: ${formState.businessType}\nMonthly Budget: ${formState.monthlyBudget}\nChallenge: ${formState.currentChallenges}`;
      
      // Send via mailto as fallback
      window.location.href = `mailto:sales@kemetads.ae?subject=Campaign Review Request&body=${encodeURIComponent(mailBody)}`;

      setFormStatus('sent');

      // WhatsApp redirect with pre-filled message
      setTimeout(() => {
        const message = encodeURIComponent('Hi Kemet Ads, I just submitted the campaign review form.');
        window.open(`https://wa.me/971501412159?text=${message}`, '_blank');
      }, 800);
    } catch {
      setFormStatus('error');
    }
  };

  const steps = [
    {
      number: '01',
      title: 'We Review Your Campaigns',
      description: 'We analyze your current ads, targeting, and lead flow to find weak points and opportunities.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Identify Weak Points',
      description: 'We pinpoint what\'s hurting performance — poor targeting, weak creatives, slow response times.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'We Improve Targeting & Lead Quality',
      description: 'We optimize audiences, creatives, and funnels to attract serious buyers and reduce wasted spend.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'We Scale What Works',
      description: 'Once campaigns become profitable, we scale carefully while maintaining lead quality and cost efficiency.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const platforms = [
    {
      name: 'Meta Ads',
      description: 'Facebook & Instagram lead generation campaigns.',
      icon: <FaMeta className="w-5 h-5" />,
      borderColor: 'border-blue-500/20',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      name: 'Google Ads',
      description: 'Search, Display & YouTube campaigns focused on conversions.',
      icon: <FaGoogle className="w-5 h-5" />,
      borderColor: 'border-amber-500/20',
      bgColor: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
    },
    {
      name: 'TikTok Ads',
      description: 'High-attention creatives for scalable lead generation.',
      icon: <FaTiktok className="w-5 h-5" />,
      borderColor: 'border-emerald-500/20',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
    {
      name: 'Snapchat Ads',
      description: 'Strong reach across GCC audiences with high engagement.',
      icon: <FaSnapchat className="w-5 h-5" />,
      borderColor: 'border-amber-500/20',
      bgColor: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
    },
    {
      name: 'LinkedIn Ads',
      description: 'B2B targeting for serious decision-makers.',
      icon: <FaLinkedinIn className="w-5 h-5" />,
      borderColor: 'border-blue-500/20',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      name: 'WhatsApp (Meta)',
      description: 'Direct messaging for lead follow-up & conversion.',
      icon: <FaWhatsapp className="w-5 h-5" />,
      borderColor: 'border-blue-500/20',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      name: 'Email Campaigns',
      description: 'Targeted email sequences for lead nurturing & conversion.',
      icon: <FaEnvelope className="w-5 h-5" />,
      borderColor: 'border-emerald-500/20',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* ===== HERO + FORM SECTION ===== */}
      <section className="relative pt-[120px] pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_60%)]" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] animate-bloom pointer-events-none" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-500/3 rounded-full blur-[100px] animate-bloom pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* ===== LEFT: Content ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge variant="emerald">Campaign Review</Badge>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                Stop Paying For{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Low-Quality Leads
                </span>
                .
              </h1>
              <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-md">
                We help businesses improve lead quality, reduce wasted ad spend, and scale campaigns profitably across Meta, Google, TikTok, Snapchat, and LinkedIn.
              </p>
              <p className="mt-3 text-xs text-zinc-600 max-w-md">
                Every campaign is monitored and optimized based on lead quality — not vanity metrics.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Campaign Review & Optimization</p>
                    <p className="text-xs text-zinc-500">We analyze what's hurting performance and improve it.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Faster Lead Response</p>
                    <p className="text-xs text-zinc-500">Better follow-up = more booked clients.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Performance Focused</p>
                    <p className="text-xs text-zinc-500">We optimize campaigns based on lead quality, not just CPL.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-500 mb-3">Prefer to talk directly?</p>
                <a
                  href="https://wa.me/971501412159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* ===== RIGHT: Form ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                {/* Ambient corner glow */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />

                {/* Honeypot anti-spam field */}
                <div className="hidden-field">
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Row 1: Full Name + WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.05] transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">WhatsApp Number</label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formState.whatsappNumber}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.05] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Type + Monthly Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">Business Type</label>
                      <input
                        type="text"
                        name="businessType"
                        value={formState.businessType}
                        onChange={handleChange}
                        placeholder="e.g. Real Estate, Clinic, Agency"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.05] transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">Monthly Budget</label>
                      <select
                        name="monthlyBudget"
                        value={formState.monthlyBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.05] transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-zinc-900">Select budget</option>
                        <option value="<3k" className="bg-zinc-900">Under AED 3k</option>
                        <option value="3k-10k" className="bg-zinc-900">AED 3k – 10k</option>
                        <option value="10k-30k" className="bg-zinc-900">AED 10k – 30k</option>
                        <option value="30k+" className="bg-zinc-900">AED 30k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Full Width: Current Challenges */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">Biggest Challenge Right Now</label>
                    <textarea
                      name="currentChallenges"
                      value={formState.currentChallenges}
                      onChange={handleChange}
                      placeholder="High CPL, bad leads, weak creatives, slow response?"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* CTA Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    arrow
                    className="w-full"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? 'Sent!' : 'Review My Campaigns'}
                  </Button>

                  {formStatus === 'error' && (
                    <p className="text-[10px] text-red-400 text-center">
                      Please check your details and try again.
                    </p>
                  )}

                  <p className="text-[10px] text-zinc-600 text-center">
                    We respect your privacy. No spam, no sharing your info.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Badge variant="emerald">Our Process</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
              What Happens Next?
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-400">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-zinc-800 tabular-nums">{step.number}</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-emerald-400/20 to-transparent" />
                  <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS WE SCALE ON ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Badge variant="emerald">Platforms We Scale On</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Platforms We Scale On
            </h2>
            <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
              Optimized for lead quality, not just cheap clicks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6"
          >
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="group relative p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500 text-center"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${platform.bgColor} ${platform.borderColor} flex items-center justify-center ${platform.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    {platform.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{platform.name}</h3>
                  <p className="text-[10px] text-zinc-500 leading-relaxed">{platform.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/20 rounded-full animate-float-cinematic" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-400/15 rounded-full animate-float-cinematic" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-teal-400/20 rounded-full animate-float-cinematic" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-emerald-400/10 rounded-full animate-float-cinematic" style={{ animationDelay: '-6s' }} />
          <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-emerald-400/15 rounded-full animate-float-cinematic" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <Badge variant="emerald">Get In Touch</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Let's Talk About Your Campaigns
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/971501412159"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-500 text-center"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">WhatsApp</h3>
                  <p className="text-xs text-zinc-500 mt-1">Fastest way to reach us</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 group-hover:gap-2 transition-all duration-300">
                  <span>Send a message</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.a>

            {/* Blog Card */}
            <motion.a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-500 text-center"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Blog</h3>
                  <p className="text-xs text-zinc-500 mt-1">Campaign insights, ad strategies & lead generation updates.</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 group-hover:gap-2 transition-all duration-300">
                  <span>Explore Insights</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:sales@kemetads.ae"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-500 text-center"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Email</h3>
                  <p className="text-xs text-zinc-500 mt-1">For partnerships & business inquiries</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 group-hover:gap-2 transition-all duration-300">
                  <span>sales@kemetads.ae</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;