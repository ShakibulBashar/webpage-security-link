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
      image: "/hero13.jpg"
    },
    {
      title: "Hospital Cleaning",
      icon: "local_hospital",
      desc: "Medical-grade sanitization with biohazard protocols and infection control expertise.",
      image: "/hero12.JPG"
    },
    {
      title: "Corporate Cleaning",
      icon: "business",
      desc: "Professional office maintenance with eco-friendly products and flexible scheduling.",
      image: "/hero11.jpg"
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          <div className="absolute inset-0 rigid-grid opacity-30" />
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

      {/* BREADCRUMB */}
      <div className="bg-obsidian-deep border-t border-surface-border px-6 md:px-12 py-4 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <a href="/" className="hover:text-cobalt-electric transition-colors">Home</a>
            <span>/</span>
            <span className="text-cobalt-electric font-bold">Logistics Division</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          {/* OVERVIEW */}
          <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                  Integrated Support
                </span>
              </div>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Beyond Security: Complete Facility Solutions
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                SecurityLink's Logistics Division extends our commitment beyond security. We provide integrated facility management enabling clients to focus on core business while we handle critical support operations.
              </p>
              <div className="border-l-4 border-cobalt-electric pl-6 py-4 bg-surface-container-low/40">
                <p className="text-on-surface italic">
                  "Professional support services delivered with the same excellence that defines our security operations."
                </p>
              </div>
            </div>
            <div className="relative group glow-border rounded-lg overflow-hidden h-96">
              <Image
                src="/hero13.jpg"
                alt="Logistics Division facility management operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
            </div>
          </div>

          {/* SERVICE GRID */}
          <div className="mb-32 border-t border-surface-border pt-24">
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
                  onClick={() => setActiveService(idx)}
                  className={`cursor-pointer transition-all duration-300 border rounded-lg overflow-hidden group ${
                    activeService === idx
                      ? "border-cobalt-electric glow-border"
                      : "border-surface-border hover:border-cobalt-electric"
                  }`}
                >
                  <div className="relative h-64 overflow-hidden bg-surface-container-low">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-cobalt-electric text-7xl opacity-30">
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-on-surface mb-3 uppercase text-lg tracking-wide">{service.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EMERGING SERVICES */}
          <div className="border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Future Capabilities
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Emerging Service Lines
              </h2>
            </div>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed max-w-3xl">
              SecurityLink is actively developing additional logistics capabilities to provide comprehensive facility management solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "elevator", title: "Lift Servicing", desc: "Preventive maintenance and emergency servicing for elevator systems." },
                { icon: "power", title: "Power Sub-Station", desc: "Technical maintenance ensuring uninterrupted power supply." },
                { icon: "receipt", title: "Bill Deposition", desc: "Secure handling and timely deposit of financial transactions." },
                { icon: "more_horiz", title: "Custom Solutions", desc: "Tailored logistics services for unique operational requirements." }
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-deep border-t border-surface-border py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8">
            Streamline Your Facility Operations
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Let SecurityLink's Logistics Division handle your facility management needs with professional excellence.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all transform hover:scale-105 active:scale-95 text-lg">
            Request Service Quote
          </button>
        </div>
      </section>
    </>
  );
}
