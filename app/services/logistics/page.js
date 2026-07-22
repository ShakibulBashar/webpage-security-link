import PageClient from "./page-client";

export const metadata = {
  title: "Logistics & Facility Support Services",
  description: "Industrial, hospital and corporate cleaning services delivered by SecurityLink's trained logistics workforce in Bangladesh.",
  alternates: { canonical: "/services/logistics" },
  openGraph: {
    title: "Logistics & Facility Support Services",
    description: "Industrial, hospital and corporate cleaning services delivered by SecurityLink's trained logistics workforce in Bangladesh.",
    url: "/services/logistics",
  },
};

export default function Page() {
  return <PageClient />;
}