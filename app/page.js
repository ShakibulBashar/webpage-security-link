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

      {/* BENTO GRID — keep exactly as-is */}
      <section className="bg-obsidian-deep px-12 md:px-[48px] py-24 border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">
            Service Framework
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4 uppercase">
            Specialized Operational Divisions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[450px] relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">
                shield
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                Elite Guarding
              </h3>
              <p className="text-on-surface-variant max-w-md">
                Our officers are selected for corporate environments, providing a visible deterrent while
                maintaining a premium concierge experience.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <a
                className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors"
                href="#"
              >
                Protocol Documentation
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

          <div className="md:col-span-4 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[450px]">
            <div>
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">
                local_shipping
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">
                Secure Logistics
              </h3>
              <p className="text-on-surface-variant">
                High-value asset transportation using armored, low-profile vehicles equipped with
                real-time GPS tracking.
              </p>
            </div>
            <div className="mt-8">
              <a
                className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors"
                href="#"
              >
                Transit Matrix
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-12 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-surface-container-low">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl">sensors</span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">
                  Integrated Systems
                </h3>
                <p className="text-on-surface-variant max-w-xl">
                  Advanced surveillance, biometric access control, and AI-driven perimeter detection
                  synchronized with our centralized command.
                </p>
              </div>
            </div>
            <button className="bg-on-surface text-obsidian-deep px-8 py-3 font-bold uppercase tracking-wider whitespace-nowrap hover:bg-cobalt-electric hover:text-white transition-all rounded-none">
              System Audit
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* STRATEGIC SECTORS (Icon Grid) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-12 text-center">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">
              Industry Matrix
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 md:mt-4 uppercase">
              Strategic Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-obsidian-deep relative overflow-hidden group">
              <div className="absolute inset-0 bg-cobalt-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 relative z-10">account_balance</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase relative z-10">Banking & Finance</h4>
              <p className="text-on-surface-variant text-sm font-body-sm relative z-10">Secure Cash-in-Transit operations and continuous ATM infrastructure protection.</p>
            </div>
            <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-obsidian-deep relative overflow-hidden group">
              <div className="absolute inset-0 bg-cobalt-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 relative z-10">factory</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase relative z-10">RMG & Manufacturing</h4>
              <p className="text-on-surface-variant text-sm font-body-sm relative z-10">Robust perimeter integrity and workforce access control for large-scale facilities.</p>
            </div>
            <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-obsidian-deep relative overflow-hidden group">
              <div className="absolute inset-0 bg-cobalt-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 relative z-10">business</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase relative z-10">MNC & Corporate</h4>
              <p className="text-on-surface-variant text-sm font-body-sm relative z-10">Executive protection and highly vetted concierge guarding for corporate headquarters.</p>
            </div>
            <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-obsidian-deep relative overflow-hidden group">
              <div className="absolute inset-0 bg-cobalt-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 relative z-10">hub</span>
              <h4 className="font-headline-md text-on-surface mb-2 text-sm uppercase relative z-10">Critical Infrastructure</h4>
              <p className="text-on-surface-variant text-sm font-body-sm relative z-10">Defending power grids, telecommunication nodes, and vital national assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* TECHNICAL ARSENAL (Side-by-Side) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-16 md:py-24 border-x border-t border-surface-border mx-auto relative" style={{backgroundImage: "repeating-linear-gradient(rgba(37, 99, 235, 0.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(37, 99, 235, 0.05) 0 1px, transparent 1px 48px)", backgroundSize: "48px 48px"}}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:justify-between">
            <div className="lg:w-1/2">
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-2 block">Smart Security</span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mb-6 uppercase">Technical Arsenal</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric mt-1">visibility</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">AI-Driven Video Analytics</h4>
                    <p className="text-on-surface-variant text-sm">Deployment of intelligent algorithms for facial recognition, loitering detection, and automated threat flagging across extensive perimeters.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric mt-1">memory</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Advanced Hardware Integration</h4>
                    <p className="text-on-surface-variant text-sm">Installation and maintenance of thermal imaging sensors, high-definition IP cameras, and multi-factor biometric access control arrays.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex-end relative">
              <div className="absolute -inset-4 border border-cobalt-electric/30 bg-surface-container-low/50 -z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cobalt-electric" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cobalt-electric" />
              <img
                alt="Technical Security Team"
                className="w-full h-auto object-cover border border-surface-border"
                src="/pst2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* OPERATIONAL EXCELLENCE (Horizontal Grid) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-24 border-x border-t border-surface-border mx-auto relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-10 text-center">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Standards & Compliance</span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 md:mt-4 uppercase">Operational Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="font-mono-data text-cobalt-electric text-xl block mb-2 font-bold">ISO 9001:2015</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Certified Quality Management</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="font-mono-data text-cobalt-electric text-xl block mb-2 font-bold">PARAMILITARY</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Grade Training Protocol</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="font-mono-data text-cobalt-electric text-xl block mb-2 font-bold">FIRE SAFETY</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Advanced Hazard Response</span>
            </div>
            <div className="border border-surface-border bg-surface-container-low p-6 text-center">
              <span className="font-mono-data text-cobalt-electric text-xl block mb-2 font-bold">FIRST AID</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-wider font-label-caps">Rapid Medical Intervention</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* HUMAN CAPITAL (Content Block — image left, text right) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-10 md:py-16 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start lg:justify-between">

            <div className="lg:w-1/3 relative">
              <div className="absolute -inset-4 border border-cobalt-electric/30 bg-surface-container-low/50 -z-10" />
              <img
                alt="Professional Security Team"
                className="w-full h-auto object-cover border border-surface-border"
                src="/PST.png"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] mb-2 block">Our Workforce</span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mb-6 uppercase">Human Capital</h2>
              <p className="text-on-surface-variant mb-6 font-body-md">
                The core of SecurityLink operational capability lies in our highly disciplined workforce. We prioritize the recruitment of retired military and law enforcement personnel, bringing unparalleled real-world experience to corporate security.
              </p>
              <ul className="space-y-4 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Rigorous Background Vetting
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Continuous Tactical Training
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-cobalt-electric text-sm">check_circle</span>
                  Crisis Management Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* TRUSTED BY INDUSTRY LEADERS (Logo Wall) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.2em] mb-8 block">Trusted by Industry Leaders</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            <div className="font-headline-md text-xl font-bold">DUTCH-BANGLA BANK</div>
            <div className="font-headline-md text-xl font-bold">CITY BANK</div>
            <div className="font-headline-md text-xl font-bold">GRAMEENPHONE</div>
            <div className="font-headline-md text-xl font-bold">UNILEVER</div>
          </div>
        </div>
      </section>
    </>
  );
}