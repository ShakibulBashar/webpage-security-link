import Image from "next/image";
import PageClient from "./page-client";

export const metadata = {
  title: "SecurityLink Ltd. | Corporate Security & Risk Management in Dhaka",
  description: "Manned guarding, risk management, security equipment and logistics for corporate, industrial and institutional clients across Bangladesh.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SecurityLink Ltd. | Corporate Security & Risk Management in Dhaka",
    description: "Manned guarding, risk management, security equipment and logistics for corporate, industrial and institutional clients across Bangladesh.",
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      {/* Server-rendered LCP image — <Image priority> auto-adds a preload
          link in <head> so the browser starts downloading before parsing body */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <Image
          src="/hero9-mobile.webp"
          alt="SecurityLink hero"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
      </div>
      <PageClient />
    </>
  );
}