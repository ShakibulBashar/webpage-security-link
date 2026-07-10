"use client";

import Image from "next/image";

export default function RiskManagementDivision() {
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

      {/* HERO */}
      <main className="relative min-h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/hero10.JPG')`,
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
                SEC-DIV: RISK MANAGEMENT
              </span>
            </div>

            <h1 className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in" style={{ animationDelay: "0.1s" }}>
              Risk Management Division
            </h1>

            <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mb-8 leading-relaxed slide-in" style={{ animationDelay: "0.2s" }}>
              Strategic security consulting grounded in threat analysis, integrated design, and decades of field expertise.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">30+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Years Exp</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">CERT</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Professionals</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">360°</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Assessment</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">PROVEN</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Track Record</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 slide-in" style={{ animationDelay: "0.4s" }}>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95">
                Explore Services
              </button>
              <button className="border-2 border-cobalt-electric text-cobalt-electric px-8 py-4 font-bold uppercase tracking-widest hover:bg-cobalt-electric hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Schedule Audit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          
          {/* SECTION 1: SYSTEMATIC METHODOLOGY */}
          <div className="mb-32">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Proven Process
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Systematic Risk Assessment & Design
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { num: "01", icon: "analytics", title: "Threat Analysis", desc: "Comprehensive threat assessments specific to your organization and geographical context." },
                { num: "02", icon: "architecture", title: "Physical Design", desc: "Integrated physical security solutions combining perimeter, access, and layered defense." },
                { num: "03", icon: "sensors", title: "Technology Assessment", desc: "Evaluation and recommendation of security technologies tailored to threat profile." },
                { num: "04", icon: "people", title: "Awareness Training", desc: "Security awareness programs for executives and staff ensuring informed personnel." }
              ].map((step, idx) => (
                <div key={idx} className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border">
                  <div className="text-5xl font-bold text-cobalt-electric/30 mb-4 group-hover:text-cobalt-electric/60 transition-colors">
                    {step.num}
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">{step.icon}</span>
                    <h3 className="font-bold text-on-surface uppercase tracking-wide">{step.title}</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: PARADIGM SHIFT */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Strategic Approach
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Beyond Guards: Integrated Security Design
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  Traditional security thinking often reduces protection to guard posts alone. The Risk Management Division represents a paradigm shift. We recognize that security is multifaceted, requiring risk assessment, physical design, technology integration, and human awareness working in concert.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  Concepts like risk assessment, physical security design, security technology evaluation, and executive protection are relatively new in our region. Our division exists to introduce and implement these proven methodologies for our clients.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Every asset faces a unique threat profile based on its location, exposure, and available protective resources. A methodical security management approach helps organizations understand their likely threats, identify threat sources, track incident frequency, and quantify potential losses.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">security</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Holistic Approach</h4>
                  <p className="text-on-surface-variant text-xs">Multi-layered security strategy addressing all threat vectors comprehensively.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">analytics</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Data-Driven</h4>
                  <p className="text-on-surface-variant text-xs">Evidence-based recommendations grounded in threat analysis and metrics.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">architecture</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Strategic Design</h4>
                  <p className="text-on-surface-variant text-xs">Integrated physical and technological security infrastructure planning.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">people</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Human Factor</h4>
                  <p className="text-on-surface-variant text-xs">Personnel awareness and training ensuring effective security culture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: CONSULTING SERVICES */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Services
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Comprehensive Consulting Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "assignment", title: "Security Audits", desc: "Comprehensive facility assessments identifying vulnerabilities and recommending improvements." },
                { icon: "gavel", title: "Compliance Review", desc: "Evaluation of security measures against regulatory and industry standards." },
                { icon: "trending_up", title: "Incident Analysis", desc: "Detailed review of security incidents extracting lessons and preventing recurrence." },
                { icon: "school", title: "Training Programs", desc: "Executive protection and staff security awareness training programs." },
                { icon: "design_services", title: "System Design", desc: "Technology integration planning and security infrastructure optimization." },
                { icon: "update", title: "Continuous Monitoring", desc: "Ongoing assessment and adaptive recommendations based on evolving threats." }
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

          {/* SECTION 4: CONTINUOUS IMPROVEMENT */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Ongoing Support
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Periodic Audits & Surveys
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { icon: "calendar_month", title: "Annual Security Audits", desc: "Comprehensive reviews of all security components to identify gaps and recommend improvements." },
                  { icon: "assignment_turned_in", title: "Incident Analysis", desc: "Detailed review of security incidents to extract lessons and prevent recurrence." },
                  { icon: "trending_up", title: "Adaptive Recommendations", desc: "Updated guidance based on changing threat landscapes and emerging security technologies." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">{item.icon}</span>
                      <h4 className="font-bold text-on-surface uppercase tracking-wide">{item.title}</h4>
                    </div>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="border border-cobalt-electric/30 bg-cobalt-electric/5 p-8">
                <h4 className="font-bold text-on-surface mb-6 uppercase">Security is Continuous</h4>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Security is not a one-time implementation. We recommend and conduct periodic security surveys and audits to ensure your systems remain effective against evolving threats. These assessments evaluate the performance of guards, technology, and procedures.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h5 className="font-bold text-on-surface text-sm mb-1">Threat Evolution Tracking</h5>
                      <p className="text-on-surface-variant text-xs">Monitoring emerging threats and adjusting security strategies accordingly.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h5 className="font-bold text-on-surface text-sm mb-1">Technology Updates</h5>
                      <p className="text-on-surface-variant text-xs">Recommendations for new security technologies and system upgrades.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-cobalt-electric text-sm flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h5 className="font-bold text-on-surface text-sm mb-1">Performance Optimization</h5>
                      <p className="text-on-surface-variant text-xs">Continuous refinement of security measures for maximum effectiveness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: EXPERT TEAM */}
          <div className="border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Our Credentials
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Experienced Security Professionals
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  SecurityLink's Risk Management Division is staffed by certified security consultants with over 30 years of combined field experience. Our team has worked across diverse sectors and threat environments, bringing practical expertise to every engagement.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: "verified", title: "Certified Professionals", desc: "Recognized security certifications and current knowledge of industry best practices." },
                    { icon: "business", title: "Sector Expertise", desc: "Experience protecting banking, manufacturing, corporate, healthcare, and critical infrastructure." },
                    { icon: "trending_up", title: "Proven Track Record", desc: "Security strategies tested and refined across decades of real-world application." }
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">school</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Continuous Learning</h4>
                  <p className="text-on-surface-variant text-xs">Regular training and certification updates maintaining current expertise.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">groups</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Collaborative Team</h4>
                  <p className="text-on-surface-variant text-xs">Diverse expertise combining multiple security disciplines and perspectives.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">public</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Industry Recognition</h4>
                  <p className="text-on-surface-variant text-xs">Respected consultants known for innovative and effective security solutions.</p>
                </div>
                <div className="border border-surface-border p-6 bg-surface-container-low/30 hover:border-cobalt-electric transition-all">
                  <span className="material-symbols-outlined text-cobalt-electric text-5xl mb-4 block">handshake</span>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-sm">Client Partnership</h4>
                  <p className="text-on-surface-variant text-xs">Long-term relationships built on trust, expertise, and proven results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
