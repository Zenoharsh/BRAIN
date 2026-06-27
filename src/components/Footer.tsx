import React from 'react';

export default function Footer() {
  return (
    <footer className="glass-panel !rounded-none !border-x-0 !border-b-0">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h4 className="font-h3 text-xl font-semibold text-on-surface mb-4">BRAIN Foundation</h4>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            © {new Date().getFullYear()} Bihar Research And Innovation Network (BRAIN) Foundation. Knowledge-to-Impact: From rigorous research to tangible rural transformation.
          </p>
        </div>
        <div className="md:col-span-3 flex flex-wrap md:justify-end gap-12">
          <div className="flex flex-col gap-3">
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Research & Policy</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Rural Transformation</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Bihar Mart</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Heritage Tours</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Impact Flywheel</a>
            <a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
