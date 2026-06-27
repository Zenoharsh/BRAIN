"use client";

import React, { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CMS_DATA } from '@/lib/data';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Types & Data Extraction ---
type TabCategory = 'All' | 'Articles' | 'Policy Briefs' | 'Reports' | 'Newsletters';

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<TabCategory>('All');

  // Flatten and categorize data for the filter system
  const allContent = useMemo(() => {
    return [
      ...CMS_DATA.research.articles.map(item => ({ ...item, category: 'Articles' })),
      ...CMS_DATA.research.policyBriefs.map(item => ({ ...item, category: 'Policy Briefs' })),
      ...CMS_DATA.research.reports.map(item => ({ ...item, category: 'Reports' })),
      ...CMS_DATA.research.newsletters.map(item => ({ ...item, category: 'Newsletters' }))
    ];
  }, []);

  const filteredContent = useMemo(() => {
    if (activeTab === 'All') return allContent;
    return allContent.filter(item => item.category === activeTab);
  }, [activeTab, allContent]);

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08 } 
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.2 } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <Navigation />

      <main className="flex-grow pt-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="font-h1 text-[56px] leading-tight font-extrabold text-on-surface mb-6 tracking-tight">
              Research & <span className="text-primary">Publications</span>
            </h1>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Explore our data-driven profiles, actionable policy notes, and in-depth studies aimed at bridging the gap between rigorous research and grassroots reality in Bihar.
            </p>
          </motion.div>

          {/* Neumorphic Animated Tabs */}
          <div className="flex justify-center mb-16">
            <div className="glass-panel p-2 flex space-x-2 rounded-full overflow-x-auto max-w-full hide-scrollbar">
              {['All', 'Articles', 'Policy Briefs', 'Reports', 'Newsletters'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as TabCategory)}
                  className={`relative px-6 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-300 whitespace-nowrap ${
                    activeTab === tab ? 'text-white' : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/30"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid Layout */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              variants={containerVariants} 
              initial="hidden" 
              animate="visible" 
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredContent.map((item) => (
                <motion.div 
                  key={`${item.category}-${item.id}`} 
                  variants={cardVariants}
                  className="group relative glass-panel p-8 flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/40 dark:hover:bg-white/5 border border-transparent dark:border-white/5 dark:hover:border-white/10"
                >
                  {/* Hover Light Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  {/* Category & Tags */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex gap-2">
                      {item.tags?.slice(0, 1).map((tag: string, i: number) => (
                        <span key={i} className="text-[11px] font-medium text-on-surface-variant border border-on-surface-variant/20 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Hierarchy */}
                  <h3 className="font-h3 text-[22px] leading-snug font-bold text-on-surface mb-4 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-[15px] text-on-surface-variant leading-relaxed mb-8 flex-grow relative z-10">
                    {item.excerpt}
                  </p>

                  {/* Metadata Footer */}
                  <div className="flex justify-between items-center text-[13px] text-on-surface-variant dark:text-gray-400 font-medium mt-auto pt-6 border-t border-on-surface-variant/10 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">
                        {item.author?.charAt(0) || "B"}
                      </div>
                      <span>{item.author || "BRAIN Team"}</span>
                    </div>
                    <span>{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredContent.length === 0 && (
            <div className="text-center py-20">
              <p className="text-on-surface-variant text-lg">No publications found in this category.</p>
            </div>
          )}

        </div>
      </main>
      
      <div className="z-10 relative mt-auto">
        <Footer />
      </div>
    </div>
  );
}
