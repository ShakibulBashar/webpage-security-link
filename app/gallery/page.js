import { readdir } from "node:fs/promises";
import path from "node:path";
import Image from "next/image";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".bmp",
  ".tif",
  ".tiff",
]);

const VAGUE_CAPTIONS = [
  "Shift briefing before perimeter assignment",
  "Routine watch near the outer gate",
  "Movement tracked across the checkpoint lane",
  "Patrol team rotating after long hours",
  "Deployment prep in controlled low light",
  "Unit handover between active posts",
  "Visibility check before the next round",
  "Entry flow under close supervision",
  "Command update before field response",
  "Position held during access screening",
  "Short pause between active rounds",
  "Route confirmed prior to dispatch",
  "Coverage maintained at the outer block",
  "Brief coordination before patrol split",
  "Late shift presence at fixed post",
  "Status check during controlled access",
  "Operational silence around secured zone",
  "Perimeter line observed without interruption",
  "Guard unit staged for night cycle",
  "Monitoring point active through transition",
  "Response team aligned near the corridor",
  "Ground movement logged by field unit",
  "Transit area watched during peak flow",
  "Post maintained through uncertain visibility",
];

const CARD_PATTERNS = [
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/2]",
  "aspect-[5/4]",
  "aspect-[4/5]",
  "aspect-[6/5]",
];

function hashKey(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function toPublicSrc(folder, fileName) {
  return `/${folder}/${encodeURIComponent(fileName)}`;
}

async function getImagesFromFolder(folderName) {
  try {
    const folderPath = path.join(process.cwd(), "public", folderName);
    const files = await readdir(folderPath);

    return files
      .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
      .map((fileName) => ({
        id: `${folderName}/${fileName}`,
        src: toPublicSrc(folderName, fileName),
      }));
  } catch (error) {
    if (error && error.code !== "ENOENT") {
      console.error(`Failed to read gallery folder: ${folderName}`, error);
    }
    return [];
  }
}

export default async function GalleryPage() {
  const [imagesOne, imagesTwo, imageOneAlt, imageTwoAlt] = await Promise.all([
    getImagesFromFolder("images-1"),
    getImagesFromFolder("images-2"),
    getImagesFromFolder("image-1"),
    getImagesFromFolder("image-2"),
  ]);

  const uniqueImages = [...imagesOne, ...imagesTwo, ...imageOneAlt, ...imageTwoAlt].filter(
    (image, index, list) => list.findIndex((item) => item.id === image.id) === index
  );

  const images = uniqueImages.sort((a, b) => {
    const aHash = hashKey(a.id);
    const bHash = hashKey(b.id);
    if (aHash === bHash) {
      return a.id.localeCompare(b.id);
    }
    return aHash - bHash;
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020816] pt-20 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.18),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.14),transparent_36%),linear-gradient(to_bottom,#020816,#07162c_45%,#0a1f37_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-[1680px] px-4 md:px-6 xl:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-5">
          {images.map((image, index) => {
            const cardAspect = CARD_PATTERNS[index % CARD_PATTERNS.length];
            const caption = VAGUE_CAPTIONS[index % VAGUE_CAPTIONS.length];

            return (
              <figure
                key={image.id}
                className={`group ${cardAspect} relative overflow-hidden rounded-xl border border-slate-200/20 bg-slate-900/70 shadow-[0_16px_48px_rgba(2,6,23,0.5)]`}
              >
                <div className="absolute inset-0 p-1.5">
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-slate-300/25">
                    <Image
                      src={image.src}
                      alt={caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.86)_0%,rgba(2,6,23,0.56)_24%,rgba(2,6,23,0.16)_58%,rgba(2,6,23,0.28)_100%)]" />
                    <figcaption className="absolute inset-x-0 bottom-0 z-10 border-t border-slate-200/25 bg-slate-950/65 px-3 py-2.5 text-[12px] font-semibold tracking-[0.02em] text-slate-100 backdrop-blur-sm md:px-4 md:text-[13px]">
                      {caption}
                    </figcaption>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
