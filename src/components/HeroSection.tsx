"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // Custom spring-like easing
      } 
    }
  };

  const nodes = [
    { id: 1, label: "Research & Policy", icon: "analytics", colorClass: "text-secondary border-secondary/20" },
    { id: 2, label: "Rural Transformation", icon: "nature_people", colorClass: "text-tertiary border-tertiary/20" },
    { id: 3, label: "Bihar Mart", icon: "storefront", colorClass: "text-primary border-primary/20" },
    { id: 4, label: "Heritage Tours", icon: "hub", colorClass: "text-on-secondary-container border-on-secondary-container/20" },
  ];

  return (
    <header className="relative overflow-hidden pt-24 pb-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-16"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 glass-panel text-primary font-label-sm !rounded-full">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychiatry</span>
            Knowledge-to-Impact
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-h1 text-[40px] leading-[1.2] tracking-[-0.02em] text-on-surface font-bold">
            Building a knowledge-driven future for Bihar.
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-[18px] text-on-surface-variant max-w-xl">
            Our vision is to act as a catalyst for sustainable development in Bihar by bridging the gap between rigorous academic research, localized policy advocacy, and grassroots implementation.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <button className="glass-btn py-3 px-8">Explore Our Pillars</button>
            <button className="glass-btn-outline py-3 px-8">Our Approach</button>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-3xl blur-3xl animate-pulse"></div>
          
          <div className="relative z-10 glass-panel p-8 flex flex-col items-center justify-center min-h-[500px]">
            <h3 className="font-h3 text-on-surface mb-12 text-center text-[24px] font-semibold">The Knowledge-to-Impact Flywheel</h3>
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Center Circle */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute z-20 w-32 h-32 bg-white/95 border border-primary/20 text-primary rounded-full flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,89,187,0.15)] backdrop-blur-md cursor-pointer"
              >
                <span className="font-label-sm font-bold text-primary">BRAIN<br/>Ecosystem<br/>Flywheel</span>
              </motion.div>
              
              {/* Orbital Path */}
              <svg className="absolute inset-0 w-full h-full text-outline-variant/30 z-0" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              </svg>

              {/* Orbiting Nodes Wrapper */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-0 z-10"
              >
                {nodes.map((node, i) => {
                  const angleRad = ((i * 360) / nodes.length) * (Math.PI / 180) - Math.PI / 2;
                  const radius = 140;
                  const left = 160 + radius * Math.cos(angleRad);
                  const top = 160 + radius * Math.sin(angleRad);
                  
                  return (
                    <div 
                      key={node.id} 
                      className="absolute w-0 h-0" 
                      style={{ left, top }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing group absolute"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        dragElastic={0.2}
                      >
                        <div className={`w-14 h-14 bg-white/95 shadow-lg rounded-full flex items-center justify-center mb-2 border ${node.colorClass} group-hover:shadow-[0_0_15px_rgba(0,89,187,0.2)] transition-shadow`}>
                          <span className="material-symbols-outlined">{node.icon}</span>
                        </div>
                        <span className="font-label-sm text-on-surface-variant bg-white/80 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-sm whitespace-nowrap border border-white/50">
                          {node.label}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
