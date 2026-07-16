"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length
    );
  }, [images.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showNext, showPrev]);

  const activeImage = isOpen ? images[activeIndex] : null;

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 md:gap-4 [column-fill:_balance]">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slate-200/15 bg-slate-900/60 shadow-[0_10px_30px_rgba(2,6,23,0.45)] outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-blue-400/70 md:mb-4"
            aria-label="Open image"
          >
            <Image
              src={image.src}
              alt=""
              width={800}
              height={800}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {isOpen && activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 md:left-6"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 md:right-6"
            aria-label="Next image"
          >
            &#8250;
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt=""
              width={1600}
              height={1600}
              sizes="92vw"
              className="max-h-[90vh] w-auto rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
