'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSiteContentStore } from '@/lib/site-content-store';

export default function ContactPage() {
  const { store } = useSiteContentStore();
  const contact = store.contact;

  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="bg-[var(--navy)] text-white py-20 text-center">
        <h1 className="font-sans text-4xl md:text-6xl mb-4 font-bold">Contact <span className="rosegold-text">Us</span></h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">
          {contact.heroSubtitle}
        </p>
      </div>

      <div className="flex-grow py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-sans text-3xl font-bold text-[var(--navy)] mb-6">{contact.introTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {contact.introDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[var(--rosegold)]/30 text-[var(--rosegold)] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Visit Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {contact.addressLines.map((line) => (
                      <span key={line}>
                        {line}<br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[var(--rosegold)]/30 text-[var(--rosegold)] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm">
                    <a href={contact.phoneLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--rosegold)] transition-colors">{contact.phoneDisplay}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[var(--rosegold)]/30 text-[var(--rosegold)] shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm">
                    <a href={`mailto:${contact.email}`} className="hover:text-[var(--rosegold)] transition-colors">{contact.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-[var(--rosegold)]/30 text-[var(--rosegold)] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">Opening Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {contact.hoursLine1}<br />
                    {contact.hoursLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-[var(--rosegold)]/20">
            <h3 className="font-sans text-2xl font-bold text-[var(--navy)] mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">First Name</label>
                  <input type="text" id="firstName" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[var(--rosegold)] transition-colors text-[var(--navy)]" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Last Name</label>
                  <input type="text" id="lastName" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[var(--rosegold)] transition-colors text-[var(--navy)]" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Email Address</label>
                <input type="email" id="email" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[var(--rosegold)] transition-colors text-[var(--navy)]" placeholder="jane@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Phone Number</label>
                <input type="tel" id="phone" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[var(--rosegold)] transition-colors text-[var(--navy)]" placeholder="+91 99632 26911" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Message</label>
                <textarea id="message" rows={4} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[var(--rosegold)] transition-colors text-[var(--navy)] resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-[var(--navy)] text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-[var(--rosegold)] transition-colors mt-4">
                Send Request
              </button>
            </form>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[var(--rosegold)]/20">
            <h3 className="font-sans text-2xl font-bold text-[var(--navy)] mb-4">Clinic Location</h3>
            <div className="rounded-xl overflow-hidden border border-[var(--rosegold)]/20">
              <iframe
                title="Celebrity Glow Contact Map"
                src={contact.mapEmbedUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
