"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-panel sticky top-0 z-50 transition-colors duration-300 !rounded-none !border-t-0 !border-x-0 ${scrolled ? '!bg-white/90' : '!bg-white/60'}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20 w-full z-50 md:flex hidden">
        <Link className="font-h3 text-h3 text-primary font-bold" href="/">BRAIN Foundation</Link>
        <ul className="flex space-x-8">
          <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/">Home</Link></li>
          <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/research">Research & Publications</Link></li>
          <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/grassroots">Grassroots Transformation</Link></li>
          <li><Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/about">About Us</Link></li>
        </ul>
        <button className="glass-btn py-3 px-6">Partner With Us</button>
      </div>
    </motion.nav>
  );
}
