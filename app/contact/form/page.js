import PageClient from "./page-client";

export const metadata = {
  title: "Security Enquiry Form",
  description: "Tell us what needs securing — submit your requirements and SecurityLink Ltd. will prepare a tailored proposal within 1-2 business days.",
  alternates: { canonical: "/contact/form" },
  openGraph: {
    title: "Security Enquiry Form | SecurityLink Ltd.",
    description: "Tell us what needs securing — submit your requirements and SecurityLink Ltd. will prepare a tailored proposal within 1-2 business days.",
    url: "/contact/form",
  },
};

export default function Page() {
  return <PageClient />;
}