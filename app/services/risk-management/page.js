import PageClient from "./page-client";

export const metadata = {
  title: "Risk Management & Security Consultancy",
  description: "Threat surveys, security plan design, investigation and executive training from SecurityLink's Risk Advisory Division.",
  alternates: { canonical: "/services/risk-management" },
  openGraph: {
    title: "Risk Management & Security Consultancy",
    description: "Threat surveys, security plan design, investigation and executive training from SecurityLink's Risk Advisory Division.",
    url: "/services/risk-management",
  },
};

export default function Page() {
  return <PageClient />;
}