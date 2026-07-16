"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = activeIndex !== null;

  useEffect(() => setMounted(true), []);

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
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 [column-fill:_balance]">
        {images.map((image, index) => (
          <figure key={image.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full overflow-hidden rounded-md bg-gradient-to-b from-slate-100 to-slate-300 p-2 shadow-[0_12px_30px_rgba(2,6,23,0.55)] outline-none ring-1 ring-slate-900/40 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={`Open image: ${image.caption.title}`}
            >
              <span className="block overflow-hidden rounded-sm border border-slate-900/20 bg-slate-900">
                <Image
                  src={image.src}
                  alt={image.caption.title}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
              </span>
            </button>
            <figcaption className="px-1 pt-3 text-center">
              <span className="block text-sm font-semibold tracking-wide text-slate-100">
                {image.caption.title}
              </span>
              <span className="mt-0.5 block text-xs italic text-slate-400">
                {image.caption.subtitle}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {isOpen && activeImage && mounted
        ? createPortal(
            <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-200"
            aria-label="Close"
          >
            <span className="text-lg leading-none">&times;</span>
            Close
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-3xl leading-none text-white shadow-xl transition hover:bg-blue-500 md:left-8"
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
            className="absolute right-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-3xl leading-none text-white shadow-xl transition hover:bg-blue-500 md:right-8"
            aria-label="Next image"
          >
            &#8250;
          </button>

          <figure
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="block rounded-md bg-gradient-to-b from-slate-100 to-slate-300 p-3 shadow-2xl ring-1 ring-slate-900/40">
              <span className="block overflow-hidden rounded-sm border border-slate-900/20 bg-slate-900">
                <Image
                  src={activeImage.src}
                  alt={activeImage.caption.title}
                  width={1600}
                  height={1600}
                  sizes="92vw"
                  className="max-h-[78vh] w-auto object-contain"
                  priority
                />
              </span>
            </span>
            <figcaption className="mt-4 text-center">
              <span className="block text-base font-semibold tracking-wide text-white">
                {activeImage.caption.title}
              </span>
              <span className="mt-1 block text-sm italic text-slate-300">
                {activeImage.caption.subtitle}
              </span>
            </figcaption>
          </figure>
        </div>,
            document.body
          )
        : null}
    </>
  );
}
