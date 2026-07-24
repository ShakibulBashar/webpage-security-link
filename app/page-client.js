//Homepage code
"use client";
import { useEffect, useRef, useState } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "./hooks/useScrollReveal";

// Renders one <picture> with two <source>s instead of two separate <Image>s
// hidden with `hidden lg:block` / `lg:hidden`. That old pattern still had the
// browser fetch BOTH the desktop and mobile image on every load - CSS display
// only controls what's painted, not what's requested. A native <picture> lets
// the browser itself pick (and only fetch) the matching source before any CSS
// or JS runs, which is what actually fixes the mobile LCP/network payload.
function HeroSlideImage({ desktopSrc, mobileSrc, desktopPosition, mobilePosition, alt, priority }) {
  const common = {
    alt,
    fill: true,
    sizes: "100vw",
    priority,
    className: "object-cover",
    fetchPriority: priority ? "high" : "auto",
  };

  const {
    props: { srcSet: desktopSrcSet, ...desktopProps },
  } = getImageProps({ ...common, src: desktopSrc, style: { objectPosition: desktopPosition } });

  const {
    props: { srcSet: mobileSrcSet, ...mobileProps },
  } = getImageProps({ ...common, src: mobileSrc, style: { objectPosition: mobilePosition } });

  return (
    <picture style={{ display: "block", position: "relative", width: "100%", height: "100%" }}>
      <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
      {mobileSrcSet && <source media="(max-width: 1023px)" srcSet={mobileSrcSet} />}
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes through {...desktopProps} */}
      <img {...desktopProps} fetchPriority={priority ? "high" : "auto"} />
    </picture>
  );
}

export default function Home() {
  const [yearsCount, setYearsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [complianceCount, setComplianceCount] = useState(0);

  const divisionsRef = useStaggerReveal(100);
  const credRef = useStaggerReveal(100);

  useScrollReveal();

  useEffect(() => {
    const targetYears = 13;
    const targetServices = 4;
    const targetCompliance = 100;
    const totalSteps = 20; // Number of visible increments
    const intervalMs = 80; // Time between each increment
    let step = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        step++;
        // Ease out: faster at start, slower at end
        const progress = step / totalSteps;
        const eased = 1 - Math.pow(1 - progress, 3);

        setYearsCount(Math.min(Math.floor(eased * targetYears), targetYears));
        setServicesCount(Math.min(Math.floor(eased * targetServices), targetServices));
        setComplianceCount(Math.min(Math.floor(eased * targetCompliance), targetCompliance));

        if (step >= totalSteps) {
          clearInterval(interval);
          // Ensure final values are exact
          setYearsCount(targetYears);
          setServicesCount(targetServices);
          setComplianceCount(targetCompliance);
        }
      }, intervalMs);
    }, 4000); // Start after HUD animation finishes

    return () => clearTimeout(timer);
  }, []);

  const heroSliderRef = useRef({ current: 0, timer: null, goToSlide: null });
  // Only the active slide + the next one are actually rendered with an <Image>.
  // Previously all 14 slides (28 <Image> tags) were mounted at once, and since
  // they're all position:absolute inset:0 on top of each other, the browser's
  // native lazy-loading treated every single one as "in viewport" and fetched
  // them all immediately - that's what was driving the 24MB+ page weight.
  const [mountedSlides, setMountedSlides] = useState(() => new Set([0, 1]));

  useEffect(() => {
    const slideDelay = 10000;

    // --- 1. HERO SLIDER ---
    const heroSlides = document.querySelectorAll(".hero-slider-item");
    const slider = heroSliderRef.current;

    function goToSlide(index) {
      if (!heroSlides.length) return;
      heroSlides[slider.current].classList.remove("active");
      slider.current = ((index % heroSlides.length) + heroSlides.length) % heroSlides.length;
      heroSlides[slider.current].classList.add("active");
      const nextIdx = (slider.current + 1) % heroSlides.length;
      setMountedSlides((prev) => {
        if (prev.has(slider.current) && prev.has(nextIdx)) return prev;
        const next = new Set(prev);
        next.add(slider.current);
        next.add(nextIdx);
        return next;
      });
      clearTimeout(slider.timer);
      slider.timer = setTimeout(() => goToSlide(slider.current + 1), slideDelay);
    }

    slider.goToSlide = goToSlide;
    slider.timer = setTimeout(() => goToSlide(slider.current + 1), slideDelay);

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

    return () => clearTimeout(slider.timer);
  }, []);

  
      // --- PROCESS ANIMATION ---
  useEffect(() => {
    const section = document.getElementById("process-section");
    if (!section) return;

    function resetCircles(circles, signal, dir) {
      circles.forEach((c) => c.classList.remove("active"));
      if (signal) {
        signal.style.transition = "none";
        signal.style[dir] = "0%";
      }
    }

    function playStep(circles, signal, dir) {
      if (!signal || !circles.length) return;
      const segmentDuration = 2000;
      const total = (circles.length - 1) * segmentDuration;

      setTimeout(() => {
        circles[0].classList.add("active");
        signal.style.transition = `${dir} ${total}ms linear`;
        signal.style[dir] = "100%";
        for (let i = 1; i < circles.length; i++) {
          setTimeout(() => circles[i].classList.add("active"), i * segmentDuration);
        }
      }, 50);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const vLayout = section.querySelector(".lg\\:hidden");
            const vCircles = vLayout ? vLayout.querySelectorAll(".process-circle") : [];
            const signalV = section.querySelector('.process-signal-v[data-signal="v"]');

            const hLayout = section.querySelector(".hidden.lg\\:block");
            const hCircles = hLayout ? hLayout.querySelectorAll(".process-circle") : [];
            const signalH = section.querySelector('.process-signal-h[data-signal="h"]');

            resetCircles(vCircles, signalV, "height");
            resetCircles(hCircles, signalH, "width");

            requestAnimationFrame(() => {
              playStep(vCircles, signalV, "height");
              playStep(hCircles, signalH, "width");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);



  const heroImages = [
  { desktopImage: "/hero9-desktop.webp", mobileImage: "/hero9-mobile.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    { desktopImage: "/hero-pc2.webp", mobileImage: "/hero-mobile3.webp", desktopPosition: "center 20%", mobilePosition: "38% 0%" },
    { desktopImage: "/hero1.webp", mobileImage: "/hero1.webp", desktopPosition: "center 20%", mobilePosition: "center 10%" },
    { desktopImage: "/hero-mobile16.webp", mobileImage: "/hero-mobile10.webp", desktopPosition: "center 10%", mobilePosition: "40% 20%" },
    { desktopImage: "/hero202.webp", mobileImage: "/hero-mobile122.webp", desktopPosition: "center 20%", mobilePosition: "center bottom%" },
    { desktopImage: "/hero204.webp", mobileImage: "/hero204.webp", desktopPosition: "center 0%", mobilePosition: "65% 0%" },
    { desktopImage: "/hero-mobile11.webp", mobileImage: "/hero-mobile11.webp", desktopPosition: "center 20%", mobilePosition: "50% 10%" },
    { desktopImage: "/hero206.webp", mobileImage: "/hero-mobile144.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    { desktopImage: "/hero207.webp", mobileImage: "/hero-mobile155.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    
    { desktopImage: "/hero16.webp", mobileImage: "/hero16.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    { desktopImage: "/hero3.webp", mobileImage: "/hero3.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    
    //chiense young man giving
    { desktopImage: "/hero-mobile155.webp", mobileImage: "/hero-mobile133.webp", desktopPosition: "center 20%", mobilePosition: "65% bottom" },

    //Risk advisory
    { desktopImage: "/hero13.webp", mobileImage: "/hero13.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
    
    { desktopImage: "/hero15.webp", mobileImage: "/hero15.webp", desktopPosition: "center 20%", mobilePosition: "center 20%" },
  ];

  const divisions = [
    {
      index: "01",
      name: "Manned Guarding",
      desc: "Physical security for offices, corporate campuses and industrial premises, plus event coverage and dedicated guard training.",
      href: "/services/guard",
    },
    {
      index: "02",
      name: "Risk Advisory",
      desc: "Threat surveys, security plan design, consultancy, investigation and executive-level training.",
      href: "/services/risk-management",
    },
    {
      index: "03",
      name: "Security Technology",
      desc: "CCTV, access control, fire detection and scanning systems — specified, supplied and integrated.",
      href: "/services/equipments",
    },
    {
      index: "04",
      name: "Logistics Services",
      desc: "Cleaning services for industrial facilities, hospitals and corporate offices, run by the same trained workforce.",
      href: "/services/logistics",
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
    { label: "Certified Protection Professionalist", detail: "Professional Certificate Board verified CPP from U.S. since 2008" },
    { label: "National Telecommunications Monitoring Cell", detail: "successful implementation of integrated physical security design for NTMC" },
    { label: "ASIS Chairman", detail: "American Society of Industrial Security (ASIS) International, Bangladesh chapter" },
    { label: "Armed Forces Division", detail: "recognition of Incorporation for development of the security system of Armed Forces Division(AFD)" },
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
    "Armed Forces Division (AFD)",
  ];

  return (
    <>
      {/* HERO SECTION  */}
      <main className="relative  min-h-[100dvh]  pt-20 pb-3 flex flex-col items-center justify-end overflow-hidden">
        {/* Hero Slider Background */}
        <div className="absolute top-20 inset-x-0 bottom-0 z-0" id="hero-slider">
          {heroImages.map(({ desktopImage, mobileImage, desktopPosition, mobilePosition }, idx) => (
            <div key={idx} className={`hero-slider-item ${idx === 0 ? "active" : ""} absolute inset-0`}>
              {mountedSlides.has(idx) && (
                <HeroSlideImage
                  desktopSrc={desktopImage}
                  mobileSrc={mobileImage}
                  desktopPosition={desktopPosition}
                  mobilePosition={mobilePosition}
                  alt="SecurityLink hero"
                  priority={idx === 0}
                />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Slider Nav Buttons */}
        <button
          onClick={() => heroSliderRef.current.goToSlide?.(heroSliderRef.current.current - 1)}
          className="absolute left-3 md:left-6 top-[55%] -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 hover:bg-cobalt-electric/80 border border-white/10 hover:border-cobalt-electric rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer active:scale-90"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={() => heroSliderRef.current.goToSlide?.(heroSliderRef.current.current + 1)}
          className="absolute right-3 md:right-6 top-[55%] -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 hover:bg-cobalt-electric/80 border border-white/10 hover:border-cobalt-electric rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer active:scale-90"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* HUD Content */}
        <div className="relative z-30 w-full max-w-[1400px] px-2 md:px-12 flex flex-col items-center">
          <div className="text-center max-w-auto pb-2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-10">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cobalt-electric" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cobalt-electric" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cobalt-electric rounded-full" />
            </div>
            <h1 className="hero-fade-in-left font-headline-xl text-headline-xl text-xl md:text-2xl lg:text-6xl text-white uppercase tracking-tighter mb-5 leading-[0.95] drop-shadow-2xl" style={{ animationDelay: '0.8s' }}>
              Securing Capital, <br />
              <span className="text-cobalt-electric">Enterprise</span>, and Key Infrastructure
            </h1>
            <div className="hero-fade-in-up flex flex-col sm:flex-row gap-3 md:gap-6 justify-center" style={{ animationDelay: '2s' }}>
              <Link
                href="/services/guard"
                className="inline-block bg-cobalt-electric text-white px-8 py-3 font-bold text-sm lg:text-base uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] rounded-none"
              >
                Manned Guarding Division
              </Link>
              <Link
                href="/services/logistics"
                className="inline-block bg-on-surface text-obsidian-deep px-8 py-3 font-bold text-sm lg:text-base uppercase tracking-widest hover:bg-transparent hover:text-on-surface border-2 border-on-surface transition-all backdrop-blur-md rounded-none"
              >
                Logistics Services
              </Link>
            </div>
          </div>

          {/* Bottom HUD Data Feeds */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 lg:mt-4 border-x-3 border-b-3 border-cobalt-electric/40 px-3 md:px-4 lg:px-6 py-2 lg:py-4 relative backdrop-blur-sm bg-background/40">
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-3 border-l-3 border-cobalt-electric" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-3 border-r-3 border-cobalt-electric" />
            <div className="hero-fade-in-up" style={{ animationDelay: '2.5s' }}>
              <div className="flex flex-row items-center gap-1.5 lg:flex-col lg:items-start lg:gap-0 border-r border-surface-border/30 pr-2 md:pr-4">
                <span className="font-mono-data text-xl md:text-2xl lg:text-3xl text-on-surface font-extrabold">
                  {yearsCount}+
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Years</span>
              </div>
            </div>
            <div className="hero-fade-in-up" style={{ animationDelay: '3s' }}>
              <div className="flex flex-row items-center gap-1.5 lg:flex-col lg:items-start lg:gap-0 border-r border-surface-border/30 pr-2 md:pr-4">
                <span className="font-mono-data text-xl md:text-2xl lg:text-3xl text-on-surface font-bold">
                  {servicesCount}
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Services</span>
              </div>
            </div>
            <div className="hero-fade-in-up" style={{ animationDelay: '3.5s' }}>
              <div className="flex flex-row items-center gap-1.5 lg:flex-col lg:items-start lg:gap-0 border-r border-surface-border/30 pr-2 md:pr-4">
                <span className="font-mono-data text-xl md:text-2xl lg:text-3xl text-on-surface font-bold">
                  {complianceCount}%
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                  Compliance
                </span>
              </div>
            </div>
            <div className="hero-fade-in-up" style={{ animationDelay: '4s' }}>
              <div className="flex flex-row items-center gap-1.5 lg:flex-col lg:items-start lg:gap-0">
                <span className="font-mono-data text-xl md:text-2xl lg:text-3xl text-on-surface font-bold text-cobalt-electric animate-pulse">
                  LIVE
                </span>
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                  Threat Intel
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════════ */}
      {/* THE STANDARD — full-width text + image strip     */}
      {/* ═══════════════════════════════════════════════ */}
      {/* Gradient accent divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cobalt-electric/50 to-transparent" />

      <section className="bg-background overflow-hidden">
        <div className="max-w-auto mx-auto px-6 lg:px-12 pt-8 lg:pt-18 pb-8 lg:pb-18 flex flex-col items-center text-center">
          <span data-reveal className="font-mono-data text-xs md:text-base lg:text-lg  text-cobalt-electric uppercase tracking-[0.2em] block">
            Our Standard
          </span>
          <h2 data-reveal className="font-headline-lg text-lg md:text-xl lg:text-4xl text-on-surface uppercase tracking-wider leading-[1.1] mt-6">
            We don&apos;t just deploy guards.
            <br />
            <span className="text-cobalt-electric">We deploy a standard</span> &mdash; trained,
            documented, and checked.
          </h2>
          <p data-reveal className="font-mono-data text-xs md:text-base lg:text-lg font-italic text-on-surface/80 leading-normal mt-8 max-w-auto text-balance">
            Customised training, careful team building, constant monitoring and an evaluation system that actually holds people to it &mdash; that&apos;s the difference between a guard on a payroll and a guard you can rely on. Supervised, documented, and accountable, our guards are trained to the same standard across every site, every shift, every day. 
          </p>
        </div>

        {/* Edge-to-edge image strip */}
        <div data-reveal="scale" className="relative h-64 md:h-80 lg:h-96 border-y border-surface-border overflow-hidden">
          <Image
            src="/hero16.webp"
            alt="SecurityLink guard team in professional formation during inspection"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-cobalt-electric/50" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cobalt-electric/50" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cobalt-electric/50" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-cobalt-electric/50" />
        </div>

        {/* Kinetic value ticker */}
        <div className="border-y border-surface-border bg-obsidian-deep py-6 ticker-wrap">
          <div className="ticker-track flex items-center gap-10 w-max">
            {[...Array(2)].map((_, rep) =>
              ["TRAINED", "SUPERVISED", "EVALUATED", "ACCOUNTABLE", "DOCUMENTED", "PRESENT"].map(
                (word, i) => (
                  <span key={`${rep}-${i}`} className="flex items-center gap-10">
                    <span className="font-headline-md text-lg md:text-xl text-on-surface-variant/80 uppercase tracking-wide whitespace-nowrap">
                      {word}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt-electric" />
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </section>

      {/* PROCESS — animated timeline with snake pattern   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background relative overflow-hidden" id="process-section">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(var(--color-cobalt-electric) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-cobalt-electric) 0.5px, transparent 0.5px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-8 lg:py-18 relative">
          <div className="flex items-end justify-between mb-12 lg:mb-20 flex-wrap gap-4">
            <div data-reveal>
              <span className="font-mono-data text-sm lg:text-base text-cobalt-electric uppercase tracking-[0.2em]">
                Our Process
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-on-surface uppercase tracking-tight mt-4">
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

          {/* ===== SM/MD: Vertical stepper — circles + line left, text right ===== */}
          <div className="lg:hidden">
            <div className="relative ml-4 md:ml-8">
              {/* Background track line */}
               <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[3px]">
                <div className="absolute inset-0 bg-cobalt-electric/10 rounded-full" />
                <div className="process-signal-v h-0 rounded-full" data-signal="v" />
              </div>

              {[
                { n: "01", title: "Survey", desc: "Threat & vulnerability assessment of the premises." },
                { n: "02", title: "Design", desc: "Guards, CCTV, access control and alarms, combined." },
                { n: "03", title: "Post Order", desc: "Every task documented and trained against, post by post." },
                { n: "04", title: "Supervise", desc: "Field Officers inspect, clients are heard, gaps get closed." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 mb-8 last:mb-0" data-step={step.n}>
                                    <div className="process-circle flex-shrink-0 w-12 h-12 rounded-full border-2 border-cobalt-electric/30 bg-obsidian-deep flex items-center justify-center relative z-10 select-none">
                    <span className="process-num font-mono-data text-sm text-cobalt-electric font-bold transition-colors select-none">{step.n}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-headline-md text-base md:text-lg text-on-surface uppercase mb-1">{step.title}</h3>
                    <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== LG: Horizontal timeline ===== */}
                    <div className="hidden lg:block relative">
            {/* Line container: from center of 01 to center of 04 */}
            <div className="absolute top-[31px] left-[12.5%] right-[12.5%] h-[3px]">
              <div className="absolute inset-0 bg-cobalt-electric/10 rounded-full" />
              <div className="process-signal-h w-0 rounded-full" data-signal="h" />
            </div>

            <div className="grid grid-cols-4 gap-0 relative">
              {process.map((step) => (
                <div key={step.n} className="flex flex-col items-center text-center px-4" data-step={step.n}>
                  <div className="process-circle w-16 h-16 rounded-full border-2 border-cobalt-electric/30 bg-obsidian-deep flex items-center justify-center mb-6 relative z-10 select-none">
                    <span className="process-num font-mono-data text-lg text-cobalt-electric font-bold transition-colors select-none">{step.n}</span>
                  </div>
                  <h3 className="font-headline-md text-lg md:text-xl text-on-surface uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* MANIFESTO — full-bleed vision statement           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background border-y border-surface-border py-8 lg:py-18 relative overflow-hidden border-t border-b border-surface-border">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-cobalt-electric/5 pointer-events-none" />
        <div className="max-w-auto mx-auto px-6 md:px-12 relative z-10 text-center">
          <span data-reveal className="font-mono-data text-base lg:text-lg font-semibold text-cobalt-electric uppercase tracking-[0.2em] block">
            Our Vision
          </span>
          <p data-reveal className="font-headline-lg text-xl md:text-2xl lg:text-4xl text-on-surface leading-[1.15] tracking-tight mt-8">
            To provide a global standard of security service to plants, factories and corporate premises
            &mdash; through skilled human resources,{" "}
            <span className="text-cobalt-electric">efficient process management</span> and system
            integration.
          </p>
          <Link data-reveal
            href="/about/about-us"
            className="inline-flex items-center gap-2 font-label-caps text-sm uppercase tracking-[0.15em] text-on-surface-variant hover:text-cobalt-electric transition-colors mt-12 group"
          >
            More about SecurityLink
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      
      

      {/* ═══════════════════════════════════════════════ */}
      {/* DIVISIONS — service card grid (NEW)               */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-obsidian-deep border-y border-surface-border overflow-hidden">
        <div className="max-w-auto mx-auto px-6 md:px-8 lg:px-20 py-10 md:py-14 ">
          <div className="text-center mb-4 lg:mb-8" data-reveal>
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              What We Do
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-5xl text-on-surface uppercase tracking-tight mt-2">
              Four divisions. <br />One standard.
            </h2>
          </div>

          <div ref={divisionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {divisions.map((div) => (
              <Link
                data-reveal-child
                key={div.index}
                href={div.href}
                className="group relative border border-cobalt-electric/40 bg-background/80 hover:bg-background/50 hover:border-surface-border p-6 md:p-10 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute right-4 bottom-2 font-headline-xl text-[80px] sm:text-[100px] md:text-[120px] font-bold text-cobalt-electric/[0.08] leading-none select-none pointer-events-none">
                  {div.index}
                </span>
                <h3 className="font-headline-md text-xl md:text-2xl text-cobalt-electric uppercase mb-3 group-hover:text-on-surface transition-colors relative z-10">
                  {div.name}
                </h3>
                <p className="font-mono-data text-sm text-on-surface-variant leading-relaxed mb-6">
                  {div.desc}
                </p>
                <span className="inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-[0.15em] text-cobalt-electric">
                  Explore division
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-cobalt-electric/20 border-l-[40px] border-l-transparent group-hover:border-t-cobalt-electric/0 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* ═══════════════════════════════════════════════ */}
      {/* CREDENTIALS — proper section with cards           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cobalt-electric/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cobalt-electric/30 to-transparent" />

        <div className="max-w-auto mx-auto px-6 md:px-8 lg:px-20 py-12 md:py-16">
          <div data-reveal className="mb-12">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              On the Record
            </span>
            <h2 className="font-headline-lg text-4xl lg:text-5xl text-on-surface uppercase tracking-tight mt-4 leading-[1.1]">
              Credentials
            </h2>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed mt-4 max-w-auto">
              Hundreds of Industry recommendations, standard certifications and international recognition that back our operations. Our team is trained to the same standard across every site, every shift, every day. We are proud to be recognized for our work, and we continue to strive for excellence in all that we do.
            </p>
            <div className="flex flex-col gap-3 mt-8">
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

          <div ref={credRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {credentials.map((c) => (
              <div data-reveal-child key={c.label} className="border border-surface-border bg-obsidian-deep/50 p-6 md:p-8 hover:border-cobalt-electric/30 transition-colors">
                <span className="font-mono-data text-lg md:text-xl text-cobalt-electric font-bold block">
                  {c.label}
                </span>
                <span className="font-body-sm text-sm text-on-surface-variant leading-snug mt-2 block">
                  {c.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CLIENTS — marquee                                 */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-obsidian-deep py-20 md:py-24 overflow-hidden border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 flex items-center justify-between">
          <div data-reveal>
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Trusted By
            </span>
            
          </div>
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
                className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface-variant/70 whitespace-nowrap hover:text-cobalt-electric/80 transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CLOSING CTA — cinematic with visible image        */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-surface-border h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/HnM-opt.webp"
            alt="SecurityLink team conducting an on-site security survey at a corporate facility"
            fill
            className="object-cover"
            style={{ objectPosition: "40% 20%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/25" />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

          <div className="absolute bottom-0 inset-x-0 max-w-3xl mx-auto px-6 md:px-12 pb-12 md:pb-16 lg:pb-20 text-center">
            <h2 data-reveal className="font-headline-lg text-xxl md:text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mb-4 lg:mb-6 leading-[1.1]">
              Let&apos;s survey your premises
            </h2>
            <p data-reveal className="font-body-md text-sm md:text-lg text-on-surface-variant mb-5 max-w-2xl leading-relaxed ml-auto">
              No obligation, no generic quote &mdash; just an honest look at where your risk actually sits.
            </p>
            <Link data-reveal
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 lg:px-10 py-4 font-bold uppercase tracking-widest text-xs lg:sm hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 transition-all group"
            >
              Request a Site Survey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}