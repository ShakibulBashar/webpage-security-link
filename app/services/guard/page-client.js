// Guard Division Page of Service Section
"use client";
import Image from "next/image";
import {
  Shield,
  Clock,
  BarChart3,
  TrendingUp,
  Banknote,
  ArrowUpCircle,
  Scale,
  MessageCircle,
  Target,
  Fingerprint,
  GraduationCap,
} from "lucide-react";

export default function GuardDivision() {
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
          background: linear-gradient(90deg, #3B82F6 0%, #d3e4fe 50%, #3B82F6 100%);
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

      {/* HERO SECTION - Static Hero Image */}
      <main className="relative h-screen pt-20 overflow-hidden border-b border-surface-border">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero1.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          {/* Bottom-Only Gradient Overlay (top of image stays clear) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" style={{ backgroundSize: "100% 65%", backgroundPosition: "bottom", backgroundRepeat: "no-repeat" }} />
          {/* Grid Overlay */}
          <div className="absolute inset-0 rigid-grid opacity-30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end px-6 md:px-12 pb-4">
          <div className="max-w-5xl w-full">
            {/* Status Badge */}
            

            {/* Main Title */}
            <h1
              className="font-headline-xl text-2xl md:text-3xl lg:text-5xl text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-2xl slide-in font-bold shimmer-text"
              style={{ animationDelay: "0.1s" }}
            >
              Manned Guarding Division
            </h1>

            {/* Subtitle */}
            <p
              className="text-on-surface-variant font-mono-data text-sm md:text-base lg:text-xl max-w-auto mb-6 leading-relaxed slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Systematic quality-driven protection grounded in rigorous selection, continuous development, and unwavering operational excellence.Our Guard Division exemplifies the highest standards of integrity, competence, and reliability.
            </p>

            {/* Technical Data Grid */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mb-12 lg:mb-8 slide-in"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1">
                  2-LAYER
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Supervision
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1">
                  6-MONTH
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Assessment
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1">100%</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Verified</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold mb-1">24/7</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Monitored
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CONTENT SECTIONS */}
      <section className="bg-background border-x border-surface-border mx-auto w-full overflow-hidden">
        <div className="mx-4 lg:mx-12 px-2 lg:px-6 py-8 lg:py-12">
          
          {/* SECTION 1: CORE PHILOSOPHY - REDESIGNED */}
          <div className="mb-4">
            <div className="mb-4 ">
              <span className="font-headline-lg text-lg lg:text-2xl text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-2 ">
                Sytematic Quality<br className="lg:hidden" />Over Rapid Growth
              </span>
              
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-on-surface-variant font-mono-data text-sm lg:text-md leading-relaxed">
                  We believe that it takes time 
                  to develop quality among members of the guard post. Here, quality means the right character 
                  attributes, the right behavior pattern, and the necessary competence to apply acquired knowledge 
                  .
                </p>
                <p className="text-on-surface-variant font-mono-data text-sm lg:text-md leading-relaxed">
                  Therefore, SecurityLink does not focus on rapid growth . Rather, 
                  we depend on systematic  growth progression. For better supervision of guard posts, 
                  we maintain at least 2 layers of hierarchy at ground level, emphasizing correct span of control and  
                  unity of direction.
                </p>

                <p className="text-on-surface-variant font-mono-data text-sm lg:text-md leading-relaxed hidden lg:block">
                  From HQ regular supervision is arranged as per plan. To develop competence 
                  among members, we remain careful while selecting, training, assessing, and 
                  supervising each and every member
                </p>

                <p className="text-on-surface-variant font-mono-data text-sm lg:text-md leading-relaxed hidden lg:block">
                  SecurityLink believes that a satisfied employee can satisfy a client. Therefore, we ensure that our employees are satisfied through competitive compensation, fair advancement, and open management access to address their concerns. This approach ensures that our clients receive the best service from motivated and committed personnel.
                </p>
                
                
                <div className="border-l-4 border-cobalt-electric pl-6 py-2 bg-surface-container-low/40 mt-2 font-mono-data">
                  <p className="text-on-surface italic text-sm lg:text-lg">
                    &quot;Quality takes time. Every member of our guard force meets exacting standards and represents SecurityLink&apos;s commitment to excellence at all times and in all kinds of situations.&quot;
                  </p>
                </div>
              </div>
              
              {/* Why Choose Our Guards - Feature Grid */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-mono-data text-sm text-cobalt-electric uppercase tracking-widest mb-4">
                  Why Our Guards Stand Apart
                </h3>
                
                <div className="space-y-4">
                  <div className="group p-5 lg:p-8 border border-cobalt-electric/50 hover:border-surface-border transition-all bg-surface-container-low/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/10 transition-colors">
                        <Shield className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                      </div>
                      <h4 className="font-bold text-on-surface uppercase text-base lg:text-lg tracking-wide">Character First</h4>
                    </div>
                    <p className="text-on-surface-variant font-mono-data text-sm leading-relaxed">We prioritize integrity and discipline in every recruit, ensuring reliable personnel you can trust.</p>
                  </div>

                  <div className="group p-5 lg:p-8 border border-cobalt-electric/50 hover:border-surface-border transition-all bg-surface-container-low/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/10 transition-colors">
                        <GraduationCap className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                      </div>
                      <h4 className="font-bold text-on-surface uppercase text-base lg:text-lg tracking-wide">Trained Competence</h4>
                    </div>
                    <p className="text-on-surface-variant font-mono-data text-sm leading-relaxed">Continuous skill development ensures every guard applies knowledge effectively in real situations.</p>
                  </div>

                  <div className="group p-5 lg:p-8 border border-cobalt-electric/50 hover:border-surface-border transition-all bg-surface-container-low/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/10 transition-colors">
                        <Fingerprint className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                      </div>
                      <h4 className="font-bold text-on-surface uppercase text-base lg:text-lg tracking-wide">Verified & Vetted</h4>
                    </div>
                    <p className="text-on-surface-variant font-mono-data text-sm leading-relaxed">Police verification and thorough documentation ensure complete background clarity for every field member.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP + TICKER — standard section */}
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-track { animation: ticker-scroll 22s linear infinite; }
        .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
      `}</style>

      <div className="relative h-64 md:h-80 lg:h-96 border-y border-surface-border overflow-hidden">
        <Image
          src="/hero204.webp"
          alt="SecurityLink guard team in professional formation"
          fill
          className="object-cover"
          style={{ objectPosition: "center 0%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-cobalt-electric/50" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cobalt-electric/50" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cobalt-electric/50" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-cobalt-electric/50" />
      </div>

      <div className="border-y border-surface-border bg-obsidian-deep py-6 ticker-wrap overflow-hidden">
        <div className="ticker-track flex items-center gap-10 w-max">
          {[...Array(2)].map((_, rep) =>
            ["TRAINED", "SUPERVISED", "EVALUATED", "ACCOUNTABLE", "DOCUMENTED", "PRESENT"].map(
              (word, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-10">
                  <span className="font-headline-md text-lg md:text-xl text-on-surface-variant/80 uppercase tracking-wide whitespace-nowrap">
                    {word}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-electric" />
                </span>
              ),
            ),
          )}
        </div>
      </div>

      {/* CONTENT SECTIONS (Part 2) */}
      <section className="bg-background border-x border-surface-border mx-auto w-full overflow-hidden">
        <div className="mx-4 lg:mx-12 px-2 lg:px-6 py-8 lg:py-12">

          {/* SECTION 2: OPERATIONAL HIERARCHY - BEAUTIFIED */}
          <div className="mb-8 lg:mb-20 border-t border-surface-border pt-8 lg:pt-16 border-t border-surface-border">
            <div className="mb-8 lg:mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-3 lg:mb-6">
                Structure
              </span>
              <h2 className="font-headline-lg text-2xl md:text-4xl text-on-surface uppercase tracking-tighter leading-tight">
                Dual-Layer Supervision & HQ Oversight
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (desktop only) */}
              <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-cobalt-electric/30 to-transparent" />
              
              <div className="relative border border-cobalt-electric/50 p-4 lg:p-8 hover:border-surface-border transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-none group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">01</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-2 ">
                  <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">
                    Daily Supervision
                  </h3>
                </div>
                <p className="text-on-surface-variant font-mono-data leading-relaxed">
                  Field visits and performance monitoring ensure compliance with quality standards and
                  operational protocols.
                </p>
              </div>
              
              <div className="relative border border-cobalt-electric/50 p-4 lg:p-8 hover:border-surface-border transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-none group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">02</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">
                    Weekly Reviews
                  </h3>
                </div>
                <p className="text-on-surface-variant font-mono-data leading-relaxed">
                  Structured assessments of guard performance, incident analysis, and operational
                  effectiveness metrics.
                </p>
              </div>
              
              <div className="relative border border-cobalt-electric/50 p-4 lg:p-8 hover:border-surface-border transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-none group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">03</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-8 lg:w-12 h-8 lg:h-12 bg-cobalt-electric/20 border border-cobalt-electric/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 lg:w-6 h-4 lg:h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">
                    Monthly Planning
                  </h3>
                </div>
                <p className="text-on-surface-variant font-mono-data leading-relaxed">
                  Strategic sessions addressing emerging challenges and optimizing deployment strategies
                  across all posts.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: QUALITY ASSURANCE - UNCHANGED */}
          <div className="mb-16 border-t border-surface-border pt-12">
            <div className="mb-8 lg:md-12">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-4">
                Excellence
              </span>
              <h2 className="font-headline-lg text-2xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
                Rigorous Selection, Training & Assessment
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: "verified_user",
                  title: "Background Verification",
                  desc: "Police verification, documentation, and comprehensive identity checks. We cross-check residential history and employment references to confirm every detail before onboarding.",
                },
                {
                  icon: "school",
                  title: "Training Programs",
                  desc: "Comprehensive skill development ensuring effective duty execution. Modules cover situational awareness, emergency protocols, and site-specific duties through hands-on practice.",
                },
                {
                  icon: "assignment_turned_in",
                  title: "Six-Month Assessment",
                  desc: "Regular evaluation cycles for quality maintenance and promotion. Guards are scored on punctuality, conduct, and incident response to identify growth and address gaps.",
                },
                {
                  icon: "trending_up",
                  title: "Continuous Development",
                  desc: "Ongoing supervision ensuring peak performance levels. Field observations and refresher sessions keep skills current and aligned with operational standards.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-surface-border p-6 hover:border-cobalt-electric transition-all group glow-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-cobalt-electric text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <h3 className="font-headline-lg text-on-surface uppercase text-sm tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-mono-data text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: EMPLOYEE WELFARE - REDESIGNED */}
          <div className="border-t border-surface-border pt-12">
            <div className="mb-8">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Commitment
              </span>
              <h2 className="font-headline-lg text-2xl md:text-4xl text-on-surface uppercase tracking-tighter mb-4 leading-tight">
                Satisfied Employees, Satisfied Clients
              </h2>
              <p className="text-on-surface-variant text-sm lg:font-md font-mono-data max-w-auto leading-relaxed">
                We believe a satisfied employee can satisfy a client. Our field post is motivated through 
                competitive compensation, fair advancement, and open management access.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group border border-cobalt-electric/50  p-4 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-cobalt-electric/10 border border-cobalt-electric/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <Banknote className="w-5 lg:w-7 h-5 lg:h-7 text-cobalt-electric" />
                  </div>
                  <h4 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">Competitive Salary</h4>
                </div>
                <p className="text-on-surface-variant text-sm lg:text-md font-mono-data leading-relaxed mb-2">
                  Market-standard compensation reflecting performance.
                </p>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                  We regularly review industry benchmarks to ensure our packages remain attractive and fair for all team members. This approach helps us retain skilled professionals who take pride in their work.
                </p>
              </div>

              <div className="group border border border-cobalt-electric/50 p-4 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <ArrowUpCircle className="w-5 lg:w-7 h-5 lg:h-7 text-cobalt-electric" />
                  </div>
                  <h4 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">Merit-Based Promotion</h4>
                </div>
                <p className="text-on-surface-variant font-mono-data  leading-relaxed mb-2">
                  Clear advancement pathways based on  competence.
                </p>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                  Progression is guided by observable results and consistent dedication to duty. Every guard has the opportunity to grow within the organization at their own pace.
                </p>
              </div>

              <div className="group border border border-cobalt-electric/50 p-4 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <Scale className="w-5 lg:w-7 h-5 lg:h-7 text-cobalt-electric" />
                  </div>
                  <h4 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide">Fair Assessment</h4>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-2 font-mono-data leading-relaxed">
                  Transparent evaluation ensuring equitable treatment.
                </p>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                  Our review process is designed to be straightforward and free from unnecessary complications. Feedback is shared openly to support continuous improvement across all levels.
                </p>
              </div>



              <div className="group border border border-cobalt-electric/50 p-4 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <MessageCircle className="w-5 lg:w-7 h-5 lg:h-7 text-cobalt-electric" />
                  </div>
                  <h4 className="font-bold text-on-surface text-base lg:text-lg uppercase tracking-wide"> Management Access</h4>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-2 font-mono-data leading-relaxed">
                  Direct channels to senior leadership for concerns.
                </p>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                  We maintain an open-door approach that encourages communication at any time. This connection helps address matters promptly and maintains mutual trust throughout the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}