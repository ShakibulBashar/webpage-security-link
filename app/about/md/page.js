// Managing Director's Profile — career, credentials, certificates, engagements, timeline
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const timeline = [
  {
    period: "Army Career",
    title: "Infantry Officer, Bangladesh Army",
    desc: "Served as company commander and staff officer across various headquarters and regiments, and as an instructor in different military institutions.",
  },
  {
    period: "Square Group",
    title: "Director, Aegis Services Ltd.",
    desc: "Led guard training and operations at Aegis Services, a sister concern of Square Group, reviewing passing-out parades and addressing supervisor teams directly.",
  },
  {
    period: "Founder, MD",
    title: "Avant-garde Alliance Limited",
    desc: "Founded and led Avant-garde Alliance, training and managing its guard force while continuing to speak at industry security workshops.",
  },
  {
    period: "Board Certified",
    title: "Certified Protection Professional",
    desc: "Achieved Board Certification in security management from ASIS International, USA, and later became Chairman of ASIS International's Bangladesh chapter.",
  },
  {
    period: "Present",
    title: "Founder & Managing Director, SecurityLink Ltd.",
    desc: "Built SecurityLink around an employee-oriented management model, believing a justly treated guard force is what makes a security company defensible in the field.",
  },
];

// Certificates and citations held by the MD. These photos have not been
// uploaded to the repo yet — swap `src` for the real file once available and
// tighten the caption with the issuing body's exact name if it differs.
const certificates = [
  {
    src: "/md-cert-cpp.jpg",
    alt: "Certified Protection Professional board certification, issued by ASIS International, USA, awarded to Md. Nurul Mannan Choudhury",
    org: "ASIS International, USA",
    title: "Certified Protection Professional (CPP)",
  },
  {
    src: "/md-cert-ntmc.jpg",
    alt: "Recognition certificate from the National Telecommunication Monitoring Centre for security system design and integration",
    org: "National Telecommunication Monitoring Centre",
    title: "Recognition for Security System Integration",
  },
  {
    src: "/md-cert-other.jpg",
    alt: "Certificate of recognition awarded to Md. Nurul Mannan Choudhury by a Bangladeshi professional or industry body — replace with the specific certificate and confirm the issuing organisation",
    org: "Add issuing organisation",
    title: "Professional Recognition Certificate",
  },
];

// Field and event photography not yet uploaded — filenames are suggestions,
// alt text describes exactly what should go in each slot.
const engagements = [
  {
    src: "/md-international-conference.jpg",
    alt: "Major Nurul Mannan Choudhury attending an international security industry conference abroad, standing with fellow delegates",
    caption: "Representing SecurityLink at an international security conference",
  },
  {
    src: "/md-lecture-seminar.jpg",
    alt: "Major Nurul Mannan Choudhury delivering a lecture or workshop session on security management to an audience",
    caption: "Delivering a security management lecture",
  },
  {
    src: "/md-site-survey.jpg",
    alt: "Major Nurul Mannan Choudhury conducting a field survey at a client site, speaking with SecurityLink staff on the ground",
    caption: "Conducting a field survey with the team on-site",
  },
];

export default function ManagingDirectorPage() {
  return (
    <>
      {/* HERO */}
      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden">
        {/* faint radial glow behind the portrait, kept subtle */}
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--color-cobalt-electric) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative max-w-sm">
                {/* offset panel behind the portrait */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-cobalt-electric/40" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/MD.jpg"
                    alt="Major (Retd.) Md. Nurul Mannan Choudhury, CPP, MBA (HRM), Managing Director of SecurityLink Ltd., seated at his office desk"
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* viewfinder corner brackets */}
                  <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cobalt-electric" />
                  <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cobalt-electric" />
                  <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cobalt-electric" />
                  <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cobalt-electric" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-cobalt-electric" />
                <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
                  Managing Director
                </span>
              </div>
              <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface uppercase tracking-tight leading-[1.1] mb-6">
                Major (Retd.) Md. Nurul Mannan Choudhury
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {["CPP", "MBA (HRM)", "Major (Retd.), Bangladesh Army", "Chairman, ASIS International Bangladesh"].map(
                  (badge, idx) => (
                    <span
                      key={idx}
                      className="font-label-caps text-xs uppercase tracking-[0.1em] text-cobalt-electric border border-cobalt-electric/40 px-3 py-1.5"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                Founder and Managing Director of SecurityLink Ltd., and formerly the founding
                Managing Director of Avant-garde Alliance Limited and a Director of Aegis Services
                Ltd., a sister concern of Square Group.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* BIO */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface uppercase tracking-tight mb-8 leading-tight">
                An unusual entry point into the security industry
              </h2>
              <div className="space-y-6 font-body-md text-base md:text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Mr. Choudhury observed early on that most security companies in Bangladesh run on
                  a purely financial model, with little regard for the people carrying out the work.
                  Though the industry operates on thin margins, he made a deliberate decision to
                  build differently &mdash; out of an attachment to the low-salaried members of the
                  security workforce he had come to know over years in the field.
                </p>
                <p>
                  He applied that thinking first at Avant-garde and at Aegis, and found that a
                  management system built on fairness could produce a quality organisation in a
                  short span of time. That same philosophy now runs through SecurityLink.
                </p>
                <p>
                  Beyond the company, he has conducted security workshops for organisations
                  including Prothom Alo and ISSIT Ltd., served as a guest speaker for Future
                  Leaders, and worked as a security consultant for clients such as KAFCO, Palace
                  Resort and ISSIT. As an army instructor, he has also trained civil service and
                  Bangladesh Police officers. He takes a keen interest in literary writing; his
                  first book was published in 2005.
                </p>
              </div>
            </div>

            {/* pull quote with hand-drawn mark */}
            <div className="lg:col-span-5">
              <div className="relative border-l-4 border-cobalt-electric pl-8 py-2">
                <svg
                  viewBox="0 0 48 36"
                  className="absolute -top-2 left-6 w-10 h-10 text-cobalt-electric/25"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 36V21.6C0 9.6 7.2 1.2 19.2 0l1.8 4.8C13.8 6.6 9.6 11.4 9.6 18h9.6v18H0zm27 0V21.6C27 9.6 34.2 1.2 46.2 0L48 4.8c-7.2 1.8-11.4 6.6-11.4 13.2h9.6v18H27z" />
                </svg>
                <p className="font-headline-md text-xl md:text-2xl text-on-surface leading-snug relative">
                  Only a satisfied employee can satisfy our client.
                </p>
                <span className="block mt-4 font-mono-data text-xs text-on-surface-variant uppercase tracking-[0.15em]">
                  &mdash; Md. Nurul Mannan Choudhury
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              On the Record
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Credentials &amp; certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/3] border border-surface-border overflow-hidden mb-5 bg-surface-container-low">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* seal badge overlay */}
                  <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-obsidian-deep/90 border border-cobalt-electric flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-cobalt-electric" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="9" r="6" />
                      <path d="M9 14.5 7 22l5-2.5L17 22l-2-7.5" strokeLinejoin="round" />
                      <path d="M9.5 9.5 11 11l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
                  {cert.org}
                </span>
                <h3 className="font-headline-md text-base text-on-surface mt-2 leading-snug">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS GALLERY */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              On the Circuit
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Conferences, lectures &amp; the field
            </h2>
            <p className="font-body-md text-base text-on-surface-variant mt-5 leading-relaxed">
              He splits his time between the boardroom, the lecture hall and the client&apos;s own
              premises &mdash; the survey work stays personal, even now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((eng, idx) => (
              <div key={idx} className="relative">
                <div className="relative aspect-[3/4] border border-surface-border overflow-hidden">
                  <Image src={eng.src} alt={eng.alt} fill className="object-cover" />
                  <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-electric" />
                  <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-electric" />
                </div>
                <p className="font-body-sm text-sm text-on-surface-variant mt-4 leading-relaxed">
                  {eng.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Career
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              From the army to the industry
            </h2>
          </div>

          <div className="relative pl-10 md:pl-14">
            <div className="absolute top-2 bottom-2 left-[15px] md:left-[19px] w-[2px] bg-[repeating-linear-gradient(to_bottom,rgba(37,99,235,0.45)_0,rgba(37,99,235,0.45)_6px,transparent_6px,transparent_14px)]" />
            <div className="space-y-14">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-10 md:-left-14 top-0 w-8 h-8 rounded-full border-2 border-cobalt-electric bg-background flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cobalt-electric" />
                  </div>
                  <span className="font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em]">
                    {item.period}
                  </span>
                  <h3 className="font-headline-md text-xl text-on-surface mt-2 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-base text-on-surface-variant leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-deep border-t border-surface-border py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mb-6">
            Speak with our leadership directly
          </h2>
          <p className="font-body-md text-base md:text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            For larger contracts and risk consultancy, our Managing Director is directly involved
            from the first site visit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}