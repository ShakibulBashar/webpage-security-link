import { readdir } from "node:fs/promises";
import path from "node:path";
import GalleryGrid from "./gallery-grid";

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

function hashKey(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const CAPTION_TITLES = [
  "Quiet Horizon",
  "Golden Drift",
  "Still Frame",
  "Soft Light Study",
  "Wandering Mood",
  "Faded Memory",
  "Open Air",
  "Muted Tones",
  "Passing Moment",
  "Gentle Contrast",
  "Distant Calm",
  "Warm Static",
  "Slow Afternoon",
  "Loose Thoughts",
  "Hidden Corner",
  "Late Glow",
];

const CAPTION_SUBTITLES = [
  "captured somewhere between here and there",
  "a small scene, no story attached",
  "just the vibe, nothing more",
  "light doing its own thing",
  "found, framed, and left alone",
  "a mood more than a place",
  "half a memory, half a guess",
  "kept simple on purpose",
];

function buildCaption(id) {
  const key = hashKey(id);
  const title = CAPTION_TITLES[key % CAPTION_TITLES.length];
  const subtitle = CAPTION_SUBTITLES[(key >> 3) % CAPTION_SUBTITLES.length];
  return { title, subtitle };
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
  const [imagesOne, imagesTwo] = await Promise.all([
    getImagesFromFolder("images-1"),
    getImagesFromFolder("images-2"),
  ]);

  const uniqueImages = [...imagesOne, ...imagesTwo].filter(
    (image, index, list) => list.findIndex((item) => item.id === image.id) === index
  );

  const sorted = uniqueImages.sort((a, b) => {
    const aHash = hashKey(a.id);
    const bHash = hashKey(b.id);
    if (aHash === bHash) {
      return a.id.localeCompare(b.id);
    }
    return aHash - bHash;
  });

  const images = sorted.map((image) => ({
    ...image,
    caption: buildCaption(image.id),
  }));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020816] pt-20 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,0.18),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.14),transparent_36%),linear-gradient(to_bottom,#020816,#07162c_45%,#0a1f37_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-[1680px] px-4 md:px-6 xl:px-10">
        <GalleryGrid images={images} />
      </section>
    </main>
  );
}
