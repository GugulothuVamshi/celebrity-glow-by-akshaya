'use client';

/* eslint-disable @next/next/no-img-element */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { CheckCircle2 } from 'lucide-react';
import { useSiteContentStore } from '@/lib/site-content-store';

export default function AboutPage() {
  const { store } = useSiteContentStore();
  const about = store.about;

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="bg-[var(--navy)] text-white py-20 text-center">
        <h1 className="font-sans text-4xl md:text-6xl mb-4 font-bold">About <span className="rosegold-text">Us</span></h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">
          {about.heroSubtitle}
        </p>
      </div>

      <div className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={about.facilityImage}
              alt="Clinic Interior"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-2xl mb-2">{about.facilityTitle}</p>
                <p className="text-white/80 text-sm">{about.facilitySubtitle}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--rosegold)] text-xs tracking-[0.5em] uppercase mb-3 font-semibold">{about.storyLabel}</h3>
            <h2 className="font-sans text-3xl md:text-5xl mb-8 text-[var(--navy)] font-bold">
              {about.storyTitle} <span className="rosegold-text">{about.storyHighlight}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {about.paragraph1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {about.paragraph2}
            </p>

            <h3 className="font-sans text-2xl text-[var(--navy)] mb-6 font-bold">Our Core Values</h3>
            <ul className="space-y-4">
              {about.coreValues.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[var(--rosegold)] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
