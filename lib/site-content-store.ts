'use client';

import { useEffect, useState } from 'react';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '@/lib/admin-auth';

export type Specialist = {
  id: string;
  name: string;
  role: string;
  imageSeed: string;
  bio: string;
  quote?: string;
};

export type BlogStory = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSeed: string;
  category: string;
  articleUrl?: string;
};

export type InstagramMediaItem = {
  url: string;
  title: string;
  caption: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export type HomeAboutContent = {
  badge: string;
  title: string;
  highlight: string;
  description1: string;
  description2: string;
  highlights: string[];
  founderName: string;
  founderRole: string;
  imageSeed: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CtaContent = {
  title: string;
  highlight: string;
  description: string;
  inputPlaceholder: string;
  buttonLabel: string;
};

export type AboutContent = {
  heroSubtitle: string;
  facilityImage: string;
  facilityTitle: string;
  facilitySubtitle: string;
  storyLabel: string;
  storyTitle: string;
  storyHighlight: string;
  paragraph1: string;
  paragraph2: string;
  coreValues: string[];
};

export type ContactContent = {
  heroSubtitle: string;
  introTitle: string;
  introDescription: string;
  addressLines: string[];
  phoneDisplay: string;
  phoneLink: string;
  email: string;
  hoursLine1: string;
  hoursLine2: string;
  mapEmbedUrl: string;
};

export type FooterContent = {
  brandLine1: string;
  brandLine2: string;
  description: string;
  instagramUrl: string;
  facebookUrl: string;
  whatsappUrl: string;
  servicesLinks: { label: string; href: string }[];
  privacyPolicyUrl: string;
  termsUrl: string;
  copyrightText: string;
};

export type SiteContentStore = {
  hero: HeroContent;
  homeAbout: HomeAboutContent;
  cta: CtaContent;
  specialists: Specialist[];
  blogStories: BlogStory[];
  instagramMedia: InstagramMediaItem[];
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
};

export type StoreSaveResult = {
  ok: boolean;
  mode: 'remote' | 'local';
  message: string;
};

const STORAGE_KEY = 'celebrity-glow.site-content.v1';
const STORE_UPDATED_EVENT = 'site-content-store-updated';
const REMOTE_LOAD_URL = '/api/load-site-content.php';
const REMOTE_SAVE_URL = '/api/save-site-content.php';

async function extractRemoteError(response: Response) {
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      const data = await response.json();
      if (data && typeof data.message === 'string' && data.message.trim()) {
        return data.message.trim();
      }
    } catch {
      return `Remote endpoint returned invalid JSON (HTTP ${response.status}).`;
    }
  }

  try {
    const text = (await response.text()).trim();
    if (text) {
      return `Remote endpoint returned non-JSON output (HTTP ${response.status}): ${text.slice(0, 140)}`;
    }
  } catch {
    return `Remote endpoint failed with HTTP ${response.status}.`;
  }

  return `Remote endpoint failed with HTTP ${response.status}.`;
}

const defaultStore: SiteContentStore = {
  hero: {
    eyebrow: 'Your Wellness is Our Priority',
    titleLine1: 'Embrace Your',
    titleHighlight: 'Natural Elegance',
    description: 'Experience world-class skin and hair care at our brand new clinic in the heart of Banjara Hills.',
    primaryCtaLabel: 'Explore Services',
    primaryCtaHref: '#services',
    secondaryCtaLabel: 'Find Our Venue',
    secondaryCtaHref: '#contact',
  },
  homeAbout: {
    badge: 'About Our Clinic',
    title: 'Where Science Meets',
    highlight: 'Luxury Care',
    description1:
      'Located in the prestigious neighborhood of Banjara Hills, Hyderabad, Celebrity Glow by Akshaya is your premier destination for transformative aesthetic care. Directed by expert cosmetologist Akshaya Tammavarapu, our clinic blends medical-grade diagnostics with a luxurious wellness experience.',
    description2:
      'Whether you seek advanced laser therapies, rejuvenating hydra facials, targeted acne and pigmentation solutions, or holistic weight loss therapy, our state-of-the-art facility offers personalized treatments designed to deliver visible, celebrity-like results.',
    highlights: ['Expert Cosmetology', 'Advanced Laser Tech', 'Holistic Wellness', 'Premium Location'],
    founderName: 'Our Doctors Team',
    founderRole: 'Dermatologists & Cosmetologists',
    imageSeed: 'https://www.shutterstock.com/image-photo/indian-asian-young-3-member-600nw-2605819425.jpg',
    ctaLabel: 'Discover Our Services',
    ctaHref: '/treatments',
  },
  cta: {
    title: 'Become a',
    highlight: 'VIP Member',
    description: 'Subscribe to get exclusive offers and early access to our luxury packages.',
    inputPlaceholder: 'Your Email Address',
    buttonLabel: 'Subscribe',
  },
  specialists: [
    {
      id: 'dr-akshaya',
      name: 'Dr. Akshaya Tammavarapu',
      role: 'Founder & Lead Dermatologist',
      imageSeed: '/akshaya-about.jpeg',
      bio: 'With over a decade of experience in aesthetic medicine, Dr. Akshaya specializes in advanced anti-aging treatments and facial contouring.',
      quote: 'Dedicated to your natural beauty.',
    },
  ],
  blogStories: [
    {
      id: 'secret-to-glass-skin',
      title: 'The Secret Behind Celebrity Glass Skin',
      excerpt: 'Discover the daily routines and professional treatments that give celebrities their flawless, reflective complexion.',
      date: 'March 10, 2026',
      author: 'Dr. Akshaya',
      imageSeed: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800',
      category: 'Skincare',
      articleUrl: '#',
    },
    {
      id: 'laser-hair-removal-myths',
      title: 'Busting 5 Myths About Laser Hair Removal',
      excerpt: 'Is it painful? Does it work on all skin types? We answer your most pressing questions about laser hair reduction.',
      date: 'March 5, 2026',
      author: 'Dr. Vikram Rao',
      imageSeed: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
      category: 'Treatments',
      articleUrl: '#',
    },
    {
      id: 'anti-aging-in-your-30s',
      title: 'Why You Should Start Anti-Aging Treatments in Your 30s',
      excerpt: 'Prevention is better than cure. Learn why early intervention with injectables and skin boosters yields the best long-term results.',
      date: 'February 28, 2026',
      author: 'Dr. Akshaya',
      imageSeed: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
      category: 'Aesthetics',
      articleUrl: '#',
    },
    {
      id: 'prp-vs-exosomes',
      title: 'PRP vs. Exosomes: Which Hair Restoration is Right for You?',
      excerpt: 'A deep dive into the two most popular non-surgical hair restoration therapies available today.',
      date: 'February 15, 2026',
      author: 'Dr. Neha Sharma',
      imageSeed: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
      category: 'Hair Care',
      articleUrl: '#',
    },
  ],
  instagramMedia: [
    {
      url: 'https://www.instagram.com/p/DV4_LzME2L8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DV4_LzME2L8',
      caption: 'Latest clinical update and wellness insight.',
    },
    {
      url: 'https://www.instagram.com/p/DVyNtVgk32P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVyNtVgk32P',
      caption: 'Advanced treatment highlights from our clinic.',
    },
    {
      url: 'https://www.instagram.com/p/DVxsXu4DzRn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVxsXu4DzRn',
      caption: 'Patient-centered care and result-driven protocols.',
    },
    {
      url: 'https://www.instagram.com/reel/DVtMHlnk21r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Reel DVtMHlnk21r',
      caption: 'Behind the scenes of premium aesthetic care.',
    },
    {
      url: 'https://www.instagram.com/p/DVsKCXMD6Ub/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVsKCXMD6Ub',
      caption: 'Focused dermatology guidance and practical tips.',
    },
    {
      url: 'https://www.instagram.com/p/DVqowCgk2jK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVqowCgk2jK',
      caption: 'Wellness content curated by our specialists.',
    },
    {
      url: 'https://www.instagram.com/p/DVnLrsLEUqY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVnLrsLEUqY',
      caption: 'Clinical excellence with luxury patient experience.',
    },
    {
      url: 'https://www.instagram.com/reel/DVlcWZHkyLT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Reel DVlcWZHkyLT',
      caption: 'Quick care reels and educational snippets.',
    },
    {
      url: 'https://www.instagram.com/reel/DVgFANTkTKg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Reel DVgFANTkTKg',
      caption: 'Treatment walkthrough from consultation to result.',
    },
    {
      url: 'https://www.instagram.com/reel/DVfI9QEk-2n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Reel DVfI9QEk-2n',
      caption: 'Holistic skin and hair care media spotlight.',
    },
    {
      url: 'https://www.instagram.com/p/DVeGNH3k0P4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVeGNH3k0P4',
      caption: 'Real patient journeys and authentic outcomes.',
    },
    {
      url: 'https://www.instagram.com/p/DVd2-WlkkH5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVd2-WlkkH5',
      caption: 'Evidence-based aesthetics with modern technology.',
    },
    {
      url: 'https://www.instagram.com/p/DVdwm2aEvle/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Post DVdwm2aEvle',
      caption: 'Your beauty, elevated with precision and care.',
    },
    {
      url: 'https://www.instagram.com/reel/DVaKanpkiU1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Reel DVaKanpkiU1',
      caption: 'Short-form updates from our expert team.',
    },
  ],
  about: {
    heroSubtitle: 'Discover the story, vision, and expertise behind Celebrity Glow by Akshaya.',
    facilityImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    facilityTitle: 'State-of-the-art Facility',
    facilitySubtitle: 'Located in the heart of Banjara Hills',
    storyLabel: 'Our Story',
    storyTitle: 'Redefining Aesthetics',
    storyHighlight: 'in Hyderabad',
    paragraph1:
      'Celebrity Glow by Akshaya was founded with a singular vision: to bring world-class, celebrity-level aesthetic treatments to everyone. We believe that true beauty is about enhancing your natural features, not changing who you are.',
    paragraph2:
      'Our clinic combines cutting-edge technology, medical expertise, and a luxurious environment to provide an unparalleled experience. From advanced laser therapies to bespoke facial treatments, every service is tailored to your unique skin and hair needs.',
    coreValues: [
      'Patient-Centric Approach: Your safety and satisfaction are our top priorities.',
      'Medical Excellence: Treatments performed by certified, experienced professionals.',
      'Innovation: We constantly update our technology and techniques.',
      'Transparency: Honest consultations with realistic expectations.',
    ],
  },
  contact: {
    heroSubtitle: "We're here to answer your questions and help you book your next appointment.",
    introTitle: 'Get in Touch',
    introDescription: "Whether you're ready to book a consultation or just have a few questions about our treatments, our team is ready to assist you.",
    addressLines: ['1B, First floor, SriRajNivas, Road No: 3, Banjara Hills', "Back side to 'KORA BY NM'", 'Hyderabad, Telangana 500034'],
    phoneDisplay: '+91 63005 33593',
    phoneLink: 'https://wa.me/+919963226911',
    email: 'celebrityglowbyakshaya@gmail.com',
    hoursLine1: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    hoursLine2: 'Sunday: 11:00 AM - 5:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.5126596659954!2d78.44425539345639!3d17.426554944591533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910041cd58e9%3A0x4c4cde388ab1496c!2sCelebrity%20Glow%20by%20Akshaya!5e0!3m2!1sen!2sin!4v1773562940055!5m2!1sen!2sin',
  },
  footer: {
    brandLine1: 'CELEBRITY GLOW',
    brandLine2: 'by Akshaya',
    description: 'Premier Skin, Hair and Wellness clinic dedicated to revealing your inner beauty through medical excellence.',
    instagramUrl: '#',
    facebookUrl: '#',
    whatsappUrl: 'https://wa.me/+919963226911',
    servicesLinks: [
      { label: 'Hydra Facial', href: '/treatments/details?slug=hydra-facial' },
      { label: 'Pico Laser Treatment', href: '/treatments/details?slug=pico-laser-treatment' },
      { label: 'Laser Hair Removal', href: '/treatments/details?slug=laser-hair-removal' },
      { label: 'Botox Treatment', href: '/treatments/details?slug=botox-treatment' },
    ],
    privacyPolicyUrl: '#',
    termsUrl: '#',
    copyrightText: '© 2024 Celebrity Glow by Akshaya. All Rights Reserved.',
  },
};

function normalizeStringArray(input: unknown, fallback: string[]): string[] {
  if (!Array.isArray(input)) {
    return fallback;
  }

  const next = input
    .filter((item): item is string => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean);

  return next.length ? next : fallback;
}

function normalizeStore(input: Partial<SiteContentStore> | null | undefined): SiteContentStore {
  if (!input) {
    return defaultStore;
  }

  const next: SiteContentStore = {
    ...defaultStore,
    ...input,
    hero: { ...defaultStore.hero, ...(input.hero ?? {}) },
    homeAbout: {
      ...defaultStore.homeAbout,
      ...(input.homeAbout ?? {}),
      highlights: normalizeStringArray(input.homeAbout?.highlights, defaultStore.homeAbout.highlights),
    },
    cta: { ...defaultStore.cta, ...(input.cta ?? {}) },
    about: {
      ...defaultStore.about,
      ...(input.about ?? {}),
      coreValues: normalizeStringArray(input.about?.coreValues, defaultStore.about.coreValues),
    },
    contact: {
      ...defaultStore.contact,
      ...(input.contact ?? {}),
      addressLines: normalizeStringArray(input.contact?.addressLines, defaultStore.contact.addressLines),
    },
    footer: {
      ...defaultStore.footer,
      ...(input.footer ?? {}),
      servicesLinks: Array.isArray(input.footer?.servicesLinks)
        ? input.footer.servicesLinks.filter(
            (item): item is { label: string; href: string } =>
              Boolean(item) && typeof item.label === 'string' && typeof item.href === 'string'
          )
        : defaultStore.footer.servicesLinks,
    },
    specialists: Array.isArray(input.specialists)
      ? input.specialists.filter(
          (item): item is Specialist =>
            Boolean(item) &&
            typeof item.id === 'string' &&
            typeof item.name === 'string' &&
            typeof item.role === 'string' &&
            typeof item.imageSeed === 'string' &&
            typeof item.bio === 'string'
        )
      : defaultStore.specialists,
    blogStories: Array.isArray(input.blogStories)
      ? input.blogStories.filter(
          (item): item is BlogStory =>
            Boolean(item) &&
            typeof item.id === 'string' &&
            typeof item.title === 'string' &&
            typeof item.excerpt === 'string' &&
            typeof item.date === 'string' &&
            typeof item.author === 'string' &&
            typeof item.imageSeed === 'string' &&
            typeof item.category === 'string'
        )
      : defaultStore.blogStories,
    instagramMedia: Array.isArray(input.instagramMedia)
      ? input.instagramMedia.filter(
          (item): item is InstagramMediaItem =>
            Boolean(item) && typeof item.url === 'string' && typeof item.title === 'string' && typeof item.caption === 'string'
        )
      : defaultStore.instagramMedia,
  };

  next.footer.servicesLinks = next.footer.servicesLinks.map((item) => {
    if (item.href.startsWith('/treatments/') && !item.href.startsWith('/treatments/details?slug=')) {
      const slug = item.href.replace('/treatments/', '').trim();
      return {
        ...item,
        href: slug ? `/treatments/details?slug=${slug}` : '/treatments',
      };
    }

    return item;
  });

  if (next.homeAbout.ctaLabel.trim().toLowerCase() === 'discover our services' && next.homeAbout.ctaHref === '/about') {
    next.homeAbout.ctaHref = '/treatments';
  }

  return next;
}

export function loadSiteContentStore(): SiteContentStore {
  if (typeof window === 'undefined') {
    return defaultStore;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultStore;
    }

    return normalizeStore(JSON.parse(raw));
  } catch {
    return defaultStore;
  }
}

function persistLocalSiteContentStore(nextStore: SiteContentStore) {
  if (typeof window === 'undefined') {
    return;
  }

  const normalized = normalizeStore(nextStore);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(STORE_UPDATED_EVENT));
}

async function loadRemoteSiteContentStore(): Promise<SiteContentStore | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const response = await fetch(`${REMOTE_LOAD_URL}?ts=${Date.now()}`, {
      cache: 'no-store',
    });
    const contentType = response.headers.get('content-type') ?? '';

    if (!response.ok || !contentType.includes('application/json')) {
      return null;
    }

    const data = normalizeStore(await response.json());
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch {
    return null;
  }
}

export async function saveSiteContentStore(nextStore: SiteContentStore): Promise<StoreSaveResult> {
  if (typeof window === 'undefined') {
    return {
      ok: false,
      mode: 'local',
      message: 'Site content cannot be saved outside the browser.',
    };
  }

  const normalized = normalizeStore(nextStore);
  persistLocalSiteContentStore(normalized);

  try {
    const response = await fetch(REMOTE_SAVE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: ADMIN_USERNAME,
        password: ADMIN_PASSWORD,
        payload: normalized,
      }),
    });
    const contentType = response.headers.get('content-type') ?? '';

    if (!response.ok) {
      const remoteMessage = await extractRemoteError(response);
      return {
        ok: true,
        mode: 'local',
        message: `Saved in this browser only. ${remoteMessage}`,
      };
    }

    if (!contentType.includes('application/json')) {
      return {
        ok: true,
        mode: 'local',
        message: 'Saved in this browser only. PHP endpoint did not return JSON. Check whether PHP is enabled for /api/*.php on cPanel.',
      };
    }

    const payload = await response.json();
    return {
      ok: true,
      mode: 'remote',
      message:
        payload && typeof payload.message === 'string' && payload.message.trim()
          ? payload.message.trim()
          : 'Site content published to the live site.',
    };
  } catch (error) {
    return {
      ok: true,
      mode: 'local',
      message: `Saved in this browser only. Live sync failed: ${error instanceof Error ? error.message : 'unknown error'}`,
    };
  }
}

export function resetSiteContentStore() {
  return saveSiteContentStore(defaultStore);
}

export function useSiteContentStore() {
  const [store, setStore] = useState<SiteContentStore>(defaultStore);

  useEffect(() => {
    const refreshLocal = () => setStore(loadSiteContentStore());
    const refreshRemote = async () => {
      const remote = await loadRemoteSiteContentStore();
      if (remote) {
        setStore(remote);
        return;
      }

      refreshLocal();
    };
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void refreshRemote();
      }
    };

    refreshLocal();
    void refreshRemote();
    window.addEventListener(STORE_UPDATED_EVENT, refreshLocal);
    window.addEventListener('storage', refreshLocal);
    window.addEventListener('focus', refreshRemote);
    document.addEventListener('visibilitychange', handleVisibility);

    const intervalId = window.setInterval(() => {
      void refreshRemote();
    }, 15000);

    return () => {
      window.removeEventListener(STORE_UPDATED_EVENT, refreshLocal);
      window.removeEventListener('storage', refreshLocal);
      window.removeEventListener('focus', refreshRemote);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.clearInterval(intervalId);
    };
  }, []);

  return {
    store,
    setStore: (nextStore: SiteContentStore) => saveSiteContentStore(nextStore),
    resetStore: resetSiteContentStore,
  };
}
