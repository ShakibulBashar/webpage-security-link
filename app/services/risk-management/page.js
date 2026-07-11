"use client";

import Image from "next/image";

export default function RiskManagementDivision() {
  const methodologySteps = [
    {
      num: "01",
      title: "Threat Analysis",
      desc: "Comprehensive threat assessments specific to your organization and geographical context.",
    },
    {
      num: "02",
      title: "Physical Design",
      desc: "Integrated physical security solutions combining perimeter, access, and layered defense.",
    },
    {
      num: "03",
      title: "Technology Assessment",
      desc: "Evaluation and recommendation of security technologies tailored to threat profile.",
    },
    {
      num: "04",
      title: "Awareness Training",
      desc: "Security awareness programs for executives and staff ensuring informed personnel.",
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

        @keyframes counter-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .counter-up { animation: counter-up 0.8s ease-out forwards; }

        .rigid-grid {
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* HERO */}
      <main className="relative h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero13.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
          
          <div className="absolute inset-0 rigid-grid opacity-30" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end px-6 md:px-12 pb-24 pt-32">
          <div className="max-w-5xl w-full">
            <div className="mb-8 flex items-center gap-3 slide-in">
              <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest">
                SEC-DIV: RISK MANAGEMENT
              </span>
            </div>

            <h1
              className="font-headline-xl text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              Risk Management Division
            </h1>

            <p
              className="text-on-surface-variant text-lg md:text-xl max-w-3xl mb-8 leading-relaxed slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Strategic security consulting grounded in threat analysis, integrated design, and decades
              of field expertise.
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">30+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Years Exp
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">CERT</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Professionals
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">360°</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Assessment
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">PROVEN</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Track Record
                </div>
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
          {/* PARADIGM SHIFT */}
          <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                  Strategic Approach
                </span>
              </div>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Beyond Guards: Integrated Security Design
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Traditional security thinking often reduces protection to guard posts alone. The Risk
                Management Division represents a paradigm shift. We recognize that security is
                multifaceted, requiring risk assessment, physical design, technology integration, and
                human awareness working in concert.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Every asset faces a unique threat profile. A methodical security management approach
                helps organizations understand their likely threats, identify sources, track incidents,
                and quantify potential losses.
              </p>
            </div>
            <div className="relative group glow-border rounded-lg overflow-hidden h-96">
              <Image
                src="/hero10.JPG"
                alt="Risk Management Division security consulting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
            </div>
          </div>

          {/* METHODOLOGY */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Proven Process
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Systematic Risk Assessment & Design
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-cobalt-electric/30 mb-4 group-hover:text-cobalt-electric/60 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-on-surface mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ONGOING MANAGEMENT */}
          <div className="mb-32 border-t border-surface-border pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group glow-border rounded-lg overflow-hidden h-96 order-2 md:order-1">
                <Image
                  src="/hero9.JPG"
                  alt="Security audits and continuous improvement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block mb-6">
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                    Continuous Improvement
                  </span>
                </div>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                  Periodic Audits & Surveys
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Annual Security Audits",
                      desc: "Comprehensive reviews identifying gaps and recommending improvements.",
                    },
                    {
                      title: "Incident Analysis",
                      desc: "Detailed review of security incidents extracting lessons and preventing recurrence.",
                    },
                    {
                      title: "Adaptive Recommendations",
                      desc: "Updated guidance based on changing threat landscapes and emerging technologies.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-cobalt-electric pl-6 py-2">
                      <h4 className="font-bold text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EXPERT TEAM */}
          <div className="border-t border-surface-border pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                    Our Credentials
                  </span>
                </div>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                  Experienced Security Professionals
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  SecurityLink&apos;s Risk Management Division is staffed by certified security
                  consultants with over 30 years of combined field experience. Our team has worked across
                  diverse sectors and threat environments.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Certified Professionals",
                      desc: "Recognized security certifications and current industry best practices.",
                    },
                    {
                      title: "Sector Expertise",
                      desc: "Experience protecting banking, manufacturing, corporate, and critical infrastructure.",
                    },
                    {
                      title: "Proven Track Record",
                      desc: "Security strategies tested and refined across decades of real-world application.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">
                        verified
                      </span>
                      <div>
                        <h4 className="font-bold text-on-surface mb-1">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group glow-border rounded-lg overflow-hidden h-96">
                <Image
                  src="/hero8.jpg"
                  alt="Risk Management Division consulting team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-deep border-t border-surface-border py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter mb-8">
            Transform Your Security Strategy
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Engage SecurityLink&apos;s Risk Management Division to develop a comprehensive, integrated
            security approach tailored to your organization&apos;s unique threat profile.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all transform hover:scale-105 active:scale-95 text-lg">
            Schedule Security Consultation
          </button>
        </div>
      </section>
    </>
  );
}
