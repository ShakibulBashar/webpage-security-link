// Selection Procedure — recruitment & selection standards of SecurityLink
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
            linear-gradient(to right, rgba(100,116,139,0.10) 1px, transparent 1px),
            linear-gradient(rgba(100,116,139,0.10) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .chain-line {
          background-image: repeating-linear-gradient(
            to right, rgba(37,99,235,0.45) 0, rgba(37,99,235,0.45) 6px,
            transparent 6px, transparent 14px
          );
        }
        .chain-line-v {
          background-image: repeating-linear-gradient(
            to bottom, rgba(37,99,235,0.45) 0, rgba(37,99,235,0.45) 6px,
            transparent 6px, transparent 14px
          );
        }
      `}</style>

      {/* HERO — CSS only, no image dependency */}
      <main className="relative min-h-[88vh] pt-20 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-40" />
          {/* radial glows */}
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          {/* ghosted section number */}
          <span className="absolute right-4 md:right-12 top-24 font-headline-xl text-[180px] md:text-[280px] font-bold text-cobalt-electric/[0.04] leading-none select-none pointer-events-none">
            01
          </span>
          {/* scan line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-40">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Selection &amp; Training &mdash; Division 01
              </span>
            </div>
            <h1
              className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-6 rise"
              style={{ animationDelay: "0.1s" }}
            >
              Selection Procedure
            </h1>
            <p
              className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              We don&rsquo;t fill rosters. We build a force &mdash; one verified, assessed and
              deliberately chosen individual at a time.
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
                  <div className="font-mono-data text-xl md:text-2xl text-cobalt-electric font-bold">
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
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                The Standard
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                Experienced eyes, set standards
              </h2>
              <div className="space-y-6 font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                <p>
                  SecurityLink follows a set standard to recruit its employees. Recruitment is
                  carried out by experienced executives and staff who have experienced eyes to pick
                  potential candidates from a crowd. Physical and educational aspects of a candidate
                  are tested &mdash; while psychological, intellectual and personality factors are
                  also assessed through close personal interviews.
                </p>
                <p>
                  Five tests are conducted to assess the fitness of every candidate before a single
                  uniform is issued. Nothing is left to assumption.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-cobalt-electric/30 bg-surface-container-low p-8 md:p-10 h-full flex flex-col justify-between glow-border">
                <div>
                  <Fingerprint className="w-7 h-7 text-cobalt-electric mb-6" strokeWidth={1.5} />
                  <p className="font-headline-md text-xl md:text-2xl text-on-surface leading-snug">
                    &ldquo;A guard is not hired. A guard is selected &mdash; tested, verified and
                    chosen against a standard that doesn&rsquo;t bend.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-surface-border">
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
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              The Five-Stage Assessment
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Every candidate passes through five gates
            </h2>
          </div>

          {/* desktop chain */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[15px] left-0 right-0 h-[2px] chain-line" />
            <div className="grid grid-cols-5 gap-6">
              {tests.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="w-8 h-8 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center mb-8 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-cobalt-electric" />
                    </div>
                    <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
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
          <div className="lg:hidden relative pl-10">
            <div className="absolute top-2 bottom-2 left-[15px] w-[2px] chain-line-v" />
            <div className="space-y-10">
              {tests.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-10 top-0 w-8 h-8 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-cobalt-electric" />
                    </div>
                    <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
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

      {/* WHAT WE LOOK FOR — split with the single image container */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* IMAGE CONTAINER — upload your photo as /public/selection.jpg */}
            <div className="lg:col-span-6 order-1">
              <div className="relative h-full min-h-[360px] md:min-h-[480px] border border-cobalt-electric/30 overflow-hidden group">
                {/* fallback layers (visible until image is added) */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-obsidian-deep" />
                <div className="absolute inset-0 rigid-grid opacity-40" />
                {/* your image — replace the path below with your file in /public */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/selection.jpg')" }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cobalt-electric/20" />
                {/* viewfinder corner brackets */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-4 left-4 font-mono-data text-[10px] text-cobalt-electric/70 uppercase tracking-[0.25em]">
                  REC &bull; SELECTION
                </div>
              </div>
            </div>

            {/* attributes list */}
            <div className="lg:col-span-7 order-2">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                What We Look For
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                The profile of a SecurityLink recruit
              </h2>
              <div className="space-y-4">
                {attributes.map((a, idx) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex gap-4 p-4 md:p-5 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40"
                    >
                      <div className="w-12 h-12 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                        <Icon className="w-5 h-5 text-cobalt-electric" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">
                          {a.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{a.desc}</p>
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
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-cobalt-electric/50" />
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.25em]">
              The Outcome
            </span>
            <span className="h-px w-8 bg-cobalt-electric/50" />
          </div>
          <p className="font-headline-md text-2xl md:text-3xl text-on-surface leading-snug">
            Every guard we deploy can trace their place on the team back to this standard &mdash;
            five gates passed, five attributes met, zero shortcuts taken.
          </p>
        </div>
      </section>
    </>
  );
}

