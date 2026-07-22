import { readdir } from "node:fs/promises";
import path from "node:path";
import GalleryGrid from "./gallery-grid";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Photos from SecurityLink's operations, training sessions and client engagements across Bangladesh.",
  alternates: { canonical: "/gallery" },
};

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

function seededShuffle(array, seed) {
  const arr = [...array];
  let s = seed;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const CAPTION_TITLES = [
  "Always Committed",
  "Safeguarding What Matters",
  "Keeping Premises Safe",
  "Thinking Ahead",
  "Dedicated to Duty",
  "Precision and Discipline",
  "Reliable Under Pressure",
  "Standards Without Compromise",
  "Strength in Numbers",
  "Trust Earned Daily",
  "Protecting What Matters",
  "Vigilance in Action",
  "Readiness at All Times",
  "Committed to Excellence",
  "Always at Your Service",
  "Your Security Our Priority",
  "Guarding with Purpose",
  "Steady and Alert",
  "Prepared for Anything",
  "A Force You Can Trust",
  "Discipline Defines Us",
  "Strength Through Training",
  "Built on Integrity",
  "Securing Your World",
  "Watchful Eyes Steady Hands",
  "Defending What Matters",
  "Resilience Under Pressure",
  "Committed Beyond Duty",
  "Professionalism in Every Detail",
  "Confidence in Every Post",
  "Dedication You Can See",
  "Strength in Every Step",
  "Reliability You Can Count On",
  "Precision in Every Action",
  "Unwavering Commitment",
  "Your Peace of Mind",
  "Always One Step Ahead",
  "Security You Can Rely On",
  "Focused on What Matters",
  "Where Vigilance Meets Discipline",
  "Preparedness is Our Standard",
  "Dependable When It Counts",
  "Strength Discipline Trust",
  "Your Safety Our Mission",
  "Always Ready Always Strong",
  "Guarding with Integrity",
  "Precision Over Everything",
  "A Tradition of Trust",
  "Committed to Your Safety",
  "Unmatched Dedication",
  "Steadfast Protection",
  "Excellence in Every Shift",
  "Vigilant Always",
  "Secure by Design",
  "Trust Built Over Time",
  "Discipline and Honour",
  "Strength You Can Depend On",
  "Protecting with Precision",
  "Readiness Defines Us",
  "Always Alert Always Ready",
  "Your Trust Our Strength",
  "Dedication Beyond Compare",
  "Security with a Human Touch",
  "Precision Trust Action",
  "Where Duty Meets Discipline",
  "Always at the Ready",
  "Dependable Protection",
  "Strength in Every Detail",
  "Committed to Your Peace of Mind",
  "Guarding with Honour",
  "Professionalism You Can Count On",
  "Reliability in Every Post",
  "Your Security Matters",
  "Always Vigilant Always Strong",
  "Precision in Protection",
  "Trusted by Many",
  "Dedication That Shows",
  "Secure Foundations",
  "Steadfast in Service",
  "Defending with Pride",
  "Strength and Stability",
  "Committed to the Cause",
  "Your Safety First",
  "Always Ready to Serve",
  "We Never Look Away",
  "Security Runs Deep",
  "Your Guard Never Drops",
  "Always on Point",
  "No Room for Error",
  "Your Shield Always Ready",
];

const CAPTION_SUBTITLES = [
  "because only a satisfied employee can satisfy a client",
  "trained, documented, and checked — that is the standard",
  "customized training, careful team building, constant monitoring",
  "established to make a difference",
  "every task documented and trained against, post by post",
  "field officers periodically inspect to assess performance",
  "3-week programme including 1-week induction at post",
  "survey, assessment and designing of security plan",
  "life and property protected around the clock",
  "responsive to client feedback at every level",
  "systematic performance management across all posts",
  "employee welfare and motivational aspects",
  "dual-layer hierarchy at ground level",
  "police verification and documentation for every member",
  "briefing before every deployment",
  "corrective training based on client feedback",
  "physical and self-defense training",
  "covering 5 main subjects for security personnel",
  "promotion awarded to deserving candidates",
  "a profit share scheme to develop sense of ownership",
  "round the clock response to customers",
  "use of modern technology and methodology",
  "full compliance with government regulations",
  "effective evaluation system for every team member",
  "careful recruitment by experienced executives",
  "professional development at every level",
  "designed through exhaustive survey and assessment",
  "daily visits ensure compliance with standards",
  "structured assessments of guard performance",
  "strategic sessions addressing emerging challenges",
  "quality maintained through constant supervision",
  "quality service is our foundation",
  "every component integrated into one plan",
  "documented and trained against, every single post",
  "continuous skill development for every guard",
  "we believe quality takes time to develop",
  "the difference between a guard and a guard you can rely on",
  "not rapid growth — systematic and slow progression",
  "every guard meets exacting standards",
  "deployed to plants, factories and corporate premises",
  "security solution designed for the client",
  "integrated security counter measures",
  "maximum security from every component",
  "procedures developed for every individual",
  "tasks articulated in clear language",
  "supervised, documented and accountable",
  "a guard on a payroll versus a guard you can rely on",
  "suited to each site, each shift, each day",
  "experienced management staff on security operations",
  "sufficient depth in management",
  "maintenance of honesty, integrity and commitment",
  "responding to clients feedback",
  "quality human resources recruited with care",
  "ownership among employees through profit share",
  "making a difference in the security industry",
  "safety and security of life and property",
  "security personnel with experience and discipline",
  "from selection through training to deployment",
  "monitoring performance at every level",
  "feedback collected from clients regularly",
  "subsequent training bridges the gap",
  "headquarters keeps an eye on performance",
  "security executives contact client as needed",
  "indoor and outdoor training facilities",
  "training led by experienced directors",
  "over 80 batches of guard training supervised",
  "selective in appointing training staff",
  "highly experienced with security industry exposure",
  "quality service backed by years of dedication",
  "every post secured with precision and care",
  "discipline is the foundation of our strength",
  "protection built on trust and experience",
  "always prepared, never complacent",
  "your safety drives everything we do",
  "where commitment meets consistency",
  "strength forged through rigorous training",
  "a reputation earned through performance",
  "vigilance that never sleeps",
  "ready for every challenge",
  "precision in every deployment",
  "trust is our greatest asset",
  "dedication that speaks through action",
  "security rooted in professionalism",
  "always alert, never off guard",
  "your property, our responsibility",
  "standing guard with pride",
  "where action meets accountability",
  "performance that speaks for itself",
  "every moment counts, every action matters",
  "consistency is our signature",
];

function buildCaption(index) {
  const title = CAPTION_TITLES[index % CAPTION_TITLES.length];
  const subtitle = CAPTION_SUBTITLES[index % CAPTION_SUBTITLES.length];
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

  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  const shuffled = seededShuffle(uniqueImages, seed);

  const images = shuffled.map((image, index) => ({
    ...image,
    caption: buildCaption(index),
  }));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020816] pt-30 pb-16">
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