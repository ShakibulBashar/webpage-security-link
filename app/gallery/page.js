"use client";

import { useState, useEffect, useCallback } from "react";

// Curated set of authentic company photographs (graphics/logos excluded).
const IMAGES = [
  { src: "/group.jpg", w: 4, h: 3 },
  { src: "/md-briefing.JPG", w: 4, h: 3 },
  { src: "/hero1.jpg", w: 3, h: 4 },
  { src: "/badgegiving.JPG", w: 4, h: 3 },
  { src: "/training.png", w: 4, h: 3 },
  { src: "/international-delegation.jpg", w: 4, h: 3 },
  { src: "/hero11.jpg", w: 3, h: 4 },
  { src: "/certificate-giving.jpg", w: 4, h: 3 },
  { src: "/group2.JPG", w: 4, h: 3 },
  { src: "/management-meeting.JPG", w: 4, h: 3 },
  { src: "/hero12.JPG", w: 3, h: 4 },
  { src: "/promotion.jpeg", w: 4, h: 3 },
  { src: "/recruitment.png", w: 4, h: 3 },
  { src: "/hero13.jpg", w: 3, h: 4 },
  { src: "/internation-delegation2.jpg", w: 4, h: 3 },
  { src: "/management-monitoring.jpg", w: 4, h: 3 },
  { src: "/hero14.jpg", w: 3, h: 4 },
  { src: "/meeting.jpg", w: 4, h: 3 },
  { src: "/hero101.jpg", w: 4, h: 3 },
  { src: "/hero15.jpg", w: 3, h: 4 },
  { src: "/control-room2.jpg", w: 4, h: 3 },
  { src: "/hero16.JPG", w: 3, h: 4 },
  { src: "/logistics.JPG", w: 4, h: 3 },
  { src: "/hero3.jpg", w: 4, h: 3 },
  { src: "/MD.jpg", w: 3, h: 4 },
  { src: "/hero33.jpg", w: 4, h: 3 },
  { src: "/hero6.jpg", w: 4, h: 3 },
  { src: "/hero44.jpg", w: 3, h: 4 },
  { src: "/hero7.jpg", w: 4, h: 3 },
  { src: "/hero8.jpg", w: 4, h: 3 },
  { src: "/hero9.JPG", w: 3, h: 4 },
];

export default function GalleryPage() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <style>{`
        @keyframes gal-rise {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes gal-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes gal-zoom {
          from { transform: scale(0.94); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .gal-masonry {
          column-gap: 14px;
          columns: 1;
        }
        @media (min-width: 640px) { .gal-masonry { columns: 2; } }
        @media (min-width: 1024px) { .gal-masonry { columns: 3; } }
        @media (min-width: 1536px) { .gal-masonry { columns: 4; } }
        .gal-item {
          break-inside: avoid;
          margin-bottom: 14px;
          animation: gal-rise 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }
        .gal-overlay { animation: gal-fade 0.25s ease both; }
        .gal-figure { animation: gal-zoom 0.3s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      <main className="relative min-h-screen bg-background pt-24 pb-16">
        {/* subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-cobalt-electric/8 blur-[130px]" />
          <div className="absolute bottom-40 right-1/5 h-[360px] w-[360px] rounded-full bg-cobalt-electric/6 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="gal-masonry">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(i)}
                className="gal-item group relative block w-full cursor-zoom-in overflow-hidden border border-white/5 bg-obsidian-deep/40 outline-none focus-visible:border-cobalt-electric/60"
                style={{ animationDelay: `${Math.min(i * 45, 600)}ms` }}
                aria-label={`Open image ${i + 1} of ${IMAGES.length}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Security Link operations photograph ${i + 1}`}
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-500 ease-out grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-deep/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 border border-cobalt-electric/0 transition-colors duration-500 group-hover:border-cobalt-electric/30" />
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {active !== null && (
          <div
            className="gal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            {/* counter */}
            <span className="font-mono-data absolute left-1/2 top-5 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
              {String(active + 1).padStart(2, "0")}{" "}
              <span className="text-cobalt-electric">/</span>{" "}
              {String(IMAGES.length).padStart(2, "0")}
            </span>

            {/* close */}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/15 text-white/80 transition hover:border-cobalt-electric/60 hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            {/* prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-white/80 transition hover:border-cobalt-electric/60 hover:text-white sm:left-6"
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 text-white/80 transition hover:border-cobalt-electric/60 hover:text-white sm:right-6"
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* image */}
            <figure
              className="gal-figure relative flex max-h-[85vh] max-w-[92vw] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={IMAGES[active].src}
                src={IMAGES[active].src}
                alt={`Security Link operations photograph ${active + 1}`}
                className="max-h-[85vh] max-w-[92vw] border border-white/10 object-contain shadow-2xl"
              />
            </figure>
          </div>
        )}
      </main>
    </>
  );
}
