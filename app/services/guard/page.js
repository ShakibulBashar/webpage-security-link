import PageClient from "./page-client";

export const metadata = {
  title: "Manned Guarding Services in Dhaka",
  description: "Physical security guards for offices, corporate campuses and industrial premises, event coverage and dedicated guard training from SecurityLink Ltd.",
  alternates: { canonical: "/services/guard" },
  openGraph: {
    title: "Manned Guarding Services in Dhaka",
    description: "Physical security guards for offices, corporate campuses and industrial premises, event coverage and dedicated guard training from SecurityLink Ltd.",
    url: "/services/guard",
  },
};

export default function Page() {
  return <PageClient />;
}