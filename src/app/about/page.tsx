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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const team = [
    { name: "Madhusudan Kumar", role: "Operations", image: "/team/madhusudan.jpeg" },
    { name: "Anand Raj", role: "Research", image: "/team/anand.jpeg" },
    { name: "Bhanupriya Anand", role: "Policy Brief", image: "/team/bhanupriya.jpeg" },
    { name: "Harsh Raj", role: "Web developer", image: "/team/harsh.jpg" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <Navigation />

      <main className="flex-grow pt-24 pb-32 relative z-10">
        
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Header & Who We Are */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-32"
          >
            <motion.h1 variants={itemVariants} className="font-h1 text-[48px] md:text-[64px] font-extrabold text-on-surface mb-12">
              Our Vision for an <br/><span className="text-primary">Equitable Bihar</span>
            </motion.h1>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              <motion.div variants={itemVariants} className="lg:col-span-7 glass-panel p-10 md:p-14 rounded-[2rem] relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 dark:bg-primary/20 blur-[60px] rounded-bl-full transition-all duration-700 group-hover:scale-[1.5] group-hover:bg-primary/20 dark:group-hover:bg-primary/30" />
                <motion.h3 variants={itemVariants} className="font-h3 text-3xl font-bold text-on-surface mb-8 relative z-10">Who We Are</motion.h3>
                <motion.p variants={itemVariants} className="font-body-md text-lg text-on-surface-variant leading-relaxed mb-6 relative z-10">
                  Bihar Rejuvenation and Innovation Network Foundation (BRAIN Foundation) is a not-for-profit Section 8 organisation dedicated to advancing research, innovation, public policy, education and community development across India.
                </motion.p>
                <motion.p variants={itemVariants} className="font-body-md text-lg text-on-surface-variant leading-relaxed relative z-10">
                  Founded with the vision of building a knowledge-driven and inclusive society, it works at the intersection of governance, public welfare, technology, entrepreneurship and sustainable development. The Foundation serves as a platform that connects researchers, policymakers, institutions, communities and young leaders to generate practical solutions for contemporary challenges.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-5 glass-panel p-10 md:p-14 rounded-[2rem] relative overflow-hidden group shadow-lg">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 blur-[60px] rounded-tr-full transition-all duration-700 group-hover:scale-[1.5] group-hover:bg-secondary/20 dark:group-hover:bg-secondary/30" />
                <motion.h3 variants={itemVariants} className="font-h3 text-3xl font-bold text-on-surface mb-8 relative z-10">The Approach</motion.h3>
                <motion.p variants={itemVariants} className="font-body-md text-lg text-on-surface-variant leading-relaxed mb-6 relative z-10">
                  We don't just write reports; we build capacities. By engaging deeply with local communities, deploying targeted digital solutions, and fostering a network of global diaspora, we are laying the groundwork for a robust, self-sustaining ecosystem of growth.
                </motion.p>
                <motion.p variants={itemVariants} className="font-body-md text-lg text-on-surface-variant leading-relaxed relative z-10">
                  Our methodologies are data-driven, yet deeply rooted in the cultural and social fabric of the state. We believe in inclusive progress where no citizen is left behind.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* The Core Circle */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12 border-b border-outline-variant/30 pb-4"
            >
              <h2 className="font-h2 text-[36px] font-bold text-on-surface">The Core Circle</h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-pointer bg-neutral-900 shadow-xl"
                >
                  {/* Actual Image using Next.js optimized Image component */}
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal opacity-80 group-hover:opacity-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback if image isn't uploaded yet
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="%23333"><rect width="100%" height="100%"/></svg>';
                      }}
                    />
                  </div>
                  
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="font-h3 text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-primary-fixed-dim font-medium uppercase tracking-widest text-xs mt-2">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Top-right minimalist accent */}
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/30 group-hover:bg-primary transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Corporate Info Footer */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-[#111111] text-on-surface dark:text-[#e0e0e0] p-10 md:p-16 rounded-[2rem] font-mono shadow-2xl relative overflow-hidden border border-outline-variant/30 dark:border-[#222222]"
          >
            {/* Subtle Terminal Glow */}
            <div className="absolute top-0 left-[20%] w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-outline-variant/30 dark:border-[#333333] pb-8">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface dark:text-white mb-2 tracking-tight font-sans">Corporate Identity</h3>
                  <p className="text-on-surface-variant dark:text-[#888888] text-sm">Official Registration & Compliance Details</p>
                </div>
                <div className="mt-4 md:mt-0 px-3 py-1 bg-surface-dim dark:bg-[#222222] border border-outline-variant/50 dark:border-[#444444] rounded text-xs text-on-surface-variant dark:text-[#aaaaaa]">
                  STATUS: ACTIVE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">Legal Name</p>
                  <p className="text-sm text-on-surface dark:text-[#e0e0e0]">Bihar Rejuvenation and Innovation Network Foundation</p>
                </div>
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">Type</p>
                  <p className="text-sm text-on-surface dark:text-[#e0e0e0]">Section 8 Company (Not-for-Profit)</p>
                </div>
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">Date of Incorporation</p>
                  <p className="text-sm text-on-surface dark:text-[#e0e0e0]">17 June 2026</p>
                </div>
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">CIN</p>
                  <p className="text-sm tracking-wider text-on-surface dark:text-[#e0e0e0]">U88900BR2026NPL085681</p>
                </div>
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">PAN</p>
                  <p className="text-sm tracking-wider text-on-surface dark:text-[#e0e0e0]">AAOCB8428Q</p>
                </div>
                <div>
                  <p className="text-on-surface-variant dark:text-[#666666] text-xs uppercase tracking-widest mb-1">Scope of Operations</p>
                  <p className="text-sm text-on-surface dark:text-[#e0e0e0]">Pan India</p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
