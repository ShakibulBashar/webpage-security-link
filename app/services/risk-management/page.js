"use client";

import Image from "next/image";

export default function RiskManagementDivision() {
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
            Risk Management Division
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg">
            Strategic security consulting grounded in threat analysis, integrated design, and decades of field expertise.
          </p>
        </div>
      </main>

      {/* BREADCRUMB */}
      <div className="bg-obsidian-deep border-t border-surface-border px-6 md:px-12 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <a href="/" className="hover:text-cobalt-electric transition-colors">Home</a>
            <span>/</span>
            <span className="text-on-surface">Risk Management Division</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          {/* SECTION 1: THE PARADIGM SHIFT */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Strategic Approach
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Beyond Guards: Integrated Security Design
                </h2>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  Traditional security thinking often reduces protection to guard posts alone. The Risk Management Division represents a paradigm shift. We recognize that security is a multifaceted discipline requiring risk assessment, physical design, technology integration, and human awareness working in concert.
                </p>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  Concepts like risk assessment, physical security design, security technology evaluation, and executive protection are relatively new in our region. Our division exists to introduce and implement these proven methodologies for our clients.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Every asset faces a unique threat profile based on its location, exposure, and available protective resources. A methodical security management approach helps organizations understand their likely threats, identify threat sources, track incident frequency, and quantify potential losses.
                </p>
              </div>
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">security</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Security consulting or risk assessment meeting image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with consulting team or assessment photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: OUR METHODOLOGY */}
          <div className="mb-24 border-t border-surface-border pt-20">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
              Proven Process
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-12 leading-tight">
              Systematic Risk Assessment & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-surface-border p-8 bg-surface-container-low hover:border-cobalt-electric transition-colors">
                <div className="flex gap-4 mb-4">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">analytics</span>
                  <h3 className="font-bold text-on-surface text-lg uppercase">Threat Analysis</h3>
                </div>
                <p className="text-on-surface-variant mb-4">
                  We conduct comprehensive threat assessments specific to your organization, considering geographical factors, industry vulnerabilities, and asset exposure levels.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Environmental threat mapping</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Vulnerability identification</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Risk quantification</span>
                  </li>
                </ul>
              </div>

              <div className="border border-surface-border p-8 bg-surface-container-low hover:border-cobalt-electric transition-colors">
                <div className="flex gap-4 mb-4">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">architecture</span>
                  <h3 className="font-bold text-on-surface text-lg uppercase">Physical Security Design</h3>
                </div>
                <p className="text-on-surface-variant mb-4">
                  Based on threat analysis, we design integrated physical security solutions that combine perimeter protection, access control, and layered defense strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Perimeter design optimization</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Access control strategies</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Layered defense implementation</span>
                  </li>
                </ul>
              </div>

              <div className="border border-surface-border p-8 bg-surface-container-low hover:border-cobalt-electric transition-colors">
                <div className="flex gap-4 mb-4">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">sensors</span>
                  <h3 className="font-bold text-on-surface text-lg uppercase">Technology Assessment</h3>
                </div>
                <p className="text-on-surface-variant mb-4">
                  We evaluate and recommend security technologies—CCTV, access systems, alarms, and detection equipment—tailored to your specific threat profile.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Technology selection guidance</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>System integration planning</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>ROI analysis</span>
                  </li>
                </ul>
              </div>

              <div className="border border-surface-border p-8 bg-surface-container-low hover:border-cobalt-electric transition-colors">
                <div className="flex gap-4 mb-4">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">people</span>
                  <h3 className="font-bold text-on-surface text-lg uppercase">Awareness & Training</h3>
                </div>
                <p className="text-on-surface-variant mb-4">
                  Technology and design are only effective when supported by informed personnel. We provide security awareness training for executives and staff.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Executive protection training</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Staff security awareness</span>
                  </li>
                  <li className="flex gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-cobalt-electric flex-shrink-0">check</span>
                    <span>Incident response procedures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 3: ONGOING MANAGEMENT */}
          <div className="mb-24 border-t border-surface-border pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[350px] order-2 md:order-1">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">assignment_turned_in</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Audit or assessment documentation image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with audit or assessment activity photo
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Continuous Improvement
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Periodic Audits & Surveys
                </h2>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Security is not a one-time implementation. We recommend and conduct periodic security surveys and audits to ensure your systems remain effective against evolving threats. These assessments evaluate the performance of guards, technology, and procedures.
                </p>
                <div className="space-y-4">
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Annual Security Audits</h4>
                    <p className="text-on-surface-variant text-sm">Comprehensive reviews of all security components to identify gaps and recommend improvements.</p>
                  </div>
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Incident Analysis</h4>
                    <p className="text-on-surface-variant text-sm">Detailed review of security incidents to extract lessons and prevent recurrence.</p>
                  </div>
                  <div className="border-l-3 border-cobalt-electric pl-4">
                    <h4 className="font-bold text-on-surface mb-2">Adaptive Recommendations</h4>
                    <p className="text-on-surface-variant text-sm">Updated guidance based on changing threat landscapes and emerging security technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: EXPERT TEAM */}
          <div className="border-t border-surface-border pt-20">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Credentials
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-12 leading-tight">
              Experienced Security Professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  SecurityLink's Risk Management Division is staffed by certified security consultants with over 30 years of combined field experience. Our team has worked across diverse sectors and threat environments, bringing practical expertise to every engagement.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Certified Professionals</h3>
                    <p className="text-on-surface-variant text-sm">Our consultants hold recognized security certifications and maintain current knowledge of industry best practices.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Sector Expertise</h3>
                    <p className="text-on-surface-variant text-sm">We have experience protecting banking, manufacturing, corporate, healthcare, and critical infrastructure assets.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Proven Track Record</h3>
                    <p className="text-on-surface-variant text-sm">Our clients benefit from security strategies that have been tested and refined across decades of real-world application.</p>
                  </div>
                </div>
              </div>
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">groups</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Consulting team or management photo placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with consulting team or leadership photo
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
            Transform Your Security Strategy
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Engage SecurityLink's Risk Management Division to develop a comprehensive, integrated security approach tailored to your organization's unique threat profile and operational requirements.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] transition-all rounded-none">
            Schedule Security Consultation
          </button>
        </div>
      </section>
    </>
  );
}
