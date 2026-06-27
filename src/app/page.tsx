"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { CMS_DATA } from '@/lib/data';

export default function HomePage() {
  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      
      <Navigation />

      <main className="flex-grow">
        
        {/* Cinematic Hero Section */}
        <section className="relative h-[100vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
          {/* Animated Gradient Placeholder for Video */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-[#001a41] via-[#004f58] to-[#001a41]"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-8 max-w-5xl mx-auto pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-h1 text-[48px] md:text-[72px] leading-tight font-extrabold text-white mb-8 tracking-tight drop-shadow-lg"
            >
              Building a <span className="text-primary-fixed-dim">knowledge-driven</span> future for Bihar.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button className="glass-btn px-10 py-5 text-[18px] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] relative group overflow-hidden border border-white/20">
                <span className="relative z-10 font-bold">Explore Our Pillars</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          >
            <span className="material-symbols-outlined text-4xl">expand_more</span>
          </motion.div>
        </section>

        {/* Knowledge-to-Impact Flywheel Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Light Ambient Background for transition */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#001a41]/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-h2 text-[42px] font-bold text-on-surface mb-6"
              >
                The Knowledge-to-Impact Flywheel
              </motion.h2>
              <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Our ecosystem thrives on a continuous cycle of research, capacity building, and enterprise integration.
              </p>
            </div>

            {/* Flywheel Interactive UI */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center min-h-[600px] md:min-h-[700px] py-12"
            >
              {/* Orbital Rings Container (Perfect Square) */}
              <div className="absolute inset-0 m-auto w-[95%] max-w-[700px] aspect-square pointer-events-none flex items-center justify-center z-0">
                <motion.div 
                  animate={{ rotate: [0, 360] }} 
                  transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                  className="absolute inset-0 md:inset-8 rounded-full border-[2px] border-secondary/40 border-dashed border-t-transparent border-b-transparent"
                />
                <motion.div 
                  animate={{ rotate: [360, 0] }} 
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="absolute inset-16 md:inset-32 rounded-full border-[6px] border-primary/30 border-dashed border-l-transparent border-r-transparent"
                />
              </div>

              {/* Central Hub */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute m-auto z-20 w-40 h-40 md:w-48 md:h-48 !rounded-full glass-panel flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 shadow-[0_0_40px_rgba(0,89,187,0.15)] border-2 border-primary/20"
              >
                <span className="font-h1 text-2xl md:text-3xl font-extrabold text-primary mb-1">BRAIN</span>
                <span className="text-[10px] md:text-sm font-semibold text-on-surface-variant uppercase tracking-[0.2em] text-center">Ecosystem</span>
              </motion.div>

              {/* Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-[280px] md:gap-y-32 relative z-10 w-full group/flywheel">
                {CMS_DATA.strategy.pillars.map((pillar, index) => {
                  const links = ["/research", "/grassroots", "/bihar-mart", "/heritage-tours"];
                  const icons = ["biotech", "nature_people", "storefront", "account_balance"];
                  const styleMap = [
                    { border: "border-primary", bg: "bg-primary/10", text: "text-primary", hoverBg: "group-hover:bg-primary", shadow: "hover:shadow-primary/20" },
                    { border: "border-secondary", bg: "bg-secondary/10", text: "text-secondary", hoverBg: "group-hover:bg-secondary", shadow: "hover:shadow-secondary/20" },
                    { border: "border-tertiary", bg: "bg-tertiary/10", text: "text-tertiary", hoverBg: "group-hover:bg-tertiary", shadow: "hover:shadow-tertiary/20" },
                    { border: "border-error", bg: "bg-error/10", text: "text-error", hoverBg: "group-hover:bg-error", shadow: "hover:shadow-error/20" }
                  ];
                  const style = styleMap[index];
                  const shortName = pillar.name.split('(')[0].trim();
                  
                  return (
                    <motion.div variants={nodeVariants} key={pillar.id} className="relative z-10 w-full max-w-[280px] mx-auto transition-all duration-500 group-hover/flywheel:opacity-30 hover:!opacity-100 hover:z-30">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: index * 0.5 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="h-full"
                      >
                        <Link href={links[index]} className="block h-full">
                          <div className={`glass-panel p-6 rounded-[24px] bg-white/80 dark:bg-black/80 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group h-full flex flex-col`}>
                            <div className={`w-12 h-12 rounded-full ${style.bg} flex items-center justify-center mb-4 ${style.text} group-hover:scale-110 ${style.hoverBg} group-hover:text-white transition-all`}>
                              <span className="material-symbols-outlined">{icons[index]}</span>
                            </div>
                            <h3 className="font-h3 text-lg font-bold text-on-surface mb-2 leading-tight">{shortName}</h3>
                            <p className="text-[13px] leading-relaxed text-on-surface-variant flex-grow line-clamp-3">
                              <span className="font-semibold text-on-surface">{pillar.items[0]?.title}:</span> {pillar.items[0]?.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Snippet */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left z-0" />
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-12 md:p-20 text-center border-t-4 border-t-primary !rounded-[2rem] shadow-2xl shadow-primary/5"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">hub</span>
              </div>
              <h2 className="font-h2 text-[36px] font-bold text-on-surface mb-6">Connecting the Dots for Bihar</h2>
              <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed mb-10 max-w-3xl mx-auto">
                The BRAIN Foundation serves as the ultimate connective platform. We bring together academic rigor, pragmatic policymaking, and dynamic grassroots communities to co-create sustainable, inclusive growth across the state.
              </p>
              <Link href="/about">
                <button className="glass-btn-outline px-10 py-4 text-[16px] font-semibold border-2">Read Our Story</button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
