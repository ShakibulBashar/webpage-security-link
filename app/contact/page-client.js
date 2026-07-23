// Contact — redesigned tactical HUD contact experience
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  Smartphone,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  MapPin,
  Building2,
  User,
  ClipboardCheck,
  Headphones,
  FileSearch,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";

const MOBILE_NUMBERS = ["+8801777740993", "+8801777740984", "+8801777740897"];

const OFFICES = [
  {
    tag: "01",
    name: "Head Office",
    lines: ["227 Grand Plaza (3rd Floor)", "Room # 321, Moghbazar", "Dhaka, Bangladesh"],
    map: "https://maps.google.com/maps?q=Moghbazar,Dhaka,Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    tag: "02",
    name: "Corporate Office",
    lines: ["House # 952, Road # 01", "Ward # 05, Dia Bari, Uttara", "Dhaka-1230, Bangladesh"],
    map: "https://maps.google.com/maps?q=Dia+Bari,Uttara,Dhaka-1230,Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
];

const PROCESS_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Initial Assessment",
    desc: "Share your requirements through the form or a direct call. We listen before we propose.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Site Survey",
    desc: "Our team visits your premises to evaluate risks, access points, and operational flow firsthand.",
  },
  {
    icon: Headphones,
    step: "03",
    title: "Tailored Proposal",
    desc: "Receive a detailed security plan with staffing recommendations, technology specs, and pricing.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Deployment & Oversight",
    desc: "Trained personnel on ground, real-time monitoring, and continuous quality audits from day one.",
  },
];

const DIVISIONS = [
  {
    name: "Manned Guarding",
    desc: "Armed and unarmed guards for commercial, industrial, and residential premises across Bangladesh.",
    icon: ShieldCheck,
  },
  {
    name: "Risk Advisory",
    desc: "Threat assessments, vulnerability audits, and security consulting for high-risk environments.",
    icon: FileSearch,
  },
  {
    name: "Security Technology",
    desc: "CCTV, access control, alarm systems, and integrated surveillance solutions for modern facilities.",
    icon: Headphones,
  },
  {
    name: "Logistics Services",
    desc: "Industrial cleaning, hospital sanitization, and corporate facility maintenance with compliance standards.",
    icon: ClipboardCheck,
  },
];

const heroImages = [
  { src: "/control-room2.jpg", position: "center 10%" },
  { src: "/HnM.jpg", position: "40% 20%" },
  { src: "/hero16.JPG", position: "center 25%" },
];

export default function ContactPage() {
  useScrollReveal();
  const officeRef = useStaggerReveal(140);
  const processRef = useStaggerReveal(120);
  const divisionRef = useStaggerReveal(100);

  const heroSliderRef = useRef({ current: 0, timer: null, goToSlide: null });

  useEffect(() => {
    const slideDelay = 8000;
    const slides = document.querySelectorAll(".contact-hero-slide");
    const slider = heroSliderRef.current;

    function goToSlide(index) {
      if (!slides.length) return;
      slides[slider.current].classList.remove("active");
      slider.current = ((index % slides.length) + slides.length) % slides.length;
      slides[slider.current].classList.add("active");
      clearTimeout(slider.timer);
      slider.timer = setTimeout(() => goToSlide(slider.current + 1), slideDelay);
    }

    slider.goToSlide = goToSlide;
    slider.timer = setTimeout(() => goToSlide(slider.current + 1), slideDelay);

    return () => clearTimeout(slider.timer);
  }, []);

  return (
    <>
      <style>{`
        .contact-grid {
          background-image:
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .contact-hero-slide {
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }
        .contact-hero-slide.active {
          opacity: 1;
        }
        @keyframes ping-dot {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        .live-dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: var(--color-cobalt-electric);
          animation: ping-dot 1.8s cubic-bezier(0,0,0.2,1) infinite;
        }
      `}</style>

      {/* ══════════ HERO — homepage style with slider ══════════ */}
      <main className="relative min-h-[100dvh] pt-20 pb-3 flex flex-col items-center justify-end overflow-hidden">
        {/* Slider Background */}
        <div className="absolute top-20 inset-x-0 bottom-0 z-0">
          {heroImages.map(({ src, position }, idx) => (
            <div key={idx} className={`contact-hero-slide ${idx === 0 ? "active" : ""} absolute inset-0`}>
              <Image
                src={src}
                alt="SecurityLink contact"
                fill
                className="object-cover"
                style={{ objectPosition: position }}
                priority={idx === 0}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 contact-grid opacity-30 z-10" />
        </div>

        {/* Slider Nav Buttons */}
        <button
          onClick={() => heroSliderRef.current.goToSlide?.(heroSliderRef.current.current - 1)}
          className="absolute left-3 md:left-6 top-[42%] -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/25 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={() => heroSliderRef.current.goToSlide?.(heroSliderRef.current.current + 1)}
          className="absolute right-3 md:right-6 top-[42%] -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/25 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all duration-200"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* HUD Content */}
        <div className="relative z-30 w-full max-w-[1400px] px-2 md:px-12 flex flex-col items-center">
          <div className="text-center max-w-auto pb-2">
            <div className="flex items-center justify-center gap-3 mb-6 ] hidden lg:block">
              <span className="relative w-2 h-2 rounded-full bg-cobalt-electric live-dot" />
              <span className="font-mono-data text-xs md:text-sm text-cobalt-electric uppercase tracking-[0.25em">
                SEC-NET: Establish Contact
              </span>
            </div>
            <h1 className="font-headline-xl text-2xl md:text-4xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.9] mb-3 lg:mb-6 drop-shadow-2xl">
              Let&apos;s Secure<br className="hidden lg:block" />
              <span className="text-cobalt-electric">What Matters</span>
            </h1>
            <p className="font-body-lg text-sm lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed mx-auto">
              Speak directly with our operations desk. Phone, email, or the form below — every enquiry
              reaches a member of the SecurityLink team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center mt-4 lg:mt-8">
              <Link
                href="/contact/form"
                className="inline-flex items-center justify-center gap-2 bg-cobalt-electric text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Send Enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/8801777740983"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ══════════ DIRECT LINES + WHATSAPP ══════════ */}
      <section className="bg-background border-y border-surface-border py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-10">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Reach Us Directly
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-3">
              All Channels Open
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Phone */}
            <a href="tel:+8809611223300" className="group relative border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cobalt-electric/40" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cobalt-electric/40" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cobalt-electric/40" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cobalt-electric/40" />
              <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-4 group-hover:bg-cobalt-electric/20 transition-colors">
                <Phone className="w-6 h-6 text-cobalt-electric" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">Telephone</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors block">+8809611-223300</span>
            </a>

            {/* Email */}
            <a href="mailto:info@securitylink-bd.com" className="group relative border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cobalt-electric/40" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cobalt-electric/40" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cobalt-electric/40" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cobalt-electric/40" />
              <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-4 group-hover:bg-cobalt-electric/20 transition-colors">
                <Mail className="w-6 h-6 text-cobalt-electric" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">Email</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors block break-all">info@securitylink-bd.com</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/8801777740983" target="_blank" rel="noopener noreferrer" className="group relative border border-surface-border hover:border-green-500/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-green-500/40" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-green-500/40" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-green-500/40" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-green-500/40" />
              <div className="w-12 h-12 border border-green-500/30 bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">WhatsApp</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-green-500 transition-colors block">+8801777740983</span>
            </a>

            {/* Mobile 1 */}
            <a href="tel:+8801777740993" className="group relative border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-4 group-hover:bg-cobalt-electric/20 transition-colors">
                <Smartphone className="w-6 h-6 text-cobalt-electric" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">Mobile</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors block">+8801777740993</span>
            </a>

            {/* Mobile 2 */}
            <a href="tel:+8801777740984" className="group relative border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-4 group-hover:bg-cobalt-electric/20 transition-colors">
                <Smartphone className="w-6 h-6 text-cobalt-electric" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">Mobile</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors block">+8801777740984</span>
            </a>

            {/* Mobile 3 */}
            <a href="tel:+8801777740897" className="group relative border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 p-6 transition-all duration-300">
              <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-4 group-hover:bg-cobalt-electric/20 transition-colors">
                <Smartphone className="w-6 h-6 text-cobalt-electric" />
              </div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-1">Mobile</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors block">+8801777740897</span>
            </a>
          </div>

          {/* Website */}
          <div className="mt-6">
            <a href="https://securitylinkbd.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border border-surface-border hover:border-cobalt-electric/50 bg-surface-container-low/20 px-6 py-4 transition-all duration-300">
              <Globe className="w-5 h-5 text-cobalt-electric" />
              <span className="font-headline-md text-lg text-on-surface group-hover:text-cobalt-electric transition-colors">securitylinkbd.com</span>
              <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-cobalt-electric transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ HOW WE RESPOND — process steps ══════════ */}
      <section className="bg-obsidian-deep border-y border-surface-border py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              From Enquiry to Deployment
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-3 leading-tight">
              How we respond
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-4 leading-relaxed">
              Every enquiry follows the same four-step protocol — no shortcuts, no assumptions.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  data-reveal-child
                  className="relative border border-cobalt-electric/20 bg-surface-container-low/20 p-6 group hover:border-cobalt-electric/50 transition-colors"
                >
                  <span className="absolute top-4 right-4 font-mono-data text-[10px] text-cobalt-electric/40 uppercase tracking-widest">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center mb-5 group-hover:bg-cobalt-electric/20 transition-colors">
                    <Icon className="w-6 h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-headline-md text-lg text-on-surface mb-2 uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ══════════ OFFICES + MAPS ══════════ */}
      <section id="offices" className="bg-background py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-10">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Our Locations
            </span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface uppercase tracking-tight mt-3">
              Visit Either Office
            </h2>
          </div>

          <div ref={officeRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFICES.map((office) => (
              <div
                key={office.name}
                data-reveal-child
                className="border border-surface-border bg-surface-container-low/30 overflow-hidden group hover:border-cobalt-electric/50 transition-colors"
              >
                <div className="relative h-56 md:h-64 overflow-hidden border-b border-surface-border">
                  <iframe
                    src={office.map}
                    title={`Map to ${office.name}`}
                    className="w-full h-full grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono-data text-sm text-cobalt-electric border border-cobalt-electric/30 bg-cobalt-electric/10 px-2.5 py-1 shrink-0">
                      {office.tag}
                    </span>
                    <div>
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cobalt-electric" />
                        {office.name}
                      </h3>
                      <address className="font-body-md text-on-surface-variant not-italic leading-relaxed">
                        {office.lines.map((l) => (
                          <span key={l} className="block">{l}</span>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMPANY INFO ══════════ */}
      <section className="bg-background pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div
            data-reveal
            className="border border-surface-border bg-gradient-to-br from-surface-container-low/50 to-surface-container-high/20 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-cobalt-electric" />
                  <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
                    Managing Director
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface mb-3 leading-snug">
                  Major (Retd.) Md. Nurul Moman Choudhury, CPP
                </h3>
                <a
                  href="mailto:mdmcsbd@gmail.com"
                  className="inline-flex items-center gap-2 font-body-md text-cobalt-electric hover:underline break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  mdmcsbd@gmail.com
                </a>
              </div>

              <div>
                <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-on-surface-variant block mb-5">
                  Legal Details
                </span>
                <dl className="space-y-4">
                  {[
                    { t: "Incorporation", d: "C-110972/13", mono: true },
                    { t: "Trade License", d: "Dhaka City Corporation 0340619", mono: true },
                    { t: "Banker", d: "Bank Asia, Dhanmondi Branch", mono: false },
                  ].map(({ t, d, mono }) => (
                    <div key={t} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-surface-border/60 pb-4">
                      <dt className="font-body-sm text-sm text-on-surface-variant sm:w-40 shrink-0">{t}</dt>
                      <dd className={`text-on-surface ${mono ? "font-mono-data text-sm" : "font-body-md"}`}>
                        {d}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}