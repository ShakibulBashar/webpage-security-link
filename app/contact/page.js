// Contact — clean, scannable contact information
export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-16">
          <span className="font-mono-data text-xs text-cobalt-electric uppercase tracking-[0.2em]">
            Get in Touch
          </span>
          <h1 className="font-headline-xl text-4xl md:text-6xl text-on-surface uppercase tracking-tight mt-4 mb-5">
            Contact
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Reach SecurityLink by phone, email, or visit either office.
          </p>
        </header>

        {/* Primary contact — call / email */}
        <section className="mb-16">
          <h2 className="font-label-caps text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6">
            Direct Lines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+8809611223300"
              className="group block border border-surface-border hover:border-cobalt-electric bg-surface-container-low/30 p-6 transition-all duration-300"
            >
              <span className="font-body-sm text-sm text-on-surface-variant block mb-2">Telephone</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors">
                +8809611-223300
              </span>
            </a>

            <a
              href="mailto:info@securitylink-bd.com"
              className="group block border border-surface-border hover:border-cobalt-electric bg-surface-container-low/30 p-6 transition-all duration-300"
            >
              <span className="font-body-sm text-sm text-on-surface-variant block mb-2">Email</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors break-all">
                info@securitylink-bd.com
              </span>
            </a>

            <a
              href="https://www.securitylink-bd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-surface-border hover:border-cobalt-electric bg-surface-container-low/30 p-6 transition-all duration-300"
            >
              <span className="font-body-sm text-sm text-on-surface-variant block mb-2">Website</span>
              <span className="font-headline-md text-xl text-on-surface group-hover:text-cobalt-electric transition-colors break-all">
                securitylink-bd.com
              </span>
            </a>
          </div>

          {/* Mobile numbers */}
          <div className="mt-6 border border-surface-border bg-surface-container-low/30 p-6">
            <span className="font-body-sm text-sm text-on-surface-variant block mb-4">Mobile</span>
            <div className="flex flex-wrap gap-4">
              {["+8801777740993", "+8801777740984", "+8801777740897"].map((num) => (
                <a
                  key={num}
                  href={`tel:${num.replace(/\D/g, "")}`}
                  className="font-headline-md text-lg text-on-surface hover:text-cobalt-electric transition-colors"
                >
                  {num}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Addresses */}
        <section className="mb-16">
          <h2 className="font-label-caps text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6">
            Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-surface-border bg-surface-container-low/30 p-6">
              <h3 className="font-headline-md text-lg text-on-surface mb-3">Head Office</h3>
              <address className="font-body-md text-on-surface-variant not-italic leading-relaxed">
                227 Grand Plaza (3rd Floor)
                <br />
                Room # 321, Moghbazar
                <br />
                Dhaka, Bangladesh
              </address>
            </div>

            <div className="border border-surface-border bg-surface-container-low/30 p-6">
              <h3 className="font-headline-md text-lg text-on-surface mb-3">Corporate Office</h3>
              <address className="font-body-md text-on-surface-variant not-italic leading-relaxed">
                House # 952, Road # 01
                <br />
                Ward # 05, Dia Bari, Uttara
                <br />
                Dhaka-1230, Bangladesh
              </address>
            </div>
          </div>
        </section>

        {/* Secondary info */}
        <section>
          <h2 className="font-label-caps text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6">
            Company Information
          </h2>
          <div className="border border-surface-border bg-surface-container-low/30 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline-md text-lg text-on-surface mb-4">
                  Managing Director
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4">
                  Major (Retd.) Md. Nurul Moman Choudhury, CPP
                </p>
                <a
                  href="mailto:mdmcsbd@gmail.com"
                  className="font-body-md text-on-surface hover:text-cobalt-electric transition-colors break-all"
                >
                  mdmcsbd@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-headline-md text-lg text-on-surface mb-4">Legal Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-body-sm text-sm text-on-surface-variant">Incorporation</dt>
                    <dd className="font-mono-data text-sm text-on-surface">C-110972/13</dd>
                  </div>
                  <div>
                    <dt className="font-body-sm text-sm text-on-surface-variant">Trade License</dt>
                    <dd className="font-mono-data text-sm text-on-surface">Dhaka City Corporation 0340619</dd>
                  </div>
                  <div>
                    <dt className="font-body-sm text-sm text-on-surface-variant">Banker</dt>
                    <dd className="font-body-md text-on-surface">Bank Asia, Dhanmondi Branch</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
