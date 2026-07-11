"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  // Click-outside now works correctly because overlay is INSIDE navRef
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "About Ourself", href: "/about/about-us" },
        { label: "Achievements & Recognition", href: "/about/achievements" },
        { label: "Managing Director's Profile", href: "/about/md" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Guard Division", href: "/services/guard" },
        { label: "Logistics Division", href: "/services/logistics" },
        { label: "Risk Management Division", href: "/services/risk-management" },
        { label: "Equipments Division", href: "/services/equipments" },
      ],
    },
    {
      label: "Selection ",
      
      dropdown: [
        { label: "Selection Procedure", href: "/s&t/selection" },
        { label: "Training Activities", href: "/s&t/training" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes blink {
          0% { transform: translateX(-100%) skewX(-15deg); }
          20% { transform: translateX(200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .shimmer-blink {
          animation: blink 2s ease-in-out infinite;
        }
      `}</style>

      {/* WRAPPER: nav bar + mobile overlay share this ref */}
      <div ref={navRef} className="fixed top-0 w-full z-50">
        <nav className="h-20 bg-background/85 backdrop-blur-xl border-b border-surface-border/40 flex justify-between items-center px-4 md:px-8 lg:px-4">
          {/* Brand */}
          <div className="flex items-center gap-2 h-full shrink-0 min-w-0">
            <div className="relative w-[52px] h-[42px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[60px] xl:w-[80px] xl:h-[65px] shrink-0">
              <Image
                src="/logo.png"
                alt="SECURITYLINK"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-headline-md text-[18px] md:text-[30px] xl:text-[32px] font-bold tracking-tight text-on-surface uppercase leading-none truncate">
                SECURITY<span className="text-cobalt-electric">LINK</span>
              </span>
              <span className="font-label-caps text-[10px] md:text-[12px]  text-on-surface-variant tracking-[0.2em] uppercase mt-1 opacity-60 truncate">
                If You&apos;re quality conscious
              </span>
            </div>
          </div>

          {/* Desktop Nav — md and up */}
          <div className="hidden md:flex items-center bg-surface-container-low/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-transparent [background-clip:padding-box] relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-cobalt-electric/40 before:via-surface-border before:to-cobalt-electric/40 before:-z-10">
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
                        relative px-3  py-2 text-[13px] lg:text-[15px] xl:text-[17px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1 cursor-default select-none
                        ${isActive
                          ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
                          : "text-on-surface-variant group-hover:text-white group-hover:bg-surface-container-high group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
                        }
                      `}
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                        expand_more
                      </span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      className={`
                        relative px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1
                        ${isActive
                          ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
                          : "text-on-surface-variant hover:text-white hover:bg-surface-container-high hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
                        }
                      `}
                    >
                      {link.label}
                    </a>
                  )}

                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`block px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors ${
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

          {/* Right Side: CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA — Get a Consultation */}
            <button
              onClick={() => window.open("https://wa.me/8801777740983", "_blank", "noopener,noreferrer")}
              className="
                hidden md:block relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2.5 font-bold text-xs xl:text-sm uppercase tracking-widest
                shadow-[0_0_20px_rgba(245,158,11,0.35),0_4px_0_0_#9a3412]
                hover:shadow-[0_0_30px_rgba(245,158,11,0.55),0_4px_0_0_#9a3412]
                hover:-translate-y-0.5
                active:shadow-[0_0_10px_rgba(245,158,11,0.2),0_0px_0_0_#9a3412]
                active:translate-y-[3px]
                transition-all duration-200 rounded-none
              "
            >
              <span className="relative z-10">Get a Consultation</span>
              <span className="absolute top-0 -left-full w-full h-full shimmer-blink bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            </button>

            {/* Mobile Hamburger — below md only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg bg-surface-container-high border border-surface-border hover:bg-surface-container-highest active:scale-95 transition-all duration-200 shrink-0"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay — INSIDE the wrapper ref */}
        <div
          className={`
            md:hidden bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-y-auto border-b border-surface-border/40
            ${mobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 visible" : "max-h-0 opacity-0 invisible pointer-events-none"}
          `}
        >
          <div className="flex flex-col p-4 gap-1 pb-8">
            {navLinks.map((link) => {
              const isActive = link.dropdown
                ? link.dropdown.some((item) => pathname.startsWith(item.href))
                : link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              const isDropdownOpen = mobileDropdown === link.label;

              return (
                <div key={link.label} className="flex flex-col">
                  {link.dropdown ? (
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`
                        flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)]
                        ${isActive || isDropdownOpen
                          ? "bg-[#1e3a5f] text-white"
                          : "text-on-surface-variant hover:bg-surface-container-high"
                        }
                      `}
                    >
                      {link.label}
                      <span
                        className={`material-symbols-outlined text-lg transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)]
                        ${isActive
                          ? "bg-[#1e3a5f] text-white"
                          : "text-on-surface-variant hover:bg-surface-container-high"
                        }
                      `}
                    >
                      {link.label}
                    </a>
                  )}

                  {link.dropdown && (
                    <div
                      className={`
                        flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300
                        ${isDropdownOpen ? "max-h-80 opacity-100 mt-1 mb-1" : "max-h-0 opacity-0"}
                      `}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileDropdown(null);
                          }}
                          className={`
                            px-4 py-2.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-colors
                            ${pathname.startsWith(item.href)
                              ? "text-cobalt-electric bg-surface-container-high"
                              : "text-on-surface-variant hover:text-cobalt-electric hover:bg-surface-container-high"
                            }
                          `}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-6 pt-6 border-t border-surface-border/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://wa.me/8801777740983", "_blank", "noopener,noreferrer");
                }}
                className="
                  w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-7 py-3.5 font-bold text-sm uppercase tracking-widest
                  shadow-[0_0_20px_rgba(245,158,11,0.35),0_4px_0_0_#9a3412]
                  active:shadow-[0_0_10px_rgba(245,158,11,0.2),0_0px_0_0_#9a3412]
                  active:translate-y-[3px]
                  transition-all duration-200 rounded-none
                "
              >
                <span className="relative z-10">Get a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}