//Homepage code
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------------- */
/* Small self-contained line icons — no external icon set dependency */
/* ---------------------------------------------------------------- */
const iconProps = (c) => ({
  viewBox: "0 0 32 32",
  className: c,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const CameraGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <rect x="5" y="11" width="17" height="10" rx="3" />
    <circle cx="19" cy="16" r="3" />
    <path d="M22 13l5-2v10l-5-2" />
  </svg>
);
const FingerprintGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M16 10a6 6 0 0 1 6 6v3M9 16v3a6 6 0 0 0 3 5.2M12 9.4A8 8 0 0 1 27 16v4M12.5 27A8 8 0 0 1 8 20v-1" />
  </svg>
);
const FlameGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M16 6c2.5 3 3.5 5.5 3.5 8a3.5 3.5 0 0 1-7 0c0-1.1.5-2 1.3-3 .4.8.7 1.2 1.2 1.2.8 0 .9-1.2.9-3z" />
  </svg>
);
const BroomGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M20 6 8 26" />
    <path d="M8 26l-2 2M8 26l4-1M6 24l4 1" />
    <path d="M20 6l6 6" />
  </svg>
);
const ShieldGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M16 4l10 4v8c0 6.5-4.3 10.8-10 12-5.7-1.2-10-5.5-10-12V8z" />
    <path d="M11 16l3.5 3.5L21 12" />
  </svg>
);
const RadarGlyph = ({ className }) => (
  <svg {...iconProps(className)}>
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="1.3" fill="currentColor" />
    <path d="M16 16 25 9" />
  </svg>
);

export default function Home() {
  useEffect(() => {
    const slideDelay = 10000;

    // --- 1. HERO SLIDER ---
    const heroSlides = document.querySelectorAll(".hero-slider-item");
    let currentHeroSlide = 0;

    function nextHeroSlide() {
      if (heroSlides.length) {
        heroSlides[currentHeroSlide].classList.remove("active");
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add("active");
      }
      setTimeout(nextHeroSlide, slideDelay);
    }
    setTimeout(nextHeroSlide, slideDelay);

    // --- 2. ELITE GUARDING BACKGROUND SLIDER ---
    const eliteSlides = document.querySelectorAll(".elite-slider-item");
    let currentEliteSlide = 0;

    function nextEliteSlide() {
      if (eliteSlides.length) {
        eliteSlides[currentEliteSlide].classList.remove("active");
        currentEliteSlide = (currentEliteSlide + 1) % eliteSlides.length;
        eliteSlides[currentEliteSlide].classList.add("active");
      }
      setTimeout(nextEliteSlide, slideDelay);
    }
    setTimeout(nextEliteSlide, slideDelay);
  }, []);

  const heroImages = [
    "/hero1.jpg",
    "/hero3.jpg",
    "/hero6.jpg",
    "/hero9.JPG",
    "/hero11.jpg",
    "/hero13.jpg",
    "/hero14.jpg",
    "/hero15.jpg",
    "/hero16.jpg",
  ];

  const divisions = [
    {
      index: "01",
      name: "Guard Division",
      desc: "Physical security for offices, corporate campuses and industrial premises, plus event coverage and dedicated guard training.",
      href: "/services/guard",
      visual: { type: "photo", src: "/hero16.JPG", alt: "SecurityLink guard formation" },
    },
    {
      index: "02",
      name: "Risk Management",
      desc: "Threat surveys, security plan design, consultancy, investigation and executive-level training.",
      href: "/services/risk-management",
      visual: {
        type: "photo",
        src: "/hero13.jpg",
        alt: "SecurityLink officer conducting a vehicle inspection",
      },
    },
    {
      index: "03",
      name: "Security Equipment",
      desc: "CCTV, access control, fire detection and scanning systems — specified, supplied and integrated.",
      href: "/services/equipments",
      visual: { type: "icons", icons: [CameraGlyph, FingerprintGlyph, FlameGlyph] },
    },
    {
      index: "04",
      name: "Logistic Division",
      desc: "Cleaning services for industrial facilities, hospitals and corporate offices, run by the same trained workforce.",
      href: "/services/logistics",
      visual: { type: "icons", icons: [BroomGlyph] },
    },
  ];

  const process = [
    { n: "01", title: "Survey", desc: "Threat & vulnerability assessment of the premises." },
    {
      n: "02",
      title: "Design",
      desc: "Guards, CCTV, access control and alarms, combined into one plan.",
    },
    { n: "03", title: "Post Order", desc: "Every task documented and trained against, post by post." },
    { n: "04", title: "Supervise", desc: "Field Officers inspect, clients are heard, gaps get closed." },
  ];

  const credentials = [
    { label: "CPP", detail: "ASIS International, Managing Director" },
    { label: "NTMC", detail: "Security system design, Armed Forces Division" },
    { label: "ASIS Chairman", detail: "ASIS International, Bangladesh chapter" },
    { label: "C-110972/13", detail: "Certificate of Incorporation" },
  ];

  const clients = [
    "BEXIMCO",
    "NTMC",
    "KAFCO",
    "LAFARGE",
    "CARE BANGLADESH",
    "DHAKA STOCK EXCHANGE",
    "Northeast Medical",
    "Samuda Chittagong",
    "Kazi Abedin",
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* HERO SECTION — keep exactly as-is */}
      <main className="relative min-h-screen pt-20 pb-3 flex flex-col items-center justify-end overflow-hidden">
        {/* Hero Slider Background */}
        <div className="absolute top-20 inset-x-0 bottom-0 z-0" id="hero-slider">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`hero-slider-item ${idx === 0 ? "active" : ""}`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div
            className="absolute inset-0 pointer-events-none opacity-20 z-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(37, 99, 235, 0.1) 1px, rgba(37, 99, 235, 0.1) 2px)",
              backgroundSize: "100% 4px",
            }}
          />
        </div>

        {/* HUD Content */}
        <div className="relative z-30 w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
          <div className="text-center max-w-4xl pb-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-10">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cobalt-electric" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cobalt-electric" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cobalt-electric rounded-full" />
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-6xl text-white uppercase tracking-tighter mb-5 leading-[0.95] drop-shadow-2xl">
              Securing Capital, <br />
              <span className="text-cobalt-electric">Enterprise</span>, and Key Infrastructure
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services/guard" className="inline-block bg-cobalt-electric text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] rounded-none">
                Guard Division Services
              </a>
              <a href="/services/logistics" className="inline-block border-2 border-on-surface/30 text-on-surface px-8 py-3 font-bold text-base uppercase tracking-widest hover:bg-on-surface hover:text-obsidian-deep transition-all backdrop-blur-md rounded-none">
                 Logistic Division Services
              </a>
            </div>
          </div>

          {/* Bottom HUD Data Feeds */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 border-x-3 border-b-3 border-cobalt-electric/40 px-6 py-3 relative backdrop-blur-sm bg-background/40">
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-3 border-l-3 border-cobalt-electric" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-3 border-r-3 border-cobalt-electric" />
            <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
              <span className="font-mono-data text-3xl text-on-surface font-extrabold">400+</span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                Security Personnel
              </span>
            </div>
            <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
              <span className="font-mono-data text-3xl text-on-surface font-bold">13 YRS</span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                Excellence
              </span>
            </div>
            <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
              <span className="font-mono-data text-3xl text-on-surface font-bold">100%</span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                Compliance
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono-data text-3xl text-on-surface font-bold text-cobalt-electric animate-pulse">
                LIVE
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                Threat Intel
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════════ */}
      {/* THE STANDARD — manifesto split + kinetic ticker   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background border-t border-surface-border overflow-hidden">
        <style>{`
    @keyframes ticker-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .ticker-track { animation: ticker-scroll 22s linear infinite; }
    .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
  `}</style>

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Our Standard
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface uppercase tracking-tight leading-[1.1] mt-6">
                We don&apos;t just deploy guards.
                <br />
                <span className="text-cobalt-electric">We deploy a standard</span> &mdash; trained,
                documented, and checked.
              </h2>
              <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mt-8 max-w-xl">
                Customised training, careful team building, constant monitoring and an evaluation system
                that actually holds people to it &mdash; that&apos;s the difference between a guard on a
                payroll and a guard you can rely on.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] border border-cobalt-electric/40 overflow-hidden">
                <Image
                  src="/hero16.JPG"
                  alt="SecurityLink guard team standing in formation"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* kinetic value ticker */}
        <div className="border-y border-surface-border bg-obsidian-deep py-5 ticker-wrap">
          <div className="ticker-track flex items-center gap-10 w-max">
            {[...Array(2)].map((_, rep) =>
              ["TRAINED", "SUPERVISED", "EVALUATED", "ACCOUNTABLE", "DOCUMENTED", "PRESENT"].map(
                (word, i) => (
                  <span key={`${rep}-${i}`} className="flex items-center gap-10">
                    <span className="font-headline-md text-lg md:text-xl text-on-surface-variant/50 uppercase tracking-wide whitespace-nowrap">
                      {word}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt-electric/60" />
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* MANIFESTO — full-bleed vision statement           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-obsidian-deep border-y border-surface-border py-28 md:py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
            Our Vision
          </span>
          <p className="font-headline-lg text-3xl md:text-5xl lg:text-6xl text-on-surface leading-[1.15] tracking-tight mt-8">
            To provide a global standard of security service to plants, factories and corporate premises
            &mdash; through skilled human resources,{" "}
            <span className="text-cobalt-electric">efficient process management</span> and system
            integration.
          </p>
          <Link
            href="/about/about-us"
            className="inline-flex items-center gap-2 font-label-caps text-sm uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors mt-12 group"
          >
            More about SecurityLink
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* PROCESS — ghost-numeral strip                     */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Our Process
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4">
                How we work
              </h2>
            </div>
            <Link
              href="/about/about-us"
              className="font-label-caps text-sm uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors"
            >
              Full process &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {process.map((step) => (
              <div key={step.n} className="relative">
                <span
                  className="font-headline-xl text-6xl md:text-7xl text-transparent select-none block leading-none"
                  style={{ WebkitTextStroke: "1px var(--color-surface-border)" }}
                >
                  {step.n}
                </span>
                <h3 className="font-headline-md text-lg text-on-surface uppercase mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* EQUIPMENT TEASER                                  */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Equipment Division
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-6">
                We solve the problem, not sell the product
              </h2>
              <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl mb-8">
                Our specialists choose the right hardware for the requirement and, where needed,
                integrate everything into a single control room.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                {[
                  { Icon: CameraGlyph, label: "CCTV" },
                  { Icon: FingerprintGlyph, label: "Access Control" },
                  { Icon: FlameGlyph, label: "Fire & Alarm" },
                  { Icon: RadarGlyph, label: "Scanning" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-6 h-6 text-cobalt-electric" />
                    <span className="font-label-caps text-xs uppercase tracking-[0.1em] text-on-surface-variant">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/equipments"
                className="inline-flex items-center gap-2 font-label-caps text-sm uppercase tracking-[0.15em] text-cobalt-electric hover:text-white transition-colors group"
              >
                Explore the Equipment Division
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-square border border-surface-border overflow-hidden">
                <Image
                  src="/hero9.JPG"
                  alt="SecurityLink officer with radio equipment on duty"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* WORKFORCE — screening tracker                     */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] border border-surface-border overflow-hidden">
                <Image
                  src="/hero14.jpg"
                  alt="SecurityLink guards standing in formation at post"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Our Workforce
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8">
                Screened five ways before day one
              </h2>

              <div className="flex flex-wrap gap-2 mb-10">
                {["Preliminary", "Physical", "Medical", "Interview", "Written"].map((stage, i) => (
                  <div key={stage} className="flex items-center">
                    <span className="border border-surface-border px-4 py-2 font-label-caps text-xs uppercase tracking-[0.1em] text-on-surface-variant">
                      {stage}
                    </span>
                    {i < 4 && <span className="w-4 h-px bg-surface-border mx-1" />}
                  </div>
                ))}
              </div>

              <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                Candidates who pass go into a minimum three-week training programme &mdash; starting with
                a full week of induction directly at post &mdash; before they&apos;re trusted with a
                client&apos;s premises.
              </p>
              <Link
                href="/s&t/selection"
                className="inline-flex items-center gap-2 font-label-caps text-sm uppercase tracking-[0.15em] text-cobalt-electric hover:text-white transition-colors group"
              >
                Selection & Training
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CREDENTIALS — ribbon                              */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            <div className="md:w-64 shrink-0">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                On the Record
              </span>
              <h2 className="font-headline-md text-xl text-on-surface uppercase tracking-tight mt-3">
                Credentials
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {credentials.map((c) => (
                <div key={c.label} className="border-l border-surface-border pl-4">
                  <span className="font-mono-data text-lg text-cobalt-electric font-bold block">
                    {c.label}
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant leading-snug mt-1 block">
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-surface-border">
            <Link
              href="/about/md"
              className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors"
            >
              Managing Director&apos;s Profile &rarr;
            </Link>
            <Link
              href="/about/achievements"
              className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors"
            >
              Achievements & Recognition &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CLIENTS — marquee                                 */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 flex items-center justify-between">
          <span className="font-mono-data text-xs text-on-surface-variant uppercase tracking-[0.2em]">
            Client Engagements
          </span>
          <Link
            href="/gallery"
            className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors"
          >
            Photo Gallery &rarr;
          </Link>
        </div>
        <div className="marquee-wrap relative">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface-variant/40 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CLOSING CTA                                       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative border-t border-surface-border overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero11.jpg"
            alt="SecurityLink team on duty at a client site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface uppercase tracking-tight mb-6">
            Let&apos;s survey your premises
          </h2>
          <p className="font-body-md text-base md:text-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
            No obligation, no generic quote &mdash; just an honest look at where your risk actually sits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
          >
            Request a Site Survey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
