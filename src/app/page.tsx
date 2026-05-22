'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/sections/home/ProblemSection';
import ServicesPreview from '@/components/sections/home/ServicesPreview';
import CaseStudiesPreview from '@/components/sections/home/CaseStudiesPreview';
import IndustriesSection from '@/components/sections/home/IndustriesSection';
import HowItWorksPreview from '@/components/sections/home/HowItWorksPreview';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import FAQSection from '@/components/sections/home/FAQSection';
import FinalCTA from '@/components/sections/home/FinalCTA';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KEMET',
  url: 'https://kemetads.ae',
  logo: 'https://kemetads.ae/kemet_logo.png',
  description: 'UAE-based performance lead generation agency specializing in Meta Ads, Google Ads, TikTok Ads, landing pages, and WhatsApp lead funnels.',
  address: { '@type': 'PostalAddress', addressCountry: 'AE' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+971501412159', contactType: 'sales' },
  sameAs: [
    'https://www.facebook.com/kemetads.ae/',
    'https://www.instagram.com/kemetads.ae',
    'https://www.tiktok.com/@kemetads',
    'https://www.linkedin.com/company/kemetads/',
  ],
};

export default function HomePage() {
  useEffect(() => {
    setPageSEO({
      title: 'Dubai Lead Generation Agency | Meta, Google & TikTok Ads | KEMET',
      description:
        'KEMET generates qualified leads for UAE businesses through high-converting Meta Ads, Google Ads, TikTok campaigns, and WhatsApp lead funnels. Reduce CPL and scale profitably.',
      canonical: 'https://kemetads.ae',
      jsonLd: organizationSchema,
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050e1a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesPreview />
      <CaseStudiesPreview />
      <IndustriesSection />
      <HowItWorksPreview />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}