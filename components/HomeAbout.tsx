"use client";

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useSiteContentStore } from '@/lib/site-content-store';

export default function HomeAbout() {
  const { store } = useSiteContentStore();
  const homeAbout = store.homeAbout;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[var(--gold)]/20">
            <img
              src={homeAbout.imageSeed}
              alt="Advanced aesthetic treatment session"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-8 right-6 bg-white/95 backdrop-blur-sm border-l-4 border-[var(--gold)] px-8 py-6 rounded-sm shadow-xl">
            <p className="font-sans text-4xl leading-none font-semibold text-[var(--navy)]">{homeAbout.founderName}</p>
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[var(--gold-deep)] font-bold">{homeAbout.founderRole}</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--gold-deep)] mb-4 font-semibold">
            {homeAbout.badge}
          </p>
          <h2 className="font-sans text-4xl md:text-6xl leading-tight text-[var(--navy)] font-semibold mb-6">
            <span className="italic">{homeAbout.title}</span> <span className="rosegold-text italic">{homeAbout.highlight}</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {homeAbout.description1}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            {homeAbout.description2}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {homeAbout.highlights.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-[var(--navy)] shadow-[0_0_0_4px_rgba(214,168,56,0.18)]" />
                <span className="text-xl font-semibold text-[var(--navy)]">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href={homeAbout.ctaHref}
            className="inline-block px-10 py-4 uppercase tracking-[0.25em] text-sm font-semibold border border-[var(--gold)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--gold-bright)] transition-colors"
          >
            {homeAbout.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
