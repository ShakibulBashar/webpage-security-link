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
      {/* Server-rendered LCP image — discoverable by browser before JS loads */}
      <img
        src="/hero9.webp"
        alt="SecurityLink hero"
        width="1920"
        height="1080"
        fetchPriority="high"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <PageClient />
    </>
  );
}