"use client";

import { useSiteContentStore } from '@/lib/site-content-store';

export default function CTA() {
  const { store } = useSiteContentStore();
  const cta = store.cta;

  return (
    <section className="py-20 bg-[#1A2E44] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-sans text-3xl md:text-5xl mb-6">
          {cta.title} <span className="rosegold-text">{cta.highlight}</span>
        </h2>
        <p className="text-white/60 mb-10 text-lg">
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder={cta.inputPlaceholder}
            className="bg-white/10 border border-white/20 px-6 py-4 focus:outline-none focus:border-gold w-full sm:w-80"
          />
          <button className="bg-gold text-white px-8 py-4 uppercase tracking-widest font-bold hover:opacity-90 transition">
            {cta.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
