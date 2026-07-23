// About Us — company philosophy, vision, working process, strengths, welfare
"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  Radar,
  BadgeCheck,
  Users2,
  Cpu,
  Clock3,
  ScaleIcon,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const process = [
  {
    label: "Assess",
    title: "Survey & vulnerability study",
    desc: "An exhaustive on-site survey identifies weaknesses in the client's existing security measures before anything is proposed.",
  },
  {
    label: "Design",
    title: "Security plan",
    desc: "Guards, CCTV, access control and alarm systems are combined into a single counter-measure, integrated with the client's own security policy.",
  },
  {
    label: "Document",
    title: "The Post Order",
    desc: "Every task, for every post, is written down in clear language and kept with the individual guard. This document is the backbone of the operation.",
  },
  {
    label: "Train",
    title: "Post-specific training",
    desc: "Personnel are trained directly against their Post Order, so the team on the ground works in genuine harmony.",
  },
  {
    label: "Supervise",
    title: "Field oversight",
    desc: "Field Officers inspect routinely and collect client feedback; headquarters keeps a continuous, independent eye on performance.",
  },
];

const strengths = {
  management: {
    heading: "Management & Compliance",
    items: [
      { icon: Users2, text: "Sufficient depth in management" },
      { icon: BadgeCheck, text: "Experienced leadership across security operations" },
      { icon: ScaleIcon, text: "Full compliance with government regulation" },
      { icon: ClipboardList, text: "A systematic performance management system" },
    ],
  },
  field: {
    heading: "Field Execution",
    items: [
      { icon: GraduationCap, text: "Quality, ongoing training" },
      { icon: Radar, text: "Constant supervision" },
      { icon: Cpu, text: "Modern technology and methodology" },
      { icon: Clock3, text: "Round-the-clock response to clients" },
    ],
  },
};

export default function AboutUsPage() {
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

            // Position horizontal line between first and last circle centers
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

            // Position vertical line between first and last circle centers
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

        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(2400%); opacity: 0; }
        }
        .scan-line { animation: scan 6s linear infinite; }

        .rigid-grid {
          background-image:
            linear-gradient(to right, rgba(100,116,139,0.18) 1px, transparent 1px),
            linear-gradient(rgba(100,116,139,0.18) 1px, transparent 1px);
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
      `}</style>

      {/* HERO — CSS only, no image dependency */}
      <main className="relative min-h-[88vh]  overflow-hidden flex items-start md:items-center border-b border-surface-border">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-40" />
          {/* radial glows */}
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          {/* ghosted recognition count */}
          <span className="absolute right-4 md:right-12 top-24 font-headline-xl text-[100px] sm:text-[140px] md:text-[280px] font-bold text-cobalt-electric/[0.08] leading-none select-none pointer-events-none whitespace-nowrap">
            13+<br />Yrs
          </span>
          {/* scan line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-4 lg:px-12 pb-10 lg:pb-20 pt-36 lg:pt-48 border-b border-surface-border/30">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                About SecurityLink
              </span>
            </div>
            <h1
              className="font-headline-xl text-2xl md:text-3xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-4 lg:mb-6 rise"
              style={{ animationDelay: "0.1s" }}
            >
              Complete security,
              <br />
              built by professionals
            </h1>
            <p
              className="font-body-lg text-sm lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              SecurityLink Ltd. exists to give quality-conscious clients an option they didn&apos;t
              have before &mdash; a security partner built around its people, not just its
              contracts. Always pushing boundaries to make a strategic difference in Bangladesh.
            </p>
            

            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 lg:mt-12 rise"
              style={{ animationDelay: "0.35s" }}
            >
              {[
                { v: "24/7", l: "Support" },
                { v: "100%", l: "Satisfaction" },
                { v: "Global", l: "Recognition" },
                { v: "Daily", l: "Monitoring" },
                { v: "Rigorous", l: "Testing" },
                { v: "Industry", l: "Standard" },
              ].map((s, i) => (
                <div 
                  key={i}
                  className="border border-cobalt-electric/30 bg-obsidian-deep/60 backdrop-blur-sm p-2 lg:p-4 text-center"
                >
                  <div className="flex items-center gap-1 lg:gap-2">
                    <span className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold">
                      {s.v}
                    </span>
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-widest">
                      {s.l}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* PHILOSOPHY */}
      <section className="bg-background">
        <div className="max-w-auto mx-auto px-4 md:px-10 lg:px-24 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-5xl text-on-surface uppercase tracking-tight mb-4 lg:mb:8 leading-tight">
                Why we exist
              </h2>
              <div className="space-y-6 font-body-md text-sm md:text-base xl:text-xl text-on-surface-variant leading-relaxed">
                <p>
                  Our mission is to ensure the complete satisfaction of every quality-conscious
                  client &mdash; through customised training for our staff, careful team building,
                  constant monitoring, honest response to client feedback.
                </p>
                <p>
                  Much of the security services industry runs on thin margins and short-term
                  thinking, which leaves little room to invest in the people doing the work. We built
                  SecurityLink around the opposite bet: that a company which trains, supervises and
                  genuinely looks after its guards is the one that ends up protecting your premises
                  properly. 
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-cobalt-electric/30 bg-surface-container-low p-4 md:p-6 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                    Our Vision
                  </span>
                  <p className="font-headline-md text-xl md:text-2xl text-on-surface leading-snug mt-5">
                    &ldquo;To provide global standard security services to plants, factories and
                    corporate premises through skilled human resources, efficient process
                    management and system integration.&rdquo;
                  </p>
                </div>
                <div className="mt-5 lg:mt-10 pt-6 border-t border-surface-border">
                  <p className="font-body-sm text-sm text-on-surface-variant">
                    We believe a satisfied employee is the only kind that can satisfy a client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section ref={chainSectionRef} className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 mb-8 lg:mb-12">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                How We Work
              </span>
              <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
                Five steps, one chain of accountability 
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                Every guard we deploy can trace their duties back to a documented survey of your
                premises. Nothing is left to memory.
              </p>
            </div>
          </div>

          {/* Chain steps — desktop */}
          <div className="hidden lg:block relative" data-chain-desktop>
            <div className="absolute top-[18px] left-0 right-0 h-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line rounded-full" />
              <div className="chain-signal h-[4px] rounded-full w-0" data-signal="h" />
            </div>
            <div className="grid grid-cols-5 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="relative" data-step-wrap>
                  <div className="chain-circle w-10 h-10 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center mb-3 relative z-10">
                    <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                    {step.label}
                  </span>
                  <h3 className="font-headline-md text-lg text-on-surface mt-2 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chain steps — mobile */}
          <div className="lg:hidden relative pl-12">
            <div className="absolute left-[18px] top-0 bottom-0 w-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line-v rounded-full" />
              <div className="chain-signal w-[4px] rounded-full h-0" data-signal="v" />
            </div>
            <div className="space-y-10">
              {process.map((step, idx) => (
                <div key={idx} className="relative" data-step-wrap>
                  <div className="chain-circle absolute -left-12 top-0 w-10 h-10 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center">
                    <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                    {step.label}
                  </span>
                  <h3 className="font-headline-md text-lg text-on-surface mt-2 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-background">
        <div className="max-w-auto mx-auto px-4 md:px-8 lg:px-24 py-8 lg:py-16">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Our Strengths
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              What we bring to a contract
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {Object.values(strengths).map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="font-label-caps text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 pb-4 border-b border-surface-border">
                  {group.heading}
                </h3>
                <ul className="space-y-5">
                  {group.items.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-4">
                        <Icon className="w-5 h-5 text-cobalt-electric flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                        <span className="font-body-md text-base text-on-surface leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-surface-border flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <ShieldCheck className="w-6 h-6 text-cobalt-electric flex-shrink-0" strokeWidth={1.75} />
            <p className="font-headline-md text-lg md:text-xl text-on-surface leading-snug">
              And underneath all of it: the maintenance of honesty, integrity and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* WELFARE */}
      <section className="bg-obsidian-deep border-t border-surface-border">
        <div className="max-w-auto mx-auto px-4 md:px-8 lg:px-24 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                People First
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                A guard with a stake in the outcome
              </h2>
              <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                Beyond a competitive base package, every employee receives two festival bonuses
                equal to two basic pays, annual increments tied to performance, and promotion where
                it&apos;s earned. Overtime and conveyance are paid where admissible. And every
                employee holds a share in a profit-sharing scheme &mdash; because a guard who owns a
                piece of the outcome watches your premises differently.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-caps text-sm uppercase tracking-[0.15em] text-cobalt-electric hover:text-white transition-colors group"
              >
                Talk to our team
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative h-72 md:h-96 border border-surface-border overflow-hidden">
                <Image
                  src="/hero33.webp"
                  alt="SecurityLink guard stationed at a client compound gate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="bg-background border-t border-surface-border">
        <div className="max-w-auto mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col lg:flex-row justify-evenly flex-wrap gap-x-10 gap-y-3 font-mono-data text-xs text-on-surface-variant/70 uppercase tracking-wider">
            <span>Certificate of Incorporation No. C-110972/13</span>
            <span className="hidden md:inline text-surface-border">&bull;</span>
            <span>Dhaka City Corporation Trade License No. 0340619</span>
            <span className="hidden md:inline text-surface-border">&bull;</span>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-deep border-t border-surface-border py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mb-6">
            Ready to see the survey?
          </h2>
          <p className="font-body-md text-base md:text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            We start every engagement with a walk-through of your premises, not a quote. Tell us
            where you need coverage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
          >
            <Handshake className="w-4 h-4" />
            Request a Site Survey
          </Link>
        </div>
      </section>
    </>
  );
}