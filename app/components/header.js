'use client';
export default function Header() {
  return (
    <nav className="fixed top-0 w-full h-20 bg-background z-50 border-b border-surface-border flex justify-between items-center px-12 md:px-[48px] mx-auto">
      <div className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">SECURITYLINK</div>
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-cobalt-electric font-bold border-b-2 border-cobalt-electric transition-colors" href="#">Home</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">About</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">Services</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">Gallery</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">Equipment</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">Achievement</a>
        <a className="text-on-surface-variant font-medium hover:text-cobalt-electric transition-colors" href="#">Contact</a>
      </div>
      <button className="bg-cobalt-electric text-white px-6 py-2 font-bold hover:opacity-80 transition-opacity rounded-none">Get a Consultation</button>
    </nav>
  );
}