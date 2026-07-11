// Gallery — Coming Soon
export default function GalleryPage() {
  return (
    <>
      <style>{`
        @keyframes rise {
          from { transform: translateY(18px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .rise { animation: rise 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(37,99,235,0.15); }
          50% { box-shadow: 0 0 40px rgba(37,99,235,0.3); }
        }

        .rigid-grid {
          background-image:
            linear-gradient(to right, rgba(100,116,139,0.08) 1px, transparent 1px),
            linear-gradient(rgba(100,116,139,0.08) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <main className="relative min-h-[80vh] pt-20 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-background to-background" />
          <div className="absolute inset-0 rigid-grid opacity-30" />
          <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-cobalt-electric/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cobalt-electric/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-6 rise">
          <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.25em] block mb-6">
            Visual Archive
          </span>
          <h1 className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-on-surface uppercase tracking-tight mb-6">
            Gallery
          </h1>
          <div className="inline-block border border-cobalt-electric/30 bg-obsidian-deep/60 backdrop-blur-sm px-8 py-4 mt-4" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
            <span className="font-mono-data text-sm text-cobalt-electric uppercase tracking-[0.2em]">
              Coming Soon
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
