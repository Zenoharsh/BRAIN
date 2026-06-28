"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, Variants, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { CMS_DATA } from '@/lib/data';

export default function HomePage() {
  const { scrollY } = useScroll();

  // Add physics/inertia to the scroll value so the animation feels buttery smooth and "resistant"
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001
  });

  // Button Morphing (0 to 600px of absolute scroll)
  const btnWidth = useTransform(smoothScrollY, [0, 600], ["250px", "96px"]);
  const btnHeight = useTransform(smoothScrollY, [0, 600], ["56px", "96px"]);
  const btnBorderRadius = useTransform(smoothScrollY, [0, 600], ["28px", "48px"]);

  // Parallax drop: push the button down the screen so it meets the Flywheel sooner
  const btnY = useTransform(smoothScrollY, [0, 600], [0, 300]);

  // The button text fades out
  const textOpacity = useTransform(smoothScrollY, [0, 300], [1, 0]);

  // The BRAIN hub text fades in inside the button
  const hubTextOpacity = useTransform(smoothScrollY, [300, 600], [0, 1]);

  // Hero text fades out naturally as we scroll
  const heroOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);

  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background">

      <Navigation />

      <main className="flex-grow relative">

        {/* THE CINEMATIC PAYLOAD TRACK */}
        {/* This track spans from the Hero down exactly to the center of the Flywheel rings. */}
        <div className="absolute top-[65vh] left-0 right-0 h-[calc(35vh+444px)] pointer-events-none z-50">
          {/* The sticky wrapper catches the button at 50vh and locks it in the center of the viewport */}
          <div className="sticky top-[50vh] flex justify-center items-center pointer-events-auto">
            <motion.button
              style={{
                width: btnWidth,
                height: btnHeight,
                borderRadius: btnBorderRadius,
                y: btnY,
              }}
              className="relative flex items-center justify-center bg-gradient-to-br from-[#0059bb] to-[#006875] backdrop-blur-md shadow-[0_0_40px_rgba(0,89,187,0.4)] transition-colors cursor-pointer border border-white/20 overflow-hidden group"
              onClick={() => {
                window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
              }}
            >
              {/* Original Button Text */}
              <motion.span
                className="absolute whitespace-nowrap font-bold text-white text-[18px] tracking-wide"
                style={{ opacity: textOpacity }}
              >
                Explore Our Pillars
              </motion.span>

              {/* The Hub Text that appears once it becomes the Flywheel center */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: hubTextOpacity }}
              >
                <span className="font-heading text-[22px] font-extrabold text-white mb-0 leading-none">BRAIN</span>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* 1. Cinematic Hero Section (Normal Scroll Flow) */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover dark:brightness-75" src="/hero-bg.mp4" />
            {/* Dark overlay for white text contrast */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            {/* Bottom gradient fade into the next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-80% to-background/10 to-100% z-10" />
          </div>

          {/* Hero Content */}
          <motion.div
            className="relative z-20 text-center px-8 max-w-5xl mx-auto -mt-32"
            style={{ opacity: heroOpacity }}
          >
            <h1 className="font-heading text-[48px] md:text-[72px] leading-tight font-extrabold text-white tracking-tight drop-shadow-lg">
              Building a <span className="text-primary-fixed-dim">knowledge-driven</span> future for Bihar.
            </h1>
          </motion.div>
        </section>

        {/* 2. Knowledge-to-Impact Flywheel Section (Normal Scroll Flow) */}
        <section className="relative min-h-[120vh] py-32 overflow-hidden bg-background">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#001a41] to-transparent pointer-events-none z-0 opacity-10" />

          <div className="max-w-7xl mx-auto px-8 relative z-10 pt-40">
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-heading text-[36px] md:text-[42px] font-bold text-on-surface mb-6"
              >
                The Knowledge-to-Impact Flywheel
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="font-body-md text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
              >
                Our ecosystem thrives on a continuous cycle of research, capacity building, and enterprise integration.
              </motion.p>
            </div>

            {/* Flywheel Interactive UI */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              className="relative w-full max-w-[900px] mx-auto flex items-center justify-center min-h-[400px] mb-32"
            >
              {/* Orbital Rings Container (Forced Perfect Square to prevent elliptical pulsating) */}
              <div
                className="absolute m-auto pointer-events-none flex items-center justify-center z-0"
                style={{ width: "min(95vw, 400px)", height: "min(95vw, 400px)" }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                  className="absolute inset-0 md:inset-6 rounded-full border-[2px] border-secondary/40 border-dashed border-t-transparent border-b-transparent"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="absolute inset-8 md:inset-12 rounded-full border-[6px] border-primary/30 border-dashed border-l-transparent border-r-transparent"
                />
              </div>

              {/* The sticky button from above perfectly lands exactly in the center of these rings! */}

              {/* Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-[120px] md:gap-y-8 relative z-20 w-full group/flywheel">
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
                    <motion.div variants={nodeVariants} key={pillar.id} className="relative z-10 w-full max-w-[240px] mx-auto transition-all duration-500 group-hover/flywheel:opacity-30 hover:!opacity-100 hover:z-40">
                      {/* Outer wrapper handles continuous floating to prevent transform conflicts */}
                      <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        className="h-full"
                      >
                        {/* Inner wrapper handles interactive hover scaling & hardware acceleration */}
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            y: -10,
                            transition: { type: "spring", stiffness: 600, damping: 20 }
                          }}
                          style={{ willChange: "transform" }}
                          className="h-full transform-gpu"
                        >
                          <Link href={links[index]} className="block h-full">
                            <div className={`glass-panel p-6 rounded-[24px] bg-white dark:bg-black/80 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group h-full flex flex-col`}>
                              <div className={`w-12 h-12 rounded-full ${style.bg} flex items-center justify-center mb-4 ${style.text} group-hover:scale-110 ${style.hoverBg} group-hover:text-white transition-all`}>
                                <span className="material-symbols-outlined">{icons[index]}</span>
                              </div>
                              <h3 className="font-heading text-lg font-bold text-on-surface mb-2 leading-tight">{shortName}</h3>
                              <p className="text-[13px] leading-relaxed text-on-surface-variant flex-grow line-clamp-3">
                                <span className="font-semibold text-on-surface">{pillar.items[0]?.title}:</span> {pillar.items[0]?.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Snippet */}
        <section className="py-32 relative bg-background mt-32">
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
              <h2 className="font-heading text-[36px] font-bold text-on-surface mb-6">Connecting the Dots for Bihar</h2>
              <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed mb-10 max-w-3xl mx-auto">
                The BRAIN Foundation serves as the ultimate connective platform. We bring together academic rigor, pragmatic policymaking, and dynamic grassroots communities to co-create sustainable, inclusive growth across the state.
              </p>
              <Link href="/about">
                <button className="px-10 py-4 rounded-full text-[16px] font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Read Our Story
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
