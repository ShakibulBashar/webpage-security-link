// Managing Director's Profile — career, credentials, certificates, engagements, timeline
"use client";
import { useRef, useEffect } from "react";
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

// Behind-the-scenes: hands-on expertise in the field
const fieldWork = [
  {
    src: "/md/md103.webp",
    alt: "Md. Nurul Mannan Choudhury examining and calibrating surveillance camera equipment at the office",
    caption: "Selecting the right lens for the job",
    label: "Technical",
  },
  {
    src: "/md/md101.webp",
    alt: "Md. Nurul Mannan Choudhury monitoring a multi-camera CCTV feed from the operations desk",
    caption: "Watching every angle, all at once",
    label: "Operations",
  },
  {
    src: "/md/md107.webp",
    alt: "Md. Nurul Mannan Choudhury briefing a room of uniformed SecurityLink guards during a training session",
    caption: "The briefing before the briefing",
    label: "Field Leadership",
  },
];

// Conferences, trade shows, and the global circuit
const globalEngagements = [
  {
    src: "/md/md105.webp",
    alt: "Md. Nurul Mannan Choudhury speaking at a podium during an international security conference",
    caption: "Taking the stage at GSX",
    label: "Keynote",
  },
  {
    src: "/md/md108.webp",
    alt: "Md. Nurul Mannan Choudhury addressing a First Aid Training session organized by Bangladesh Red Crescent Society for SecurityLink",
    caption: "When safety is the subject, not just the slogan",
    label: "Training",
  },
  {
    src: "/md/md106.webp",
    alt: "Md. Nurul Mannan Choudhury at a security technology trade show alongside global exhibitors",
    caption: "Scanning the horizon for what's next",
    label: "Trade Show",
  },
  {
    src: "/md/md104.webp",
    alt: "Md. Nurul Mannan Choudhury with fellow delegates at the Global Security Exchange conference",
    caption: "Where the industry gathers",
    label: "Networking",
  },
  {
    src: "/md/md102.webp",
    alt: "Md. Nurul Mannan Choudhury with international delegates at a cross-border security collaboration event",
    caption: "Conversations that cross borders",
    label: "International",
  },
];



export default function ManagingDirectorPage() {
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
      <style>
        {`
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
        `}
      </style>







      {/* HERO */}
      <main className="relative h-auto lg:h-screen pt-32  lg:pt-40 lg:pb-5  lg:pb- bg-background overflow-hidden lg:flex">
        {/* LEFT: Hero Image — full height on lg */}
        <div className="order-1 w-full lg:w-3/5 lg:h-full relative  lg:py-0">
          {/* Desktop frame */}
          <div className="hidden lg:block relative w-full h-full">
            {/* Outer border with glow */}
            <div className="absolute inset-0 border border-cobalt-electric/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]" />
            {/* Inner image container */}
            <div className="absolute inset-4 overflow-hidden">
              <Image
                src="/MD.webp"
                alt="Major (Retd.) Md. Nurul Mannan Choudhury, CPP, MBA (HRM), Managing Director of SecurityLink Ltd., seated at his office desk"
                fill
                priority
                className="object-cover"
              />
              
            </div>
            {/* Corner brackets — top-left */}
            <span className="absolute top-1 left-1 w-8 h-8 border-t-4 border-l-4 border-cobalt-electric" />
            <span className="absolute top-1 left-1 w-5 h-5 bg-cobalt-electric/20" />
            {/* Corner brackets — top-right */}
            <span className="absolute top-1 right-1 w-8 h-8 border-t-4 border-r-4 border-cobalt-electric" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-cobalt-electric/20" />
            {/* Corner brackets — bottom-left */}
            <span className="absolute bottom-1 left-1 w-8 h-8 border-b-4 border-l-4 border-cobalt-electric" />
            <span className="absolute bottom-1 left-1 w-5 h-5 bg-cobalt-electric/20" />
            {/* Corner brackets — bottom-right */}
            <span className="absolute bottom-1 right-1 w-10 h-10 border-b-4 border-r-4 border-cobalt-electric" />
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-cobalt-electric/20" />
            {/* Side accent lines */}
            <span className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-[1px] bg-cobalt-electric/50" />
            <span className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-[1px] bg-cobalt-electric/50" />
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-[1px] bg-cobalt-electric/50" />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-[1px] bg-cobalt-electric/50" />
          </div>
          {/* Mobile image */}
          <div className="lg:hidden relative max-w-sm mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden border border-cobalt-electric/30">
              <Image
                src="/MD.webp"
                alt="Major (Retd.) Md. Nurul Mannan Choudhury, CPP, MBA (HRM), Managing Director of SecurityLink Ltd., seated at his office desk"
                fill
                priority
                className="object-cover"
              />
              <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cobalt-electric" />
              <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cobalt-electric" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cobalt-electric" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cobalt-electric" />
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="order-2 w-full lg:w-2/5 lg:h-full relative flex flex-col justify-center py-12 lg:py-0 px-6 md:px-12 lg:px-12">
          {/* faint radial glow behind the text, kept subtle */}
          <div
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-[0.07] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-cobalt-electric) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-cobalt-electric" />
              <span className="font-mono-data text-sm  text-cobalt-electric uppercase tracking-[0.2em]">
                Managing Director
              </span>
            </div>
            <h1 className="font-headline-xl text-2xl lg:text-3xl text-on-surface uppercase tracking-tight leading-[1.1] mb-4 shimmers-text">
              Major (Retd.) Md. Nurul Mannan Choudhury
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {["CPP", "MBA (HRM)", "Major (Retd.), Bangladesh Army", "Chairman, ASIS International Bangladesh"].map(
                (badge, idx) => (
                  <span
                    key={idx}
                    className="font-label-caps text-xs font-semibold lg:text-sm uppercase tracking-[0.1em] text-cobalt-electric border border-cobalt-electric/40 px-3 py-1.5 font-headline-lg"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <p className="font-body-lg text-sm lg:text-base  text-on-surface-variant leading-relaxed max-w-2xl font-mono-data">
              Founder and Managing Director of SecurityLink Ltd., and formerly the founding
              Managing Director of Avant-garde Alliance Limited and a Director of Aegis Services
              Ltd., a sister concern of Square Group. He is a Board Certified Protection Professional (CPP) from ASIS International, USA, and has served as Chairman of ASIS International&apos;s Bangladesh chapter.  
            </p>
          </div>
        </div>
      </main>

      {/* BIO */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-auto mx-auto px-5 lg:px-12 py-12 lg:py-16">
          {/* Pull quote — centered at top */}
          <div className="max-w-2xl mx-auto mb-8 lg:mb-16 text-center">
            <div className="relative border border-cobalt-electric/30 bg-surface-container-low/30 p-4 lg:p-8 backdrop-blur-sm">
              {/* Corner brackets */}
              <span className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cobalt-electric" />
              <span className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cobalt-electric" />
              <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cobalt-electric" />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cobalt-electric" />
              <svg
                viewBox="0 0 48 36"
                className="w-10 h-10 text-cobalt-electric/25 mb-3"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 36V21.6C0 9.6 7.2 1.2 19.2 0l1.8 4.8C13.8 6.6 9.6 11.4 9.6 18h9.6v18H0zm27 0V21.6C27 9.6 34.2 1.2 46.2 0L48 4.8c-7.2 1.8-11.4 6.6-11.4 13.2h9.6v18H27z" />
              </svg>
              <p className="font-headline-md text-xl lg:text-2xl text-on-surface leading-snug shimmer-text">
                Only a satisfied employee can satisfy our client.
              </p>
              <span className="block mt-4 font-mono-data text-xs text-on-surface-variant uppercase tracking-[0.15em]">
                &mdash;  Md. Nurul Mannan Choudhury
              </span>
            </div>
          </div>

          {/* Bio content — centered */}
          <div className="max-w-auto mx-auto">
            <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mb-8 leading-tightn text-center shimmers-text">
              An unusual entry point into the security industry
            </h2>
            <div className="space-y-6 font-body-md text-sm md:text-lg text-on-surface-variant leading-relaxed">
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
        </div>
      </section>

      {/* TIMELINE — chain process flow */}
      <section ref={chainSectionRef} className="bg-background">
        <div className="max-w-auto mx-auto px-6 lg:px-18 py-12 md:py-28">
          <div className="mb-16 max-w-auto">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Career
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              From the army to the industry
            </h2>
          </div>

          {/* desktop chain */}
          <div className="hidden lg:block relative" data-chain-desktop>
            <div className="absolute top-[18px] left-0 right-0 h-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line rounded-full" />
              <div className="chain-signal h-[4px] rounded-full w-0" data-signal="h" />
            </div>
            <div className="grid grid-cols-5 gap-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative" data-step-wrap>
                  <div className="chain-circle w-10 h-10 rounded-full border-2 border-cobalt-electric/40 bg-background flex items-center justify-center mb-3 relative z-10">
                    <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                    {item.period}
                  </span>
                  <h3 className="font-headline-md text-lg text-on-surface mt-2 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* mobile chain */}
          <div className="lg:hidden relative pl-12">
            <div className="absolute left-[18px] top-0 bottom-0 w-[4px]" data-chain-line-wrap>
              <div className="absolute inset-0 chain-line-v rounded-full" />
              <div className="chain-signal w-[4px] rounded-full h-0" data-signal="v" />
            </div>
            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative" data-step-wrap>
                  <div className="chain-circle absolute -left-12 top-0 w-10 h-10 rounded-full border-2 border-cobalt-electric/40 bg-background flex items-center justify-center">
                    <span className="chain-num font-mono-data text-xs text-cobalt-electric font-bold transition-colors select-none">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="chain-label font-mono-data text-[11px] text-cobalt-electric uppercase tracking-[0.15em] inline-block">
                    {item.period}
                  </span>
                  <h3 className="font-headline-md text-lg text-on-surface mt-2 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIELD WORK — behind the scenes */}
      <section className="bg-obsidian-deep border-y border-surface-border">
        <div className="max-w-auto mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="mb-10 lg:mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              Behind the Work
            </span>
            <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Where the title meets the ground
            </h2>
            <p className="font-body-md text-sm lg:text-base text-on-surface-variant mt-5 leading-relaxed">
              The work doesn&apos;t happen behind a desk. It happens in the server room, on the
              camera floor, and across the training ground &mdash; wherever the standard has to hold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {fieldWork.map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/3] border border-cobalt-electric/20 overflow-hidden bg-surface-container-low">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* corner brackets */}
                  <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-electric/50" />
                  <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-electric/50" />
                  {/* label badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-obsidian-deep/80 border border-cobalt-electric/30 backdrop-blur-sm">
                    <span className="font-mono-data text-[9px] text-cobalt-electric uppercase tracking-[0.15em]">
                      {item.label}
                    </span>
                  </div>
                </div>
                <p className="font-mono-data text-xs text-on-surface-variant mt-4 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL ENGAGEMENTS — conferences & the circuit */}
      <section className="bg-background">
        <div className="max-w-auto mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="mb-10 lg:mb-16 max-w-2xl">
            <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
              On the Global Stage
            </span>
            <h2 className="font-headline-lg text-2xl lg:text-4xl text-on-surface uppercase tracking-tight mt-4 leading-tight">
              Conferences, collaborations &amp; the circuit
            </h2>
            <p className="font-body-md text-sm lg:text-base text-on-surface-variant mt-5 leading-relaxed">
              From the GSX floor in the United States to training halls in Dhaka &mdash;
              the work follows the standard wherever it needs to go.
            </p>
          </div>

          {/* 3-column first row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {globalEngagements.slice(0, 3).map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[3/4] border border-surface-border overflow-hidden bg-surface-container-low">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-electric/50" />
                  <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-electric/50" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-obsidian-deep/80 border border-cobalt-electric/30 backdrop-blur-sm">
                    <span className="font-mono-data text-[9px] text-cobalt-electric uppercase tracking-[0.15em]">
                      {item.label}
                    </span>
                  </div>
                </div>
                <p className="font-mono-data text-xs text-on-surface-variant mt-4 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>

          {/* 2-column second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {globalEngagements.slice(3, 5).map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[16/9] border border-surface-border overflow-hidden bg-surface-container-low">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cobalt-electric/50" />
                  <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cobalt-electric/50" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-obsidian-deep/80 border border-cobalt-electric/30 backdrop-blur-sm">
                    <span className="font-mono-data text-[9px] text-cobalt-electric uppercase tracking-[0.15em]">
                      {item.label}
                    </span>
                  </div>
                </div>
                <p className="font-mono-data text-xs text-on-surface-variant mt-4 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
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