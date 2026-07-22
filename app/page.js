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
  return <PageClient />;
}