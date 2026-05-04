'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTreatmentsStore } from '@/lib/treatments-store';

function ServicesContent() {
  const { store, categories } = useTreatmentsStore();
  const [manualFilter, setManualFilter] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const queryFilter = useMemo(() => {
    const category = searchParams.get('category');
    if (!category) {
      return null;
    }

    return categories.find((item) => item.toLowerCase() === category.toLowerCase()) ?? null;
  }, [searchParams, categories]);

  const activeFilter = manualFilter ?? queryFilter ?? 'ALL';

  const filteredTreatments = activeFilter === 'ALL' 
    ? store.treatments
    : store.treatments.filter(t => t.type === activeFilter);

  return (
    <section id="services" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-[var(--rosegold)] text-xs tracking-[0.5em] uppercase mb-3">
          Our Expertise
        </h3>
        <h2 className="font-sans text-4xl md:text-5xl mb-12 text-[var(--navy)] font-bold">
          Premium <span className="rosegold-text">Treatments</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((type) => (
            <button
              key={type}
              onClick={() => setManualFilter(type)}
              className={`px-4 py-2 text-xs md:text-sm tracking-wider uppercase transition-all duration-300 border ${
                activeFilter === type
                  ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                  : 'bg-transparent text-[var(--navy)] border-[var(--rosegold)]/30 hover:border-[var(--rosegold)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTreatments.map((service) => (
            <Link href={`/treatments/details?slug=${encodeURIComponent(service.id)}`} key={service.id}>
              <div className="group service-card bg-white overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 text-left h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.imageSeed}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--navy)] font-semibold rounded">
                    {service.type}
                  </div>
                </div>
                <div className="p-6 relative flex-grow flex flex-col">
                  <div className="absolute -top-8 left-6 w-12 h-1 bg-[var(--rosegold)]"></div>
                  <h4 className="font-sans text-lg font-medium text-[var(--navy)] mb-3 group-hover:text-[var(--rosegold)] transition-colors line-clamp-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <span className="text-xs text-[var(--rosegold)] uppercase tracking-wider font-semibold mt-auto flex items-center gap-2">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Link 
            href="/treatments" 
            className="inline-block border border-[var(--navy)] text-[var(--navy)] px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[var(--navy)] hover:text-white transition duration-300"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<section id="services" className="py-24 bg-[var(--cream)]" />}>
      <ServicesContent />
    </Suspense>
  );
}
