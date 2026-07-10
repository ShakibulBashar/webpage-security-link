"use client";

import Image from "next/image";

export default function LogisticsDivision() {
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
            Logistics Division
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg">
            Comprehensive facility management and support services designed to enhance operational efficiency and maintain pristine environments.
          </p>
        </div>
      </main>

      {/* BREADCRUMB */}
      <div className="bg-obsidian-deep border-t border-surface-border px-6 md:px-12 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <a href="/" className="hover:text-cobalt-electric transition-colors">Home</a>
            <span>/</span>
            <span className="text-on-surface">Logistics Division</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="bg-background border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          {/* SECTION 1: OVERVIEW */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
                  Integrated Support
                </span>
                <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-6 leading-tight">
                  Beyond Security: Complete Facility Solutions
                </h2>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  SecurityLink's Logistics Division extends our commitment to client satisfaction beyond security services. We understand that modern businesses require comprehensive support across multiple operational areas. Our logistics team is progressively developing specialized services to complement our core security offerings.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  By providing integrated facility management solutions, we enable our clients to focus on their core business while we handle critical support operations with the same professionalism and attention to detail that defines our guard services.
                </p>
              </div>
              <div className="relative bg-surface-container-low border border-surface-border p-8 flex items-center justify-center min-h-[350px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-cobalt-electric text-9xl">local_shipping</span>
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-on-surface-variant italic">
                    [Logistics operations or facility management image placeholder]
                  </p>
                  <p className="text-on-surface-variant text-xs mt-2">
                    Replace with logistics team or facility management photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: CLEANING SERVICES */}
          <div className="mb-24 border-t border-surface-border pt-20">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
              Core Offerings
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-12 leading-tight">
              Professional Cleaning Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Industrial Cleaning */}
              <div className="border border-surface-border hover:border-cobalt-electric transition-colors">
                <div className="relative bg-surface-container-low p-8 flex items-center justify-center min-h-[250px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-cobalt-electric text-6xl">factory</span>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-on-surface-variant italic text-sm">
                      [Industrial facility image placeholder]
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-lg">Industrial Cleaning</h3>
                  <p className="text-on-surface-variant mb-4">
                    Specialized cleaning for manufacturing facilities, warehouses, and industrial complexes. We handle heavy-duty equipment, floor maintenance, and compliance with industry-specific hygiene standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Deep cleaning and degreasing</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Equipment and machinery care</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Safety compliance standards</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hospital Cleaning */}
              <div className="border border-surface-border hover:border-cobalt-electric transition-colors">
                <div className="relative bg-surface-container-low p-8 flex items-center justify-center min-h-[250px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-cobalt-electric text-6xl">local_hospital</span>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-on-surface-variant italic text-sm">
                      [Healthcare facility image placeholder]
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-lg">Hospital Cleaning</h3>
                  <p className="text-on-surface-variant mb-4">
                    Specialized healthcare facility cleaning with strict adherence to medical sanitation protocols. Our teams are trained in infection control and biohazard management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Medical-grade sanitization</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Biohazard protocols</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>24/7 availability</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Corporate Cleaning */}
              <div className="border border-surface-border hover:border-cobalt-electric transition-colors">
                <div className="relative bg-surface-container-low p-8 flex items-center justify-center min-h-[250px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-cobalt-electric text-6xl">business</span>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-on-surface-variant italic text-sm">
                      [Corporate office image placeholder]
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-on-surface mb-3 uppercase text-lg">Corporate Cleaning</h3>
                  <p className="text-on-surface-variant mb-4">
                    Professional cleaning for corporate offices, commercial buildings, and business complexes. We maintain pristine environments that reflect your company's standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Daily office maintenance</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-cobalt-electric text-4 flex-shrink-0">check</span>
                      <span>Eco-friendly products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: EXPANDING SERVICES */}
          <div className="border-t border-surface-border pt-20">
            <span className="font-label-caps text-cobalt-electric uppercase tracking-[0.2em] text-sm mb-4 block">
              Future Capabilities
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface uppercase mb-12 leading-tight">
              Emerging Service Lines
            </h2>
            <p className="text-on-surface-variant mb-12 max-w-3xl">
              SecurityLink is actively developing additional logistics capabilities to provide comprehensive facility management solutions. These emerging services will further strengthen our position as a complete security and support partner for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-surface-border/50 p-6 bg-surface-container-low/30">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">elevator</span>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Lift Servicing</h3>
                    <p className="text-on-surface-variant text-sm">Preventive maintenance and emergency servicing for elevator systems in commercial and residential buildings.</p>
                  </div>
                </div>
              </div>
              <div className="border border-surface-border/50 p-6 bg-surface-container-low/30">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">power</span>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Power Sub-Station Servicing</h3>
                    <p className="text-on-surface-variant text-sm">Technical maintenance and monitoring of electrical infrastructure to ensure uninterrupted power supply.</p>
                  </div>
                </div>
              </div>
              <div className="border border-surface-border/50 p-6 bg-surface-container-low/30">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">receipt</span>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Bill Deposition Services</h3>
                    <p className="text-on-surface-variant text-sm">Secure handling and timely deposit of financial transactions and billing documentation.</p>
                  </div>
                </div>
              </div>
              <div className="border border-surface-border/50 p-6 bg-surface-container-low/30">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-cobalt-electric text-3xl flex-shrink-0">more_horiz</span>
                  <div>
                    <h3 className="font-bold text-on-surface mb-2 uppercase">Additional Services</h3>
                    <p className="text-on-surface-variant text-sm">Customized logistics solutions tailored to meet your organization's unique operational requirements.</p>
                  </div>
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
            Streamline Your Facility Operations
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Let SecurityLink's Logistics Division handle your facility management needs. Contact us to discuss how we can support your operational excellence.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] transition-all rounded-none">
            Request Service Quote
          </button>
        </div>
      </section>
    </>
  );
}
