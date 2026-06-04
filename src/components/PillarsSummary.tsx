"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function PillarsSummary() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative bg-white/40">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-4">Our Core Pillars</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant">
            Discover how we translate knowledge into grassroots impact through our four foundational pillars.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Pillar 1 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-panel p-6 border-t-4 border-t-primary flex flex-col h-full">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h4 className="font-h3 text-xl font-semibold text-on-surface mb-2">Research & Publications</h4>
            <p className="text-body-md text-[15px] text-on-surface-variant mb-6 flex-grow">
              Data-driven profiles, policy briefs, and rigorous analysis of development issues.
            </p>
            <Link href="/research" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
              Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-panel p-6 border-t-4 border-t-secondary flex flex-col h-full">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">nature_people</span>
            </div>
            <h4 className="font-h3 text-xl font-semibold text-on-surface mb-2">Grassroots Transformation</h4>
            <p className="text-body-md text-[15px] text-on-surface-variant mb-6 flex-grow">
              Translating policies into tangible improvements in people's everyday lives.
            </p>
            <Link href="/grassroots" className="text-secondary font-semibold text-sm hover:underline flex items-center gap-1">
              Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-panel p-6 border-t-4 border-t-tertiary flex flex-col h-full">
            <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <h4 className="font-h3 text-xl font-semibold text-on-surface mb-2">Bihar Mart</h4>
            <p className="text-body-md text-[15px] text-on-surface-variant mb-6 flex-grow">
              Our sustainability engine promoting traditional products and rural innovations.
            </p>
            <Link href="/bihar-mart" className="text-tertiary font-semibold text-sm hover:underline flex items-center gap-1">
              Upcoming <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="glass-panel p-6 border-t-4 border-t-on-secondary-container flex flex-col h-full">
            <div className="w-12 h-12 bg-on-secondary-container/10 text-on-secondary-container rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h4 className="font-h3 text-xl font-semibold text-on-surface mb-2">Heritage Tours</h4>
            <p className="text-body-md text-[15px] text-on-surface-variant mb-6 flex-grow">
              Curated engagement focusing on history, economy, and grassroots realities.
            </p>
            <Link href="/heritage-tours" className="text-on-secondary-container font-semibold text-sm hover:underline flex items-center gap-1">
              Upcoming <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
