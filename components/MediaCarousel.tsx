'use client';

import { useSiteContentStore } from '@/lib/site-content-store';

function toEmbedPermalink(url: string) {
  try {
    const parsed = new URL(url);
    parsed.search = '';
    return parsed.toString();
  } catch {
    return url;
  }
}

type MediaCarouselProps = {
  mode?: 'carousel' | 'grid';
  showAllInCarousel?: boolean;
};

export default function MediaCarousel({ mode = 'carousel', showAllInCarousel = false }: MediaCarouselProps) {
  const { store } = useSiteContentStore();
  const instagramMedia = store.instagramMedia;
  const items = mode === 'carousel'
    ? (showAllInCarousel ? instagramMedia : instagramMedia.slice(0, 8))
    : instagramMedia;
  const renderItems = mode === 'carousel' ? [...items, ...items] : items;

  return (
    <section className="py-20 bg-[var(--cream)] border-y border-[var(--gold)]/25">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="rounded-2xl border border-[var(--gold)]/30 bg-white/95 backdrop-blur-sm px-5 py-4 shadow-[0_10px_24px_rgba(15,35,67,0.1)]">
          <p className="text-[var(--rosegold)] text-xs tracking-[0.45em] uppercase mb-2">Instagram Feed</p>
          <h3 className="font-sans text-3xl md:text-4xl text-[var(--navy)] font-semibold">
            Real-Time <span className="rosegold-text">Stories</span> & Posts
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className={mode === 'carousel' ? 'insta-carousel-wrap' : 'insta-grid'}>
          <div className={mode === 'carousel' ? 'insta-track' : 'insta-grid'}>
            {renderItems.map((item, index) => (
            <article key={`${item.url}-${index}`} className="insta-embed-shell">
              <div className="instagram-frame-wrap">
                <iframe
                  className="instagram-frame"
                  src={`${toEmbedPermalink(item.url)}embed/captioned`}
                  loading="lazy"
                  title={item.title}
                >
                </iframe>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
