//Homepage code
"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const slideDelay = 10000;

    // --- 1. HERO SLIDER ---
    const heroSlides = document.querySelectorAll(".hero-slider-item");
    let currentHeroSlide = 2;

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
    "/hero1.jpg", "/hero3.jpg",
    "/hero6.jpg",   "/hero9.JPG", 
    "/hero11.jpg",  "/hero13.jpg", "/hero14.jpg", "/hero15.jpg",
    "/hero16.jpg", 
  ];

  return (
    <>
      {/* HERO SECTION — keep exactly as-is */}
      <main className="relative min-h-screen pt-20 pb-3 flex flex-col items-center justify-end overflow-hidden">
        {/* Hero Slider Background */}
        <div className="absolute top-20 inset-x-0 bottom-0 z-0" id="hero-slider">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`hero-slider-item ${idx === 2 ? "active" : ""}`}
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
              <button className="bg-cobalt-electric text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] rounded-none">
                Initiate Protocol
              </button>
              <button className="border-2 border-on-surface/30 text-on-surface px-8 py-3 font-bold text-base uppercase tracking-widest hover:bg-on-surface hover:text-obsidian-deep transition-all backdrop-blur-md rounded-none">
                View Service Matrix
              </button>
            </div>
          </div>

          {/* Bottom HUD Data Feeds */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 border-x-3 border-b-3 border-cobalt-electric/40 px-6 py-3 relative backdrop-blur-sm bg-background/40">
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-3 border-l-3 border-cobalt-electric" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-3 border-r-3 border-cobalt-electric" />
            <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
              <span className="font-mono-data text-3xl text-on-surface font-extrabold">500+</span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                Fleet Units
              </span>
            </div>
            <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
              <span className="font-mono-data text-3xl text-on-surface font-bold">15 YRS</span>
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

      {/* ─────────────────────────────────────────────── */}
      {/* SERVICE FRAMEWORK — Our four operational divisions */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep px-12 md:px-[48px] py-24 border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">
            Service Framework
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4 uppercase">
            Four Operational Divisions
          </h2>
          <p className="text-on-surface-variant font-body-md mt-4 max-w-2xl">
            SecurityLink Ltd. delivers complete security solutions through four dedicated
            divisions, each staffed and trained to a single standard of service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">
                shield
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                Guard Division
              </h3>
              <p className="text-on-surface-variant max-w-md">
                Physical security for life and property at offices, corporate campuses and
                industrial premises, plus event management and dedicated security training for guards.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <a
                className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors"
                href="/services/guard"
              >
                View Guard Division
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              {heroImages.map((img, idx) => (
                <Image
                  key={`elite-${idx}`}
                  src={img}
                  alt="Security professional uniform detail"
                  fill
                  sizes="50vw"
                  className={`object-cover elite-slider-item ${idx === 0 ? "active" : ""}`}
                  priority={idx < 2}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-5 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">
                fact_check
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                Risk Management Division
              </h3>
              <p className="text-on-surface-variant">
                Risk assessment, threat surveys and the design of a client-specific security plan,
                backed by security consultancy, investigation and executive-level training.
              </p>
            </div>
            <div className="mt-8">
              <a
                className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors"
                href="/services/risk-management"
              >
                View Risk Management
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">
                videocam
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                Security Equipment Division
              </h3>
              <p className="text-on-surface-variant">
                CCTV, access control, visitor management, fire detection &amp; alarm systems and
                scanning devices, integrated and installed in a cost-effective way for the client.
              </p>
            </div>
            <div className="mt-8">
              <a
                className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors"
                href="/equipment"
              >
                View Equipment Division
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-surface-container-low">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl">local_shipping</span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">
                  Logistic Division
                </h3>
                <p className="text-on-surface-variant max-w-xl">
                  Cleaning services covering industrial facilities, hospitals and corporate
                  offices, delivered by the same trained and supervised workforce standard.
                </p>
              </div>
            </div>
            <a
              href="/services/logistics"
              className="bg-on-surface text-obsidian-deep px-8 py-3 font-bold uppercase tracking-wider whitespace-nowrap hover:bg-cobalt-electric hover:text-white transition-all rounded-none inline-block text-center"
            >
              View Logistics
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* VISION & STRENGTHS */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="border border-surface-border bg-surface-container-low p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cobalt-electric" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cobalt-electric" />
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-4 block">Our Vision</span>
              <p className="font-headline-md text-on-surface text-xl md:text-2xl leading-snug">
                To provide global standard security services to plants, factories and corporate
                premises through skilled human resources, efficient process management and
                system integration.
              </p>
            </div>

            <div>
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-2 block">Why SecurityLink</span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mb-6 uppercase">Our Strengths</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-on-surface-variant font-body-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Sufficient depth in management
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Experienced management staff on security operations
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Employee welfare program
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Compliance with all Government regulations
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Quality training
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Constant supervision
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Systematic performance management system
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Use of modern technology and methodology
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Round-the-clock response to customers
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-base mt-0.5">check_circle</span>
                  Maintenance of honesty, integrity and commitment
                </li>
              </ul>
              <a
                href="/about/about-us"
                className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors mt-8"
              >
                More About SecurityLink
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* HOW WE WORK */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-16 md:py-24 border-x border-t border-surface-border mx-auto relative" style={{backgroundImage: "repeating-linear-gradient(rgba(37, 99, 235, 0.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(37, 99, 235, 0.05) 0 1px, transparent 1px 48px)", backgroundSize: "48px 48px"}}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-12 text-center">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Our Process</span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 md:mt-4 uppercase">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-surface-border p-6 bg-surface-container-low relative">
              <span className="font-mono-data text-cobalt-electric text-2xl font-bold block mb-3">01</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase">Survey &amp; Assessment</h4>
              <p className="text-on-surface-variant text-sm font-body-sm">An exhaustive threat and vulnerability survey identifies the weaknesses in existing security measures.</p>
            </div>
            <div className="border border-surface-border p-6 bg-surface-container-low relative">
              <span className="font-mono-data text-cobalt-electric text-2xl font-bold block mb-3">02</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase">Security Plan Design</h4>
              <p className="text-on-surface-variant text-sm font-body-sm">Guards, CCTV, access control and alarms are integrated in line with the client&apos;s security policy.</p>
            </div>
            <div className="border border-surface-border p-6 bg-surface-container-low relative">
              <span className="font-mono-data text-cobalt-electric text-2xl font-bold block mb-3">03</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase">Post Order &amp; Training</h4>
              <p className="text-on-surface-variant text-sm font-body-sm">Every task is documented as a Post Order, and each guard is trained specifically against it.</p>
            </div>
            <div className="border border-surface-border p-6 bg-surface-container-low relative">
              <span className="font-mono-data text-cobalt-electric text-2xl font-bold block mb-3">04</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase">Supervision &amp; Feedback</h4>
              <p className="text-on-surface-variant text-sm font-body-sm">Field Officers inspect performance and client feedback regularly, closing the loop with follow-up training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* EQUIPMENT & TECHNOLOGY (Side-by-Side) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:justify-between">
            <div className="lg:w-1/2">
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-2 block">Equipment Division</span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mb-6 uppercase">Equipment &amp; Technology</h2>
              <p className="text-on-surface-variant mb-6 font-body-md">
                We provide a solution to the client&apos;s problem rather than just a product. Our
                specialists select the right equipment for the requirement and, where needed,
                integrate everything with a central control room.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-on-surface-variant text-sm font-body-sm">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">videocam</span>CCTV System</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">fingerprint</span>Access Control</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">sensor_door</span>Entrance Control</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">local_fire_department</span>Fire Detection &amp; Alarm</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">radar</span>Scanning Devices</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-cobalt-electric text-base">lan</span>Networking Devices</div>
              </div>
              <a
                href="/equipment"
                className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors mt-8"
              >
                Explore Equipment Division
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="lg:w-1/3 flex-end relative">
              <div className="absolute -inset-4 border border-cobalt-electric/30 bg-surface-container-low/50 -z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cobalt-electric" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cobalt-electric" />
              <img
                alt="Security equipment technician at work"
                className="w-full h-auto object-cover border border-surface-border"
                src="/pst2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* RECRUITMENT & TRAINING (Content Block — image left, text right) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-10 md:py-16 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start lg:justify-between">

            <div className="lg:w-1/3 relative">
              <div className="absolute -inset-4 border border-cobalt-electric/30 bg-surface-container-low/50 -z-10" />
              <img
                alt="SecurityLink recruitment and training"
                className="w-full h-auto object-cover border border-surface-border"
                src="/PST.png"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-2 block">Our Workforce</span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mb-6 uppercase">Recruitment &amp; Training</h2>
              <p className="text-on-surface-variant mb-6 font-body-md">
                Candidates are screened against five stages &mdash; preliminary screening, physical
                tests, medical test, interview and a written test &mdash; before a minimum three-week
                training programme, including one week of induction training at post.
              </p>
              <ul className="space-y-4 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Minimum height of 5&apos;6&quot;, physically and medically fit
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Preferably HSC/SSC qualified, minimum Class IX per law
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Ongoing capsule training built around client feedback
                </li>
              </ul>
              <a
                href="/services/guard"
                className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors mt-8"
              >
                Guard Division Details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* CREDENTIALS & RECOGNITION */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24 border-x border-t border-surface-border mx-auto relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-10 text-center">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Credentials</span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 md:mt-4 uppercase">Leadership &amp; Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="material-symbols-outlined text-cobalt-electric text-2xl block mb-2">workspace_premium</span>
              <span className="font-mono-data text-cobalt-electric text-lg block mb-1 font-bold">CPP, ASIS Int&apos;l</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Certified Protection Professional, MD</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="material-symbols-outlined text-cobalt-electric text-2xl block mb-2">military_tech</span>
              <span className="font-mono-data text-cobalt-electric text-lg block mb-1 font-bold">Armed Forces Division</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Physical security system design</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="material-symbols-outlined text-cobalt-electric text-2xl block mb-2">verified</span>
              <span className="font-mono-data text-cobalt-electric text-lg block mb-1 font-bold">NTMC</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">National Telecommunication Monitoring Centre</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="material-symbols-outlined text-cobalt-electric text-2xl block mb-2">domain</span>
              <span className="font-mono-data text-cobalt-electric text-lg block mb-1 font-bold">C-110972/13</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Certificate of Incorporation</span>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="/about/md"
              className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors mr-8"
            >
              Managing Director&apos;s Profile
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="/about/achievements"
              className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors"
            >
              Achievements &amp; Recognition
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* CLIENT ENGAGEMENTS */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-16 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.2em] mb-8 block">Client Engagements</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface">GRAMEENPHONE</div>
            <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface">CITY BANK</div>
            <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface">KAFCO</div>
            <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface">LAFARGE</div>
            <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface">CARE BANGLADESH</div>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 font-bold text-on-surface-variant hover:text-cobalt-electric transition-colors mt-10"
          >
            View Photo Gallery
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
