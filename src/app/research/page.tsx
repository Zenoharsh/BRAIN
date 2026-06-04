"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CMS_DATA } from '@/lib/data';
import { motion, Variants } from 'framer-motion';

export default function ResearchPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const Card = ({ item, colorClass }: { item: any, colorClass: string }) => (
    <motion.div variants={itemVariants} whileHover={{ y: -5 }} className={`glass-panel p-6 border-l-4 ${colorClass} !rounded-l-none flex flex-col h-full`}>
      <div className="flex gap-2 mb-3 flex-wrap">
        {item.tags?.map((tag: string, i: number) => (
          <span key={i} className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-dim/50 px-2 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-h3 text-[20px] font-semibold text-on-surface mb-2">{item.title}</h3>
      <p className="text-body-md text-[15px] text-on-surface-variant mb-4 flex-grow">{item.excerpt}</p>
      <div className="flex justify-between items-center text-[13px] text-on-surface-variant font-medium mt-auto pt-4 border-t border-outline-variant/50">
        <span>{item.author || "BRAIN Team"}</span>
        <span>{item.date}</span>
      </div>
    </motion.div>
  );

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel text-primary font-label-sm !rounded-full mb-6">
              <span className="material-symbols-outlined">analytics</span>
              Pillar 1
            </div>
            <h1 className="font-h1 text-[48px] font-bold text-on-surface mb-6">Research & Publications</h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl">
              Undertaking thematic studies, policy research, and innovation-focused analysis. Bringing together researchers, policymakers, practitioners, and civil society.
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Articles and Commentaries */}
            <section>
              <h2 className="font-h2 text-[28px] font-semibold text-on-surface mb-8 border-b border-outline-variant pb-4">Articles and Commentaries</h2>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CMS_DATA.research.articles.map(article => (
                  <Card key={article.id} item={article} colorClass="border-l-primary" />
                ))}
              </motion.div>
            </section>

            {/* Policy Brief and Review */}
            <section>
              <h2 className="font-h2 text-[28px] font-semibold text-on-surface mb-8 border-b border-outline-variant pb-4">Policy Briefs & Reviews</h2>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CMS_DATA.research.policyBriefs.map(brief => (
                  <Card key={brief.id} item={brief} colorClass="border-l-secondary" />
                ))}
              </motion.div>
            </section>

            {/* Reports */}
            <section>
              <h2 className="font-h2 text-[28px] font-semibold text-on-surface mb-8 border-b border-outline-variant pb-4">In-Depth Reports</h2>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CMS_DATA.research.reports.map(report => (
                  <Card key={report.id} item={report} colorClass="border-l-tertiary" />
                ))}
              </motion.div>
            </section>

            {/* Monthly Newsletter */}
            <section>
              <div className="glass-panel p-10 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden border-l-4 border-l-on-secondary-container !rounded-l-none">
                <div className="absolute -right-20 -top-20 opacity-5">
                  <span className="material-symbols-outlined text-[300px]">mail</span>
                </div>
                <div className="relative z-10">
                  <h2 className="font-h2 text-[28px] font-semibold text-on-surface mb-4">Monthly Newsletter</h2>
                  <p className="text-on-surface-variant font-body-md mb-8 max-w-xl">Subscribe to receive our latest insights, grassroots updates, and policy analysis straight to your inbox.</p>
                  
                  <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {CMS_DATA.research.newsletters.map(news => (
                      <Card key={news.id} item={news} colorClass="border-l-on-secondary-container" />
                    ))}
                  </motion.div>

                  <div className="flex gap-4 max-w-md">
                    <input type="email" placeholder="Enter your email address" className="flex-grow px-4 py-3 rounded-lg border border-outline-variant bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    <button className="glass-btn px-6 py-3 whitespace-nowrap">Subscribe</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
