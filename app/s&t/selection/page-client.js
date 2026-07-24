// Selection Procedure — recruitment & selection standards of SecurityLink
"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  FileText,
  UserCheck,
  Ruler,
  GraduationCap,
  ShieldCheck,
  Smile,
  Brain,
  Fingerprint,
} from "lucide-react";

const tests = [
  {
    icon: ClipboardCheck,
    title: "Preliminary Screening",
    desc: "Experienced executives scan the candidate pool, picking out potential from the crowd through observation and first-line vetting.",
  },
  {
    icon: Dumbbell,
    title: "Physical Test",
    desc: "Physical fitness and stamina are measured against the real demands of active security duty on the ground.",
  },
  {
    icon: HeartPulse,
    title: "Medical Test",
    desc: "A medical examination confirms the candidate is physically and medically fit to serve a full duty cycle.",
  },
  {
    icon: FileText,
    title: "Written Test",
    desc: "A written assessment evaluates literacy, comprehension and the basic reasoning needed to follow post orders.",
  },
  {
    icon: UserCheck,
    title: "Interview",
    desc: "A close personal interview assesses psychological, intellectual and personality factors face to face.",
  },
];

const attributes = [
  {
    icon: Ruler,
    title: "Minimum Height 5'6\"",
    desc: "A physical baseline that meets the presence expected of a professional guard.",
  },
  {
    icon: GraduationCap,
    title: "Class IX Minimum Education",
    desc: "Preferably HSC / SSC qualified, with Class IX as the legal minimum educational standard.",
  },
  {
    icon: ShieldCheck,
    title: "Physically & Medically Fit",
    desc: "Certified fit for the rigours of shift work, standing duty and emergency response.",
  },
  {
    icon: Smile,
    title: "Positive Attitude",
    desc: "A constructive, dependable disposition that reflects well on the client's premises.",
  },
  {
    icon: Brain,
    title: "Rational & Logical",
    desc: "Able to think and act rationally, and present himself logically under pressure.",
  },
];

export default function SelectionProcedurePage() {
  const chainSectionRef = useRef(null);

  useEffect(() => {
    const section = chainSectionRef.current;
    if (!section) return;

    function resetCircles(circles, labels, signal, dir) {
      circles.forEach((c) => c.classList.remove("active"));
      labels.forEach((l) => l.classList.remove("active"));
      if (signal) {
        signal.style.transition = "none";
        if (dir === "width") {
          signal.style.width = "0%";
        } else {
          signal.style.height = "0%";
        }
      }
    }

    function playStep(circles, labels, signal, dir) {
      if (!signal || !circles.length) return;
      const segmentDuration = 2000;
      const total = (circles.length - 1) * segmentDuration;

      setTimeout(() => {
        circles[0].classList.add("active");
        if (labels[0]) labels[0].classList.add("active");
        if (dir === "width") {
          signal.style.transition = `width ${total}ms linear`;
          signal.style.width = "100%";
        } else {
          signal.style.transition = `height ${total}ms linear`;
          signal.style.height = "100%";
        }
        for (let i = 1; i < circles.length; i++) {
          setTimeout(() => {
            circles[i].classList.add("active");
            if (labels[i]) labels[i].classList.add("active");
          }, i * segmentDuration);
        }
      }, 50);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const vLayout = section.querySelector(".lg\\:hidden");
            const vCircles = vLayout ? vLayout.querySelectorAll(".chain-circle") : [];
            const vLabels = vLayout ? vLayout.querySelectorAll(".chain-label") : [];
            const signalV = vLayout ? vLayout.querySelector('.chain-signal[data-signal="v"]') : null;

            const hLayout = section.querySelector(".hidden.lg\\:block");
            const hCircles = hLayout ? hLayout.querySelectorAll(".chain-circle") : [];
            const hLabels = hLayout ? hLayout.querySelectorAll(".chain-label") : [];
            const signalH = hLayout ? hLayout.querySelector('.chain-signal[data-signal="h"]') : null;

            const hLineWrap = section.querySelector('[data-chain-line-wrap]');
            if (hLineWrap && hCircles.length >= 2) {
              const firstRect = hCircles[0].getBoundingClientRect();
              const lastRect = hCircles[hCircles.length - 1].getBoundingClientRect();
              const gridRect = hLayout.getBoundingClientRect();
              const leftPct = ((firstRect.left + firstRect.width / 2 - gridRect.left) / gridRect.width) * 100;
              const rightPct = ((gridRect.right - (lastRect.left + lastRect.width / 2)) / gridRect.width) * 100;
              hLineWrap.style.left = leftPct + "%";
              hLineWrap.style.right = rightPct + "%";
            }

            const vLineWrap = vLayout ? vLayout.querySelector('[data-chain-line-wrap]') : null;
            if (vLineWrap && vCircles.length >= 2) {
              const firstRect = vCircles[0].getBoundingClientRect();
              const lastRect = vCircles[vCircles.length - 1].getBoundingClientRect();
              const layoutRect = vLayout.getBoundingClientRect();
              const topPct = ((firstRect.top + firstRect.height / 2 - layoutRect.top) / layoutRect.height) * 100;
              const bottomPct = ((layoutRect.bottom - (lastRect.top + lastRect.height / 2)) / layoutRect.height) * 100;
              vLineWrap.style.top = topPct + "%";
              vLineWrap.style.bottom = bottomPct + "%";
            }

            resetCircles(vCircles, vLabels, signalV, "height");
            resetCircles(hCircles, hLabels, signalH, "width");

            requestAnimationFrame(() => {
              playStep(vCircles, vLabels, signalV, "height");
              playStep(hCircles, hLabels, signalH, "width");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        @keyframes rise {
          from { transform: translateY(18px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .rise { animation: rise 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: inset 0 0 20px rgba(37,99,235,0.25), 0 0 18px rgba(37,99,235,0.12); }
          50% { box-shadow: inset 0 0 30px rgba(37,99,235,0.45), 0 0 28px rgba(37,99,235,0.22); }
        }
        .glow-border { animation: glow-pulse 3s ease-in-out infinite; }

        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(2400%); opacity: 0; }
        }
        .scan-line { animation: scan 6s linear infinite; }

        .rigid-grid {
          background-image:
            linear-gradient(to right, rgba(100,116,139,0.25) 1px, transparent 1px),
            linear-gradient(rgba(100,116,139,0.25) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .chain-line {
          background: rgba(37, 99, 235, 0.2);
        }
        .chain-line-v {
          background: rgba(37, 99, 235, 0.2);
        }
        .chain-signal {
          position: absolute;
          border-radius: 2px;
        }
        .chain-signal[data-signal="h"] {
          background: linear-gradient(to right, rgba(37,99,235,0.5), rgba(37,99,235,1));
        }
        .chain-signal[data-signal="v"] {
          background: linear-gradient(to bottom, rgba(37,99,235,0.5), rgba(37,99,235,1));
        }
        @keyframes chainPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(37,99,235,0); }
          40% { transform: scale(1.15); box-shadow: 0 0 20px rgba(37,99,235,0.6); }
          100% { transform: scale(1); box-shadow: 0 0 12px rgba(37,99,235,0.35); }
        }
        @keyframes labelJump {
          0% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
        .chain-circle {
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .chain-circle.active {
          border-color: rgba(37, 99, 235, 1) !important;
          box-shadow: 0 0 16px rgba(37, 99, 235, 0.4);
          animation: chainPulse 0.9s ease-out forwards;
        }
        .chain-circle.active .chain-num {
          color: white;
          background: rgba(37, 99, 235, 0.3);
        }
        .chain-label.active {
          font-size: 15px;
          font-weight: 700;
          animation: labelJump 0.5s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .chain-circle.active { animation: none !important; }
          .chain-signal { transition: none !important; }
          .chain-label.active { animation: none !important; }
        }

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

        .shimmers-text {
          background: linear-gradient(90deg, #3B82F6 0%, #d3e4fe 50%, #3B82F6 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
        }
      `}</style>

      {/* HERO — CSS only, no image dependency */}
      <main className="relative min-h-[88vh] pt-20 overflow-hidden flex items-end border-b border-surface-border">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-70" />
          {/* radial glows */}
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          {/* scan line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-10 lg:pb-20 pt-15 lg:pt-40 lg:text-center">
          <div className="max-w-auto w-full ">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-white" />
              <span className="font-mono-data text-xs text-white uppercase tracking-[0.2em] font-bold ">
                Selection &amp; Training &mdash; Division 01
              </span>
            </div>
            <h1
              className="font-headline-lg text-2xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-4 lg:mb-6 rise shimmer-text"
              style={{ animationDelay: "0.1s" }}
            >
              Selection Procedure
            </h1>
            <p
              className="font-mono-data text-base md:text-xl text-on-surface-variant  leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              We don&rsquo;t fill rosters. We build a force &mdash; one verified, assessed and
              deliberately chosen individual at a time.
              <span className="hidden lg:block"> Our every candidate is tested against a standard that doesn&rsquo;t bend, and every guard we deploy can trace their place on the team back to this standard.</span>
             
            </p>

            <p  className="font-mono-data text-base md:text-xl text-on-surface-variant  leading-relaxed rise hidden lg:block"
              style={{ animationDelay: "0.2s" }}>
              Selecting a SecurityLink guard is not a matter of filling a roster. It is a deliberate process of building a force, one verified, assessed and chosen individual at a time. We prioritize quality over quantity, and our selection process is designed to ensure that every guard we deploy meets the highest standards of professionalism, competence and reliability.
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 rise"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { v: "5-STAGE", l: "Assessment" },
                { v: "5'6\"", l: "Min. Height" },
                { v: "CLASS IX", l: "Min. Education" },
                { v: "100%", l: "Vetted" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border border-cobalt-electric/30 bg-obsidian-deep/60 backdrop-blur-sm p-4"
                >
                  <div className="font-mono-data text-xl md:text-2xl text-cobalt-electric font-bold shimmer-text">
                    {s.v}
                  </div>
                  <div className="text-[11px] text-on-surface-variant uppercase tracking-widest mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* PHILOSOPHY */}
      <section className="bg-background">
        <div className="max-w-auto mx-auto px-6 lg:px-24 py-12 md:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                The Standard
              </span>
              <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                Experienced eyes, <br /> set standards
              </h2>
              <div className="space-y-6 font-body-md text-sm lg:text-lg text-on-surface-variant leading-relaxed">
                <p>
                  SecurityLink follows a set standard to recruit its employees. Recruitment is
                  carried out by experienced executives and staff who have experienced eyes to pick
                  potential candidates from a crowd.
                  <span className="hidden lg:block">
                    Physical and educational aspects of a candidate
                  are tested &mdash; while psychological, intellectual and personality factors are
                  also assessed through close personal interviews.
                  </span>
                  
                </p>
                <p>
                  Five tests are conducted to assess the fitness of every candidate before a single
                  uniform is issued. Nothing is left to assumption.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-cobalt-electric/30 bg-surface-container-low p-5 lg:p-10 h-full flex flex-col justify-between glow-border">
                <div>
                  <Fingerprint className="w-9 h-9 text-cobalt-electric mb-4 lg:mb-6" strokeWidth={2} />
                  <p className="font-headline-md text-lg md:text-2xl text-on-surface leading-snug">
                    &ldquo;A guard is not hired. A guard is selected &mdash; tested, verified and
                    chosen against a standard that doesn&rsquo;t bend.&rdquo;
                  </p>
                </div>
                <div className="mt-4 lg:mt-8 pt-3 lg:pt-6 border-t border-surface-border">
                  <p className="font-body-sm text-sm text-on-surface-variant">
                    Quality begins at the gate &mdash; before training, before a post.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE-STAGE ASSESSMENT — chain process flow */}
      <section ref={chainSectionRef} className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-auto mx-auto px-6 lg:px-18 py-12 md:py-32">
          <div className="mb-16 max-w-auto">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              The Five-Stage Assessment
            </span>
            <h2 className="font-headline-lg text-2xl lg:text-6xl text-on-surface uppercase tracking-tight mt-4 leading-tight shimmer-text">
              Every candidate passes through five gates
            </h2>
          </div>

          {/* desktop chain */}
          <div className="hidden lg:block relative" data-chain-desktop>
            <div className="absolute top-[18px] left-0 right-0 h-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line rounded-full" />
              <div className="chain-signal h-[4px] rounded-full w-0" data-signal="h" />
            </div>
            <div className="grid grid-cols-5 gap-6">
              {tests.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="relative" data-step-wrap>
                    <div className="chain-circle w-10 h-10 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center mb-3 relative z-10">
                      <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                      {String(idx + 1).padStart(2, "0")} &mdash; Stage
                    </span>
                    <div className="flex items-center gap-2 mt-2 mb-3">
                      <Icon className="w-5 h-5 text-cobalt-electric flex-shrink-0" strokeWidth={1.75} />
                      <h3 className="font-headline-md text-lg text-on-surface leading-snug">
                        {t.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* mobile chain */}
          <div className="lg:hidden relative pl-12">
            <div className="absolute left-[18px] top-0 bottom-0 w-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line-v rounded-full" />
              <div className="chain-signal w-[4px] rounded-full h-0" data-signal="v" />
            </div>
            <div className="space-y-10">
              {tests.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="relative" data-step-wrap>
                    <div className="chain-circle absolute -left-12 top-0 w-10 h-10 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center">
                      <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                      {String(idx + 1).padStart(2, "0")} &mdash; Stage
                    </span>
                    <div className="flex items-center gap-2 mt-2 mb-2">
                      <Icon className="w-5 h-5 text-cobalt-electric flex-shrink-0" strokeWidth={1.75} />
                      <h3 className="font-headline-md text-lg text-on-surface leading-snug">
                        {t.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR — split with the image container */}
      <section className="bg-background">
        <div className="max-w-auto mx-auto px-3 lg:px-32 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* IMAGE CONTAINER — 697×518 px */}
            <div className="lg:col-span-7 order-1">
              <div className="relative w-full aspect-[697/518] border border-cobalt-electric/30 overflow-hidden group bg-surface-container-low">
                <Image
                  src="/recruitment.webp"
                  alt="SecurityLink recruitment"
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cobalt-electric/20 pointer-events-none" />
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 left-3 font-mono-data text-[9px] text-cobalt-electric/70 uppercase tracking-[0.25em]">
                  REC &bull; SELECTION
                </div>
              </div>
            </div>

            {/* attributes list */}
            <div className="lg:col-span-5 order-2">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                What We Look For
              </span>
              <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                The profile of a SecurityLink recruit
              </h2>
              <div className="space-y-4">
                {attributes.map((a, idx) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex gap-4 p-4 md:p-5 border border-cobalt-electric/50 
                       
                      hover:border-surface-border transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40"
                    >
                      <div className="w-12 h-12 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                        <Icon className="w-8 h-8 text-cobalt-electric" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-bold text-on-surface font-headline-lg uppercase text-sm tracking-wide mb-1">
                          {a.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed font-mono-data">{a.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-obsidian-deep border-t border-surface-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 lg:py-18 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-cobalt-electric/50" />
            <span className="font-mono-data text-sm lg:text-base text-cobalt-electric uppercase tracking-[0.25em]">
              The Outcome
            </span>
            <span className="h-px w-12 bg-cobalt-electric/50" />
          </div>
          <p className="font-headline-md text-xl lg:text-3xl text-on-surface leading-snug">
            Every guard we deploy can trace their place on the team back to this standard &mdash;
            five gates passed, five attributes met, zero shortcuts taken.
          </p>
        </div>
      </section>
    </>
  );
}

