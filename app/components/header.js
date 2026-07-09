'use client';
import Image from 'next/image';

export default function Header() {
  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Equipment', href: '#' },
    { label: 'Achievement', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <>
      <style>{`
        @keyframes pedestal {
          0%, 100% { transform: rotateY(-55deg); }
          50% { transform: rotateY(55deg); }
        }
        .logo-pedestal {
          animation: pedestal 6s ease-in-out infinite;
        }
        @keyframes squeeze {
          0% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
          20% { opacity: 0.6; }
          50% { transform: translateX(120%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
        }
        .shimmer-squeeze {
          animation: squeeze 2.5s ease-in-out infinite;
        }
      `}</style>

      <nav className="fixed top-0 w-full h-20 bg-background/85 backdrop-blur-xl z-50 border-b border-surface-border/40 flex justify-between items-center px-6 md:px-10 lg:px-12 mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3 h-full">
          <div className="relative w-[64px] h-[64px] shrink-0 [perspective:400px]">
            <div className="w-full h-full [transform-style:preserve-3d] logo-pedestal">
              <Image
                src="/logo.png"
                alt="SECURITYLINK"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-headline-md text-[24px] md:text-[28px] font-bold tracking-tight text-on-surface uppercase leading-none">
              SECURITY<span className="text-cobalt-electric">LINK</span>
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mt-1 opacity-60">
              Corporate Asset Protection
            </span>
          </div>
        </div>

        {/* Nav Links — Jakarta Sans + Clean Convex Active */}
        <div className="hidden lg:flex items-center bg-surface-container-low/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-transparent [background-clip:padding-box] relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-cobalt-electric/40 before:via-surface-border before:to-cobalt-electric/40 before:-z-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                relative px-4 py-2 text-[15px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)]
                ${link.active
                  ? 'bg-cobalt-electric text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_3px_0_0_#1e40af,0_4px_8px_rgba(37,99,235,0.35)] -translate-y-[1px]'
                  : 'text-on-surface-variant hover:text-white hover:bg-surface-container-high hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — Interactive Squeeze Pulse */}
        <button
          className="
            relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-7 py-2.5 font-bold text-sm uppercase tracking-widest
            shadow-[0_0_20px_rgba(245,158,11,0.35),0_4px_0_0_#9a3412]
            hover:shadow-[0_0_30px_rgba(245,158,11,0.55),0_4px_0_0_#9a3412]
            hover:-translate-y-0.5
            active:shadow-[0_0_10px_rgba(245,158,11,0.2),0_0px_0_0_#9a3412]
            active:translate-y-[3px]
            transition-all duration-200 rounded-none
          "
        >
          <span className="relative z-10">Get a Consultation</span>
          <span className="absolute inset-0 shimmer-squeeze bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </button>
      </nav>
    </>
  );
}