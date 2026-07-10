"use client";

import Image from "next/image";

export default function GuardDivision() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-[500px] pt-20 pb-12 flex flex-col items-center justify-end overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95 z-0" />
        <div className="absolute inset-0 opacity-5 z-0" style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(37, 99, 235, 0.1) 1px, rgba(37, 99, 235, 0.1) 2px)",
          backgroundSize: "100% 4px",
        }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm">
              Service Division
            </span>
          </div>
          <h1 className="font-headline-lg md:text-5xl text-white uppercase tracking-tighter mb-4 leading-tight drop-shadow-xl">
            Guard Division
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg">
            Systematic, quality-driven protection built on rigorous selection, continuous training, and unwavering commitment to excellence.
          </p>
        </div>
      </main>

      {/* BREADCRUMB */}
      <div className="bg-obsidian-deep border-t border-surface-border px-6 md:px-12 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <a href="/" className="hover:text-cobalt-electric transition-colors">Home</a>
            <span>/</span>
            <span className="text-on-surface">Guard Division</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          {/* SECTION 1: CORE PHILOSOPHY */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Our Foundation
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Systematic Quality Over Rapid Growth
                </h2>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  The Guard Division is the cornerstone of SecurityLink. We believe that developing quality among our personnel takes time and deliberate effort. Quality, to us, means the right character attributes, proper behavior patterns, and the necessary competence to apply acquired knowledge during duty execution.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Rather than pursuing rapid expansion, we maintain a disciplined growth strategy. This ensures that every member of our guard force meets our exacting standards and represents SecurityLink's commitment to excellence.
                </p>
              </div>
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[350px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">shield_person</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Guard operations image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with guard team or operational photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: OPERATIONAL HIERARCHY */}
          <div className="mb-24 border-t border-surface-border pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[350px] order-2 md:order-1">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">hierarchy</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Supervision structure or management team image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with management or operational hierarchy photo
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Organizational Structure
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Dual-Layer Supervision & HQ Oversight
                </h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  For superior guard post management, SecurityLink maintains at least two layers of hierarchy at the ground level. This structure ensures proper span of control, unity of direction, and clear division of labor.
                </p>
                <div className="space-y-4">
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Daily Supervision</h4>
                    <p className="text-on-surface-variant text-sm">Regular field visits and performance monitoring to ensure compliance and quality standards.</p>
                  </div>
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Weekly Reviews</h4>
                    <p className="text-on-surface-variant text-sm">Structured assessments of guard performance, incident reports, and operational effectiveness.</p>
                  </div>
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Monthly Planning</h4>
                    <p className="text-on-surface-variant text-sm">Strategic planning sessions to address emerging challenges and optimize deployment strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: QUALITY ASSURANCE */}
          <div className="mb-24 border-t border-surface-border pt-20">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
              Personnel Excellence
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-12 leading-tight">
              Rigorous Selection, Training & Assessment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 block">verified_user</span>
                <h3 className="font-bold text-on-surface mb-3 uppercase text-sm">Background Verification</h3>
                <p className="text-on-surface-variant text-sm">Police verification, documentation review, and comprehensive identity checks ensure trustworthy personnel.</p>
              </div>
              <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 block">school</span>
                <h3 className="font-bold text-on-surface mb-3 uppercase text-sm">Training Programs</h3>
                <p className="text-on-surface-variant text-sm">Comprehensive training ensures every guard possesses the knowledge and skills required for effective duty execution.</p>
              </div>
              <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 block">assessment</span>
                <h3 className="font-bold text-on-surface mb-3 uppercase text-sm">Six-Month Assessment</h3>
                <p className="text-on-surface-variant text-sm">Regular evaluation cycles every six months ensure quality maintenance, promotion readiness, and continuous improvement.</p>
              </div>
              <div className="border border-surface-border p-6 hover:border-cobalt-electric transition-colors bg-surface-container-low">
                <span className="material-symbols-outlined text-cobalt-electric text-3xl mb-4 block">trending_up</span>
                <h3 className="font-bold text-on-surface mb-3 uppercase text-sm">Continuous Development</h3>
                <p className="text-on-surface-variant text-sm">Ongoing supervision and competence development ensure personnel remain at peak performance levels.</p>
              </div>
            </div>
          </div>

          {/* SECTION 4: EMPLOYEE WELFARE */}
          <div className="border-t border-surface-border pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Our Commitment
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Satisfied Employees, Satisfied Clients
                </h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  We believe that employee satisfaction directly translates to client satisfaction. Our personnel welfare program includes competitive compensation, timely promotions, fair assessments, and direct access to senior management.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check_circle</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Competitive Salary Structure</h4>
                      <p className="text-on-surface-variant text-sm">Fair compensation that reflects market standards and individual performance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check_circle</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Merit-Based Promotion</h4>
                      <p className="text-on-surface-variant text-sm">Clear pathways for advancement based on performance and demonstrated competence.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check_circle</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Fair Assessment Process</h4>
                      <p className="text-on-surface-variant text-sm">Transparent evaluation criteria ensure equitable treatment and recognition of excellence.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check_circle</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">Open Management Access</h4>
                      <p className="text-on-surface-variant text-sm">Direct channels to senior leadership ensure concerns are heard and addressed promptly.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">people</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Team building or employee engagement image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with team photo or employee welfare activity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-obsidian-deep border-t border-surface-border py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6">
            Ready to Experience Professional Guard Services?
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your security requirements and discover how SecurityLink's Guard Division can protect your assets with excellence and integrity.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] transition-all rounded-none">
            Request Consultation
          </button>
        </div>
      </section>
    </>
  );
}
