import React from 'react';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

// PortableText Custom Components for better styling
const ptComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-extrabold text-on-surface mb-6 mt-12">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-on-surface mb-5 mt-10">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-on-surface mb-4 mt-8">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg text-on-surface-variant leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-on-surface bg-on-surface/5 rounded-r-lg">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-8 mb-6 space-y-2 text-lg text-on-surface-variant">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-8 mb-6 space-y-2 text-lg text-on-surface-variant">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-on-surface">{children}</strong>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline decoration-2 underline-offset-2">
          {children}
        </a>
      );
    },
  },
};

// Helper for displaying dates nicely
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export default async function PublicationPage({ params }: Props) {
  // Await the params before accessing them (Next.js 15+ requirement)
  const resolvedParams = await params;
  
  const query = `*[_type == "publication" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug: resolvedParams.slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <header className="relative pt-32 pb-24 overflow-hidden border-b border-white/10 dark:border-white/5">
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            {/* Category and Tags */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <span className="text-[13px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                {post.category}
              </span>
              {post.tags?.map((tag: string, i: number) => (
                <span key={i} className="text-[13px] font-medium text-on-surface-variant border border-on-surface-variant/20 px-3 py-1.5 rounded-full bg-surface/50 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-h1 text-[48px] md:text-[64px] leading-tight font-extrabold text-on-surface mb-8 tracking-tight">
              {post.title}
            </h1>
            
            {/* Excerpt as subtitle */}
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                {post.excerpt}
              </p>
            )}

            {/* Metadata (Author & Date) */}
            <div className="flex justify-center items-center gap-6 text-on-surface-variant font-medium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {post.author?.charAt(0) || "B"}
                </div>
                <span className="text-[16px] text-on-surface">{post.author || "BRAIN Team"}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40" />
              <span className="text-[16px]">{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </header>

        {/* Article Content Container */}
        <article className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-12 px-4 md:px-0 text-on-surface-variant dark:text-gray-300">
            {post.content ? (
              <PortableText value={post.content} components={ptComponents} />
            ) : (
              <p className="text-center text-on-surface-variant italic">No content available for this publication.</p>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
