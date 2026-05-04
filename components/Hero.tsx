"use client";

import { useSiteContentStore } from '@/lib/site-content-store';

export default function Hero() {
  const { store } = useSiteContentStore();
  const hero = store.hero;

  return (
    <section className="hero-gradient min-h-[85vh] flex items-center justify-center text-center px-4 relative">
      <div className="max-w-4xl">
        <h2 className="text-rose-200 text-sm md:text-lg tracking-[0.4em] uppercase mb-4 animate-pulse">
          {hero.eyebrow}
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-sans">
          {hero.titleLine1} <br />
          <span className="rosegold-text italic">{hero.titleHighlight}</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {hero.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href={hero.primaryCtaHref}
            className="bg-gold text-white px-8 py-4 rounded-none uppercase tracking-widest text-sm font-bold shadow-xl hover:opacity-90 transition"
          >
            {hero.primaryCtaLabel}
          </a>
          <a
            href={hero.secondaryCtaHref}
            className="border border-white text-white px-8 py-4 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-[#1A2E44] transition"
          >
            {hero.secondaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
