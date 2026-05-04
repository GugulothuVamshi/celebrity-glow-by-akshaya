'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
import { useTreatmentsStore } from '@/lib/treatments-store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { store } = useTreatmentsStore();
  const categories = store.categories;

  return (
    <>
      <nav className="bg-[var(--cream)] fixed top-0 left-0 right-0 z-40 shadow-sm border-b border-[var(--rosegold)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.png?v=20260315"
                  alt="Celebrity Glow by Akshaya logo"
                  width={300}
                  height={96}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium items-center">
              <Link href="/" className="nav-link text-[var(--navy)]">Home</Link>
              <Link href="/about" className="nav-link text-[var(--navy)]">About</Link>

              <div className="relative group">
                <Link href="/treatments" className="nav-link text-[var(--navy)] flex items-center gap-1">
                  Treatments
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-72 bg-white/95 backdrop-blur-sm border border-[var(--gold)]/30 rounded-xl p-3 shadow-2xl">
                    {categories.map((type) => (
                      <Link
                        key={type}
                        href={`/treatments?category=${encodeURIComponent(type)}`}
                        className="block rounded-md px-3 py-2 text-xs tracking-[0.18em] text-[var(--navy)] hover:bg-[var(--gold)]/15 hover:text-[var(--gold-deep)] transition-colors"
                      >
                        {type}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/specialists" className="nav-link text-[var(--navy)]">Specialists</Link>
              <Link href="/blog" className="nav-link text-[var(--navy)]">Blog/Stories</Link>
              <Link href="/contact" className="nav-link text-[var(--navy)]">Contact Us</Link>
            </div>

            <div className="hidden md:block">
              <a
                href="https://wa.me/+919963226911"
                className="btn-luxury text-xs tracking-[0.2em] font-semibold uppercase"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[var(--navy)]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-24 left-0 right-0 bg-[var(--cream)] border-t border-[var(--rosegold)]/20 py-4 px-4 space-y-4 z-30 shadow-sm">
            <Link href="/" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">Home</Link>
            <Link href="/about" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">About</Link>
            <Link href="/treatments" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">Treatments</Link>
            <div className="pl-3 border-l-2 border-[var(--gold)]/40 space-y-2">
              {categories.map((type) => (
                <Link
                  key={type}
                  href={`/treatments?category=${encodeURIComponent(type)}`}
                  className="block text-xs uppercase tracking-[0.2em] text-[var(--navy)]/85"
                >
                  {type}
                </Link>
              ))}
            </div>
            <Link href="/specialists" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">Specialists</Link>
            <Link href="/blog" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">Blog/Stories</Link>
            <Link href="/contact" className="block text-sm uppercase tracking-widest font-medium text-[var(--navy)]">Contact Us</Link>
          </div>
        )}
      </nav>
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
