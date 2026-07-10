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
                SEC-DIV: GUARD OPERATIONS
              </span>
            </div>

            <h1 className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in" style={{ animationDelay: "0.1s" }}>
              Guard Division
            </h1>

            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mb-8 leading-relaxed slide-in" style={{ animationDelay: "0.2s" }}>
              Systematic quality-driven protection grounded in rigorous selection, continuous development, and unwavering operational excellence.
            </p>

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

      {/* CONTENT SECTIONS */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          
          {/* SECTION 1: QUALITY ASSURANCE FRAMEWORK */}
          <div className="mb-32">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Excellence Framework
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Rigorous Selection, Training & Assessment
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: "verified_user", title: "Background Verification", desc: "Police verification, documentation, and comprehensive identity checks ensuring integrity." },
                { icon: "school", title: "Training Programs", desc: "Comprehensive skill development ensuring effective duty execution and professional standards." },
                { icon: "assignment_turned_in", title: "Six-Month Assessment", desc: "Regular evaluation cycles for quality maintenance, promotion, and continuous improvement." },
                { icon: "trending_up", title: "Continuous Development", desc: "Ongoing supervision ensuring peak performance levels and operational excellence." }
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
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Field visits and performance monitoring ensure compliance with quality standards and operational protocols at every post.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Post-level inspections</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Real-time performance tracking</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Immediate corrective action</span>
                  </li>
                </ul>
              </div>
              <div className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-cobalt-electric">assessment</span>
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">Weekly Reviews</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Structured assessments of guard performance, incident analysis, and operational effectiveness metrics across all divisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Performance metrics review</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Incident case analysis</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Behavioral assessment</span>
                  </li>
                </ul>
              </div>
              <div className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-cobalt-electric">trending_up</span>
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">Monthly Planning</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Strategic sessions addressing emerging challenges and optimizing deployment strategies across all posts and sectors.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Deployment optimization</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Resource allocation</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check</span>
                    <span>Strategic planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 3: CORE PHILOSOPHY */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Foundation
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Systematic Quality Over Rapid Growth
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  The Guard Division represents our core commitment: developing personnel through rigorous selection, continuous training, and systematic supervision. We prioritize character, competence, and behavioral excellence over expansion metrics.
                </p>
                <div className="border-l-4 border-cobalt-electric pl-6 py-4 bg-surface-container-low/40 mb-8">
                  <p className="text-on-surface italic">
                    "Quality takes time. Every member of our guard force meets exacting standards and represents SecurityLink's commitment to excellence."
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">shield_check</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Integrity First</h4>
                      <p className="text-on-surface-variant text-sm">Every guard undergoes thorough background verification and character assessment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">school</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Continuous Learning</h4>
                      <p className="text-on-surface-variant text-sm">Regular training programs ensure skills remain current and operational standards maintained.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">trending_up</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Merit-Based Advancement</h4>
                      <p className="text-on-surface-variant text-sm">Clear pathways for promotion based on demonstrated competence and performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-surface-border p-6 bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">people</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Personnel Excellence</h4>
                  <p className="text-on-surface-variant text-xs">Handpicked, trained, and continuously assessed professionals.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">verified_user</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Verified Trust</h4>
                  <p className="text-on-surface-variant text-xs">100% background verification and documentation compliance.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">schedule</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Daily Monitoring</h4>
                  <p className="text-on-surface-variant text-xs">Real-time supervision and performance tracking at all posts.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">assessment</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Regular Assessment</h4>
                  <p className="text-on-surface-variant text-xs">Six-month evaluation cycles ensuring consistent excellence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: EMPLOYEE WELFARE & SATISFACTION */}
          <div className="border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Commitment
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Satisfied Employees, Satisfied Clients
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { icon: "attach_money", title: "Competitive Salary", desc: "Market-standard compensation reflecting performance and experience levels." },
                  { icon: "trending_up", title: "Merit-Based Promotion", desc: "Clear advancement pathways based on demonstrated competence and behavioral excellence." },
                  { icon: "balance", title: "Fair Assessment", desc: "Transparent evaluation ensuring equitable treatment and opportunity for all." },
                  { icon: "forum", title: "Open Management Access", desc: "Direct channels to senior leadership for concerns and suggestions." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 border border-surface-border p-6 hover:border-cobalt-electric transition-all">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0 text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="border border-cobalt-electric/30 bg-cobalt-electric/5 p-8">
                  <h4 className="font-bold text-on-surface mb-4 uppercase">Why Guards Choose SecurityLink</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check_circle</span>
                      <span className="text-on-surface-variant text-sm">Professional work environment with modern facilities</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check_circle</span>
                      <span className="text-on-surface-variant text-sm">Comprehensive health and safety protocols</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check_circle</span>
                      <span className="text-on-surface-variant text-sm">Career development and skill enhancement programs</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check_circle</span>
                      <span className="text-on-surface-variant text-sm">Respectful management and peer relationships</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0">check_circle</span>
                      <span className="text-on-surface-variant text-sm">Transparent performance evaluation and feedback</span>
                    </div>
                  </div>
                </div>
                <div className="border border-surface-border p-8 bg-surface-container-low/30">
                  <h4 className="font-bold text-on-surface mb-4 uppercase">Impact on Client Service</h4>
                  <p className="text-on-surface-variant mb-4">
                    Satisfied, well-compensated employees deliver superior service. Our investment in guard welfare directly translates to enhanced client protection and satisfaction.
                  </p>
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">arrow_forward</span>
                    <span className="text-cobalt-electric font-bold text-sm">Lower turnover rates ensure continuity and expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
