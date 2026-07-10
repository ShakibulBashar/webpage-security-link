"use client";

import Image from "next/image";
import { useState } from "react";

export default function GuardDivision() {
  const [activeTab, setActiveTab] = useState(0);

  const heroImages = ["/hero16.JPG", "/hero15.jpg", "/hero14.jpg"];

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

        .rigid-grid {
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* HERO SECTION - TECHNICAL HUD STYLE */}
      <main className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: activeTab === idx ? 1 : 0,
              }}
            />
          ))}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 rigid-grid opacity-30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 py-32">
          <div className="max-w-5xl w-full">
            {/* Status Badge */}
            <div className="mb-8 flex items-center gap-3 slide-in">
              <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest">
                SEC-DIV: GUARD OPERATIONS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in" style={{ animationDelay: "0.1s" }}>
              Guard Division
            </h1>

            {/* Subtitle */}
            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mb-8 leading-relaxed slide-in" style={{ animationDelay: "0.2s" }}>
              Systematic quality-driven protection grounded in rigorous selection, continuous development, and unwavering operational excellence.
            </p>

            {/* Technical Data Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">2-LAYER</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Supervision</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">6-MONTH</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Assessment</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">100%</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Verified</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">24/7</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Monitored</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 slide-in" style={{ animationDelay: "0.4s" }}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95">
                Explore Division
              </button>
              <button className="border-2 border-cobalt-electric text-cobalt-electric px-8 py-4 font-bold uppercase tracking-widest hover:bg-cobalt-electric hover:text-white transition-all transform hover:scale-105 active:scale-95">
                View Operations
              </button>
            </div>
          </div>
        </div>

        {/* Image Selector Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTab === idx
                  ? "bg-cobalt-electric w-8"
                  : "bg-on-surface-variant/50 hover:bg-on-surface-variant"
              }`}
            />
          ))}
        </div>
      </main>

      {/* BREADCRUMB */}
      <div className="bg-obsidian-deep border-t border-surface-border px-6 md:px-12 py-4 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <a href="/" className="hover:text-cobalt-electric transition-colors">Home</a>
            <span>/</span>
            <span className="text-cobalt-electric font-bold">Guard Division</span>
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          {/* SECTION 1: CORE PHILOSOPHY */}
          <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                  Foundation
                </span>
              </div>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Systematic Quality Over Rapid Growth
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                The Guard Division represents our core commitment: developing personnel through rigorous selection, continuous training, and systematic supervision. We prioritize character, competence, and behavioral excellence over expansion metrics.
              </p>
              <div className="border-l-4 border-cobalt-electric pl-6 py-4 bg-surface-container-low/40">
                <p className="text-on-surface italic">
                  "Quality takes time. Every member of our guard force meets exacting standards and represents SecurityLink's commitment to excellence."
                </p>
              </div>
            </div>
            <div className="relative group glow-border rounded-lg overflow-hidden h-96">
              <Image
                src="/hero16.JPG"
                alt="Guard Division operations and team coordination"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
            </div>
          </div>

          {/* SECTION 2: OPERATIONAL HIERARCHY */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Structure
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Dual-Layer Supervision & HQ Oversight
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-cobalt-electric">schedule</span>
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">Daily Supervision</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Field visits and performance monitoring ensure compliance with quality standards and operational protocols.
                </p>
              </div>
              <div className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-cobalt-electric">assessment</span>
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">Weekly Reviews</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Structured assessments of guard performance, incident analysis, and operational effectiveness metrics.
                </p>
              </div>
              <div className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-cobalt-electric">trending_up</span>
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">Monthly Planning</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Strategic sessions addressing emerging challenges and optimizing deployment strategies across all posts.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: QUALITY ASSURANCE */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Excellence
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Rigorous Selection, Training & Assessment
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "verified_user", title: "Background Verification", desc: "Police verification, documentation, and comprehensive identity checks." },
                { icon: "school", title: "Training Programs", desc: "Comprehensive skill development ensuring effective duty execution." },
                { icon: "assignment_turned_in", title: "Six-Month Assessment", desc: "Regular evaluation cycles for quality maintenance and promotion." },
                { icon: "trending_up", title: "Continuous Development", desc: "Ongoing supervision ensuring peak performance levels." }
              ].map((item, idx) => (
                <div key={idx} className="border border-surface-border p-6 hover:border-cobalt-electric transition-all group glow-border">
                  <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-4 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-sm tracking-wide">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: EMPLOYEE WELFARE */}
          <div className="border-t border-surface-border pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group glow-border rounded-lg overflow-hidden h-96 order-2 md:order-1">
                <Image
                  src="/hero14.jpg"
                  alt="Guard Division team building and employee engagement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block mb-6">
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                    Commitment
                  </span>
                </div>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                  Satisfied Employees, Satisfied Clients
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Competitive Salary", desc: "Market-standard compensation reflecting performance." },
                    { title: "Merit-Based Promotion", desc: "Clear advancement pathways based on demonstrated competence." },
                    { title: "Fair Assessment", desc: "Transparent evaluation ensuring equitable treatment." },
                    { title: "Open Management Access", desc: "Direct channels to senior leadership for concerns." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0 mt-1">check_circle</span>
                      <div>
                        <h4 className="font-bold text-on-surface mb-1">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-obsidian-deep border-t border-surface-border py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8">
            Ready to Experience Professional Guard Services?
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Contact SecurityLink's Guard Division to discuss your security requirements and discover how our systematic approach protects your assets with excellence.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all transform hover:scale-105 active:scale-95 text-lg">
            Schedule Consultation
          </button>
        </div>
      </section>
    </>
  );
}
