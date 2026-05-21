'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/sections/home/ProblemSection';
import HowItWorksPreview from '@/components/sections/home/HowItWorksPreview';
import ServicesPreview from '@/components/sections/home/ServicesPreview';
import ResultsPreview from '@/components/sections/home/ResultsPreview';
import CaseStudiesPreview from '@/components/sections/home/CaseStudiesPreview';
import TrustSection from '@/components/sections/home/TrustSection';
import FinalCTA from '@/components/sections/home/FinalCTA';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KEMET',
  url: 'https://kemetads.ae',
  logo: 'https://kemetads.ae/kemet_logo.png',
  description: 'Performance lead generation agency specializing in Meta Ads, Google Ads, TikTok, Snapchat, LinkedIn, and AI-powered campaign optimization.',
  address: { '@type': 'PostalAddress', addressCountry: 'AE' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+971501412159', contactType: 'sales' },
  sameAs: [
    'https://www.facebook.com/kemetads.ae/',
    'https://www.instagram.com/kemetads.ae',
    'https://www.tiktok.com/@kemetads',
    'https://www.snapchat.com/@kemetads',
    'https://www.linkedin.com/company/kemetads/',
  ],
};

export default function HomePage() {
  useEffect(() => {
    setPageSEO({
      title: 'Performance Lead Generation Agency Dubai | KEMET',
      description:
        'KEMET helps businesses in Dubai and the GCC generate high-quality leads through data-driven Meta Ads, Google Ads, TikTok, and AI-optimized campaigns. Reduce CPL, scale profitably.',
      canonical: 'https://kemetads.ae',
      jsonLd: organizationSchema,
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorksPreview />
      <ServicesPreview />
      <ResultsPreview />
      <CaseStudiesPreview />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}