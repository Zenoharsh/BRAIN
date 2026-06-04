"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BiharMartPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-12 pb-24 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-16 text-center border-t-8 border-t-tertiary"
          >
            <div className="w-20 h-20 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">storefront</span>
            </div>
            <h1 className="font-h1 text-[40px] font-bold text-on-surface mb-4">Bihar Mart</h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-8">
              A purpose-driven, mission-aligned enterprise designed to promote Bihar's traditional products, GI-tagged goods, and rural innovations. This section is currently under development.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface-dim text-on-surface-variant font-medium rounded-full shadow-inner">
              <span className="material-symbols-outlined text-xl">construction</span> Coming Soon
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
