// Gallery — clean, image-focused design
import Image from "next/image";

const images = [
  { src: "/logistics.JPG", alt: "Logistics operations in the field" },
  { src: "/logistics2.png", alt: "Fleet coordination and management" },
  { src: "/logistics3.png", alt: "Logistics team deployment" },
  { src: "/MD.jpg", alt: "Managing Director, Major (Retd.) Matiur Rahman" },
  { src: "/PST.png", alt: "Security training drills" },
  { src: "/pst2.png", alt: "Field training activities" },
  { src: "/recog-letter.png", alt: "Client recognition letter" },
];

export default function GalleryPage() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gallery-item {
          animation: fadeIn 0.6s ease both;
        }
        .gallery-item:hover img {
          transform: scale(1.03);
        }
      `}</style>

      <main className="pt-20 pb-16">
        {/* Hero */}
        <section className="bg-obsidian-deep py-16 md:py-24 border-b border-surface-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Visual Archive
              </span>
            </div>
            <h1 className="font-headline-xl text-4xl md:text-5xl text-on-surface uppercase tracking-tight">
              Gallery
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant mt-4 max-w-xl">
              Operations, training, and moments from the field.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-item group relative aspect-[4/3] overflow-hidden bg-surface-container-low border border-surface-border hover:border-cobalt-electric/60 transition-all duration-500"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-[0.2em] block mb-1">
                      {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </span>
                    <p className="font-body-sm text-sm text-on-surface leading-snug">
                      {img.alt}
                    </p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-cobalt-electric/40 group-hover:border-cobalt-electric transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-cobalt-electric/40 group-hover:border-cobalt-electric transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-cobalt-electric/40 group-hover:border-cobalt-electric transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-cobalt-electric/40 group-hover:border-cobalt-electric transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
