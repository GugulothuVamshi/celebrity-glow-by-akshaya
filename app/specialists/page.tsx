'use client';

/* eslint-disable @next/next/no-img-element */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { useSiteContentStore } from '@/lib/site-content-store';

export default function SpecialistsPage() {
  const { store } = useSiteContentStore();

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="bg-[var(--navy)] text-white py-20 text-center">
        <h1 className="font-sans text-4xl md:text-6xl mb-4 font-bold">Our <span className="rosegold-text">Specialists</span></h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">
          Meet the experts behind your transformation.
        </p>
      </div>

      <div className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {store.specialists.map((specialist) => (
              <div key={specialist.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[var(--rosegold)]/10 group">
                <div className="relative h-96 w-full overflow-hidden">
                  <img
                    src={specialist.imageSeed}
                    alt={specialist.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm italic">&quot;{specialist.quote ?? 'Dedicated to your natural beauty.'}&quot;</p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-sans text-2xl font-bold text-[var(--navy)] mb-2">{specialist.name}</h3>
                  <p className="text-[var(--rosegold)] text-xs uppercase tracking-widest font-semibold mb-6">{specialist.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {specialist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
