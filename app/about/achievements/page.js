import PageClient from "./page-client";

export const metadata = {
  title: "Achievements & Recognition",
  description: "An ASIS International award, institutional partnerships and the client organisations SecurityLink has worked with across telecom, healthcare, media and government.",
  alternates: { canonical: "/about/achievements" },
  openGraph: {
    title: "Achievements & Recognition",
    description: "An ASIS International award, institutional partnerships and the client organisations SecurityLink has worked with across telecom, healthcare, media and government.",
    url: "/about/achievements",
  },
};

export default function Page() {
  return <PageClient />;
}