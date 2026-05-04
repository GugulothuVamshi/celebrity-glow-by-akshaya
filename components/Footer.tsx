'use client';

import Image from 'next/image';
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useSiteContentStore } from '@/lib/site-content-store';

type FooterProps = {
  showMap?: boolean;
};

export default function Footer({ showMap = false }: FooterProps) {
  const { store } = useSiteContentStore();
  const contact = store.contact;
  const footer = store.footer;

  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex flex-col mb-6">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo.png?v=20260315"
                  alt={`${footer.brandLine1} ${footer.brandLine2} logo`}
                  width={300}
                  height={96}
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={footer.instagramUrl}
                className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full hover:border-[var(--rosegold)] hover:text-[var(--rosegold)] transition text-gray-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={footer.facebookUrl}
                className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full hover:border-[var(--rosegold)] hover:text-[var(--rosegold)] transition text-gray-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={footer.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full hover:border-[var(--rosegold)] hover:text-[var(--rosegold)] transition text-gray-400"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-sans text-xl mb-6 text-[#1A2E44]">Quick Links</h5>
            <ul className="text-sm space-y-4 text-gray-500">
              <li>
                <Link href="/treatments" className="hover:text-[var(--rosegold)] transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--rosegold)] transition">
                  The Clinic
                </Link>
              </li>
              <li>
                <Link href="/specialists" className="hover:text-[var(--rosegold)] transition">
                  Expert Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--rosegold)] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-xl mb-6 text-[#1A2E44]">Services</h5>
            <ul className="text-sm space-y-4 text-gray-500">
              {footer.servicesLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="hover:text-[var(--rosegold)] transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-xl mb-6 text-[#1A2E44]">Contact Us</h5>
            <ul className="text-sm space-y-4 text-gray-500">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-[var(--rosegold)] flex-shrink-0" />
                <span>
                  {contact.addressLines[0]}{contact.addressLines[1] ? ', ' : ''} <br />
                  {contact.addressLines[1] ?? ''}{contact.addressLines[2] ? ', ' : ''} {contact.addressLines[2] ?? ''}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--rosegold)] flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--rosegold)] flex-shrink-0" />
                <a href={contact.phoneLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--rosegold)] transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {showMap && (
          <div className="mb-16">
            <h5 className="font-sans text-xl mb-4 text-[#1A2E44]">Find Us on Map</h5>
            <div className="rounded-xl overflow-hidden border border-[var(--rosegold)]/20 shadow-lg">
              <iframe
                title="Celebrity Glow Clinic Location"
                src={contact.mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
          <p>{footer.copyrightText}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={footer.privacyPolicyUrl}>Privacy Policy</a>
            <a href={footer.termsUrl}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
