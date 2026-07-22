import PageClient from "./page-client";

export const metadata = {
  title: "Guard Selection Procedure",
  description: "How SecurityLink screens candidates — physical, medical, psychological and written assessments before a single guard is deployed.",
  alternates: { canonical: "/s&t/selection" },
  openGraph: {
    title: "Guard Selection Procedure",
    description: "How SecurityLink screens candidates — physical, medical, psychological and written assessments before a single guard is deployed.",
    url: "/s&t/selection",
  },
};

export default function Page() {
  return <PageClient />;
}