"use client";

import Image from "next/image";
import { useState } from "react";

export default function LogisticsDivision() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Industrial Cleaning",
      icon: "factory",
      desc: "Heavy-duty facility maintenance with degreasing, equipment care, and compliance standards.",
      features: ["Degreasing & deep cleaning", "Equipment maintenance", "Compliance certification", "Waste management"]
    },
    {
      title: "Hospital Cleaning",
      icon: "local_hospital",
      desc: "Medical-grade sanitization with biohazard protocols and infection control expertise.",
      features: ["Biohazard protocols", "Infection control", "Medical standards", "Emergency response"]
    },
    {
      title: "Corporate Cleaning",
      icon: "business",
      desc: "Professional office maintenance with eco-friendly products and flexible scheduling.",
      features: ["Eco-friendly products", "Flexible scheduling", "Office maintenance", "Green practices"]
    }
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

        .rigid-grid {
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* HERO SECTION */}
      <main className="relative min-h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/hero13.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Lighter Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/20" />
          <div className="absolute inset-0 rigid-grid opacity-20" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 py-32">
          <div className="max-w-5xl w-full">
            <div className="mb-8 flex items-center gap-3 slide-in">
              <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest">
                SEC-DIV: LOGISTICS
              </span>
            </div>

            <h1 className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in" style={{ animationDelay: "0.1s" }}>
              Logistics Division
            </h1>

            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mb-8 leading-relaxed slide-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive facility management and support services designed to enhance operational efficiency and maintain pristine environments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">3+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Service Lines</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">100%</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Compliance</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">ECO</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Friendly</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">24/7</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 slide-in" style={{ animationDelay: "0.4s" }}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95">
                Explore Services
              </button>
              <button className="border-2 border-cobalt-electric text-cobalt-electric px-8 py-4 font-bold uppercase tracking-widest hover:bg-cobalt-electric hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          
          {/* SECTION 1: CORE SERVICES MATRIX */}
          <div className="mb-32">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Core Offerings
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Professional Cleaning Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`border transition-all duration-300 p-8 cursor-pointer group ${
                    activeService === idx
                      ? "border-cobalt-electric glow-border bg-surface-container-low"
                      : "border-surface-border hover:border-cobalt-electric"
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="material-symbols-outlined text-cobalt-electric text-5xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide mt-1">{service.title}</h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-2">
                        <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                        <span className="text-on-surface-variant text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: SERVICE CAPABILITIES */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Capabilities
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Integrated Facility Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "cleaning_services", title: "Deep Cleaning", desc: "Comprehensive facility sanitization using industrial-grade equipment and eco-friendly products." },
                { icon: "health_and_safety", title: "Health & Safety", desc: "Compliance with international health standards and safety protocols for all environments." },
                { icon: "schedule", title: "Flexible Scheduling", desc: "24/7 availability with customizable service windows to minimize operational disruption." },
                { icon: "verified", title: "Quality Assurance", desc: "Regular inspections and performance monitoring ensuring consistent service excellence." },
                { icon: "recycling", title: "Waste Management", desc: "Proper disposal and recycling protocols aligned with environmental regulations." },
                { icon: "trending_up", title: "Continuous Improvement", desc: "Feedback mechanisms and process optimization for enhanced service delivery." }
              ].map((item, idx) => (
                <div key={idx} className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border">
                  <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-4 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-sm tracking-wide">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: EMERGING SERVICE LINES */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Future Capabilities
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Emerging Service Lines
              </h2>
            </div>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed max-w-3xl">
              SecurityLink is actively developing additional logistics capabilities to provide comprehensive facility management solutions tailored to evolving client needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "elevator", title: "Lift Servicing", desc: "Preventive maintenance and emergency servicing for elevator systems ensuring safety and reliability." },
                { icon: "power", title: "Power Sub-Station", desc: "Technical maintenance ensuring uninterrupted power supply and system optimization." },
                { icon: "receipt", title: "Bill Deposition", desc: "Secure handling and timely deposit of financial transactions with audit trails." },
                { icon: "more_horiz", title: "Custom Solutions", desc: "Tailored logistics services for unique operational requirements and specialized needs." }
              ].map((item, idx) => (
                <div key={idx} className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border">
                  <div className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-cobalt-electric text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-on-surface mb-2 uppercase tracking-wide">{item.title}</h3>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: OVERVIEW & INTEGRATION */}
          <div className="border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Integration
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Beyond Security: Complete Facility Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  SecurityLink's Logistics Division extends our commitment beyond security. We provide integrated facility management enabling clients to focus on core business while we handle critical support operations with professional excellence.
                </p>
                <div className="border-l-4 border-cobalt-electric pl-6 py-4 bg-surface-container-low/40 mb-8">
                  <p className="text-on-surface italic">
                    "Professional support services delivered with the same excellence that defines our security operations."
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">handshake</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Seamless Integration</h4>
                      <p className="text-on-surface-variant text-sm">Works alongside our security services for comprehensive facility management.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">shield</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Trusted Partner</h4>
                      <p className="text-on-surface-variant text-sm">Same rigorous standards and professional approach as our core security division.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">speed</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Operational Efficiency</h4>
                      <p className="text-on-surface-variant text-sm">Streamlined processes and coordinated scheduling reduce overhead and complexity.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">eco</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Eco-Friendly</h4>
                  <p className="text-on-surface-variant text-xs">Sustainable practices and green cleaning products for environmental responsibility.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">verified_user</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Certified Teams</h4>
                  <p className="text-on-surface-variant text-xs">Trained and certified personnel ensuring professional service delivery standards.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">schedule</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">24/7 Support</h4>
                  <p className="text-on-surface-variant text-xs">Round-the-clock availability for emergency services and urgent facility needs.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">assessment</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Quality Control</h4>
                  <p className="text-on-surface-variant text-xs">Regular audits and performance reviews ensuring consistent service excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
