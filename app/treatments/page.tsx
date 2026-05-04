import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import Services from '@/components/Services';

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="bg-[var(--navy)] text-white py-20 text-center">
        <h1 className="font-sans text-4xl md:text-6xl mb-4">Our <span className="rosegold-text">Treatments</span></h1>
        <p className="text-white/70 max-w-2xl mx-auto px-4">
          Discover our comprehensive range of premium skin, hair, and wellness treatments designed to enhance your natural beauty.
        </p>
      </div>

      <div className="flex-grow">
        <Services />
      </div>

      <Footer />
      <FloatingContact />
    </main>
  );
}
