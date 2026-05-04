'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { useTreatmentsStore } from '@/lib/treatments-store';

function TreatmentDetailsContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') ?? '';
  const { store } = useTreatmentsStore();
  const treatment = store.treatments.find((item) => item.id === slug);

  if (!treatment) {
    return (
      <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-grow max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="font-sans text-3xl md:text-5xl text-[var(--navy)] font-bold mb-4">Treatment Not Found</h1>
          <p className="text-gray-600 mb-8">This treatment may have been removed or renamed from the admin panel.</p>
          <Link href="/treatments" className="inline-block bg-[var(--navy)] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[var(--rosegold)] transition-colors">
            Back to Treatments
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="relative h-[40vh] md:h-[50vh] w-full bg-[var(--navy)]">
          <img
            src={treatment.imageSeed}
            alt={treatment.title}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-4xl">
              <span className="text-[var(--rosegold)] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-semibold">
                {treatment.type}
              </span>
              <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold">
                {treatment.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <Link href="/treatments" className="inline-flex items-center text-[var(--navy)] hover:text-[var(--rosegold)] transition-colors mb-12 uppercase tracking-widest text-xs font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Treatments
          </Link>

          <div className="bg-white p-8 md:p-12 shadow-xl border border-[var(--rosegold)]/10 rounded-lg">
            <h2 className="font-sans text-2xl md:text-3xl text-[var(--navy)] mb-6 font-bold">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">{treatment.description}</p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">{treatment.detailedDescription}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-sans text-xl text-[var(--navy)] mb-6 flex items-center font-bold">
                  <span className="w-8 h-px bg-[var(--rosegold)] mr-4"></span>
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[var(--rosegold)] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--cream)] p-8 rounded-lg border border-[var(--rosegold)]/20">
                <h3 className="font-sans text-xl text-[var(--navy)] mb-4 font-bold">Book Your Session</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Ready to experience the transformation? Schedule a consultation with our experts today.
                </p>
                <a
                  href="https://wa.me/+919963226911"
                  className="block w-full text-center bg-[var(--navy)] text-white px-6 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[var(--rosegold)] transition-colors"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}

export default function TreatmentDetailsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[var(--cream)]" />}>
      <TreatmentDetailsContent />
    </Suspense>
  );
}
