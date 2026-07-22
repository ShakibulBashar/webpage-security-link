import PageClient from "./page-client";

export const metadata = {
  title: "About SecurityLink | Our Philosophy, Vision & Process",
  description: "How SecurityLink trains, documents and supervises its guard force — the Post Order process, our strengths and our approach to employee welfare.",
  alternates: { canonical: "/about/about-us" },
  openGraph: {
    title: "About SecurityLink | Our Philosophy, Vision & Process",
    description: "How SecurityLink trains, documents and supervises its guard force — the Post Order process, our strengths and our approach to employee welfare.",
    url: "/about/about-us",
  },
};

export default function Page() {
  return <PageClient />;
}