import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchGrid from '@/components/ResearchGrid';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // optionally revalidate every 60 seconds

export default async function ResearchPage() {
  // Fetch publications from Sanity
  const query = `*[_type == "publication"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    author,
    publishedAt,
    excerpt,
    tags
  }`;
  
  const publications = await client.fetch(query);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <Navigation />

      <main className="flex-grow pt-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-h1 text-[56px] leading-tight font-extrabold text-on-surface mb-6 tracking-tight">
              Research & <span className="text-primary">Publications</span>
            </h1>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Explore our data-driven profiles, actionable policy notes, and in-depth studies aimed at bridging the gap between rigorous research and grassroots reality in Bihar.
            </p>
          </div>

          <ResearchGrid initialPublications={publications} />

        </div>
      </main>
      
      <div className="z-10 relative mt-auto">
        <Footer />
      </div>
    </div>
  );
}
