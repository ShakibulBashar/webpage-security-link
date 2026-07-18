"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isXlUp, setIsXlUp] = useState(false);
  const [is2xl, setIs2xl] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsXlUp(w >= 1280);
      setIs2xl(w >= 1536);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const isAboutActive = () => {
    if (isXlUp && !is2xl && pathname.startsWith("/gallery")) return true;
    return pathname.startsWith("/about");
  };

  const linkClass = (active) => `
    relative px-3 py-2 text-[13px] lg:text-[15px] xl:text-[17px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1
    ${
      active
        ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
        : "text-on-surface-variant hover:text-white hover:bg-surface-container-high hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
    }
  `;

  const dropdownParentClass = (active) => `
    relative px-3 py-2 text-[13px] lg:text-[15px] xl:text-[17px] font-bold tracking-wide uppercase transition-all duration-300 rounded-full font-[family-name:var(--font-jakarta)] flex items-center gap-1 cursor-default select-none
    ${
      active
        ? "bg-[#1e3a5f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_0_0_#0f172a] -translate-y-[1px]"
        : "text-on-surface-variant group-hover:text-white group-hover:bg-surface-container-high group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
    }
  `;

  const dropdownItemClass = (itemHref) => `
    block px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors
    ${
      pathname.startsWith(itemHref)
        ? "text-cobalt-electric bg-surface-container-high"
        : "text-on-surface-variant hover:text-cobalt-electric hover:bg-surface-container-high"
    }
  `;

  const mobileLinkClass = (active) => `
    px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)]
    ${active ? "bg-[#1e3a5f] text-white" : "text-on-surface-variant hover:bg-surface-container-high"}
  `;

  const mobileDropdownItemClass = (itemHref) => `
    px-4 py-2.5 text-xs font-bold uppercase tracking-wide rounded-lg transition-colors
    ${
      pathname.startsWith(itemHref)
        ? "text-cobalt-electric bg-surface-container-high"
        : "text-on-surface-variant hover:text-cobalt-electric hover:bg-surface-container-high"
    }
  `;

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

      <div ref={navRef} className="fixed top-0 w-full z-50">
        <nav className="min-h-20 h-auto py-1 bg-background/85 backdrop-blur-xl border-b border-surface-border/40 flex justify-between items-center px-4 md:px-8 lg:px-4">
          {/* Brand */}
          <div className="flex items-center gap-2 h-full shrink-0 min-w-0">
            <div className="relative w-[80px] h-[70px] md:w-[100px] md:h-[70px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[75px] shrink-0">
              <Image
                src="/logo.png"
                alt="SECURITYLINK"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-headline-md text-[22px] md:text-[30px] xl:text-[32px] font-bold tracking-tight text-on-surface uppercase leading-none truncate">
                SECURITY<span className="text-cobalt-electric">LINK</span>
              </span>
              <span className="font-label-caps text-[7px] md:text-[12px] text-on-surface-variant tracking-[0.2em] uppercase mt-1 opacity-60 truncate">
                If You&apos;re quality conscious
              </span>
            </div>
          </div>

          {/* ========== DESKTOP NAV ========== */}

          {/* lg: explicit 2-line layout (no flex-wrap) */}
          <div className="hidden lg:flex xl:hidden flex-col items-center gap-1 bg-surface-container-low/50 backdrop-blur-md rounded-2xl px-3 py-2 border border-transparent [background-clip:padding-box] relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-cobalt-electric/40 before:via-surface-border before:to-cobalt-electric/40 before:-z-10 w-fit">
            {/* Row 1 */}
            <div className="flex items-center gap-1">
              <Link href="/" className={linkClass(pathname === "/")}>
                Home
              </Link>

              <div className="relative group">
                <span className={dropdownParentClass(isAboutActive())}>
                  About
                  <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </span>
                <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                  <a href="/about/about-us" className={dropdownItemClass("/about/about-us")}>
                    About Ourself
                  </a>
                  <a href="/about/achievements" className={dropdownItemClass("/about/achievements")}>
                    Achievements & Recognition
                  </a>
                  <a href="/about/md" className={dropdownItemClass("/about/md")}>
                    Managing Director&apos;s Profile
                  </a>
                </div>
              </div>
              <div className="relative group">
                <span
                  className={dropdownParentClass(
                    [
                      "/services/guard",
                      "/services/logistics",
                      "/services/risk-management",
                      "/services/equipments",
                    ].some((p) => pathname.startsWith(p)),
                  )}
                >
                  Services
                  <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </span>
                <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                  <a href="/services/guard" className={dropdownItemClass("/services/guard")}>
                    Manned Guarding Division
                  </a>
                  <a href="/services/logistics" className={dropdownItemClass("/services/logistics")}>
                    Logistics Services
                  </a>
                  <a
                    href="/services/risk-management"
                    className={dropdownItemClass("/services/risk-management")}
                  >
                    Risk Advisory
                  </a>
                  <a href="/services/equipments" className={dropdownItemClass("/services/equipments")}>
                    Security Technology
                  </a>
                </div>
              </div>

              
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-1">
              <a href="/gallery" className={linkClass(pathname.startsWith("/gallery"))}>
                Gallery
              </a>


              

              <div className="relative group">
                <span
                  className={dropdownParentClass(
                    ["/s&t/selection", "/s&t/training"].some((p) => pathname.startsWith(p)),
                  )}
                >
                  Recruitment
                  <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                    expand_more
                  </span>
                </span>

                <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                  <a href="/s&t/selection" className={dropdownItemClass("/s&t/selection")}>
                    Selection Procedure
                  </a>
                  <a href="/s&t/training" className={dropdownItemClass("/s&t/training")}>
                    Training Activities
                  </a>
                </div>
              </div>

              <a href="/contact" className={linkClass(pathname.startsWith("/contact"))}>
                Contact
              </a>
            </div>
          </div>

          {/* xl+: single line */}
          <div className="hidden xl:flex items-center gap-1 bg-surface-container-low/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-transparent [background-clip:padding-box] relative before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-cobalt-electric/40 before:via-surface-border before:to-cobalt-electric/40 before:-z-10">
            <Link href="/" className={linkClass(pathname === "/")}>
              Home
            </Link>

            <div className="relative group">
              <span className={dropdownParentClass(isAboutActive())}>
                About
                <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                  expand_more
                </span>
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                <a href="/about/about-us" className={dropdownItemClass("/about/about-us")}>
                  About Ourself
                </a>
                <a href="/about/achievements" className={dropdownItemClass("/about/achievements")}>
                  Achievements & Recognition
                </a>
                <a href="/about/md" className={dropdownItemClass("/about/md")}>
                  Managing Director&apos;s Profile
                </a>
                {/* Gallery inside About dropdown — xl only (not 2xl) */}
                {!is2xl && (
                  <a href="/gallery" className={dropdownItemClass("/gallery")}>
                    Gallery
                  </a>
                )}
              </div>
            </div>

            <div className="relative group">
              <span
                className={dropdownParentClass(
                  [
                    "/services/guard",
                    "/services/logistics",
                    "/services/risk-management",
                    "/services/equipments",
                  ].some((p) => pathname.startsWith(p)),
                )}
              >
                Services
                <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                  expand_more
                </span>
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                <a href="/services/guard" className={dropdownItemClass("/services/guard")}>
                  Manned Guarding Division
                </a>
                <a href="/services/logistics" className={dropdownItemClass("/services/logistics")}>
                  Logistics Services
                </a>
                <a
                  href="/services/risk-management"
                  className={dropdownItemClass("/services/risk-management")}
                >
                  Risk Advisory
                </a>
                <a href="/services/equipments" className={dropdownItemClass("/services/equipments")}>
                  Security Technology
                </a>
              </div>
            </div>

            <div className="relative group">
              <span
                className={dropdownParentClass(
                  ["/s&t/selection", "/s&t/training"].some((p) => pathname.startsWith(p)),
                )}
              >
                Recruitment
                <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">
                  expand_more
                </span>
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-surface-container-low border border-surface-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 -translate-y-1 group-hover:translate-y-0">
                <a href="/s&t/selection" className={dropdownItemClass("/s&t/selection")}>
                  Selection Procedure
                </a>
                <a href="/s&t/training" className={dropdownItemClass("/s&t/training")}>
                  Training Activities
                </a>
              </div>
            </div>

            <a href="/contact" className={linkClass(pathname.startsWith("/contact"))}>
              Contact
            </a>

            {/* Gallery top-level — 2xl only */}
            {is2xl && (
              <a href="/gallery" className={linkClass(pathname.startsWith("/gallery"))}>
                Gallery
              </a>
            )}
          </div>

          {/* ========== RIGHT SIDE ========== */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => window.open("https://wa.me/8801777740983", "_blank", "noopener,noreferrer")}
              className="hidden lg:block relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2.5 font-bold text-xs xl:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.35),0_4px_0_0_#9a3412] hover:shadow-[0_0_30px_rgba(245,158,11,0.55),0_4px_0_0_#9a3412] hover:-translate-y-0.5 active:shadow-[0_0_10px_rgba(245,158,11,0.2),0_0px_0_0_#9a3412] active:translate-y-[3px] transition-all duration-200 rounded-none"
            >
              <span className="relative z-10">Get a Consultation</span>
              <span className="absolute top-0 -left-full w-full h-full shimmer-blink bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            </button>

            {/* Hamburger — sm & md only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg bg-surface-container-high border border-surface-border hover:bg-surface-container-highest active:scale-95 transition-all duration-200 shrink-0"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* ========== MOBILE MENU — sm & md only ========== */}
        <div
          className={`lg:hidden bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-y-auto border-b border-surface-border/40 ${mobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 visible" : "max-h-0 opacity-0 invisible pointer-events-none"}`}
        >
          <div className="flex flex-col p-4 gap-1 pb-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass(pathname === "/")}
            >
              Home
            </Link>

            <div className="flex flex-col">
              <button
                onClick={() => toggleMobileDropdown("About")}
                className={`flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)] ${isAboutActive() || mobileDropdown === "About" ? "bg-[#1e3a5f] text-white" : "text-on-surface-variant hover:bg-surface-container-high"}`}
              >
                About
                <span
                  className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileDropdown === "About" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${mobileDropdown === "About" ? "max-h-80 opacity-100 mt-1 mb-1" : "max-h-0 opacity-0"}`}
              >
                <a
                  href="/about/about-us"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/about/about-us")}
                >
                  About Ourself
                </a>
                <a
                  href="/about/achievements"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/about/achievements")}
                >
                  Achievements & Recognition
                </a>
                <a
                  href="/about/md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/about/md")}
                >
                  Managing Director&apos;s Profile
                </a>
              </div>
            </div>

            <a
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass(pathname.startsWith("/gallery"))}
            >
              Gallery
            </a>

            <div className="flex flex-col">
              <button
                onClick={() => toggleMobileDropdown("Services")}
                className={`flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)] ${["/services/guard", "/services/logistics", "/services/risk-management", "/services/equipments"].some((p) => pathname.startsWith(p)) || mobileDropdown === "Services" ? "bg-[#1e3a5f] text-white" : "text-on-surface-variant hover:bg-surface-container-high"}`}
              >
                Services
                <span
                  className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileDropdown === "Services" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${mobileDropdown === "Services" ? "max-h-80 opacity-100 mt-1 mb-1" : "max-h-0 opacity-0"}`}
              >
                <a
                  href="/services/guard"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/services/guard")}
                >
                  Manned Guarding Division
                </a>
                <a
                  href="/services/logistics"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/services/logistics")}
                >
                  Logistics Services
                </a>
                <a
                  href="/services/risk-management"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/services/risk-management")}
                >
                  Risk Advisory
                </a>
                <a
                  href="/services/equipments"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/services/equipments")}
                >
                  Security Technology
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <button
                onClick={() => toggleMobileDropdown("Recruitment")}
                className={`flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-xl font-[family-name:var(--font-jakarta)] ${["/s&t/selection", "/s&t/training"].some((p) => pathname.startsWith(p)) || mobileDropdown === "Recruitment" ? "bg-[#1e3a5f] text-white" : "text-on-surface-variant hover:bg-surface-container-high"}`}
              >
                Recruitment
                <span
                  className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileDropdown === "Recruitment" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ${mobileDropdown === "Recruitment" ? "max-h-80 opacity-100 mt-1 mb-1" : "max-h-0 opacity-0"}`}
              >
                <a
                  href="/s&t/selection"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/s&t/selection")}
                >
                  Selection Procedure
                </a>
                <a
                  href="/s&t/training"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdown(null);
                  }}
                  className={mobileDropdownItemClass("/s&t/training")}
                >
                  Training Activities
                </a>
              </div>
            </div>

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass(pathname.startsWith("/contact"))}
            >
              Contact
            </a>

            <div className="mt-6 pt-6 border-t border-surface-border/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://wa.me/8801777740983", "_blank", "noopener,noreferrer");
                }}
                className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white px-7 py-3.5 font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.35),0_4px_0_0_#9a3412] active:shadow-[0_0_10px_rgba(245,158,11,0.2),0_0px_0_0_#9a3412] active:translate-y-[3px] transition-all duration-200 rounded-none"
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
