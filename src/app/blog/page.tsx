'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverGradient: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'reduce-facebook-ad-costs-2026',
    title: 'How to Reduce Facebook Ad Costs in 2026 Without Sacrificing Lead Quality',
    excerpt: 'Facebook advertising costs are rising. Here\'s a strategic framework to lower your CPL while maintaining — or even improving — lead quality across Meta\'s platforms.',
    author: 'KEMET Team',
    date: 'May 15, 2026',
    readTime: '8 min read',
    category: 'Meta Ads',
    tags: ['Facebook Ads', 'CPL Reduction', 'Lead Generation', 'Meta'],
    coverGradient: 'from-blue-500/20 via-blue-600/10 to-emerald-500/10',
  },
  {
    slug: 'lead-response-time-optimization',
    title: 'Why Speed to Lead Matters More Than Your Ad Creative',
    excerpt: 'Responding to leads within 5 minutes can increase conversion rates by up to 900%. Learn how to build an automated lead response system that never sleeps.',
    author: 'KEMET Team',
    date: 'May 8, 2026',
    readTime: '6 min read',
    category: 'Lead Generation',
    tags: ['Lead Response', 'Automation', 'Conversion', 'Sales'],
    coverGradient: 'from-emerald-500/20 via-teal-500/10 to-blue-500/10',
  },
  {
    slug: 'tiktok-ads-gcc-2026',
    title: 'TikTok Ads in the GCC: The Complete Playbook for 2026',
    excerpt: 'TikTok\'s GCC user base is exploding. Discover the creative formats, targeting strategies, and bidding tactics that work best for UAE and Saudi audiences.',
    author: 'KEMET Team',
    date: 'April 28, 2026',
    readTime: '10 min read',
    category: 'TikTok Ads',
    tags: ['TikTok', 'GCC Marketing', 'Creative Strategy', 'Social Media'],
    coverGradient: 'from-emerald-500/20 via-cyan-500/10 to-zinc-500/10',
  },
  {
    slug: 'google-ads-lead-quality',
    title: 'Stop Chasing Cheap Clicks: A Guide to Google Ads Lead Quality Optimization',
    excerpt: 'Low-quality leads waste your sales team\'s time. Learn how to optimize Google Ads for lead quality using smart bidding, audience targeting, and conversion tracking.',
    author: 'KEMET Team',
    date: 'April 15, 2026',
    readTime: '7 min read',
    category: 'Google Ads',
    tags: ['Google Ads', 'Lead Quality', 'PPC', 'Conversion Optimization'],
    coverGradient: 'from-amber-500/20 via-orange-500/10 to-emerald-500/10',
  },
  {
    slug: 'ai-powered-ad-campaigns',
    title: 'AI-Powered Ad Campaigns: How Machine Learning is Changing Lead Generation',
    excerpt: 'From automated bid optimization to predictive audience targeting, AI is reshaping how businesses generate leads. Here\'s what actually works in 2026.',
    author: 'KEMET Team',
    date: 'April 2, 2026',
    readTime: '9 min read',
    category: 'AI & Automation',
    tags: ['AI', 'Machine Learning', 'Automation', 'Ad Tech'],
    coverGradient: 'from-purple-500/20 via-blue-500/10 to-emerald-500/10',
  },
  {
    slug: 'linkedin-ads-b2b-lead-gen',
    title: 'LinkedIn Ads for B2B Lead Generation: Strategies That Convert',
    excerpt: 'LinkedIn is the premier platform for B2B leads. Learn how to structure campaigns, write compelling ad copy, and nurture decision-makers through the funnel.',
    author: 'KEMET Team',
    date: 'March 20, 2026',
    readTime: '7 min read',
    category: 'LinkedIn Ads',
    tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation', 'Professional Services'],
    coverGradient: 'from-blue-500/20 via-indigo-500/10 to-emerald-500/10',
  },
];

const BlogPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Blog | Lead Generation & Ad Campaign Insights | KEMET',
      description:
        'Expert articles on Meta Ads, Google Ads, TikTok, LinkedIn, AI-powered campaign optimization, and lead generation strategies for businesses in Dubai and the GCC.',
      canonical: 'https://kemetads.ae/blog',
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[120px] pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04)_0%,transparent_60%)]" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] animate-bloom pointer-events-none" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-500/3 rounded-full blur-[100px] animate-bloom pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Badge variant="emerald">Blog</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Campaign Insights,{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Growth Strategies
              </span>
              .
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Expert advice on lead generation, ad optimization, and scaling your acquisition systems. Written by the team that builds them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.02)_0%,transparent_70%)]" />

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block relative h-full p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Cover gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${post.coverGradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Category badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/15">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-snug mb-3">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-zinc-600 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[8px] font-bold text-white">
                          K
                        </div>
                        <div>
                          <p className="text-[10px] font-medium text-zinc-300">{post.author}</p>
                          <p className="text-[9px] text-zinc-600">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-[9px] text-zinc-600">{post.readTime}</span>
                    </div>

                    {/* Read more arrow */}
                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-400">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Get Insights Delivered to Your Inbox
            </h2>
            <p className="text-base text-zinc-400 max-w-md">
              Weekly strategies, tactics, and case studies to help you generate better leads and scale your campaigns.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Subscribe for Updates
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;