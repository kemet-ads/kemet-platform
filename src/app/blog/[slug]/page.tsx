'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';
import { setPageSEO } from '@/lib/seo';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverGradient: string;
  relatedSlugs: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'reduce-facebook-ad-costs-2026': {
    slug: 'reduce-facebook-ad-costs-2026',
    title: 'How to Reduce Facebook Ad Costs in 2026 Without Sacrificing Lead Quality',
    excerpt: 'Facebook advertising costs are rising. Here\'s a strategic framework to lower your CPL while maintaining — or even improving — lead quality across Meta\'s platforms.',
    content: `
      <p>Facebook advertising costs have been climbing steadily year over year. In 2026, the average CPM on Meta's platforms has increased by nearly 40% compared to 2023. For businesses running lead generation campaigns, this means every dollar spent needs to work harder.</p>

      <p>But here's the good news: higher costs don't have to mean lower-quality leads. In fact, with the right optimization strategy, you can reduce your cost per lead while simultaneously improving lead quality.</p>

      <h2>1. Refine Your Audience Targeting</h2>

      <p>The biggest driver of wasted ad spend is broad, untargeted audiences. When you cast too wide a net, you attract curiosity clicks — people who engage with your ad but never convert into qualified leads.</p>

      <p>Instead, layer your targeting with intent-based signals:</p>

      <ul>
        <li>Retarget website visitors who viewed pricing or service pages</li>
        <li>Use lookalike audiences seeded from your highest-value customers</li>
        <li>Layer B2B signals like job titles and industries for professional services</li>
        <li>Exclude audiences that have clicked but not converted more than 3 times</li>
      </ul>

      <h2>2. Optimize Your Creative for Conversion</h2>

      <p>Creative fatigue is one of the most expensive problems in Facebook advertising. When audiences see the same ad multiple times, engagement drops and costs rise.</p>

      <p>Implement a creative rotation strategy:</p>

      <ul>
        <li>Refresh ad creative every 7-14 days</li>
        <li>Test 3-5 different hooks per audience segment</li>
        <li>Use video content — it consistently outperforms static images for lead gen</li>
        <li>Include a clear, single call-to-action per ad</li>
      </ul>

      <h2>3. Leverage Meta's Lead Generation Tools</h2>

      <p>Meta's built-in lead generation tools can significantly reduce friction and cost. Instant Forms, for example, allow users to submit their information without leaving the platform, which increases conversion rates by up to 35%.</p>

      <p>Pair Instant Forms with automated CRM integration to respond to leads immediately — speed to lead is one of the highest-leverage optimization levers available.</p>

      <h2>4. Implement Smart Bid Strategies</h2>

      <p>Rather than using cost-cap or bid-cap strategies that limit Meta's optimization ability, consider using minimum ROAS or value-based bidding. These strategies allow Meta's algorithm to find the highest-value conversions within your target parameters.</p>

      <p>For lead generation campaigns, optimize for "Leads" rather than "Link Clicks" or "Landing Page Views." This tells Meta to find people most likely to complete your form.</p>

      <h2>5. Clean Your Lead Data Continuously</h2>

      <p>Meta's algorithm learns from conversion data. If you're feeding it low-quality leads, it will optimize toward more low-quality leads. Implement lead scoring and only feed high-quality conversions back to Meta's pixel.</p>

      <p>Set up server-side conversion tracking with lead quality signals — form completion time, field accuracy, and phone number validation — to give Meta better feedback on what constitutes a valuable lead.</p>

      <h2>Conclusion</h2>

      <p>Reducing Facebook ad costs in 2026 requires a strategic, data-driven approach. Focus on audience precision, creative excellence, and lead quality optimization. The businesses that treat every dollar as a strategic investment — not just an expense — will be the ones that thrive.</p>

      <p>Need help optimizing your Meta campaigns? <a href="/contact">Book a campaign review with the KEMET team.</a></p>
    `,
    author: 'KEMET Team',
    date: 'May 15, 2026',
    readTime: '8 min read',
    category: 'Meta Ads',
    tags: ['Facebook Ads', 'CPL Reduction', 'Lead Generation', 'Meta'],
    coverGradient: 'from-blue-500/20 via-blue-600/10 to-emerald-500/10',
    relatedSlugs: ['lead-response-time-optimization', 'tiktok-ads-gcc-2026'],
  },
  'lead-response-time-optimization': {
    slug: 'lead-response-time-optimization',
    title: 'Why Speed to Lead Matters More Than Your Ad Creative',
    excerpt: 'Responding to leads within 5 minutes can increase conversion rates by up to 900%. Learn how to build an automated lead response system that never sleeps.',
    content: `
      <p>You've spent thousands on ads. Your creative is polished, your targeting is precise, and your landing page converts at 15%. But if you're not responding to leads within the first 5 minutes, you're leaving 80% of your potential revenue on the table.</p>

      <p>Speed to lead is the single most underrated lever in lead generation. Here's why it matters more than almost anything else in your acquisition system.</p>

      <h2>The 5-Minute Window</h2>

      <p>Research consistently shows that contacting a lead within 5 minutes of their inquiry increases conversion rates by 9x compared to waiting even 30 minutes. After one hour, the probability of conversion drops by over 80%.</p>

      <p>Why? Because lead intent decays rapidly. When someone fills out a form, they're in a problem-solving mindset. They want answers now. Every minute you wait, they're considering your competitors.</p>

      <h2>Building an Automated Response System</h2>

      <p>Manual response times are inherently limited. Even the best sales teams can't respond within 5 minutes to every lead, especially after hours or on weekends. The solution is automation.</p>

      <p>Here's what a high-performing lead response system looks like:</p>

      <ul>
        <li>Instant SMS or WhatsApp message within 30 seconds of form submission</li>
        <li>Automated email sequence starting within 2 minutes</li>
        <li>CRM assignment for sales follow-up within 5 minutes</li>
        <li>Calendar link for immediate booking</li>
      </ul>

      <h2>Personalization at Scale</h2>

      <p>Many businesses worry that automated responses feel impersonal. But with the right tools, you can personalize at scale. Use the data from your lead form — name, business type, challenge — to craft responses that feel tailored and human.</p>

      <p>Example: "Hi [Name], noticed you're dealing with [Challenge]. We've helped [Industry] businesses like yours reduce CPL by 40% — would a 15-minute call this week work?"</p>

      <p>This approach combines speed with relevance, dramatically increasing your chance of booking the meeting.</p>

      <h2>The Technology Stack</h2>

      <p>To achieve sub-5-minute response times, you need a connected technology stack:</p>

      <ul>
        <li>Lead capture tool (forms, chat widgets, landing pages)</li>
        <li>CRM with automated workflows</li>
        <li>SMS/WhatsApp API for instant messaging</li>
        <li>Calendar integration for frictionless booking</li>
      </ul>

      <p>When these systems are integrated, a lead can go from form submission to booked meeting in under 2 minutes — completely automated.</p>

      <h2>Conclusion</h2>

      <p>Your ad creative matters, your targeting matters, your landing page matters. But none of it matters if you can't convert the lead into a conversation. Speed to lead is the bridge between marketing investment and revenue return.</p>

      <p>Build the bridge. Automate your response system. Watch your conversion rates multiply.</p>
    `,
    author: 'KEMET Team',
    date: 'May 8, 2026',
    readTime: '6 min read',
    category: 'Lead Generation',
    tags: ['Lead Response', 'Automation', 'Conversion', 'Sales'],
    coverGradient: 'from-emerald-500/20 via-teal-500/10 to-blue-500/10',
    relatedSlugs: ['reduce-facebook-ad-costs-2026', 'ai-powered-ad-campaigns'],
  },
  'tiktok-ads-gcc-2026': {
    slug: 'tiktok-ads-gcc-2026',
    title: 'TikTok Ads in the GCC: The Complete Playbook for 2026',
    excerpt: 'TikTok\'s GCC user base is exploding. Discover the creative formats, targeting strategies, and bidding tactics that work best for UAE and Saudi audiences.',
    content: `
      <p>TikTok has become the fastest-growing ad platform in the GCC region. With over 30 million active users in Saudi Arabia and 10 million in the UAE, businesses that aren't advertising on TikTok are leaving significant growth on the table.</p>

      <p>But TikTok advertising in the GCC requires a unique approach. What works in the US or UK won't necessarily resonate with audiences in Dubai, Riyadh, or Doha.</p>

      <h2>Understanding the GCC TikTok Audience</h2>

      <p>GCC TikTok users skew younger than other platforms, with the majority of users between 18-34. They're highly engaged — average session time on TikTok is 95 minutes per day in the region. This creates enormous opportunity for brands that understand the cultural context.</p>

      <p>Key characteristics of the GCC TikTok audience:</p>

      <ul>
        <li>High trust in creator content and user reviews</li>
        <li>Strong preference for Arabic-language content (even among English speakers)</li>
        <li>Interest in luxury, business, and self-improvement content</li>
        <li>High purchase intent — GCC users are 2x more likely to make in-app purchases</li>
      </ul>

      <h2>Creative Formats That Work</h2>

      <p>TikTok is a creative-first platform. The best-performing ads in the GCC follow these principles:</p>

      <ul>
        <li>Native-looking content that blends with organic posts</li>
        <li>Authentic, user-generated style rather than polished production</li>
        <li>Cultural relevance — using local references, locations, and dialects</li>
        <li>Strong hooks in the first 2 seconds</li>
      </ul>

      <p>For lead generation, the most effective format is the Lead Generation Ad with an instant form. This reduces friction and keeps users within the TikTok ecosystem.</p>

      <h2>Targeting Strategies for the GCC</h2>

      <p>Standard demographic targeting works, but the real power of TikTok lies in interest and behavior-based targeting. For GCC audiences, these segments often perform well:</p>

      <ul>
        <li>Small business owners and entrepreneurs</li>
        <li>Real estate investors</li>
        <li>Health and wellness seekers</li>
        <li>E-commerce shoppers</li>
      </ul>

      <p>Use custom audiences from your CRM to build lookalikes, and layer geographic targeting to focus on major GCC cities like Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, and Kuwait City.</p>

      <h2>Bidding and Budget Optimization</h2>

      <p>TikTok's auction system rewards advertisers who understand bid strategy. For lead generation in the GCC, we recommend:</p>

      <ul>
        <li>Start with a daily budget of AED 200-500 to gather data</li>
        <li>Use the "Lower Cost" bid strategy for volume</li>
        <li>Switch to "Cost Cap" once you have 50+ conversions per week</li>
        <li>Scale by 20% every 3-4 days as performance stabilizes</li>
      </ul>

      <h2>Conclusion</h2>

      <p>TikTok advertising in the GCC is still in its early adopter phase. Businesses that invest now will have a significant competitive advantage as the platform continues to grow. Focus on culturally relevant creative, smart targeting, and lead quality optimization, and you'll see results that outperform other channels.</p>
    `,
    author: 'KEMET Team',
    date: 'April 28, 2026',
    readTime: '10 min read',
    category: 'TikTok Ads',
    tags: ['TikTok', 'GCC Marketing', 'Creative Strategy', 'Social Media'],
    coverGradient: 'from-emerald-500/20 via-cyan-500/10 to-zinc-500/10',
    relatedSlugs: ['reduce-facebook-ad-costs-2026', 'google-ads-lead-quality'],
  },
  'google-ads-lead-quality': {
    slug: 'google-ads-lead-quality',
    title: 'Stop Chasing Cheap Clicks: A Guide to Google Ads Lead Quality Optimization',
    excerpt: 'Low-quality leads waste your sales team\'s time. Learn how to optimize Google Ads for lead quality using smart bidding, audience targeting, and conversion tracking.',
    content: `
      <p>Cheap clicks are a trap. When you optimize for cost-per-click, you attract the wrong audience — people who click out of curiosity rather than buying intent. The result is a sales team drowning in low-quality leads and a marketing budget that looks efficient but delivers zero revenue.</p>

      <p>Here's how to optimize Google Ads for lead quality instead.</p>

      <h2>1. Rethink Your Conversion Tracking</h2>

      <p>Most businesses track form submissions as conversions. But not all form submissions are equal. Some are spam, some are competitors, and some are people with no real buying intent.</p>

      <p>Set up offline conversion tracking that imports sales data back into Google Ads. This tells the algorithm which leads actually became customers, and it will optimize toward those signals.</p>

      <h2>2. Use Target CPA with Lead Quality Signals</h2>

      <p>Instead of maximizing clicks, optimize for conversions that meet your quality threshold. Use Target CPA bidding, but feed it quality signals:</p>

      <ul>
        <li>Complete form submissions (not partial)</li>
        <li>Phone number verified leads</li>
        <li>Leads that reach your qualification page</li>
        <li>Booked meetings or demos</li>
      </ul>

      <h2>3. Refine Your Keyword Strategy</h2>

      <p>Not all keywords are created equal. High-intent keywords may have higher CPCs, but they deliver exponentially better lead quality. Focus on:</p>

      <ul>
        <li>Long-tail keywords that signal buying intent</li>
        <li>Negative keywords to filter out tire-kickers</li>
        <li>Brand + service terms for high-intent searchers</li>
      </ul>

      <h2>4. Optimize Your Landing Pages</h2>

      <p>Your landing page should qualify visitors before they submit a form. Use progressive profiling — ask for basic information first, then qualify with additional questions. This reduces form abandonment while ensuring only serious prospects reach your sales team.</p>

      <h2>Conclusion</h2>

      <p>Stop optimizing for cheap clicks and start optimizing for quality leads. Your sales team will thank you, and your revenue will reflect the difference.</p>
    `,
    author: 'KEMET Team',
    date: 'April 15, 2026',
    readTime: '7 min read',
    category: 'Google Ads',
    tags: ['Google Ads', 'Lead Quality', 'PPC', 'Conversion Optimization'],
    coverGradient: 'from-amber-500/20 via-orange-500/10 to-emerald-500/10',
    relatedSlugs: ['reduce-facebook-ad-costs-2026', 'lead-response-time-optimization'],
  },
  'ai-powered-ad-campaigns': {
    slug: 'ai-powered-ad-campaigns',
    title: 'AI-Powered Ad Campaigns: How Machine Learning is Changing Lead Generation',
    excerpt: 'From automated bid optimization to predictive audience targeting, AI is reshaping how businesses generate leads. Here\'s what actually works in 2026.',
    content: `
      <p>Artificial intelligence is no longer a buzzword in advertising — it's the engine driving performance. In 2026, every major ad platform uses machine learning to optimize campaigns, and businesses that understand how to work with these algorithms are outperforming those that don't.</p>

      <p>Here's how AI is changing lead generation and what you need to know to stay ahead.</p>

      <h2>Automated Bid Optimization</h2>

      <p>Gone are the days of manually adjusting bids by device, location, or time of day. AI-powered bidding strategies like Target CPA, Target ROAS, and Maximize Conversions analyze thousands of signals in real-time to find the optimal bid for every auction.</p>

      <p>The key to making automated bidding work is feeding the algorithm clean, consistent conversion data. The better your conversion tracking, the better the AI performs.</p>

      <h2>Predictive Audience Targeting</h2>

      <p>Platforms like Meta and Google now use predictive models to identify users most likely to convert — even if they've never interacted with your brand. These "lookalike" and "optimized targeting" features use first-party data to find high-value prospects.</p>

      <p>To maximize predictive targeting, ensure your CRM data is clean and your conversion events are properly configured. The AI can only be as good as the data it learns from.</p>

      <h2>Creative Optimization at Scale</h2>

      <p>AI tools can now analyze creative performance and predict which ad variations will perform best. Dynamic creative optimization (DCO) automatically tests combinations of headlines, images, and CTAs to find the winning formula.</p>

      <h2>The Human Element</h2>

      <p>While AI handles optimization, strategy still requires human insight. Understanding your customer, crafting compelling messaging, and interpreting AI recommendations are skills that machines can't replace. The best results come from combining AI efficiency with human creativity and strategic thinking.</p>

      <h2>Conclusion</h2>

      <p>AI is transforming lead generation, but it's not a magic solution. The businesses that succeed are those that invest in clean data, understand their customers deeply, and use AI as a tool to amplify — not replace — their strategic decisions.</p>
    `,
    author: 'KEMET Team',
    date: 'April 2, 2026',
    readTime: '9 min read',
    category: 'AI & Automation',
    tags: ['AI', 'Machine Learning', 'Automation', 'Ad Tech'],
    coverGradient: 'from-purple-500/20 via-blue-500/10 to-emerald-500/10',
    relatedSlugs: ['reduce-facebook-ad-costs-2026', 'lead-response-time-optimization'],
  },
  'linkedin-ads-b2b-lead-gen': {
    slug: 'linkedin-ads-b2b-lead-gen',
    title: 'LinkedIn Ads for B2B Lead Generation: Strategies That Convert',
    excerpt: 'LinkedIn is the premier platform for B2B leads. Learn how to structure campaigns, write compelling ad copy, and nurture decision-makers through the funnel.',
    content: `
      <p>LinkedIn remains the most powerful platform for B2B lead generation — but only if you know how to use it. With high CPCs and a professional audience, every click needs to count.</p>

      <p>Here's our proven framework for LinkedIn Ads that generate real B2B leads.</p>

      <h2>1. Target Decision-Makers, Not Just Companies</h2>

      <p>LinkedIn's targeting capabilities are unmatched. Layer company size, industry, job title, and seniority to reach decision-makers within your target accounts. For best results, create separate campaigns for each buyer persona.</p>

      <h2>2. Lead Gen Forms vs. Landing Pages</h2>

      <p>LinkedIn's native Lead Gen Forms consistently outperform external landing pages for conversion rate. Users don't need to leave the platform, and their profile data auto-fills — reducing friction dramatically.</p>

      <h2>3. Content That Educates, Then Converts</h2>

      <p>B2B buyers don't respond to hard sells on LinkedIn. They respond to thought leadership, data-backed insights, and educational content. Use lead magnets like whitepapers, case studies, and industry reports to capture interest.</p>

      <h2>4. Nurture with LinkedIn Matched Audiences</h2>

      <p>Retarget website visitors and engage account lists with LinkedIn Matched Audiences. Upload your CRM contacts to exclude current customers and create lookalikes of your best accounts.</p>

      <h2>Conclusion</h2>

      <p>LinkedIn Ads require a strategic, patient approach. Focus on reaching the right people with the right content, and use LinkedIn's targeting and lead gen tools to reduce friction. The result is a consistent pipeline of high-quality B2B leads.</p>
    `,
    author: 'KEMET Team',
    date: 'March 20, 2026',
    readTime: '7 min read',
    category: 'LinkedIn Ads',
    tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation', 'Professional Services'],
    coverGradient: 'from-blue-500/20 via-indigo-500/10 to-emerald-500/10',
    relatedSlugs: ['ai-powered-ad-campaigns', 'lead-response-time-optimization'],
  },
};

// Fallback for 404
const fallbackPost: BlogPost = {
  slug: 'not-found',
  title: 'Post Not Found',
  excerpt: '',
  content: '<p>The blog post you\'re looking for doesn\'t exist or may have been moved.</p>',
  author: '',
  date: '',
  readTime: '',
  category: '',
  tags: [],
  coverGradient: 'from-zinc-500/20 to-zinc-800/10',
  relatedSlugs: [],
};

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts[slug] || fallbackPost;
  const is404 = post === fallbackPost;

  // Get related posts
  const relatedPosts = is404 ? [] : post.relatedSlugs
    .map((s) => blogPosts[s])
    .filter(Boolean);

  useEffect(() => {
    if (!is404) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: { '@type': 'Organization', name: 'KEMET' },
        datePublished: post.date,
        publisher: { '@type': 'Organization', name: 'KEMET' },
      };

      setPageSEO({
        title: `${post.title} | KEMET Blog`,
        description: post.excerpt,
        canonical: `https://kemetads.ae/blog/${post.slug}`,
        ogType: 'article',
        jsonLd: articleSchema,
      });
    }
  }, [slug, is404, post]);

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Back link */}
      <section className="relative pt-[140px] pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </section>

      {is404 ? (
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-zinc-400 mb-8">The article you're looking for doesn't exist.</p>
            <Button href="/blog" variant="primary" size="lg" arrow>
              Browse All Articles
            </Button>
          </div>
        </section>
      ) : (
        <>
          {/* Article Header */}
          <section className="relative pt-12 pb-16 md:pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
            <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient} opacity-30`} />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category */}
                <Badge variant="emerald">{post.category}</Badge>

                {/* Title */}
                <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[9px] font-bold text-white">
                      K
                    </div>
                    <span className="text-zinc-300">{post.author}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{post.readTime}</span>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#090d1a] to-[#0a1628]" />
            <div
              className="absolute inset-0 opacity-[0.015] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="relative py-24 md:py-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0a1628]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03)_0%,transparent_60%)]" />

              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Continue Reading
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {relatedPosts.map((related, idx) => (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/blog/${related.slug}`}
                        className="group block relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/15 transition-all duration-500"
                      >
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${related.coverGradient} opacity-15 group-hover:opacity-25 transition-opacity duration-500`} />

                        <div className="relative z-10">
                          <span className="text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/15">
                            {related.category}
                          </span>
                          <h3 className="mt-3 text-base font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-snug">
                            {related.title}
                          </h3>
                          <p className="mt-2 text-xs text-zinc-500 leading-relaxed line-clamp-2">
                            {related.excerpt}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a30] via-[#0a1628] to-[#0d1a30]" />
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
                  Ready to Scale Your Campaigns?
                </h2>
                <p className="text-base text-zinc-400 max-w-md">
                  Let's review your current acquisition system and build a plan that drives real, measurable growth.
                </p>
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Book a Campaign Review
                </Button>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
};

export default BlogPostPage;