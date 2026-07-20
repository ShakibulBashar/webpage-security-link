// Equipment Division — Systems Dossier
"use client";
import { useState, useEffect } from "react";

const CATEGORIES = [
  {
    code: "EQ-01",
    id: "cctv",
    icon: "videocam",
    name: "CCTV System",
    tagline:
      "Continuous visual coverage from entry points to blind corners, recorded and stored centrally.",
    items: [
      "Mini Bullet Camera",
      "Varifocal Bullet Camera",
      "Dome Camera",
      "PANOVU Camera",
      "PTZ Camera",
      "Storage Server",
      "NVR",
    ],
  },
  {
    code: "EQ-02",
    id: "access",
    icon: "fingerprint",
    name: "Access Control & Time Attendance",
    tagline: "Identity verification and attendance logging at every controlled door.",
    items: [
      "Card Reader",
      "Biometric Reader",
      "Face Identification Reader",
      "Handle Lock",
      "Iris Scanner",
      "Door Controller",
      "Vehicle Tag Reader",
      "Access Control Server",
      "Visitor Management System",
      "RFID Card Printer",
    ],
  },
  {
    code: "EQ-03",
    id: "entrance",
    icon: "sensor_door",
    name: "Entrance Control System",
    tagline: "Physical throughput control for pedestrian and vehicle entry points.",
    items: ["Tripod Turnstile", "Swing Barrier", "Full Height Barrier Gate"],
  },
  {
    code: "EQ-04",
    id: "network",
    icon: "lan",
    name: "Networking Devices",
    tagline:
      "The cabling, switching and storage backbone that keeps every device talking to the control room.",
    items: [
      "Network Switch",
      "Network Rack",
      "Media Converter",
      "RJ45 Connector",
      "Hard Drive Device",
      "Network Cable",
      "Wire Manager",
      "Patch Panel",
      "Fiber Patch Panel",
      "Fiber Patch Chord",
      "PC",
      "Router",
    ],
  },
  {
    code: "EQ-05",
    id: "parking",
    icon: "local_parking",
    name: "Parking Management",
    tagline: "Vehicle screening and access control at the perimeter and parking gate.",
    items: ["Boom Barrier", "Under Vehicle Search Mirror", "UVSS (Under Vehicle Scanning System)"],
  },
  {
    code: "EQ-06",
    id: "fire",
    icon: "local_fire_department",
    name: "Fire Detection & Alarm System",
    tagline: "Early detection and alerting for smoke, heat and gas hazards.",
    items: [
      "Smoke Detector",
      "Heat Detector",
      "Manual Call Point",
      "Sorbe Horn",
      "Fire Alarm Control Panel",
      "Fire Extinguisher",
      "Dry Sprinkler",
      "Gas Leakage Detector",
      "Intruder Alarm System",
    ],
  },
  {
    code: "EQ-07",
    id: "scanning",
    icon: "radar",
    name: "Scanning Devices",
    tagline: "Baggage, body and vehicle screening for high-security checkpoints.",
    items: [
      "Baggage Scanner",
      "Baggage Scanner (Small Size)",
      "Hand Held Metal Detector",
      "Human Body Scanner",
      "Vehicle Scanner",
      "Walk Through Metal Detector",
    ],
  },
];

const BRANDS = [
  "Aventura",
  "Avtech",
  "Context Plus",
  "Dahua",
  "Hikvision",
  "Johnson Controls",
  "i3 Technologies",
  "ZKTeco",
  "Mobotix",
  "Safran",
  "Rosenberger",
  "Toten",
  "Tyco",
  "Virdi",
  "WD",
];

const MAP_NODES = [
  { id: "cctv", icon: "videocam", label: "CCTV", top: 14, left: 50 },
  { id: "access", icon: "fingerprint", label: "Access Control", top: 27.6, left: 65.7 },
  { id: "network", icon: "lan", label: "Networking", top: 58, left: 69.6 },
  { id: "fire", icon: "local_fire_department", label: "Fire Detection", top: 82.4, left: 58.7 },
  { id: "scanning", icon: "radar", label: "Scanning", top: 82.4, left: 41.3 },
  { id: "parking", icon: "local_parking", label: "Parking", top: 58, left: 30.6 },
  { id: "entrance", icon: "sensor_door", label: "Entrance Control", top: 27.6, left: 34.3 },
];

const MAP_NODES_MOBILE = [
  { id: "cctv", icon: "videocam", label: "CCTV", top: 8, left: 50 },
  { id: "access", icon: "fingerprint", label: "Access Control", top: 24, left: 82 },
  { id: "network", icon: "lan", label: "Networking", top: 50, left: 90 },
  { id: "fire", icon: "local_fire_department", label: "Fire Detection", top: 76, left: 72 },
  { id: "scanning", icon: "radar", label: "Scanning", top: 76, left: 28 },
  { id: "parking", icon: "local_parking", label: "Parking", top: 50, left: 10 },
  { id: "entrance", icon: "sensor_door", label: "Entrance Control", top: 24, left: 18 },
];

const HUB = { top: 50, left: 50 };

export default function EquipmentDivision() {
  const [openId, setOpenId] = useState("cctv");
  const [isMobile, setIsMobile] = useState(false);
  const totalComponents = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const activeNodes = isMobile ? MAP_NODES_MOBILE : MAP_NODES;

  return (
    <>
      <style>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -24; }
        }
        .flow-line {
  stroke-dasharray: 6 4;   /* was 4 6 — longer dashes, tighter gaps */
  animation: dash-flow 1.6s linear infinite;
}
        @keyframes node-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6); }
  50% { box-shadow: 0 0 0 24px rgba(37, 99, 235, 0); }
}
.node-pulse { animation: node-pulse 2.6s ease-in-out infinite; }
        .node-pulse { animation: node-pulse 2.6s ease-in-out infinite; }
        .blueprint-grid {
          background-image:
            linear-gradient(to right, rgba(100, 116, 139, 0.10) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.10) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .schedule-row[data-open="false"] .schedule-body {
          grid-template-rows: 0fr;
          opacity: 0;
        }
        .schedule-row[data-open="true"] .schedule-body {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .schedule-body {
          display: grid;
          transition: grid-template-rows 0.35s ease, opacity 0.3s ease;
        }
        .schedule-body > div { overflow: hidden; }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
          
        .shimmer-text {
          background: linear-gradient(90deg, #2563EB 0%, #d3e4fe 50%, #2563EB 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s infinite;
        }

        .shimmers-text {
          background: linear-gradient(90deg, #2563EB 0%, #d3e4fe 50%, #2563EB 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
        }
        .diagram-wrap { aspect-ratio: 3 / 4; }
        @media (min-width: 768px) { .diagram-wrap { aspect-ratio: 900 / 700; } }
      `}</style>

      {/* ─────────────────────────────────────────────── */}
      {/* TITLE BLOCK */}
      {/* ─────────────────────────────────────────────── */}
      <main className="relative pt-40 pb-8  md:pb-20 bg-obsidian-deep blueprint-grid border-b border-surface-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 lg:mb-8">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="font-mono-data text-xs lg:text-sm text-white uppercase tracking-widest">
              Division 03 / 04 &mdash; Security Technology Integration
            </span>
          </div>

          <h1 className="font-headline-xl text-3xl md:text-6xl text-on-surface uppercase tracking-tighter mb-4 lg:mb-6 leading-[0.95] max-w-4xl mx-auto shimmers-text">
            Equipment Division
          </h1>

          <p className="text-on-surface-variant font-body-md text-sm md:text-lg max-w-8xl mx-auto mb-6 lg:mb-10 leading-relaxed">
            <span>
              We solve the client&apos;s security problem &mdash; not just supply a product. Our
              specialists select the right equipment for the requirement, and where useful, wire every
              system into one control room so fewer guards can cover more ground without gaps.
            </span>
            <span className="hidden lg:inline">
              Our team of engineers and technicians are trained to install, configure, and maintain every
              device on this schedule. We also provide training for your security personnel so they can
              operate the systems effectively. SecurityLink is your one-stop solution for all security
              technology needs, ensuring that your facility is protected by the best equipment and
              expertise available.
            </span>
          </p>

          {/* Title block grid — styled like Guard page data boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono-data text-xs md:text-sm max-w-3xl mx-auto">
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">
                Status
              </div>
              <div className="text-cobalt-electric font-bold text-base md:text-xl shimmer-text">
                Operational
              </div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">
                Systems
              </div>
              <div className="text-cobalt-electric font-bold text-base lg:text-xl shimmer-text">
                {CATEGORIES.length}+
              </div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">
                Components
              </div>
              <div className="text-cobalt-electric font-bold text-base lg:text-xl shimmer-text">
                {totalComponents}+
              </div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">
                Integrated
              </div>
              <div className="text-cobalt-electric font-bold text-base lg:text-xl shimmer-text">
                Control Room
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ─────────────────────────────────────────────── */}
      {/* SYSTEM INTEGRATION MAP — left diagram, right text */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-4 sm:py-8 lg:py-10 border-x border-t border-surface-border mx-auto relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            {/* LEFT: Diagram */}
            <div className="lg:col-span-7 relative w-full max-w-none lg:max-w-3xl mx-auto lg:mx-0 diagram-wrap">
              <svg
                viewBox="0 0 900 500"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full overflow-visible"
                aria-hidden="true"
              >
                {activeNodes.map((n) => {
                  const x1 = (HUB.left / 100) * 900;
                  const y1 = (HUB.top / 100) * 500;
                  const x2 = (n.left / 100) * 900;
                  const y2 = (n.top / 100) * 500;
                  return (
                    <line
                      key={n.id}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="var(--color-cobalt-electric)"
                      strokeOpacity="0.85" // was 0.45
                      strokeWidth="2.5" // was 1.5
                      className="flow-line"
                    />
                  );
                })}
              </svg>

              {/* Hub */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-obsidian-deep node-pulse z-10"
                style={{ top: `${HUB.top}%`, left: `${HUB.left}%` }}
              >
                <span className="material-symbols-outlined text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
                  hub
                </span>
                <span className="font-mono-data text-white text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider mt-1">
                  Control Room
                </span>
              </div>

              {/* Nodes */}
              {activeNodes.map((n) => (
                <div
                  key={n.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 sm:gap-1.5 group cursor-default"
                  style={{ top: `${n.top}%`, left: `${n.left}%` }}
                  onMouseEnter={() => setOpenId(n.id)}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container-low border border-cobalt-electric/50 flex items-center justify-center group-hover:border-cobalt-electric group-hover:bg-surface-container-high transition-colors node-pulse">
                    <span className="material-symbols-outlined text-cobalt-electric text-xl sm:text-xl md:text-2xl lg:text-2xl">
                      {n.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-[9px] sm:text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider whitespace-nowrap leading-tight text-center">
                    {n.label}
                  </span>
                </div>
              ))}
            </div>

            {/* RIGHT: Text Content */}
            <div className="lg:col-span-5 text-left">
              <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em] block mb-2">
                One Control Room
              </span>
              <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 uppercase mb-6">
                System Integration
              </h2>
              <div className="space-y-4 text-on-surface-variant font-body-sm md:text-base leading-relaxed">
                <p>
                  Every device category below can report into a single, centralized point of monitoring —
                  reducing manpower while keeping every zone covered.
                </p>
                <p>
                  Our integration architecture consolidates CCTV, access control, fire detection, and
                  scanning systems into one unified command interface. This eliminates information silos
                  and accelerates response times across the entire facility.
                </p>
                <p>
                  Field officers and control room operators share the same real-time data layer, ensuring
                  that incidents are escalated instantly and recorded accurately for post-event analysis
                  and compliance reporting.
                </p>
                <p>
                  Whether you are securing a single facility or a distributed campus, the control room
                  acts as the central nervous system — always awake, always aware, and always in command.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* EQUIPMENT SCHEDULE — accordion spec sheet */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-16 md:py-24 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="mb-12 text-center">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">
              Schedule of Equipment
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 uppercase">
              7+ Systems, {totalComponents}+ Components
            </h2>
          </div>

          <div className="max-w-auto mx-auto border border-surface-border divide-y divide-surface-border">
            {CATEGORIES.map((cat) => {
              const isOpen = openId === cat.id;
              return (
                <div key={cat.id} className="schedule-row bg-surface-container-low" data-open={isOpen}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : cat.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-8 py-5 text-left hover:bg-surface-container-high transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 lg:gap-6 min-w-0">
                      <span className="font-mono-data text-cobalt-electric text-xs lg:text-base shrink-0">
                        {cat.code}
                      </span>
                      <span className="material-symbols-outlined text-cobalt-electric text-2xl lg:text-4xl shrink-0">
                        {cat.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-headline-md text-on-surface text-sm lg:text-2xl uppercase truncate">
                          {cat.name}
                        </h3>
                        <p className="text-on-surface-variant text-xs lg:text-base font-body-sm mt-0.5 hidden sm:block truncate">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      expand_more
                    </span>
                  </button>

                  <div className="schedule-body">
                    <div>
                      <div className="px-5 md:px-8 pb-6 pl-16 md:pl-24">
                        <p className="text-on-surface-variant text-sm font-body-sm mb-4 sm:hidden">
                          {cat.tagline}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className="font-mono-data text-xs lg:text-base text-on-surface border border-surface-border bg-obsidian-deep px-3 py-1.5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* APPROVED BRANDS */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-16 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-10">
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">
              Vendor Schedule
            </span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 uppercase">
              Brands We Deploy
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-mono-data text-xs md:text-sm text-on-surface-variant border border-surface-border px-4 py-2 hover:border-cobalt-electric hover:text-on-surface transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* CLOSING NOTE */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-obsidian-deep py-14 border-x border-t border-surface-border mx-auto relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-surface-border bg-surface-container-low px-6 py-8 md:px-10">
          <p className="text-on-surface-variant font-body-sm font-mono-data text-sm lg:text-lg max-w-4xl text-center sm:text-left">
            Equipment is only as good as the plan behind it. Our Risk Advisory team runs the site survey
            that decides what actually belongs on this schedule.
          </p>
          <a
            href="/services/risk-management"
            className="inline-flex items-center gap-2 font-bold text-cobalt-electric font-leading-lg text-lg lg:text-2xl hover:text-on-surface  transition-colors whitespace-nowrap"
          >
            Risk Advisory
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
