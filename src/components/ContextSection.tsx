"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ContextSection() {
  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-h2 text-[32px] text-on-surface mb-6 font-semibold">The BRAIN Context</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant">
            As a Section 8 not-for-profit, the BRAIN Foundation addresses the critical disconnect between high-level policy formulation and ground-level realities in Bihar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollVariants}
            className="glass-panel p-10 flex flex-col gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-4 border-b border-surface-variant pb-6">
              <div className="w-12 h-12 rounded-full bg-error-container/20 text-error flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">call_split</span>
              </div>
              <h3 className="font-h3 text-[24px] text-on-surface font-semibold">Traditional Intervention</h3>
            </div>
            <ul className="space-y-4 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-outline mt-1">remove</span>
                <span className="font-body-md text-[16px] text-on-surface-variant">Fragmented, short-term, event-centric. Top-down policy dictation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-outline mt-1">remove</span>
                <span className="font-body-md text-[16px] text-on-surface-variant">Highly donor-dependent.</span>
              </li>
            </ul>
          </motion.div>

          {/* BRAIN Approach */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollVariants}
            className="glass-panel !border-primary/20 p-10 flex flex-col gap-6 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,89,187,0.08)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50"></div>
            <div className="relative z-10 flex items-center gap-4 border-b border-surface-variant pb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">account_tree</span>
              </div>
              <h3 className="font-h3 text-[24px] text-primary font-semibold">The BRAIN Approach</h3>
            </div>
            <ul className="space-y-4 flex-1 relative z-10">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check</span>
                <span className="font-body-md text-[16px] text-on-surface">Integrated ecosystem, long-term, evidence-based focus.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check</span>
                <span className="font-body-md text-[16px] text-on-surface">Bridging systemic policy to last-mile practice.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check</span>
                <span className="font-body-md text-[16px] text-on-surface">Self-sustaining through mission-aligned enterprise (Bihar Mart).</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
