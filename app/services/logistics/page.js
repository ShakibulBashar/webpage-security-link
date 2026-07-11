"use client";

import Image from "next/image";
import { useState } from "react";
import { Shield, CheckCircle, ArrowUpFromLine, Clock, CalendarCheck, Factory, HeartPulse, Building2 } from 'lucide-react';

export default function LogisticsDivision() {
  const [activeService, setActiveService] = useState(0);

      const services = [
    {
      title: "Industrial Cleaning",
      protocol: "01",
      desc: "Heavy-duty facility maintenance with degreasing, equipment care, and compliance standards for manufacturing and warehouse environments.",
      features: [
        "Degreasing and heavy machinery sanitation",
        "Warehouse floor scrubbing and coating",
        "HVAC vent and duct cleaning",
        "Chemical spill containment protocols",
        "Post-construction site cleanup"
      ],
      compliance: ["Safety Protocols", "Environmental Standards", "Quality Assurance"],
      complexity: "HIGH",
      complexityWidth: "85%"
    },
    {
      title: "Hospital Cleaning",
      protocol: "02",
      desc: "Medical-grade sanitization with biohazard protocols and infection control expertise for healthcare facilities, clinics, and laboratories.",
      features: [
        "Terminal cleaning of patient rooms",
        "Sterilization of surgical suites",
        "Biohazard waste stream management",
        "Antimicrobial fogging protocols",
        "Hand-hygiene compliance auditing"
      ],
      compliance: ["Infection Control", "Biohazard Safety", "Medical Standards", "Regulatory Adherence"],
      complexity: "CRITICAL",
      complexityWidth: "98%"
    },
    {
      title: "Corporate House / Office Cleaning",
      protocol: "03",
      desc: "Professional office maintenance with eco-friendly products and flexible scheduling for corporate campuses and commercial buildings.",
      features: [
        "Nightly workstation and common area cleaning",
        "Carpet extraction and hard-floor care",
        "Restroom sanitation and supply restocking",
        "Green-certified product usage",
        "Day porter and concierge services"
      ],
      compliance: ["Eco-Friendly Standards", "Workplace Safety", "Operational Excellence"],
      complexity: "MEDIUM",
      complexityWidth: "60%"
    },
  ];

  return (
    <>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: inset 0 0 20px rgba(37, 99, 235, 0.3), 0 0 20px rgba(37, 99, 235, 0.2); }
          50% { box-shadow: inset 0 0 30px rgba(37, 99, 235, 0.5), 0 0 30px rgba(37, 99, 235, 0.3); }
        }
        .glow-border { animation: glow-pulse 3s ease-in-out infinite; }
        
        @keyframes slide-in-left {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .slide-in { animation: slide-in-left 0.8s ease-out; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in-up 0.4s ease-out forwards; }

        .rigid-grid {
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.2) 1px, transparent 1px);
          background-size: 48px 48px;
        }

                @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in-up 0.4s ease-out forwards; }
      `}</style>

      {/* HERO SECTION — Split Layout */}
      <main className="relative h-screen pt-20 overflow-hidden flex">
        {/* LEFT: Content with Grid Background */}
        <div className="w-full md:w-[45%] h-full relative flex flex-col justify-center px-8 md:px-16 lg:px-24 rigid-grid">
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-3 slide-in">
              <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest">
                SEC-DIV: LOGISTICS
              </span>
            </div>

            <h1
              className="font-headline-xl text-3xl md:text-5xl text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-2xl slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              Logistics Division
            </h1>

            <p
              className="text-on-surface-variant text-base md:text-lg max-w-xl mb-6 leading-relaxed slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive facility management and support services designed to enhance operational
              efficiency and maintain pristine environments.
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border border-cobalt-electric/30 p-3 bg-obsidian-deep/60 backdrop-blur-sm">
                <div className="font-mono-data text-xl text-cobalt-electric font-bold mb-1">3+</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Service Lines
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-3 bg-obsidian-deep/60 backdrop-blur-sm">
                <div className="font-mono-data text-xl text-cobalt-electric font-bold mb-1">100%</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Compliance
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-3 bg-obsidian-deep/60 backdrop-blur-sm">
                <div className="font-mono-data text-xl text-cobalt-electric font-bold mb-1">ECO</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Friendly
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-3 bg-obsidian-deep/60 backdrop-blur-sm">
                <div className="font-mono-data text-xl text-cobalt-electric font-bold mb-1">24/7</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Available
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 slide-in" style={{ animationDelay: "0.4s" }}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95 text-sm">
                Explore other Services
              </button>
              <button className="border-2 border-cobalt-electric text-cobalt-electric px-8 py-3 font-bold uppercase tracking-widest hover:bg-cobalt-electric hover:text-white transition-all transform hover:scale-105 active:scale-95 text-sm">
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Grayscale Hero Image */}
        <div className="hidden md:block w-[55%] h-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/logistics2.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/60" />
        </div>
      </main>

      {/* OVERVIEW — Tactical Operations Brief */}
      <section className="bg-background relative overflow-hidden">
        <div className="h-[4px] w-full bg-gradient-to-r from-transparent via-cobalt-electric/50 to-transparent shadow-[0_-4px_20px_rgba(37,99,235,0.3)]" />
        <div className="relative overflow-hidden ">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-obsidian-deep/80 via-background to-background" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-20 items-center px-6 md:px-12 py-25">
            
            {/* LEFT: Dense tactical brief (col-span-5) */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cobalt-electric rounded-full animate-pulse" />
                <span className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-[0.25em]">
                  FACILITY-OPS // LOGISTICS
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl md:text-4xl text-white uppercase tracking-tighter leading-[0.95]">
                Environments <span className="text-cobalt-electric">That Work</span><br />
                As Hard As You Do
              </h2>

              <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                Sanitation infrastructure is operational infrastructure. We maintain the unseen systems — air quality, surface protocols, waste streams — so your personnel focus on mission-critical output.
              </p>

              {/* HUD quote card */}
              <div className="relative border border-cobalt-electric/20 bg-surface-container-low/30 p-4 backdrop-blur-sm">
                <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cobalt-electric" />
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cobalt-electric" />
                <p className="text-on-surface text-xs italic leading-relaxed">
                  "Clean premises signal operational discipline. We treat facility management with the same rigor as perimeter security."
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-cobalt-electric/50" />
                  <span className="font-mono-data text-[10px] text-cobalt-electric uppercase">DIR. OPERATIONS</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Mission status display (col-span-7) */}
            <div className="md:col-span-7 relative">
              {/* Glass panel */}
              <div className="relative border border-surface-border/50 bg-obsidian-deep/60 backdrop-blur-md p-6 md:p-8">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cobalt-electric/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cobalt-electric/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cobalt-electric/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cobalt-electric/40" />

                {/* Central status */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-cobalt-electric/30 rounded-lg flex items-center justify-center bg-cobalt-electric/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cobalt-electric">
                      <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest">STATUS</div>
                    <div className="font-headline-md text-lg text-white uppercase">All Systems Operational</div>
                  </div>
                </div>

                {/* Three stat rows */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-surface-border/30 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-on-surface-variant text-xs uppercase tracking-wide">Industrial Protocol</span>
                    </div>
                    <span className="font-mono-data text-xs text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-surface-border/30 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-on-surface-variant text-xs uppercase tracking-wide">Medical Sanitization</span>
                    </div>
                    <span className="font-mono-data text-xs text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-on-surface-variant text-xs uppercase tracking-wide">Corporate Maintenance</span>
                    </div>
                    <span className="font-mono-data text-xs text-emerald-400">ACTIVE</span>
                  </div>
                </div>

                {/* Bottom metric bar */}
                <div className="mt-6 pt-4 border-t border-surface-border/30 flex items-center justify-between">
                  <span className="font-mono-data text-[10px] text-on-surface-variant uppercase tracking-widest">Uptime</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-surface-border/50 rounded-full overflow-hidden">
                      <div className="w-[99.2%] h-full bg-cobalt-electric rounded-full" />
                    </div>
                    <span className="font-mono-data text-xs text-cobalt-electric">99.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* CORE OFFERINGS — Operations Console */}
      <section className="bg-background border-t border-surface-border">
        <div className="px-6 md:px-12 pt-12 pb-16 max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="mb-8">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
              Core Offerings
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tighter leading-tight mb-4">
              Cleaning Services
            </h2>
            <p className="text-on-surface-variant text-md max-w-3xl leading-relaxed">
              Multi-sector sanitation protocols engineered for high-stakes environments. 
              From industrial facilities to medical-grade spaces, we deploy specialized teams 
              with sector-specific compliance training.
            </p>
          </div>

          {/* Operations Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Protocol Selector */}
            <div className="lg:col-span-4 space-y-3">
              {services.map((svc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 relative group ${
                    activeService === idx
                      ? "border-cobalt-electric bg-cobalt-electric/5 glow-border"
                      : "border-surface-border bg-surface-container-low/20 hover:border-cobalt-electric/40"
                  }`}
                >
                  {activeService === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cobalt-electric" />
                  )}
                  <div className="flex items-start gap-4 pl-3">
                    <div className={`w-10 h-10 flex items-center justify-center border flex-shrink-0 ${
                      activeService === idx 
                        ? "border-cobalt-electric/50 bg-cobalt-electric/10" 
                        : "border-surface-border/40 bg-background"
                    }`}>
                      {idx === 0 && <Factory className="w-5 h-5 text-cobalt-electric" />}
                      {idx === 1 && <HeartPulse className="w-5 h-5 text-cobalt-electric" />}
                      {idx === 2 && <Building2 className="w-5 h-5 text-cobalt-electric" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono-data text-[10px] text-cobalt-electric/70 uppercase tracking-widest">
                          PROT-{svc.protocol}
                        </span>
                        {activeService === idx && (
                          <span className="w-1.5 h-1.5 bg-cobalt-electric rounded-full animate-pulse" />
                        )}
                      </div>
                      <h3 className={`font-bold uppercase tracking-wide text-sm mb-1 truncate ${
                        activeService === idx ? "text-white" : "text-on-surface"
                      }`}>
                        {svc.title}
                      </h3>
                      <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Active Protocol Detail */}
            <div className="lg:col-span-8">
              <div className="h-full border border-surface-border/60 bg-obsidian-deep/30 backdrop-blur-sm px-8 py-5 md:px-10 md:py-7 relative h-auto">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-cobalt-electric/30" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-cobalt-electric/30" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-cobalt-electric/30" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-cobalt-electric/30" />

                <div key={activeService} className="relative z-10 h-full flex flex-col animate-fade-in">
                  
                  {/* Panel Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-[0.2em]">
                      ACTIVE PROTOCOL // {services[activeService].protocol}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cobalt-electric/30 to-transparent" />
                  </div>

                  {/* Title Row */}
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <h3 className="font-headline-lg text-3xl md:text-4xl text-white uppercase tracking-tighter mb-3">
                        {services[activeService].title}
                      </h3>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-xl">
                        {services[activeService].desc}
                      </p>
                    </div>
                    <div className="hidden md:flex w-14 h-14 border border-cobalt-electric/20 items-center justify-center bg-cobalt-electric/5 flex-shrink-0">
                      {activeService === 0 && <Factory className="w-7 h-7 text-cobalt-electric" />}
                      {activeService === 1 && <HeartPulse className="w-7 h-7 text-cobalt-electric" />}
                      {activeService === 2 && <Building2 className="w-7 h-7 text-cobalt-electric" />}
                    </div>
                  </div>

                  {/* Two Column Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                    {/* Features */}
                    <div>
                      <h4 className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Scope of Work
                      </h4>
                      <ul className="space-y-3">
                        {services[activeService].features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-on-surface-variant text-sm">
                            <span className="w-1 h-1 bg-cobalt-electric rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance & Metrics */}
                    <div>
                      <h4 className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
                        Compliance Framework
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {services[activeService].compliance.map((item, i) => (
                          <span key={i} className="px-3 py-1.5 border border-cobalt-electric/20 text-cobalt-electric text-[11px] font-mono-data uppercase tracking-wider bg-cobalt-electric/5">
                            {item}
                          </span>
                        ))}
                      </div>

                      <h4 className="font-mono-data text-[10px] text-cobalt-electric uppercase tracking-widest mb-3">
                        Complexity Index
                      </h4>
                      <div className="mb-2">
                        <div className="flex justify-between mb-2">
                          <span className="font-mono-data text-[10px] text-on-surface-variant uppercase">
                            Operational Load
                          </span>
                          <span className="font-mono-data text-xs text-cobalt-electric">
                            {services[activeService].complexity}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-surface-border/40 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cobalt-electric to-cobalt-electric/40 transition-all duration-500 ease-out"
                            style={{ width: services[activeService].complexityWidth }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGING SERVICES */}
      <section className="bg-background border-t border-surface-border">
        <div className="px-6 md:px-12 pt-24 pb-24">
          <div className="mb-16">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
              Future Capabilities
            </span>
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
              Emerging Service Lines
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed max-w-3xl">
            SecurityLink is actively developing additional logistics capabilities to provide
            comprehensive facility management solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "elevator",
                title: "Lift Servicing",
                desc: "Preventive maintenance and emergency servicing for elevator systems.",
              },
              {
                icon: "power",
                title: "Power Sub-Station",
                desc: "Technical maintenance ensuring uninterrupted power supply.",
              },
              {
                icon: "receipt",
                title: "Bill Deposition",
                desc: "Secure handling and timely deposit of financial transactions.",
              },
              {
                icon: "more_horiz",
                title: "Custom Solutions",
                desc: "Tailored logistics services for unique operational requirements.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border"
              >
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-cobalt-electric text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}