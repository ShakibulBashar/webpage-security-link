// Achievements & Recognition — certification, client letters, equipment partners
import Link from "next/link";
import { Award, FileCheck2, Landmark, HeartHandshake, Handshake } from "lucide-react";

const letters = [
  {
    icon: Landmark,
    org: "Armed Forces Division",
    detail:
      "SecurityLink helped develop and design the integrated physical security system for the National Telecommunication Monitoring Centre (NTMC), advising on system integration within a prescribed budget. The first phase was implemented successfully.",
  },
  {
    icon: HeartHandshake,
    org: "CARE Bangladesh",
    detail:
      "SecurityLink has provided security services to CARE Bangladesh since January 2016. The organisation has noted our staff as well-trained, professional and prompt in addressing security requirements.",
  },
  {
    icon: FileCheck2,
    org: "General Recognition",
    detail:
      "SecurityLink Limited has been formally recognised for its standard of service by client and partner organisations across the sectors we operate in.",
  },
];

const brands = [
  "Hikvision", "Dahua", "Avtech", "Aventura", "ZKTeco", "Johnson Controls",
  "Mobotix", "Safran Morpho", "Rosenberger", "Toten", "Tyco", "Virdi", "Western Digital",
];

export default function AchievementsPage() {
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
            linear-gradient(to right, rgba(100,116,139,0.10) 1px, transparent 1px),
            linear-gradient(rgba(100,116,139,0.10) 1px, transparent 1px);
          background-size: 48px 48px;
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
          {/* ghosted recognition count */}
          <span className="absolute right-4 md:right-12 top-24 font-headline-xl text-[180px] md:text-[280px] font-bold text-cobalt-electric/[0.04] leading-none select-none pointer-events-none">
            50+
          </span>
          {/* scan line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-40">
          <div className="max-w-5xl w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Achievements &amp; Recognition
              </span>
            </div>
            <h1
              className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-6 rise"
              style={{ animationDelay: "0.1s" }}
            >
              Recognised where it counts
            </h1>
            <p
              className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              Credentials and client acknowledgement, earned on individual sites rather than in
              marketing copy.
            </p>

            <div
              className="grid grid-cols-3 gap-4 mt-12 rise"
              style={{ animationDelay: "0.3s" }}
            >
              {[
                { v: "CPP", l: "Certified" },
                { v: "IPSA", l: "Member" },
                { v: "ARC", l: "Training" },
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

      {/* CERTIFICATION */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="w-16 h-16 rounded-full border-2 border-cobalt-electric flex items-center justify-center">
                <Award className="w-7 h-7 text-cobalt-electric" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:col-span-10">
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Board Certification
              </span>
              <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface uppercase tracking-tight mt-3 mb-4 leading-tight">
                Certified Protection Professional, ASIS International
              </h2>
              <p className="font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                Our founder and Managing Director holds Board Certification in security management
                &mdash; the Certified Protection Professional (CPP) designation from ASIS
                International, USA. He currently serves as Chairman of ASIS International&apos;s
                Bangladesh chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LETTERS OF RECOGNITION */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Letters of Recognition
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              What clients have put in writing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-border">
            {letters.map((letter, idx) => {
              const Icon = letter.icon;
              return (
                <div key={idx} className="bg-background p-8 md:p-10 flex flex-col">
                  <Icon className="w-6 h-6 text-cobalt-electric mb-6" strokeWidth={1.5} />
                  <h3 className="font-headline-md text-lg text-on-surface mb-4 leading-snug">
                    {letter.org}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {letter.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRAND PARTNERS */}
      <section className="bg-obsidian-deep border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Equipment Partners
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Hardware we specify and integrate
            </h2>
            <p className="font-body-md text-base text-on-surface-variant mt-5 leading-relaxed">
              Our Equipment Division works only with established manufacturers, so that whatever
              we recommend is something we can also service.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {brands.map((brand, idx) => (
              <span
                key={idx}
                className="font-label-caps text-xs uppercase tracking-[0.1em] text-on-surface-variant border border-surface-border px-4 py-2 hover:border-cobalt-electric hover:text-on-surface transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background border-t border-surface-border py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mb-6">
            See how we&apos;d approach your site
          </h2>
          <p className="font-body-md text-base md:text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Certifications and letters are a starting point. The real proof is in how a survey of
            your premises comes back.
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