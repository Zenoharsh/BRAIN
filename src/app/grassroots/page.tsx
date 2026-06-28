"use client";

import React, { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll } from 'framer-motion';
import { CMS_DATA } from '@/lib/data';

export default function GrassrootsPage() {
  
  const bridgeCards = CMS_DATA.strategy.pillars[1].items.slice(0, 3);
  const cardStyles = [
    { border: "border-t-primary", bg: "bg-primary/10", text: "text-primary", icon: "devices" },
    { border: "border-t-secondary", bg: "bg-secondary/10", text: "text-secondary", icon: "gavel" },
    { border: "border-t-tertiary", bg: "bg-tertiary/10", text: "text-tertiary", icon: "health_and_safety" },
  ];

  const bridgeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bridgeRef,
    offset: ["start 80%", "end 30%"]
  });

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <Navigation />

      <main className="flex-grow pt-24 pb-32 relative z-10">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-8 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel text-secondary font-label-sm !rounded-full mb-6">
              <span className="material-symbols-outlined">nature_people</span>
              Pillar 2
            </div>
            <h1 className="font-h1 text-[48px] md:text-[64px] font-extrabold text-on-surface mb-6 leading-tight">
              Rural & Social <span className="text-secondary">Transformation</span>
            </h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              We bridge the critical gap between macro-level policies and on-the-ground reality. Discover how state intent translates into daily citizen experiences.
            </p>
          </motion.div>
        </div>

        {/* The Last-Mile Bridge Section */}
        <div ref={bridgeRef} className="relative w-full py-20 mb-32">
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <h2 className="font-h2 text-[36px] font-bold text-center text-on-surface mb-20">The Last-Mile Bridge</h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ staggerChildren: 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 w-full max-w-7xl mx-auto relative z-10"
            >
              
              {/* Central Visual Bridge (SVG) */}
              <div 
                className="absolute w-full left-0 right-0 top-[40%] -translate-y-1/2 hidden lg:block z-0 pointer-events-none"
              >
                <svg className="w-full h-[200px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                  {/* Background Track (Always visible, subtle) */}
                  <path 
                    d="M 50,150 Q 500,-50 950,150" 
                    fill="none" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="10 15"
                    className="stroke-black/10 dark:stroke-white/10"
                  />
                  {/* Glowing Fill that draws itself */}
                  <motion.path 
                    d="M 50,150 Q 500,-50 950,150" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    style={{ pathLength: scrollYProgress }}
                    className="drop-shadow-lg"
                  />
                  {/* Glowing Pulse Overlay */}
                  <motion.path 
                    d="M 50,150 Q 500,-50 950,150" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    style={{ pathLength: scrollYProgress }}
                    className="opacity-40 blur-[4px] dark:opacity-60"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0059bb" />
                      <stop offset="50%" stopColor="#006875" />
                      <stop offset="100%" stopColor="#4f5c76" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Endpoint 1: State Intent */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center justify-center text-center w-full relative z-20 glass-panel p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white border-2 border-primary mb-5 shadow-lg text-primary dark:bg-black/80">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <h4 className="font-bold text-on-surface text-sm leading-tight mb-2">State Intent</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Policy documents, fund allocation, and administrative goals.</p>
              </motion.div>

              {/* Interactive Cards along the bridge */}
              {bridgeCards.map((card, index) => {
                const style = cardStyles[index];
                return (
                  <motion.div 
                    key={card.title}
                    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ y: -8 }}
                    className="flex flex-col items-center justify-center text-center w-full relative z-20 glass-panel p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white border-2 ${style.border.replace('border-t-', 'border-')} mb-5 shadow-lg ${style.text} dark:bg-black/80`}>
                      <span className="material-symbols-outlined text-3xl">{style.icon}</span>
                    </div>
                    <h4 className="font-bold text-on-surface text-sm leading-tight mb-2">{card.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}

              {/* Endpoint 2: Citizen Experience */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center justify-center text-center w-full relative z-20 glass-panel p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white border-2 border-tertiary mb-5 shadow-lg text-tertiary dark:bg-black/80">
                  <span className="material-symbols-outlined text-3xl">diversity_3</span>
                </div>
                <h4 className="font-bold text-on-surface text-sm leading-tight mb-2">Citizen Experience</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Empowered lives, accessible services, and informed communities.</p>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Livelihood & Capacity Building Section (Asymmetric Grid) */}
        <section className="max-w-7xl mx-auto px-8">
          <h2 className="font-h2 text-[32px] font-bold text-on-surface mb-12 border-b border-outline-variant/30 pb-4">Empowering the Ecosystem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Big Feature Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 glass-panel p-10 flex flex-col justify-between bg-gradient-to-br from-white to-primary/5 hover:shadow-xl transition-shadow group overflow-hidden relative"
            >
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[200px]">group_add</span>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full mb-6">Capacity Building</span>
                <h3 className="font-h3 text-[28px] font-bold text-on-surface mb-4">Community Leadership Programs</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                  We invest in local leaders. Through targeted workshops, women empowerment drives, and entrepreneurial training, we build the human capital necessary to sustain rural development.
                </p>
                <ul className="space-y-3 text-sm font-medium text-on-surface mb-8">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Panchayat Governance Training</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Women Entrepreneurs Network</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Youth Skill Mapping</li>
                </ul>
                <button className="text-primary font-bold hover:underline flex items-center gap-1">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </motion.div>

            {/* Tall Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-10 bg-white hover:shadow-xl transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="font-h3 text-[22px] font-bold text-on-surface mb-4">Educational Support & Learning</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                Redesigning the learning ecosystem. We support 'Jan Shiksha' night schools for working adults and provide critical learning materials to under-resourced public schools.
              </p>
              <div className="pt-6 border-t border-outline-variant/20">
                <span className="block text-3xl font-extrabold text-secondary mb-1">50+</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Night Schools Active</span>
              </div>
            </motion.div>

            {/* Two small blocks underneath */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-on-surface text-lg group-hover:text-primary transition-colors">Diaspora Connect</h4>
                <span className="material-symbols-outlined text-outline">north_east</span>
              </div>
              <p className="text-sm text-on-surface-variant">Engaging global Biharis to fund local initiatives.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 bg-surface-dim hover:shadow-xl transition-shadow border border-outline-variant/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-on-surface">handshake</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Get Involved</h4>
                  <p className="text-xs text-on-surface-variant">Join our volunteering network.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
