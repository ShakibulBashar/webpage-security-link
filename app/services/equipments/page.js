import PageClient from "./page-client";

export const metadata = {
  title: "Security Equipment & Systems Integration",
  description: "CCTV, access control, fire detection and scanning systems specified, supplied and integrated by SecurityLink's Equipment Division.",
  alternates: { canonical: "/services/equipments" },
  openGraph: {
    title: "Security Equipment & Systems Integration",
    description: "CCTV, access control, fire detection and scanning systems specified, supplied and integrated by SecurityLink's Equipment Division.",
    url: "/services/equipments",
  },
};

export default function Page() {
  return <PageClient />;
}