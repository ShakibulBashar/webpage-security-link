//// eslint-disable-next-line react-hooks/set-state-in-effect
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
            `}</style>

      {/* HERO */}
      <main className="relative h-[85vh] lg:h-[100vh] pt-20 overflow-hidden ">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero13.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center 15%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-end px-6 lg:px-12 pb-2 lg:pb-4 pt-32">
          <div className="max-w-auto w-full">
          
            <h1
              className="font-headline-lg text-3xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl slide-in "
              style={{ animationDelay: "0.1s" }}
            >
              Risk Advisory Divsion 
            </h1>
            
            <p
              className="text-lg font-mono-data  max-w-auto mb-8 leading-relaxed slide-in hidden lg:block text-white "
              style={{ animationDelay: "0.2s" }}
            > 
              
              Strategic security consulting grounded in threat analysis, integrated design, and decades
              of field expertise. Our team of certified professionals delivers comprehensive risk assessments, tailored security solutions, and ongoing advisory services to ensure your organization remains resilient against evolving threats.
            </p>

            

            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-3 lg:mb-5 lg:gap-12 slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border border-cobalt-electric/30 p-2 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1 shimmer-text">30+</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Years Exp
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1 shimmer-text">CERTIFIED</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Professionals
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1 shimmer-text">360°</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Assessment
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1 shimmer-text">PROVEN</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Track Record
                </div>
              </div>
            </div>

            

            <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 slide-in justify-center" style={{ animationDelay: "0.4s" }}>
              <a href="/services/logistics" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4  font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95">
                Explore Services
              </a>
              <a href="/contact" className="inline-block border-2 border-cobalt-electric text-cobalt-electric px-8 py-4 font-bold uppercase tracking-widest bg-cobalt-electric text-white hover:transition-all transform hover:scale-105 active:scale-95">
                Schedule Audit
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-auto border-t border-surface-border">
        <div className="max-w-auto mx-auto px-6 md:px-8 lg:px-16 py-12 lg:py-20 ">
          {/* PARADIGM SHIFT */}
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="font-headline-lg text-sm text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                  Strategic Approach
                </span>
              </div>
              <h2 className="font-headline-lg text-xl lg:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Beyond Guards: <br /> Integrated Security Design
              </h2>
              <p className="text-on-surface-variant font-mono-data text-base lg:text-lg leading-relaxed mb-6">
                Security Link&apos;s Risk
                Advisory Division represents a paradigm shift. We understand that every asset faces a unique threat profile therefore therefore we tailor our solutions to the specific needs of each organization, ensuring that security measures are both effective and efficient.
              </p>

              <p className="text-on-surface-variant font-mono-data text-base lg:text-lg leading-relaxed hidden lg:block">
                Our team of certified security consultants brings decades of combined experience across diverse sectors, from corporate enterprises to critical infrastructure. We combine threat analysis, physical design, technology assessment, and awareness training into a cohesive strategy that addresses both current and emerging risks.
              </p>
            </div>
            <div className="relative group glow-border rounded-lg overflow-hidden h-50 lg:h-[60vh]">
              <Image
                src="/risk.jpg"
                alt="Risk Advisory security consulting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
            </div>
          </div>

          {/* METHODOLOGY */}
          <div className="mb-12 lg:mb-24 border-t border-surface-border pt-12 lg:pt-24">
            <div className="mb-6 lg:mb-12">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Proven Process
              </span>
              <h2 className="font-headline-lg text-2xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight shimmer-text">
                Systematic Risk Assessment & Design
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="border  border-cobalt-electric p-5 lg:p-8 hover:border-surface-border transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group glow-border"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-5xl font-bold  text-cobalt-electric/30 mb-2 lg:mb-4 group-hover:text-cobalt-electric/60 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-on-surface font-headline-lg mb-1 lg:mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed font-mono-data text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ONGOING MANAGEMENT */}
          <div className="mb-12 lg:mb-24 border-t border-surface-border pt-12 lg:pt-24 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative group glow-border rounded-lg overflow-hidden h-[30vh] lg:h-[55vh] order-2 md:order-1">
                <Image
                  src="/risk3.jpg"
                  alt="Security audits and continuous improvement"
                  fill
                  className="object-cover 
                  object-position-center
                  group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 to-transparent" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block mb-6">
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                    Continuous Improvement
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl lg:text-5xl text-on-surface uppercase tracking-tighter mb-8 leading-tight ">
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
                      <h4 className="font-bold text-on-surface mb-2 font-mono-data">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm font-headline-lg">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EXPERT TEAM */}
          <div className="border-t border-surface-border pt-12 lg:px-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30">
                    Our Credentials
                  </span>
                </div>
                <h2 className="font-mono-data text-2xl lg:text-3xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                  Experienced Security Professionals
                </h2>
                <p className="text-on-surface-variant font-headline-lg text-base lg:text-lg leading-relaxed mb-8">
                  SecurityLink&apos;s Risk Advisory is staffed by certified security
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
                        <h4 className="font-bold text-on-surface mb-1 font-headline-lg">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm font-mono-data">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group glow-border rounded-lg overflow-hidden h-[30vh] lg:h-[55vh] order-2 lg:order-1">
                <Image
                  src="/risk222.JPG"
                  alt="Risk Advisory consulting team"
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
      <section className="bg-obsidian-deep border-t border-surface-border py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-3xl lg:text-5xl text-on-surface uppercase tracking-tighter mb-8">
            Transform Your Security Strategy
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-lg font-mono-data max-w-auto text-center mb-12 leading-relaxed">
            Engage SecurityLink&apos;s Risk Advisory to develop a comprehensive, integrated
            security approach tailored to your organization&apos;s unique threat profile. Proactively manage risks, enhance resilience, and ensure the safety of your assets and personnel.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 lg:px-10 py-3 lg:py-4 font-semibold lg:font-bold uppercase tracking-widest font-sm hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all transform hover:scale-105 active:scale-95 text-lg">
            Schedule Security Consultation
          </button>
        </div>
      </section>
    </>
  );
}
