"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function Pillars() {
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
      {/* Pillar 1: Roots */}
      <section className="py-24 relative bg-white/40" id="pillar1">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-4">Pillar 1: Research, Policy & Advocacy (The Roots)</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant">Undertaking thematic studies, policy research, and innovation-focused analysis. Bringing together researchers, policymakers, practitioners, and civil society.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/3 flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-24 h-32 glass-panel !rounded-2xl border-b-4 border-primary flex items-center justify-center z-10 bg-white/90 relative"
              >
                <span className="material-symbols-outlined text-primary text-4xl">account_balance</span>
              </motion.div>
              
              {/* Roots SVG Animation */}
              <svg className="w-64 h-32 -mt-4 text-primary/30 z-0" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  whileInView={{ pathLength: 1 }} 
                  transition={{ duration: 1.5, ease: "easeInOut" }} 
                  viewport={{ once: true }}
                  d="M100 0 V40 C100 60 20 60 20 80 V100" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  whileInView={{ pathLength: 1 }} 
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} 
                  viewport={{ once: true }}
                  d="M100 0 V100" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  whileInView={{ pathLength: 1 }} 
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }} 
                  viewport={{ once: true }}
                  d="M100 0 V40 C100 60 180 60 180 80 V100" 
                />
              </svg>

              <div className="flex justify-between w-full mt-2 text-center font-label-sm text-[14px] text-on-surface-variant px-4">
                <span className="w-1/3 -ml-4">Raw Data</span>
                <span className="w-1/3">Stakeholder<br/>Dialogue</span>
                <span className="w-1/3 -mr-4">Network of<br/>Biharis</span>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { title: 'Know Bihar', desc: 'Comprehensive, data-driven profiles covering history, economy, culture, and district-level analysis.', border: 'border-l-primary' },
                { title: 'Bihar Policy Briefs', desc: 'Short, actionable policy notes designed for policymakers seeking evidence-based guidance.', border: 'border-l-secondary' },
                { title: 'Research & Reports', desc: 'In-depth studies and white papers offering rigorous analysis of specific development issues.', border: 'border-l-tertiary' },
                { title: 'Articles & Blogs', desc: 'Opinion pieces and explainers providing accessible insights into challenges and opportunities.', border: 'border-l-on-secondary-container' }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }} className={`glass-panel p-6 border-l-4 ${item.border} !rounded-l-none transition-all`}>
                  <h4 className="font-h3 text-[24px] font-semibold text-on-surface mb-2">{item.title}</h4>
                  <p className="text-body-md text-[16px] text-on-surface-variant">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Last-Mile Bridge */}
      <section className="py-24 relative" id="pillar2">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-4">Pillar 2: Rural & Social Transformation</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant">Policies must not remain confined to documents. BRAIN ensures they translate into tangible improvements in people's everyday lives.</p>
          </motion.div>

          {/* Bridge Diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-24 py-8"
          >
            {/* The Line connecting everything */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/10 -translate-y-1/2 rounded-full">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "100%" }} 
                transition={{ duration: 2, ease: "easeInOut" }} 
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-[0_0_10px_rgba(0,89,187,0.5)]"
              />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 relative z-10 px-2">
              <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-primary/20 text-primary p-6 rounded-xl font-label-sm font-bold shadow-lg flex items-center justify-center text-center min-w-[150px] z-20 relative">
                State Intent /<br/>Policy Documents
                {/* Mobile connector */}
                <div className="md:hidden absolute -bottom-6 left-1/2 w-1 h-6 bg-primary/20"></div>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 bg-white/95 shadow-xl border border-outline-variant p-5 rounded-xl text-center border-t-4 border-t-primary transition-transform min-w-[150px] z-20">
                <h5 className="font-bold text-on-surface mb-2 text-[15px]">Digital Literacy</h5>
                <p className="text-[13px] text-on-surface-variant leading-tight">Establishing rural centres to train youth and women in basic digital skills.</p>
                <div className="md:hidden absolute -bottom-6 left-1/2 w-1 h-6 bg-primary/20"></div>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 bg-white/95 shadow-xl border border-outline-variant p-5 rounded-xl text-center border-t-4 border-t-secondary transition-transform min-w-[150px] z-20">
                <h5 className="font-bold text-on-surface mb-2 text-[15px]">Legal Literacy</h5>
                <p className="text-[13px] text-on-surface-variant leading-tight">Conducting awareness camps and basic legal aid clinics on rights.</p>
                <div className="md:hidden absolute -bottom-6 left-1/2 w-1 h-6 bg-primary/20"></div>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 bg-white/95 shadow-xl border border-outline-variant p-5 rounded-xl text-center border-t-4 border-t-tertiary transition-transform min-w-[150px] z-20">
                <h5 className="font-bold text-on-surface mb-2 text-[15px]">Health Literacy</h5>
                <p className="text-[13px] text-on-surface-variant leading-tight">Launching behavioural change campaigns and mobile health clinics.</p>
                <div className="md:hidden absolute -bottom-6 left-1/2 w-1 h-6 bg-primary/20"></div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="flex-1 bg-white border border-secondary/20 text-secondary p-6 rounded-xl font-label-sm font-bold shadow-lg flex items-center justify-center text-center min-w-[150px] z-20">
                Citizen<br/>Experience
              </motion.div>
            </div>
          </motion.div>

          <h3 className="font-h3 text-[24px] font-semibold text-center text-on-surface mb-8">Deepening Grassroots Impact</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Educational Support', color: 'border-t-primary', items: ['Bridging gaps in foundational literacy.', 'Teacher training workshops.'] },
              { title: 'Community Capacity', color: 'border-t-secondary', items: ['Training local leaders & SHGs.', 'Building explicit ownership.'] },
              { title: 'Livelihood & Skill', color: 'border-t-tertiary', items: ['Skill-based training.', 'Supporting micro-enterprises.'] }
            ].map((col, i) => (
              <motion.div key={i} variants={itemVariants} className={`glass-panel p-6 border-t-4 ${col.color} !rounded-t-none`}>
                <h4 className="font-h3 text-lg font-semibold text-on-surface mb-3">{col.title}</h4>
                <ul className="list-disc pl-4 text-on-surface-variant space-y-2 font-body-md text-[16px]">
                  {col.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillar 3: Bihar Mart */}
      <section className="py-24 relative bg-white/40" id="pillar3">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-4">Pillar 3: Bihar Mart (The Sustainability Engine)</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant">A purpose-driven, mission-aligned enterprise designed to promote Bihar's traditional products, GI-tagged goods, and rural innovations.</p>
          </motion.div>

          <div className="flex flex-col items-center gap-16">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full flex justify-center"
            >
              <div className="relative w-80 h-80 glass-panel !rounded-full flex items-center justify-center border-4 border-primary/20 p-8 shadow-[0_0_40px_rgba(0,89,187,0.1)]">
                <div className="text-center">
                  <h3 className="font-h3 text-[24px] font-semibold text-primary">The<br/>Sustainability<br/>Loop</h3>
                </div>
                {/* Loop Nodes */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 bg-white shadow-lg border border-outline-variant text-primary px-5 py-2.5 rounded-full font-label-sm text-[14px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">storefront</span> Market Access
                </motion.div>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }} className="absolute -bottom-6 bg-white shadow-lg border border-outline-variant text-secondary px-5 py-2.5 rounded-full font-label-sm text-[14px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">autorenew</span> Reinvested
                </motion.div>
                <motion.div animate={{ x: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }} className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-outline-variant text-tertiary px-5 py-2.5 rounded-full font-label-sm text-[14px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">brush</span> Artisans
                </motion.div>
                <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 3, ease: "easeInOut" }} className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-outline-variant text-on-secondary-container px-5 py-2.5 rounded-full font-label-sm text-[14px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">payments</span> Revenue
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { title: 'Market Access', desc: 'Provides crucial commercial visibility to rural artisans.', border: 'border-t-primary', bg: '' },
                { title: 'Cultural Visibility', desc: 'Enhances the profile of Bihar\'s economic and cultural assets.', border: 'border-t-secondary', bg: '' },
                { title: '100% Reinvestment', desc: 'All proceeds are reinvested into the Foundation\'s activities.', border: 'border-t-tertiary', bg: 'bg-primary/5' }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className={`glass-panel p-6 border-t-4 ${item.border} ${item.bg} !rounded-t-none hover:-translate-y-2 transition-transform`}>
                  <h4 className="font-h3 text-xl font-semibold text-on-surface mb-2">{item.title}</h4>
                  <p className="text-body-md text-[16px] text-on-surface-variant">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Network */}
      <section className="py-24 relative" id="pillar4">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-4">Pillar 4: Know Bihar Heritage Tours (The Network Catalyst)</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-4"><span className="font-semibold text-on-surface">Target Audience:</span> Students, researchers, professionals, and academic institutions seeking informed learning experiences.</p>
            <p className="font-body-lg text-[18px] text-on-surface-variant"><span className="font-semibold text-on-surface">Educational Focus:</span> Curated engagement programmes focusing on Bihar's history, heritage, economy, and contemporary grassroots realities.</p>
          </motion.div>

          <h3 className="font-h3 text-[24px] font-semibold text-center text-on-surface mb-8">Outcomes Blueprint</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 items-stretch justify-center"
          >
            <motion.div variants={itemVariants} className="flex-1 glass-panel p-6 text-center flex items-center justify-center hover:bg-white/90 transition-colors">
              <p className="text-body-md text-[16px] text-on-surface-variant">Moving beyond commercial tourism to connect academic knowledge with real-world context.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center text-outline-variant">
              <span className="material-symbols-outlined text-4xl">arrow_right_alt</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 glass-panel p-6 text-center flex items-center justify-center hover:bg-white/90 transition-colors">
              <p className="text-body-md text-[16px] text-on-surface-variant">Building informed perspectives through curated historical and grassroots exposure.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center text-outline-variant">
              <span className="material-symbols-outlined text-4xl">arrow_right_alt</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 glass-panel border-primary/20 p-6 text-center flex items-center justify-center bg-primary/5 hover:bg-primary/10 transition-colors">
              <p className="text-body-md text-[16px] font-medium text-primary">Transforming visitors into long-term network partners and diaspora advocates.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 relative bg-white/40">
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-h2 text-[32px] font-semibold text-on-surface mb-6">The Bedrock of Partnership</h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-3xl mx-auto mb-10">
                Partner With Us to build a trusted, independent, and knowledge-driven institution dedicated to Bihar's progress.
            </p>
            <div className="glass-panel p-8 max-w-4xl mx-auto text-left mb-10 border-t-4 border-t-primary !rounded-t-none">
              <p className="mb-4 text-on-surface-variant font-body-md text-[16px]"><span className="font-semibold text-on-surface">Targeting:</span> Seeking to collaborate with mentors, academic institutions, CSR partners, policy bodies, and civil society organisations.</p>
              <p className="text-on-surface-variant font-body-md text-[16px]"><span className="font-semibold text-on-surface">The Commitment:</span> Partnerships are envisioned as long-term engagements to shape Bihar's development discourse and outcomes—not merely funding arrangements.</p>
            </div>
            <button className="glass-btn py-4 px-10 text-lg">Partner With Us</button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
