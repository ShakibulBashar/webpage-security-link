'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-surface-border px-12 md:px-[48px] py-24 border-x border-surface-border mx-auto max-w-[1920px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="space-y-6">
          <div className="font-headline-md text-headline-md font-bold text-on-surface">SECURITYLINK</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            The leading provider of industrial security and high-risk asset protection for global enterprises.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface font-semibold mb-6 uppercase">Locations</h4>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Uttara Model Town, Dhaka</a></li>
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Divisions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface font-semibold mb-6 uppercase">Corporate</h4>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Compliance</a></li>
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Career Protocol</a></li>
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Annual Report</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface font-semibold mb-6 uppercase">Legal</h4>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-cobalt-electric transition-colors" href="#">Service Level Agreement</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-body-sm text-body-sm text-on-surface-variant opacity-60">© 2024 SECURITYLINK. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-cobalt-electric transition-colors">public</span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-cobalt-electric transition-colors">security</span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-cobalt-electric transition-colors">verified_user</span>
        </div>
      </div>
    </footer>
  );
}