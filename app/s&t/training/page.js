// Training Centre & Activities — how SecurityLink shapes its guards
import {
  Shield,
  Flame,
  ClipboardList,
  Headset,
  Dumbbell,
  Flag,
  FastForward,
  Award,
  RefreshCw,
  Building2,
  MapPin,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const syllabus = [
  {
    icon: Shield,
    title: "Security Procedures",
    desc: "Basic knowledge across the various security procedures a guard must understand before taking a post.",
  },
  {
    icon: Flame,
    title: "Safety & Firefighting",
    desc: "Electrical safety, fire safety and live firefighting drills — the skills that turn panic into procedure.",
  },
  {
    icon: ClipboardList,
    title: "Administration & Management",
    desc: "The organisational discipline needed to run a post cleanly: reporting, handover and record-keeping.",
  },
  {
    icon: Headset,
    title: "Customer Service",
    desc: "Guards are the first face a visitor meets. Conduct, communication and composure are taught directly.",
  },
  {
    icon: Dumbbell,
    title: "Physical & Self-Defense",
    desc: "Hands-on physical conditioning and self-defense training that holds up under real-world pressure.",
  },
];

const packages = [
  {
    icon: Flag,
    tag: "New Recruits",
    title: "Initial Training",
    duration: "3 Weeks",
    desc: "The full programme — including one week of induction training at post. The foundation for every guard with no prior security experience.",
  },
  {
    icon: FastForward,
    tag: "Experienced",
    title: "Experienced Track",
    duration: "2 Weeks",
    desc: "An accelerated two-week course for employees who already bring six months or more of previous security company experience.",
  },
  {
    icon: Award,
    tag: "Leadership",
    title: "Officer Training",
    duration: "Targeted",
    desc: "Security Officers are trained in the basics of administration and organisational skill — so they can manage guards effectively.",
  },
  {
    icon: RefreshCw,
    tag: "Ongoing",
    title: "Capsule & Refresher",
    duration: "Corrective",
    desc: "Short, corrective sessions for knowledge gaps on special subjects — tuned to each client’s specific feedback to lift ground-force standards.",
  },
];

export default function TrainingPage() {
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
      `}</style>

      {/* HERO — CSS only */}
      <main className="relative min-h-[88vh] pt-20 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-40" />
          <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          <span className="absolute left-4 md:left-12 top-24 font-headline-xl text-[180px] md:text-[280px] font-bold text-cobalt-electric/[0.04] leading-none select-none pointer-events-none">
            02
          </span>
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-40">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Selection &amp; Training &mdash; Division 02
              </span>
            </div>
            <h1
              className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-6 rise"
              style={{ animationDelay: "0.1s" }}
            >
              Training Centre
              <br />
              &amp; Activities
            </h1>
            <p
              className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              First a gentleman, then a guard. We turn recruits into professionals through
              disciplined, structured training &mdash; indoors and out.
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 rise"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { v: "3-WEEK", l: "Core Programme" },
                { v: "80+", l: "Batches Led" },
                { v: "500+", l: "Guards Trained" },
                { v: "2", l: "Indoor + Outdoor" },
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
                The Belief
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 mb-8 leading-tight">
                The single most important factor
              </h2>
              <div className="space-y-6 font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                <p>
                  SecurityLink believes training is the single most important factor that
                  differentiates its employees from others. Training changes the attitude of a
                  person and brings discipline to their activities. It makes a man skilled &mdash;
                  to understand and perform a job with great efficiency.
                </p>
                <p>
                  Beside the professional subjects, subjects for individual character building,
                  manners and etiquette are also included &mdash; so that trainees first become a
                  gentleman, and then become a security guard.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-cobalt-electric/30 bg-surface-container-low p-8 md:p-10 h-full flex flex-col justify-between glow-border">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-7 h-7 text-cobalt-electric" strokeWidth={1.5} />
                    <Sparkles className="w-6 h-6 text-cobalt-electric/70" strokeWidth={1.5} />
                  </div>
                  <p className="font-headline-md text-xl md:text-2xl text-on-surface leading-snug">
                    &ldquo;First a gentleman &mdash; then a security guard. Skill without character
                    is a liability we never deploy.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-surface-border">
                  <p className="font-body-sm text-sm text-on-surface-variant">
                    Character building and etiquette sit beside every professional module.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING CENTRE — split with the single image container */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              The Training Centre
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Indoor &amp; outdoor, led from the top
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* IMAGE CONTAINER — upload your photo as /public/training.jpg */}
            <div className="lg:col-span-5 order-1">
              <div className="relative h-full min-h-[360px] md:min-h-[460px] border border-cobalt-electric/30 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-obsidian-deep" />
                <div className="absolute inset-0 rigid-grid opacity-40" />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/training.jpg')" }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cobalt-electric/20" />
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cobalt-electric/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cobalt-electric/60" />
                <div className="absolute bottom-4 left-4 font-mono-data text-[10px] text-cobalt-electric/70 uppercase tracking-[0.25em]">
                  REC &bull; TRAINING
                </div>
              </div>
            </div>

            {/* facilities + leadership */}
            <div className="lg:col-span-7 order-2">
              <div className="space-y-6 font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed mb-10">
                <p>
                  Our training centre has both outdoor and indoor training facilities. It is kept
                  near the corporate business office so that office staff can easily supervise the
                  activities of the training centre &mdash; quality is watched, not assumed.
                </p>
                <p>
                  The experienced training team of SecurityLink is led by its Managing Director, who
                  has supervised at least 80 batches of guard training at Aegis Services Limited
                  (Square Group) and trained at least 500 guards of Avant-garde Limited &mdash; with
                  a track record as an instructor in the Bangladesh Army.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Building2,
                    title: "Indoor + Outdoor",
                    desc: "Two training environments under one centre.",
                  },
                  {
                    icon: MapPin,
                    title: "Beside Head Office",
                    desc: "Staff supervise training activities directly.",
                  },
                  {
                    icon: Award,
                    title: "80+ Batches Led",
                    desc: "Supervised at Aegis Services (Square Group).",
                  },
                  {
                    icon: Users,
                    title: "500+ Guards Trained",
                    desc: "Trained at Avant-garde Limited; Army instructor.",
                  },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className="group flex gap-4 p-4 md:p-5 border border-surface-border hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20"
                    >
                      <div className="w-11 h-11 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                        <Icon className="w-5 h-5 text-cobalt-electric" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-1">
                          {f.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING SYLLABUS */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Training Syllabus
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Five subjects, one standard
            </h2>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mt-6">
              Considering the requirement of the security job, these main subjects have been
              incorporated into the training syllabus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabus.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="border border-surface-border p-6 hover:border-cobalt-electric transition-all group glow-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-lg flex items-center justify-center group-hover:bg-cobalt-electric/20 transition-colors">
                      <Icon className="w-6 h-6 text-cobalt-electric" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
                      Module {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-on-surface uppercase text-sm tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINING PACKAGES */}
      <section className="bg-obsidian-deep border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Training Packages
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              The right programme for the right recruit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="group relative border border-surface-border p-6 md:p-8 hover:border-cobalt-electric/50 transition-all bg-surface-container-low/20 hover:bg-surface-container-low/40 overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 bg-cobalt-electric/10 border border-cobalt-electric/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cobalt-electric/20 transition-colors">
                      <Icon className="w-7 h-7 text-cobalt-electric" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] border border-cobalt-electric/30 bg-cobalt-electric/10 px-3 py-1.5">
                      {p.duration}
                    </span>
                  </div>
                  <span className="font-mono-data text-[11px] text-on-surface-variant uppercase tracking-[0.2em]">
                    {p.tag}
                  </span>
                  <h3 className="font-headline-md text-xl text-on-surface mt-1 mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                  <span className="absolute -bottom-8 -right-4 font-headline-xl text-[120px] font-bold text-cobalt-electric/[0.04] leading-none select-none pointer-events-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-background border-t border-surface-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-cobalt-electric/50" />
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.25em]">
              The Result
            </span>
            <span className="h-px w-8 bg-cobalt-electric/50" />
          </div>
          <p className="font-headline-md text-2xl md:text-3xl text-on-surface leading-snug">
            A trained guard doesn&rsquo;t just stand a post &mdash; they understand it. That
            difference is what every SecurityLink client sees on the ground.
          </p>
        </div>
      </section>
    </>
  );
}
