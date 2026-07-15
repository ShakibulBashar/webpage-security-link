// About Us — company philosophy, vision, working process, strengths, welfare
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
          background-image: repeating-linear-gradient(
            to right,
            rgba(37, 99, 235, 0.45) 0,
            rgba(37, 99, 235, 0.45) 6px,
            transparent 6px,
            transparent 14px
          );
        }
        .chain-line-v {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(37, 99, 235, 0.45) 0,
            rgba(37, 99, 235, 0.45) 6px,
            transparent 6px,
            transparent 14px
          );
        }
      `}</style>

      {/* HERO — CSS only, no image dependency */}
      <main className="relative min-h-[88vh]  overflow-hidden flex items-center border-b border-surface-border">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-40" />
          {/* radial glows */}
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          {/* ghosted recognition count */}
          <span className="absolute right-4 md:right-12 top-24 font-headline-xl text-[180px] md:text-[280px] font-bold text-cobalt-electric/[0.08] leading-none select-none pointer-events-none whitespace-nowrap">
            13+<br />Yrs
          </span>
          {/* scan line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-48 border-b border-surface-border/30">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                About SecurityLink
              </span>
            </div>
            <h1
              className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-6 rise"
              style={{ animationDelay: "0.1s" }}
            >
              Complete security,
              <br />
              built by professionals
            </h1>
            <p
              className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              SecurityLink Ltd. exists to give quality-conscious clients an option they didn&apos;t
              have before &mdash; a security partner built around its people, not just its
              contracts.
            </p>
            <p className="font-mono-data text-xs text-on-surface-variant/60 uppercase tracking-[0.15em] rise" style={{ animationDelay: "0.25s" }}>
              ASIS International &bull; CPP Board Certified &bull; Bangladesh Chapter Chairman
            </p>
            <p className="font-mono-data text-xs text-on-surface-variant/60 uppercase tracking-[0.15em] rise" style={{ animationDelay: "0.3s" }}>
              IPSA Member &bull; ARC Training Accredited &bull; NTMC System Design Partner
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 rise"
              style={{ animationDelay: "0.35s" }}
            >
              {[
                { v: "13+", l: "Years" },
                { v: "4", l: "Divisions" },
                { v: "CPP", l: "Certified" },
                { v: "IPSA", l: "Member" },
                { v: "NTMC", l: "System Design" },
                { v: "DCC", l: "Licensed" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border border-cobalt-electric/30 bg-obsidian-deep/60 backdrop-blur-sm p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-data text-xl md:text-2xl text-cobalt-electric font-bold">
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
              <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-on-surface uppercase tracking-tight mb-8 leading-tight">
                Why we exist
              </h2>
              <div className="space-y-6 font-body-md text-base md:text-lg xl:text-xl text-on-surface-variant leading-relaxed">
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
              <div className="relative border border-cobalt-electric/30 bg-surface-container-low p-8 md:p-10 h-full flex flex-col justify-between">
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
                <div className="mt-10 pt-6 border-t border-surface-border">
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
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                How We Work
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
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
          <div className="hidden lg:block relative">
            <div className="absolute top-[15px] left-0 right-0 h-[2px] chain-line" />
            <div className="grid grid-cols-5 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="w-8 h-8 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center mb-8 relative z-10">
                    <span className="w-2 h-2 rounded-full bg-cobalt-electric" />
                  </div>
                  <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
                    {String(idx + 1).padStart(2, "0")} &mdash; {step.label}
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
          <div className="lg:hidden relative pl-10">
            <div className="absolute top-2 bottom-2 left-[15px] w-[2px] chain-line-v" />
            <div className="space-y-10">
              {process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full border-2 border-cobalt-electric bg-obsidian-deep flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cobalt-electric" />
                  </div>
                  <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
                    {String(idx + 1).padStart(2, "0")} &mdash; {step.label}
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
                  src="/hero33.JPG"
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