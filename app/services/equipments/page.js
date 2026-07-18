// Equipment Division — Systems Dossier
"use client";
import { useState } from "react";

const CATEGORIES = [
  {
    code: "EQ-01",
    id: "cctv",
    icon: "videocam",
    name: "CCTV System",
    tagline: "Continuous visual coverage from entry points to blind corners, recorded and stored centrally.",
    items: ["Mini Bullet Camera", "Varifocal Bullet Camera", "Dome Camera", "PANOVU Camera", "PTZ Camera", "Storage Server", "NVR"],
  },
  {
    code: "EQ-02",
    id: "access",
    icon: "fingerprint",
    name: "Access Control & Time Attendance",
    tagline: "Identity verification and attendance logging at every controlled door.",
    items: ["Card Reader", "Biometric Reader", "Face Identification Reader", "Handle Lock", "Iris Scanner", "Door Controller", "Vehicle Tag Reader", "Access Control Server", "Visitor Management System", "RFID Card Printer"],
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
    tagline: "The cabling, switching and storage backbone that keeps every device talking to the control room.",
    items: ["Network Switch", "Network Rack", "Media Converter", "RJ45 Connector", "Hard Drive Device", "Network Cable", "Wire Manager", "Patch Panel", "Fiber Patch Panel", "Fiber Patch Chord", "PC", "Router"],
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
    items: ["Smoke Detector", "Heat Detector", "Manual Call Point", "Sorbe Horn", "Fire Alarm Control Panel", "Fire Extinguisher", "Dry Sprinkler", "Gas Leakage Detector", "Intruder Alarm System"],
  },
  {
    code: "EQ-07",
    id: "scanning",
    icon: "radar",
    name: "Scanning Devices",
    tagline: "Baggage, body and vehicle screening for high-security checkpoints.",
    items: ["Baggage Scanner", "Baggage Scanner (Small Size)", "Hand Held Metal Detector", "Human Body Scanner", "Vehicle Scanner", "Walk Through Metal Detector"],
  },
];

const BRANDS = ["Aventura", "Avtech", "Context Plus", "Dahua", "Hikvision", "Johnson Controls", "i3 Technologies", "ZKTeco", "Mobotix", "Safran", "Rosenberger", "Toten", "Tyco", "Virdi", "WD"];

const MAP_NODES = [
  { id: "cctv", icon: "videocam", label: "CCTV", top: 14, left: 50 },
  { id: "access", icon: "fingerprint", label: "Access Control", top: 27.6, left: 65.7 },
  { id: "network", icon: "lan", label: "Networking", top: 58, left: 69.6 },
  { id: "fire", icon: "local_fire_department", label: "Fire Detection", top: 82.4, left: 58.7 },
  { id: "scanning", icon: "radar", label: "Scanning", top: 82.4, left: 41.3 },
  { id: "parking", icon: "local_parking", label: "Parking", top: 58, left: 30.6 },
  { id: "entrance", icon: "sensor_door", label: "Entrance Control", top: 27.6, left: 34.3 },
];

const HUB = { top: 50, left: 50 };

export default function EquipmentDivision() {
  const [openId, setOpenId] = useState("cctv");
  const totalComponents = CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      <style>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -24; }
        }
        .flow-line {
          stroke-dasharray: 4 6;
          animation: dash-flow 1.6s linear infinite;
        }
        @keyframes node-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.35); }
          50% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
        }
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
      `}</style>

      {/* ─────────────────────────────────────────────── */}
      {/* TITLE BLOCK */}
      {/* ─────────────────────────────────────────────── */}
      <main className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-obsidian-deep blueprint-grid border-b border-surface-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
            <span className="font-mono-data text-sm text-cobalt-electric uppercase tracking-widest">
              Division 03 / 04 &mdash; Equipment
            </span>
          </div>

          <h1 className="font-headline-xl text-4xl md:text-6xl text-on-surface uppercase tracking-tighter mb-6 leading-[0.95] max-w-4xl mx-auto">
            Equipment <span className="text-cobalt-electric">Division</span>
          </h1>

          <p className="text-on-surface-variant font-body-md text-base md:text-lg max-w-2xl mx-auto mb-10">
            We solve the client&apos;s security problem &mdash; not just supply a product. Our specialists
            select the right equipment for the requirement, and where useful, wire every system
            into one control room so fewer guards can cover more ground without gaps.
          </p>

          {/* Title block grid — styled like Guard page data boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono-data text-xs md:text-sm max-w-3xl mx-auto">
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">Status</div>
              <div className="text-cobalt-electric font-bold text-lg md:text-xl">Operational</div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">Systems</div>
              <div className="text-cobalt-electric font-bold text-lg md:text-xl">{CATEGORIES.length}</div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">Components</div>
              <div className="text-cobalt-electric font-bold text-lg md:text-xl">{totalComponents}</div>
            </div>
            <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
              <div className="text-on-surface-variant uppercase tracking-widest mb-1 text-[10px] md:text-xs">Integration</div>
              <div className="text-cobalt-electric font-bold text-lg md:text-xl">Control Room</div>
            </div>
          </div>
        </div>
      </main>

      {/* ─────────────────────────────────────────────── */}
      {/* SYSTEM INTEGRATION MAP — left diagram, right text */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-background py-8 md:py-10 border-x border-t border-surface-border mx-auto relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: Diagram */}
            <div className="lg:col-span-7 relative w-full max-w-3xl mx-auto lg:mx-0" style={{ aspectRatio: "900 / 700" }}>
              <svg viewBox="0 0 900 500" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                {MAP_NODES.map((n) => {
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
                      strokeOpacity="0.45"
                      strokeWidth="1.5"
                      className="flow-line"
                    />
                  );
                })}
              </svg>

              {/* Hub */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-obsidian-deep node-pulse z-10"
                style={{ top: `${HUB.top}%`, left: `${HUB.left}%` }}
              >
                <span className="material-symbols-outlined text-white text-3xl md:text-4xl">hub</span>
                <span className="font-mono-data text-white text-[10px] md:text-xs uppercase tracking-wider mt-1">Control Room</span>
              </div>

              {/* Nodes */}
              {MAP_NODES.map((n) => (
                <div
                  key={n.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 group cursor-default"
                  style={{ top: `${n.top}%`, left: `${n.left}%` }}
                  onMouseEnter={() => setOpenId(n.id)}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-container-low border border-cobalt-electric/50 flex items-center justify-center group-hover:border-cobalt-electric group-hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-cobalt-electric text-xl md:text-2xl">{n.icon}</span>
                  </div>
                  <span className="font-label-caps text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider whitespace-nowrap">
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
                  Every device category below can report into a single, centralized point of
                  monitoring — reducing manpower while keeping every zone covered.
                </p>
                <p>
                  Our integration architecture consolidates CCTV, access control, fire detection,
                  and scanning systems into one unified command interface. This eliminates
                  information silos and accelerates response times across the entire facility.
                </p>
                <p>
                  Field officers and control room operators share the same real-time data layer,
                  ensuring that incidents are escalated instantly and recorded accurately for
                  post-event analysis and compliance reporting.
                </p>
                <p>
                  Whether you are securing a single facility or a distributed campus, the control
                  room acts as the central nervous system — always awake, always aware, and always
                  in command.
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
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Schedule of Equipment</span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 uppercase">Seven Systems, {totalComponents} Components</h2>
          </div>

          <div className="max-w-6xl mx-auto border border-surface-border divide-y divide-surface-border">
            {CATEGORIES.map((cat) => {
              const isOpen = openId === cat.id;
              return (
                <div key={cat.id} className="schedule-row bg-surface-container-low" data-open={isOpen}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : cat.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-8 py-5 text-left hover:bg-surface-container-high transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                      <span className="font-mono-data text-cobalt-electric text-xs md:text-sm shrink-0">{cat.code}</span>
                      <span className="material-symbols-outlined text-cobalt-electric text-2xl shrink-0">{cat.icon}</span>
                      <div className="min-w-0">
                        <h3 className="font-headline-md text-on-surface text-sm md:text-base uppercase truncate">{cat.name}</h3>
                        <p className="text-on-surface-variant text-xs md:text-sm font-body-sm mt-0.5 hidden sm:block truncate">{cat.tagline}</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>

                  <div className="schedule-body">
                    <div>
                      <div className="px-5 md:px-8 pb-6 pl-16 md:pl-24">
                        <p className="text-on-surface-variant text-sm font-body-sm mb-4 sm:hidden">{cat.tagline}</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className="font-mono-data text-xs text-on-surface border border-surface-border bg-obsidian-deep px-3 py-1.5"
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
            <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Vendor Schedule</span>
            <h2 className="font-headline-md md:font-headline-lg text-on-surface mt-2 uppercase">Brands We Deploy</h2>
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
          <p className="text-on-surface-variant font-body-sm max-w-lg text-center sm:text-left">
            Equipment is only as good as the plan behind it. Our Risk Advisory team runs the
            site survey that decides what actually belongs on this schedule.
          </p>
          <a
            href="/services/risk-management"
            className="inline-flex items-center gap-2 font-bold text-on-surface hover:text-cobalt-electric transition-colors whitespace-nowrap"
          >
            Risk Advisory
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}