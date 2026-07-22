import PageClient from "./page-client";

export const metadata = {
  title: "Contact SecurityLink Ltd. | Request a Site Survey",
  description: "Get in touch with SecurityLink Ltd. in Dhaka for manned guarding, risk management, equipment and logistics services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SecurityLink Ltd. | Request a Site Survey",
    description: "Get in touch with SecurityLink Ltd. in Dhaka for manned guarding, risk management, equipment and logistics services.",
    url: "/contact",
  },
};

export default function Page() {
  return <PageClient />;
}