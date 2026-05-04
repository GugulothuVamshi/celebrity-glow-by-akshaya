import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeAbout from '@/components/HomeAbout';
import Services from '@/components/Services';
import MediaCarousel from '@/components/MediaCarousel';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <HomeAbout />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <MediaCarousel />
      <CTA />
      <Footer showMap />
      <FloatingContact />
    </main>
  );
}
