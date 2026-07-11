"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      href: "/services",
      dropdown: [
        { label: "Guard Division", href: "/services/guard" },
        { label: "Logistics Division", href: "/services/logistics" },
        { label: "Risk Management Division", href: "/services/risk-management" },
      ]
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Equipment", href: "/equipment" },
    { label: "Achievement", href: "/achievement" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes pedestal {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .logo-pedestal {
          animation: pedestal 12s linear infinite;
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

        @keyframes blink {
  0% { transform: translateX(-100%) skewX(-15deg); }
  20% { transform: translateX(200%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
.shimmer-blink {
  animation: blink 2s ease-in-out infinite;
}

      `}</style>

      <nav className="fixed top-0 w-full h-20 bg-background/85 backdrop-blur-xl z-50 border-b border-surface-border/40 flex justify-between items-center px-6 md:px-10 lg:px-12 mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3 h-full">
          <div className="relative w-[90px] h-[70px] shrink-0 [perspective:400px]">
            <div className="relative w-full h-full [transform-style:preserve-3d] logo-pedestal">
              {/* FRONT FACE */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <Image
                  src="/logo.png"
                  alt="SECURITYLINK"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                  priority
                />
              </div>
              {/* BACK FACE — rotated 180° so it faces outward when the parent spins around */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  src="/logo.png"
                  alt="SECURITYLINK"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-headline-md text-[24px] md:text-[28px] font-bold tracking-tight text-on-surface uppercase leading-none">
              SECURITY<span className="text-cobalt-electric">LINK</span>
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mt-1 opacity-60">
              If Your&apos;e quality conscious
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center bg-surface-container-low/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-transparent [background-clip:padding-box] relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-cobalt-electric/40 before:via-surface-border before:to-cobalt-electric/40 before:-z-10">
          {navLinks.map((link) => {
            const isActive = link.dropdown
              ? link.dropdown.some((item) => pathname.startsWith(item.href))
              : link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <span
                  className={`
                    relative px-4 py-2 text-[15px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1 cursor-default
                    ${isActive
                      ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
                      : "text-on-surface-variant group-hover:text-white group-hover:bg-surface-container-high group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
                    }
                  `}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </span>
              ) : (
                <a
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-[15px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1
                    ${isActive
                      ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
                      : "text-on-surface-variant hover:text-white hover:bg-surface-container-high hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
                    }
                  `}
                >
                  {link.label}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute left-0 mt-0 w-48 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-cobalt-electric bg-surface-container-high"
                          : "text-on-surface-variant hover:text-cobalt-electric hover:bg-surface-container-high"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
          })}
        </div>

        {/* CTA */}
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
          <span className="absolute top-0 -left-full w-full h-full shimmer-blink bg-gradient-to-r from-transparent via-white to-transparent skew-x-12" />
        </button>
      </nav>
    </>
  );
}
