import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css'; // Global styles
import PageTransition from '@/components/PageTransition';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Celebrity Glow by Akshaya | Premium Skin, Hair & Wellness Clinic in Hyderabad',
  description: 'Explore advanced skin, facials, aesthetics, hair, peels, men-specific treatments, and wellness programs at Celebrity Glow by Akshaya in Banjara Hills, Hyderabad.',
  keywords: [
    'Skin Clinic Hyderabad',
    'Dermatology Consultation Jubilee Hills',
    'Pico Laser Treatment',
    'Hydra Facial',
    'Vampire Facial PRP',
    'Botox Treatment',
    'Thread Lift Treatment',
    'Laser Hair Removal',
    'Chemical Peels',
    'Exosome Regenerative Therapy',
    'Celebrity Glow',
    'Akshaya Clinic'
  ],
  openGraph: {
    title: 'Celebrity Glow by Akshaya | Skin, Hair, Aesthetics & Wellness',
    description: 'Discover category-wise treatments including SKIN, FACIALS, AESTHETICS, HAIR, PEELS, TREATMENTS FOR MEN, and WELLNESS in Hyderabad.',
    url: 'https://celebrityglow.in',
    siteName: 'Celebrity Glow by Akshaya',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Celebrity Glow Clinic Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrity Glow by Akshaya | Skin, Hair, Aesthetics & Wellness',
    description: 'Category-wise treatment care in Hyderabad: skin, facials, aesthetics, hair, peels, men-specific services, and wellness programs.',
    images: ['https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
