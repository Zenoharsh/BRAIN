import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-panel !rounded-none !border-x-0 !border-b-0 border-t border-outline-variant/30 mt-auto bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand & Social */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-h3 text-2xl font-bold text-on-surface mb-4">BRAIN Foundation</h4>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
              Knowledge-to-Impact: From rigorous research to tangible rural transformation. Building a knowledge-driven future for Bihar.
            </p>
            
            {/* Social Media Placeholders */}
            <div className="flex gap-4 mt-auto">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-surface-dim dark:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors" aria-label={social}>
                  {social === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h5 className="font-heading font-bold text-on-surface mb-6 uppercase tracking-wider text-sm">Quick Links</h5>
            <div className="flex flex-col gap-4">
              <Link href="/" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
              <Link href="/research" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Research</Link>
              <Link href="/grassroots" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Grassroots</Link>
            </div>
          </div>

          {/* Column 3: Initiatives */}
          <div className="md:col-span-2">
            <h5 className="font-heading font-bold text-on-surface mb-6 uppercase tracking-wider text-sm">Initiatives</h5>
            <div className="flex flex-col gap-4">
              <Link href="/bihar-mart" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Bihar Mart</Link>
              <Link href="/heritage-tours" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Heritage Tours</Link>
            </div>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="md:col-span-4">
            <h5 className="font-heading font-bold text-on-surface mb-6 uppercase tracking-wider text-sm">Registered Office</h5>
            <address className="not-italic font-body-md text-sm text-on-surface-variant leading-relaxed">
              <p className="font-semibold text-on-surface mb-1">Bihar Rejuvenation and Innovation Network (BRAIN) Foundation</p>
              <p>39, Bardokhar, Halsi, Konag</p>
              <p>Lakhisarai – 811311</p>
              <p className="mb-4">Bihar, India</p>
              <p>
                <span className="font-semibold text-on-surface">Email: </span>
                <a href="mailto:brainfoundationbihar@gmail.com" className="hover:text-primary transition-colors">brainfoundationbihar@gmail.com</a>
              </p>
            </address>
          </div>
          
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-xs text-on-surface-variant">
            © {new Date().getFullYear()} BRAIN Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
