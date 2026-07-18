// Contact — redesigned tactical HUD contact experience
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Smartphone,
  ArrowUpRight,
  Send,
  Clock,
  ShieldCheck,
  MessageCircle,
  Building2,
  User,
} from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";

const MOBILE_NUMBERS = ["+8801777740993", "+8801777740984", "+8801777740897"];

const INQUIRY_TYPES = [
  "Manned Guarding Division",
  "Risk Advisory",
  "Security Technology",
  "Logistics Services",
  "General Enquiry",
];

const DIRECT_LINES = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+8809611-223300",
    href: "tel:+8809611223300",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@securitylink-bd.com",
    href: "mailto:info@securitylink-bd.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "securitylink-bd.com",
    href: "https://www.securitylink-bd.com",
    external: true,
  },
];

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

export default function ContactPage() {
  useScrollReveal();
  const officeRef = useStaggerReveal(140);
  const lineRef = useStaggerReveal(100);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: INQUIRY_TYPES[0],
    message: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry: ${form.type}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Division: ${form.type}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:info@securitylink-bd.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const whatsappMessage = () => {
    const text = `Hello SecurityLink, I would like to enquire about ${form.type}.`;
    window.open(
      `https://wa.me/8801777740983?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const fieldClass =
    "w-full bg-background/60 border border-surface-border focus:border-cobalt-electric outline-none px-4 py-3 text-on-surface font-body-md placeholder:text-on-surface-variant/50 transition-colors";

  return (
    <>
      <style>{`
        .contact-grid {
          background-image:
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 48px 48px;
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

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[68vh] pt-20 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/control-room2.jpg"
            alt="SecurityLink control room operations"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 contact-grid opacity-40" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-14 md:pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative w-2 h-2 rounded-full bg-cobalt-electric live-dot" />
            <span className="font-mono-data text-xs md:text-sm text-cobalt-electric uppercase tracking-[0.25em]">
              SEC-NET: Establish Contact
            </span>
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl text-balance">
            Let&apos;s Secure
            <br />
            <span className="text-cobalt-electric">What Matters</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Speak directly with our operations desk. Phone, email, or the form below — every enquiry
            reaches a member of the SecurityLink team.
          </p>

          {/* Quick assurance strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px mt-10 border border-surface-border bg-surface-border max-w-3xl">
            {[
              { icon: Clock, k: "Response", v: "Within 24 hrs" },
              { icon: ShieldCheck, k: "Consultation", v: "No obligation" },
              { icon: MapPin, k: "Offices", v: "2 in Dhaka" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="bg-background/85 backdrop-blur-sm px-5 py-4 flex items-center gap-3">
                <Icon className="w-5 h-5 text-cobalt-electric shrink-0" />
                <div className="min-w-0">
                  <div className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
                    {k}
                  </div>
                  <div className="font-headline-md text-sm text-on-surface truncate">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FORM + DIRECT LINES ══════════ */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form */}
            <div data-reveal="left" className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Send a Message
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-3 mb-8">
                Request a Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+880 ..."
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                      Division of Interest
                    </label>
                    <select
                      id="type"
                      value={form.type}
                      onChange={update("type")}
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-surface-container-low text-on-surface">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-label-caps text-xs uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about the site, assets, or challenge you need to secure."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-cobalt-electric text-white px-8 py-3.5 font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)]"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={whatsappMessage}
                    className="group inline-flex items-center justify-center gap-2 border border-surface-border hover:border-cobalt-electric text-on-surface px-8 py-3.5 font-bold text-sm uppercase tracking-widest transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-cobalt-electric" />
                    WhatsApp Us
                  </button>
                </div>
              </form>
            </div>

            {/* Direct lines */}
            <div data-reveal="right" className="lg:col-span-5">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Direct Lines
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-3 mb-8">
                Reach Us Now
              </h2>

              <div ref={lineRef} className="space-y-4">
                {DIRECT_LINES.map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    data-reveal-child
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 border border-surface-border hover:border-cobalt-electric bg-surface-container-low/40 p-5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 shrink-0 border border-cobalt-electric/30 bg-cobalt-electric/10 flex items-center justify-center group-hover:bg-cobalt-electric/20 transition-colors">
                      <Icon className="w-5 h-5 text-cobalt-electric" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
                        {label}
                      </div>
                      <div className="font-headline-md text-lg text-on-surface group-hover:text-cobalt-electric transition-colors break-all">
                        {value}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-cobalt-electric ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}

                {/* Mobile numbers */}
                <div className="border border-surface-border bg-surface-container-low/40 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-4 h-4 text-cobalt-electric" />
                    <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
                      Mobile
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {MOBILE_NUMBERS.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\D/g, "")}`}
                        className="font-mono-data text-base text-on-surface hover:text-cobalt-electric transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OFFICES + MAPS ══════════ */}
      <section className="bg-background pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="border-t border-surface-border pt-14 md:pt-20 mb-10">
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
                          <span key={l} className="block">
                            {l}
                          </span>
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
