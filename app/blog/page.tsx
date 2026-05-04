'use client';

/* eslint-disable @next/next/no-img-element */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import MediaCarousel from '@/components/MediaCarousel';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { useSiteContentStore } from '@/lib/site-content-store';

export default function BlogPage() {
  const { store } = useSiteContentStore();

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="bg-[var(--navy)] text-white py-20 text-center">
        <h1 className="font-sans text-4xl md:text-6xl mb-4 font-bold">Blog/<span className="rosegold-text">Stories</span></h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">
          Expert insights, skincare tips, and the latest trends in aesthetic medicine.
        </p>
      </div>

      <div className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {store.blogStories.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--rosegold)]/10 flex flex-col h-full group">
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={post.imageSeed}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--navy)] font-semibold rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-[var(--navy)] mb-4 group-hover:text-[var(--rosegold)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.articleUrl || '#'}
                    className="inline-block text-[var(--rosegold)] uppercase tracking-widest text-xs font-bold hover:text-[var(--navy)] transition-colors mt-auto"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <MediaCarousel mode="carousel" showAllInCarousel />
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
