"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
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
    <>
      <Navigation />
      <main className="min-h-screen pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-h1 text-[48px] font-bold text-on-surface mb-6">About BRAIN Foundation</h1>
            <p className="font-body-lg text-[20px] text-on-surface-variant">
              A Section 8 not-for-profit company committed to strengthening Bihar's development through rigorous research, policy engagement, innovation, and collaborative networks.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            
            <motion.section variants={itemVariants} className="glass-panel p-10 border-t-4 border-t-primary">
              <h2 className="font-h2 text-[28px] font-semibold text-primary mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">visibility</span> Vision
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                To position Bihar as a knowledge-driven, innovative, and inclusive leader in development and governance across India. We believe in harnessing the state's untapped demographic potential and historical significance to forge a sustainable future.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="glass-panel p-10 border-t-4 border-t-secondary">
              <h2 className="font-h2 text-[28px] font-semibold text-secondary mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">flag</span> Mission
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                To bridge the gap between academic research, policy formulation, and grassroots implementation. We aim to replace fragmented, short-term interventions with integrated, long-term, and evidence-based solutions that explicitly involve the community.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="glass-panel p-10">
              <h2 className="font-h2 text-[28px] font-semibold text-on-surface mb-8">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(id => (
                  <div key={id} className="flex gap-4 items-start">
                    <div className="w-16 h-16 rounded-full bg-surface-dim overflow-hidden flex-shrink-0">
                      <img src={`https://i.pravatar.cc/150?img=${id + 10}`} alt="Team Member" className="w-full h-full object-cover grayscale opacity-80" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-lg">Dr. Firstname Lastname</h4>
                      <p className="text-sm text-primary font-medium mb-2">Director of Research</p>
                      <p className="text-xs text-on-surface-variant">Expert in public policy and rural economics with over 15 years of field experience in Bihar.</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
