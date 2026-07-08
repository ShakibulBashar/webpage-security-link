'use client';
"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slider-item');
    if (!slides.length) return;
    
    // Starts on the 3rd image to match your initial 'active' state
    let currentSlide = 2; 
    const slideDelay = 6000;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        setTimeout(nextSlide, slideDelay);
    }
    
    // Kickstart after 1 second
    setTimeout(nextSlide, 1000); 
  }, []);

  const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.png',
    '/images/hero4.jpg',
    '/images/hero6.jpg'
  ];

  return (
    <main className="relative min-h-screen pt-20 pb-3 flex flex-col items-center justify-end overflow-hidden">
      {/* Hero Slider Background */}
      <div className="absolute top-20 inset-x-0 bottom-0 z-0" id="hero-slider">
        {heroImages.map((img, idx) => (
          <div 
            key={idx} 
            className={`hero-slider-item ${idx === 2 ? 'active' : ''}`} 
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 pointer-events-none opacity-20 z-20" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(37, 99, 235, 0.1) 1px, rgba(37, 99, 235, 0.1) 2px)', backgroundSize: '100% 4px'}}></div>
      </div>

      {/* HUD Content */}
      <div className="relative z-30 w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
        <div className="text-center max-w-4xl pb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-10">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cobalt-electric"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cobalt-electric"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cobalt-electric rounded-full"></div>
          </div>
          <h1 className="font-headline-xl text-headline-xl md:text-[64px] text-white uppercase tracking-tighter mb-8 leading-[0.95] drop-shadow-2xl">
            Securing Capital, <br />
            <span className="text-cobalt-electric">Enterprise</span>, and Key <br />
            Infrastructure
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 drop-shadow-lg">
            Industry-leading protection for corporate assets and critical facilities. We deliver technical authority through disciplined guarding and intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-cobalt-electric text-white px-8 py-3 font-bold text-base uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] rounded-none">
              Initiate Protocol
            </button>
            <button className="border-2 border-on-surface/30 text-on-surface px-8 py-3 font-bold text-base uppercase tracking-widest hover:bg-on-surface hover:text-obsidian-deep transition-all backdrop-blur-md rounded-none">
              View Service Matrix
            </button>
          </div>
        </div>

        {/* Bottom HUD Data Feeds */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-x-2 border-b-2 border-cobalt-electric/30 p-6 relative backdrop-blur-sm bg-background/10">
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cobalt-electric"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cobalt-electric"></div>
          <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
            <span className="font-mono-data text-xl text-on-surface font-bold">500+</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Fleet Units</span>
          </div>
          <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
            <span className="font-mono-data text-xl text-on-surface font-bold">15 YRS</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Excellence</span>
          </div>
          <div className="flex flex-col border-r border-surface-border/30 last:border-0 pr-4">
            <span className="font-mono-data text-xl text-on-surface font-bold">100%</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Compliance</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-data text-xl text-on-surface font-bold text-cobalt-electric animate-pulse">LIVE</span>
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Threat Intel</span>
          </div>
        </div>
      </div>

      {/* Quick Portal (Bento Grid) */}
      <section className="bg-obsidian-deep px-12 md:px-[48px] py-24 border-x border-surface-border mx-auto max-w-[1920px] w-full">
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-cobalt-electric uppercase tracking-[0.2em]">Service Framework</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4 uppercase">Specialized Operational Divisions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[450px] relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">shield</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">Elite Guarding</h3>
              <p className="text-on-surface-variant max-w-md">Our officers are selected for corporate environments, providing a visible deterrent while maintaining a premium concierge experience.</p>
            </div>
            <div className="relative z-10 mt-8">
              <a className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors" href="#">
                Protocol Documentation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
              <img alt="Security professional uniform detail" className="w-full h-full object-cover" src="/images/hero1.jpg" />
            </div>
          </div>

          <div className="md:col-span-4 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col justify-between min-h-[450px]">
            <div>
              <span className="material-symbols-outlined text-cobalt-electric text-4xl mb-6">local_shipping</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">Secure Logistics</h3>
              <p className="text-on-surface-variant">High-value asset transportation using armored, low-profile vehicles equipped with real-time GPS tracking.</p>
            </div>
            <div className="mt-8">
              <a className="flex items-center gap-2 font-bold text-on-surface group-hover:text-cobalt-electric transition-colors" href="#">
                Transit Matrix
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-12 group border border-surface-border hover:border-cobalt-electric transition-colors p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-surface-container-low">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-cobalt-electric text-4xl">sensors</span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 uppercase">Integrated Systems</h3>
                <p className="text-on-surface-variant max-w-xl">Advanced surveillance, biometric access control, and AI-driven perimeter detection synchronized with our centralized command.</p>
              </div>
            </div>
            <button className="bg-on-surface text-obsidian-deep px-8 py-3 font-bold uppercase tracking-wider whitespace-nowrap hover:bg-cobalt-electric hover:text-white transition-all rounded-none">
              System Audit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}