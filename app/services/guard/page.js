"use client";

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

      {/* HERO SECTION - Static Hero Image */}
      <main className="relative h-screen pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 rigid-grid opacity-30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 pt-40">
          <div className="max-w-5xl w-full">
            {/* Status Badge */}
            <div className="mb-8 flex items-center gap-3 slide-in">
              <div className="w-2 h-2 bg-cobalt-electric rounded-full animate-pulse" />
              <span className="font-mono-data text-lg font-bold text-cobalt-electric uppercase tracking-widest">
                SEC-DIV: GUARD OPERATIONS
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="font-headline-xl text-4xl md:text-5xl text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-2xl slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              Guard Division
            </h1>

            {/* Subtitle */}
            <p
              className="text-on-surface-variant text-lg md:text-xl max-w-auto mb-6 leading-relaxed slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Systematic quality-driven protection grounded in rigorous selection, continuous
              development, and unwavering operational excellence.
            </p>

            {/* Technical Data Grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">
                  2-LAYER
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Supervision
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">
                  6-MONTH
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Assessment
                </div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">100%</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">Verified</div>
              </div>
              <div className="border border-cobalt-electric/30 p-4 bg-obsidian-deep/60 backdrop-blur-sm hover:border-cobalt-electric transition-colors">
                <div className="font-mono-data text-2xl text-cobalt-electric font-bold mb-1">24/7</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Monitored
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CONTENT SECTIONS */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-auto mx-12 px-6 md:px-8 py-12">
          
          {/* SECTION 1: CORE PHILOSOPHY - REDESIGNED */}
          <div className="mb-6">
            <div className="mb-12">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Foundation
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Systematic Quality Over Rapid Growth
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-on-surface-variant text-md leading-relaxed">
                   We believe that it takes time 
                  to develop quality among members of the guard post. Here, quality means the right character 
                  attributes, the right behavior pattern, and the necessary competence to apply acquired knowledge 
                  by every member while performing their duty.
                </p>
                <p className="text-on-surface-variant text-md leading-relaxed">
                  Therefore, SecurityLink does not focus on rapid growth of the Guard Division. Rather, 
                  we depend on systematic and slow growth progression. For better supervision of guard posts, 
                  we maintain at least 2 layers of hierarchy at ground level, emphasizing correct span of control, 
                  unity of direction, and division of labor.
                </p>
                <p className="text-on-surface-variant text-md leading-relaxed">
                  From HQ, daily, weekly, and monthly supervision is arranged as per plan. To develop competence 
                  among members of the field post, we remain careful while selecting, training, assessing, and 
                  supervising each and every member. 
                </p>
                
                <div className="border-l-4 border-cobalt-electric pl-6 py-4 bg-surface-container-low/40 mt-8">
                  <p className="text-on-surface italic text-lg">
                    &quot;Quality takes time. Every member of our guard force meets exacting standards and
                    represents SecurityLink&apos;s commitment to excellence.&quot;
                  </p>
                </div>
              </div>
              
              {/* Why Choose Our Guards - Feature Grid */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-mono-data text-sm text-cobalt-electric uppercase tracking-widest mb-4">
                  Why Our Guards Stand Apart
                </h3>
                
                <div className="space-y-4">
                  <div className="group flex gap-4 p-4 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20">
                    <div className="w-14 h-10 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                      <Shield className="w-5 h-5 text-cobalt-electric" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">Character First</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">We prioritize integrity and discipline in every recruit, ensuring reliable personnel you can trust.</p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 p-4 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20">
                    <div className="w-10 h-10 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                      <GraduationCap className="w-5 h-5 text-cobalt-electric" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">Trained Competence</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Continuous skill development ensures every guard applies knowledge effectively in real situations.</p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 p-4 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20">
                    <div className="w-10 h-10 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                      <Fingerprint className="w-5 h-5 text-cobalt-electric" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">Verified & Vetted</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Police verification and thorough documentation ensure complete background clarity for every field member.</p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 p-4 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20">
                    <div className="w-10 h-10 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                      <Target className="w-5 h-5 text-cobalt-electric" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">Systematic Growth</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Slow, deliberate progression builds lasting quality rather than temporary numbers on a roster.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: OPERATIONAL HIERARCHY - BEAUTIFIED */}
          <div className="mb-24 border-t border-surface-border pt-18">
            <div className="mb-16">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-6">
                Structure
              </span>
              <h2 className="font-headline-lg text-5xl md:text-6xl text-on-surface uppercase tracking-tighter leading-tight">
                Dual-Layer Supervision & HQ Oversight
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (desktop only) */}
              <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-cobalt-electric/30 to-transparent" />
              
              <div className="relative border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">01</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6 mt-2">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">
                    Daily Supervision
                  </h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Field visits and performance monitoring ensure compliance with quality standards and
                  operational protocols.
                </p>
              </div>
              
              <div className="relative border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">02</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6 mt-2">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">
                    Weekly Reviews
                  </h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Structured assessments of guard performance, incident analysis, and operational
                  effectiveness metrics.
                </p>
              </div>
              
              <div className="relative border border-surface-border p-8 hover:border-cobalt-electric transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group bg-surface-container-low/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3">
                  <div className="w-6 h-6 bg-cobalt-electric/20 border border-cobalt-electric rounded-full flex items-center justify-center">
                    <span className="font-mono-data text-xs text-cobalt-electric font-bold">03</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6 mt-2">
                  <div className="w-12 h-12 bg-cobalt-electric/20 border border-cobalt-electric rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-cobalt-electric" />
                  </div>
                  <h3 className="font-bold text-on-surface text-lg uppercase tracking-wide">
                    Monthly Planning
                  </h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Strategic sessions addressing emerging challenges and optimizing deployment strategies
                  across all posts.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: QUALITY ASSURANCE - UNCHANGED */}
          <div className="mb-16 border-t border-surface-border pt-12">
            <div className="mb-12">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-widest bg-cobalt-electric/10 px-4 py-2 border border-cobalt-electric/30 inline-block mb-4">
                Excellence
              </span>
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface uppercase tracking-tighter leading-tight">
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
                  <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-4 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-sm tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
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
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tighter mb-4 leading-tight">
                Satisfied Employees, Satisfied Clients
              </h2>
              <p className="text-on-surface-variant text-md max-w-auto leading-relaxed">
                We believe a satisfied employee can satisfy a client. Our field post is motivated through 
                competitive compensation, fair advancement, and open management access.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group border border-surface-border p-6 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <Banknote className="w-7 h-7 text-cobalt-electric" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg uppercase tracking-wide mb-3">Competitive Salary</h4>
                    <p className="text-on-surface-variant leading-relaxed mb-2">
                      Market-standard compensation reflecting performance.
                    </p>
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      We regularly review industry benchmarks to ensure our packages remain attractive and fair for all team members. This approach helps us retain skilled professionals who take pride in their work.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group border border-surface-border p-6 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <ArrowUpCircle className="w-7 h-7 text-cobalt-electric" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg uppercase tracking-wide mb-3">Merit-Based Promotion</h4>
                    <p className="text-on-surface-variant leading-relaxed mb-2">
                      Clear advancement pathways based on demonstrated competence.
                    </p>
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      Progression is guided by observable results and consistent dedication to duty. Every guard has the opportunity to grow within the organization at their own pace.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group border border-surface-border p-6 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <Scale className="w-7 h-7 text-cobalt-electric" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg uppercase tracking-wide mb-3">Fair Assessment</h4>
                    <p className="text-on-surface-variant leading-relaxed mb-2">
                      Transparent evaluation ensuring equitable treatment.
                    </p>
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      Our review process is designed to be straightforward and free from unnecessary complications. Feedback is shared openly to support continuous improvement across all levels.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group border border-surface-border p-6 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                    <MessageCircle className="w-7 h-7 text-cobalt-electric" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg uppercase tracking-wide mb-3">Open Management Access</h4>
                    <p className="text-on-surface-variant leading-relaxed mb-2">
                      Direct channels to senior leadership for concerns.
                    </p>
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      We maintain an open-door approach that encourages communication at any time. This connection helps address matters promptly and maintains mutual trust throughout the organization.
                    </p>
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