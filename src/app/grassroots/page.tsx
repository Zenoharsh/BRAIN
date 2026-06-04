"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';

export default function GrassrootsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel text-secondary font-label-sm !rounded-full mb-6">
              <span className="material-symbols-outlined">nature_people</span>
              Pillar 2
            </div>
            <h1 className="font-h1 text-[48px] font-bold text-on-surface mb-6">Grassroots Transformation</h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-3xl mx-auto">
              Policies must not remain confined to documents. We ensure they translate into tangible improvements in everyday lives through deep community engagement.
            </p>
          </motion.div>

          <div className="space-y-32">
            
            {/* Capacity Building Session */}
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <motion.div variants={itemVariants} className="w-full md:w-1/2">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel !p-2">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" alt="Capacity Building" className="w-full h-full object-cover rounded-[20px]" />
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay rounded-3xl"></div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
                <h2 className="font-h2 text-[36px] font-bold text-on-surface">Capacity Building Sessions</h2>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
                <p className="text-body-lg text-on-surface-variant">
                  We conduct rigorous training workshops designed to empower local leaders, self-help groups, and rural entrepreneurs. By providing explicit ownership and operational frameworks, communities learn to sustain initiatives independently.
                </p>
                <ul className="space-y-3 text-on-surface-variant font-body-md">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Governance Tools Training</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Micro-enterprise Support</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Leadership Workshops</li>
                </ul>
              </motion.div>
            </motion.section>

            {/* Diaspora Connect */}
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row-reverse items-center gap-12"
            >
              <motion.div variants={itemVariants} className="w-full md:w-1/2">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel !p-2">
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" alt="Diaspora Connect" className="w-full h-full object-cover rounded-[20px]" />
                  <div className="absolute inset-0 bg-tertiary/10 mix-blend-overlay rounded-3xl"></div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
                <h2 className="font-h2 text-[36px] font-bold text-on-surface">Diaspora Connect</h2>
                <div className="h-1 w-20 bg-tertiary rounded-full"></div>
                <p className="text-body-lg text-on-surface-variant">
                  Bridging the gap between Bihar and its global diaspora. We channel knowledge, mentorship, and resources back to the roots, turning nostalgic intent into strategic, measurable impact.
                </p>
                <button className="glass-btn mt-4 px-8 py-3 bg-tertiary/10 text-tertiary border-tertiary/20 hover:bg-tertiary hover:text-white">Join the Network</button>
              </motion.div>
            </motion.section>

            {/* Jan Shiksha */}
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <motion.div variants={itemVariants} className="w-full md:w-1/2">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel !p-2">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000" alt="Jan Shiksha" className="w-full h-full object-cover rounded-[20px]" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay rounded-3xl"></div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="w-full md:w-1/2 space-y-6">
                <h2 className="font-h2 text-[36px] font-bold text-on-surface">Jan Shiksha</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <p className="text-body-lg text-on-surface-variant">
                  Our foundational literacy initiative targeting marginalized populations. Through night schools, adult education drives, and digital literacy camps, we ensure education reaches the last mile.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="glass-panel p-4 border-l-4 border-l-primary !rounded-l-none">
                    <h4 className="font-bold text-lg">5,000+</h4>
                    <p className="text-sm text-on-surface-variant">Adults Educated</p>
                  </div>
                  <div className="glass-panel p-4 border-l-4 border-l-primary !rounded-l-none">
                    <h4 className="font-bold text-lg">120</h4>
                    <p className="text-sm text-on-surface-variant">Learning Centers</p>
                  </div>
                </div>
              </motion.div>
            </motion.section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
