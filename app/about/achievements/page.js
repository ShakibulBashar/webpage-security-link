"use client";

import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";
import { FileText, Award, Medal } from "lucide-react";

const keywordBoxes = [
  { k: "Inudstry Standard", v: "100%" },
  { k: "Accredited", v: "MNC" },
  { k: "Trained", v: "ARC" },
  { k: "Professionals", v: "Certified" },
  { k: "Recognized", v: "Globally" },
  { k: "Aligned", v: "ASIS" },
];

const credentials = [
  {
    src: "/achivements-images/ASIS.jpg",
    type: "image",
    org: "ASIS International Professional Certification Board",
    title: "Certified Protection Professional (CPP)",
    note: "Board certification in security management held by the firm’s managing director.",
  },
  {
    src: "/achivements-images/ISO Certificate.jpeg",
    type: "image",
    org: "TÜV SÜD South Asia / CQI-IRCA",
    title: "ISO/IEC 27001 Lead Auditor",
    note: "Information security management systems auditor and lead auditor training.",
  },
  {
    src: "/achivements-images/ARC.jpg",
    type: "image",
    org: "International Academy for Security Management",
    title: "Advanced Security Management Certification",
    note: "Advanced certification in security management preparation.",
  },
  {
    src: "/achivements-images/13. 360 Degree Certificate.jpg",
    type: "image",
    org: "360training.com / OSHA Authorized Outreach",
    title: "OSHA 30-Hour General Industry",
    note: "Occupational safety and health outreach training completion.",
  },
];

const recognitions = [
  {
    src: "/achivements-images/AFD.jpg",
    type: "image",
    org: "National Security Institution",
    title: "System design & integration advisory",
    note: "Advised on technology-based security design and system integration for a national defence-level body.",
  },
  {
    src: "/achivements-images/CERT- CARE.jpg",
    type: "image",
    org: "International Development Sector",
    title: "Security service recognition",
    note: "Acknowledged for trained, professional and prompt security service delivery.",
  },
  {
    src: "/achivements-images/Buildtrade Foils Ltd..pdf",
    type: "pdf",
    org: "Industrial Manufacturing",
    title: "Service reliability recognition",
    note: "Factory security deployment recognised for reliability, hard work and professionalism.",
  },
  {
    src: "/achivements-images/Experience Certificate - VIVO.pdf",
    type: "pdf",
    org: "Technology Sector",
    title: "Appreciation for cooperation",
    note: "Appreciation for dedication and contribution to operational success.",
  },
  {
    src: "/achivements-images/H&M Certificate.pdf",
    type: "pdf",
    org: "Global Retail Brand",
    title: "Guarding service recognition",
    note: "Satisfactory guarding service support for the brand’s Bangladesh liaison office.",
  },
  {
    src: "/achivements-images/NEMC.pdf",
    type: "pdf",
    org: "Healthcare Institution",
    title: "Medical campus security recognition",
    note: "Recognised for well-trained, proficient and rapid response to security requirements.",
  },
  {
    src: "/achivements-images/Paxar Bangladesh (Avery Dennison).jpg",
    type: "image",
    org: "Multinational Manufacturing",
    title: "Manned security appreciation",
    note: "Well-trained, proficient and rapid security service support at an EPZ facility.",
  },
  {
    src: "/achivements-images/Plan Bangladeh.jpg",
    type: "image",
    org: "International Development Sector",
    title: "Training delivery record",
    note: "Delivered physical security, investigation and crisis management training.",
  },
  {
    src: "/achivements-images/8. Prothom alo.jpg",
    type: "image",
    org: "Media House",
    title: "Voluntary security survey",
    note: "Conducted a security survey and advised on a viable physical protection system.",
  },
  {
    src: "/achivements-images/1. Jamuna Future Park.jpg",
    type: "image",
    org: "Large Retail Complex",
    title: "Security development advisory",
    note: "Consulted on a security development programme for one of the region’s largest retail complexes.",
  },
  {
    src: "/achivements-images/New Doc 2018-12-26 11.33.15_6.jpg",
    type: "image",
    org: "Broadcast Media",
    title: "Security service recognition",
    note: "Acknowledged for qualified management and service delivery.",
  },
  {
    src: "/achivements-images/WO- Safety & Security 24.03.2026_page-0001.jpg",
    type: "image",
    org: "Banking Sector",
    title: "Safety & security consultancy work order",
    note: "Engaged to review physical security, access control, CCTV, fire detection and firefighting systems.",
  },
  {
    src: "/achivements-images/New Doc 2018-12-26 11.33.15_12.jpg",
    type: "image",
    org: "Telecom Sector",
    title: "Employee background screening engagement",
    note: "Forensic audit and background screening contract for a major telecom operator.",
  },
  {
    src: "/achivements-images/7. Palace resort.PDF",
    type: "pdf",
    org: "Hospitality Sector",
    title: "Security risk assessment & planning",
    note: "Prepared total physical security plan and counter-measures for a resort development.",
  },
  {
    src: "/achivements-images/Dhaka Stock Exchange.jpg",
    type: "image",
    org: "Capital Market Institution",
    title: "Security consultancy engagement",
    note: "Security consultancy support for the country’s primary stock exchange.",
  },
  {
    src: "/achivements-images/lafa.jpg",
    type: "image",
    org: "Cement & Construction Materials",
    title: "Security assessment & operational support",
    note: "Security assessment, survey and operational support for plant and city establishments.",
  },
];

const institutionMarquee = [
  "ASIS International",
  "Armed Forces Division",
  "CARE Bangladesh",
  "Bank Asia",
  "Grameenphone",
  "H&M Bangladesh",
  "Vivo Bangladesh",
  "Paxar Bangladesh",
  "North East Medical College",
  "Ekushey Television",
  "Prothom Alo",
  "Jamuna Future Park",
  "Plan International",
  "Dhaka Stock Exchange",
  "Lafarge Surma Cement",
  "Buildtrade Foils",
  "Green Planet Resort",
];

function DocumentCard({ item, idx }) {
  return (
    <div
      data-reveal-child
      className="group border border-surface-border bg-obsidian-deep/50 hover:border-cobalt-electric/40 transition-colors overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-surface-container-low overflow-hidden">
        {item.type === "pdf" ? (
          <>
            <object
              data={item.src}
              type="application/pdf"
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-obsidian-deep">
                <FileText className="w-8 h-8 text-cobalt-electric" strokeWidth={1.5} />
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-xs uppercase tracking-[0.15em] text-cobalt-electric hover:text-white transition-colors"
                >
                  View PDF
                </a>
              </div>
            </object>
          </>
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        )}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-obsidian-deep/90 border border-cobalt-electric/40 flex items-center justify-center">
          {item.type === "pdf" ? (
            <FileText className="w-4 h-4 text-cobalt-electric" strokeWidth={1.5} />
          ) : (
            <Award className="w-4 h-4 text-cobalt-electric" strokeWidth={1.5} />
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
          {item.org}
        </span>
        <h3 className="font-headline-md text-base text-on-surface mt-2 mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed mt-auto">
          {item.note}
        </p>
      </div>
    </div>
  );
}

export default function AchievementsPage() {
  useScrollReveal();
  const credRef = useStaggerReveal(100);
  const recogRef = useStaggerReveal(80);

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

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 36s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
          
        .shimmer-text {
          background: linear-gradient(90deg, #2563EB 0%, #d3e4fe 50%, #2563EB 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s infinite;
        }

        .shimmers-text {
          background: linear-gradient(90deg, #2563EB 0%, #d3e4fe 50%, #2563EB 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
        }
      `}</style>

      {/* HERO — no image, CSS-only background */}
      <main className="relative min-h-[88vh] overflow-hidden flex items-start md:items-center border-b border-surface-border">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-40" />
          <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-cobalt-electric/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-electric/60 to-transparent scan-line" />
        </div>

        <div className="relative z-10 w-full px-4 lg:px-12 pb-10 lg:pb-20 pt-36 lg:pt-48 border-b border-surface-border/30">
          <div className="max-w-auto w-full">
            <div className="flex items-center gap-3 mb-6 rise">
              <span className="h-px w-8 bg-cobalt-electric" />
              <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                Achievements &amp; Recognition
              </span>
            </div>
            <h1
              className="font-headline-xl text-2xl md:text-3xl lg:text-5xl text-white uppercase tracking-tight leading-[1.05] mb-4 lg:mb-6 rise shimmer-text"
              style={{ animationDelay: "0.1s" }}
            >
              A record that speaks
              
              before we do
            </h1>
            <p
              className="font-body-lg text-sm lg:text-xl text-on-surface-variant max-w-auto leading-relaxed rise"
              style={{ animationDelay: "0.2s" }}
            >
              Globally certified, institutionally recommended and trusted across Bangladesh&apos;s
              most demanding sectors — from leading private conglomerates and financial houses
              to national infrastructure and defence-level bodies.
              <span className="hidden lg:block">   Our portfolio spans the
              spectrum: Bashundhara, Jamuna, Grameenphone, H&amp;M, CARE Bangladesh, the Armed
              Forces Division and the National Telecommunication Monitoring Centre, among
              others. This page is the evidence. </span>
             
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 lg:mt-12 rise"
              style={{ animationDelay: "0.35s" }}
            >
              {keywordBoxes.map((s, i) => (
                <div
                  key={i}
                  className="border border-cobalt-electric/30 bg-obsidian-deep/60 backdrop-blur-sm p-2 lg:p-4 text-center "
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="font-mono-data text-base lg:text-2xl text-cobalt-electric font-bold shimmer-text">
                      {s.v}
                    </span>
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-widest">
                      {s.k}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* AWARDS & CRESTS */}
      <section className="bg-background border-b border-surface-border">
        <div className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* ASIS Recognition */}
            <div data-reveal>
              <div className="relative border border-surface-border overflow-hidden bg-obsidian-deep">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/hero-mobile11.png"
                    alt="Managing Director receiving recognition from ASIS International at the Asia-Pacific Conference 2025"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-5">
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                  ASIS International, Asia-Pacific 2025
                </span>
                <h3 className="font-headline-md text-lg md:text-xl text-on-surface mt-2 mb-3 leading-snug">
                  Our work moves in the light, so others may stand in it
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Recognised by the world&apos;s leading authority for security management
                  professionals — a quiet acknowledgement that the standards we carry into every
                  site survey, every post order and every training hour are felt beyond our own
                  walls. Where discipline meets discretion, reputation follows. We do not seek
                  the stage; the stage, it seems, finds us.
                </p>
              </div>
            </div>

            {/* Overseas Crest */}
            <div data-reveal>
              <div className="relative border border-surface-border overflow-hidden bg-obsidian-deep">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/hero-mobile13.jpg"
                    alt="Managing Director receiving a commemorative crest from an overseas delegation at SecurityLink headquarters"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-5">
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                  Beyond Borders
                </span>
                <h3 className="font-headline-md text-lg md:text-xl text-on-surface mt-2 mb-3 leading-snug">
                  Kuming Security Association, China
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  A crest received from Chinese Security professionals — a
                  gesture that says our standards are globally recognized. Trust, when earned this way, needs no translation. It simply arrives,
                  hand to hand, seal to seal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-obsidian-deep border-b border-surface-border">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 py-20 md:py-28">
          <div className="mb-14 max-w-2xl" data-reveal>
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Credentials
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Certifications on file
            </h2>
            <p className="font-body-md text-base text-on-surface-variant mt-5 leading-relaxed">
              Professional certifications held at the leadership level. They define the standard
              the rest of the organisation is trained to.
            </p>
          </div>

          <div ref={credRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {credentials.map((item, idx) => (
              <DocumentCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL RECOGNITION */}
      <section className="bg-background">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 py-20 md:py-28">
          <div className="mb-14 max-w-2xl" data-reveal>
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Institutional Recognition
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Letters, certificates & work orders
            </h2>
            <p className="font-body-md text-base text-on-surface-variant mt-5 leading-relaxed">
              A cross-section of documents from government bodies, multinationals, development
              organisations and local industry — kept on file and reproduced here.
            </p>
          </div>

          <div ref={recogRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recognitions.map((item, idx) => (
              <DocumentCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-obsidian-deep border-y border-surface-border py-10 md:py-14 overflow-hidden">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 mb-8">
          <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
            Institutions Represented in the File
          </span>
        </div>
        <div className="marquee-wrap relative">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...institutionMarquee, ...institutionMarquee].map((name, i) => (
              <span
                key={i}
                className="font-headline-md text-xl md:text-2xl font-bold text-on-surface-variant/70 whitespace-nowrap hover:text-cobalt-electric/80 transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="bg-background border-t border-surface-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <div data-reveal>
            <Medal className="w-8 h-8 text-cobalt-electric mx-auto mb-6" strokeWidth={1.5} />
            <p className="font-headline-md text-lg md:text-2xl text-on-surface leading-snug">
              The file is open. The standards speak for themselves.
            </p>
            <p className="font-body-md text-base text-on-surface-variant mt-5 leading-relaxed max-w-2xl mx-auto">
              We do not trade on seniority. We trade on documented capability, kept current and
              kept honest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
