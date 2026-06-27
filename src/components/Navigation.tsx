"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.scrollY > 50) {
      setIsScrolled(true);
    }
  }, []);

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
          <Link className={`font-h3 text-xl font-bold transition-colors ${logoColor}`} href="/">BRAIN</Link>
          
          <ul className="flex space-x-8 md:flex hidden">
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
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
