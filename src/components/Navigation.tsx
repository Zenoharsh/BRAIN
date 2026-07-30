"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.scrollY > 50) {
      setIsScrolled(true);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const isHome = pathname === '/';
  const isCompact = isScrolled;
  const isTransparentHero = isHome && !isScrolled;

  const textColor = isTransparentHero 
    ? "text-white hover:text-white/80" 
    : "text-on-surface hover:text-primary transition-colors duration-200";

  const iconColor = isTransparentHero 
    ? "text-white" 
    : "text-on-surface transition-colors";

  const logoColor = isTransparentHero 
    ? "text-white" 
    : "text-primary transition-colors";

  const partnerBtn = isTransparentHero
    ? "bg-white text-primary hover:bg-white/90 shadow-lg"
    : "glass-btn";

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none flex justify-center">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          marginTop: isCompact ? 16 : 0,
          width: isCompact ? "calc(min(896px, 95vw))" : "100%",
          borderRadius: isCompact ? "9999px" : "0px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`pointer-events-auto relative ${
          isCompact 
            ? "glass-panel shadow-2xl border-b border-on-surface-variant/10 dark:border-white/10" 
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        <div className={`mx-auto flex justify-between items-center w-full px-6 md:px-8 transition-all duration-400 ${isCompact ? "h-16" : "h-20"}`}>
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            {/* 
              When at the top of the homepage (isTransparentHero), the background is dark video. 
              We MUST show the white logo (which the user named logo-light.png). 
            */}
            {isTransparentHero ? (
              <img src="/logo-light.png" alt="BRAIN Logo" className="h-10 md:h-12 w-auto object-contain" />
            ) : (
              <>
                {/* Standard Light Mode Logo (black logo on white bg -> logo-dark.png) */}
                <img src="/logo-dark.png" alt="BRAIN Logo" className="h-10 md:h-12 w-auto object-contain block dark:hidden" />
                
                {/* Standard Dark Mode Logo (white logo on black bg -> logo-light.png) */}
                <img src="/logo-light.png" alt="BRAIN Logo" className="h-10 md:h-12 w-auto object-contain hidden dark:block" />
              </>
            )}
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li><Link className={`font-body-md transition-colors duration-200 ${textColor}`} href="/">Home</Link></li>
            <li><Link className={`font-body-md transition-colors duration-200 ${textColor}`} href="/research">Research</Link></li>
            <li><Link className={`font-body-md transition-colors duration-200 ${textColor}`} href="/grassroots">Grassroots</Link></li>
            <li><Link className={`font-body-md transition-colors duration-200 ${textColor}`} href="/about">About Us</Link></li>
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            {mounted && (
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                <span className={`material-symbols-outlined text-[20px] transition-colors ${iconColor}`}>
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </motion.button>
            )}
            <button className={`py-2 px-5 text-sm hidden md:block rounded-full font-bold transition-all ${partnerBtn}`}>Partner</button>
            
            {/* Mobile Hamburger Button */}
            <button 
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${iconColor} hover:bg-black/5 dark:hover:bg-white/10`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[64px] z-[9998] md:hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/80 dark:bg-[#090b0d]/90 backdrop-blur-xl border-t border-on-surface-variant/10 dark:border-white/10" />
            
            {/* Menu Links */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-12 space-y-8 h-full pointer-events-auto">
              <Link href="/" className="font-heading text-2xl font-bold text-on-surface dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/research" className="font-heading text-2xl font-bold text-on-surface dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
              <Link href="/grassroots" className="font-heading text-2xl font-bold text-on-surface dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Grassroots</Link>
              <Link href="/about" className="font-heading text-2xl font-bold text-on-surface dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <div className="pt-8">
                <button className="glass-btn py-3 px-8 text-lg font-bold rounded-full w-full">Partner With Us</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
