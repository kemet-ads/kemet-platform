'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookCall } from '@/contexts/BookCallContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBookCall } = useBookCall();
  const { lang, setLang, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top edge highlight */}
      <div className="fixed inset-x-0 top-0 h-px z-50 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent pointer-events-none" />

      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-out ${
          scrolled
            ? 'backdrop-blur-2xl bg-black/85 shadow-2xl shadow-emerald-500/5'
            : 'backdrop-blur-lg bg-black/40'
        } border-b border-white/[0.06]`}
      >
        <div className="flex items-center justify-between h-[68px] px-6 md:px-8 max-w-7xl mx-auto w-full">
          {/* ===== LOGO ===== */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <img
              src="/kemet_logo.png"
              alt="KEMET"
              className="h-8 w-auto transition-all duration-300 group-hover:opacity-80"
            />
          </a>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
                className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg hover:bg-white/[0.06] group ${
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className="absolute bottom-[5px] left-4 right-4 h-[2px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 transition-all duration-400 ease-out origin-left rounded-full"
                  style={{
                    opacity: activeItem === item.label || pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? 1 : 0,
                    transform: activeItem === item.label || pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? 'scaleX(1)' : 'scaleX(0)',
                    filter: activeItem === item.label || pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? 'blur(1px)' : 'none',
                  }}
                />
              </a>
            ))}
          </div>

          {/* ===== RIGHT ACTIONS ===== */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              aria-label="Toggle language"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
            {/* Book a Call CTA */}
            <button
              onClick={openBookCall}
              className="hidden md:inline-flex group relative overflow-hidden px-5 py-[10px] text-[13px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`block w-4 h-[1.5px] bg-zinc-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[2.75px]' : ''}`} />
                <span className={`block w-4 h-[1.5px] bg-zinc-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-4 h-[1.5px] bg-zinc-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[2.75px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-2xl"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-white bg-white/[0.06]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      openBookCall();
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600"
                  >
                    Book a Strategy Call
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};