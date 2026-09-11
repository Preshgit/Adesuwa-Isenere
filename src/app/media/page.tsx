import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MediaGrid } from "@/components/sections/media-grid";
import { JsonLd, getBreadcrumbSchema, getMediaSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Books, Courses & Relationship Resources | Adesuwa Isenérè",
  description:
    "Books, self-paced online courses, and podcast episodes by Adesuwa Isenérè. Practical resources on healing, choosing well, marriage preparation, and relationship wellness.",
  alternates: {
    canonical: `${siteConfig.url}/media`,
  },
  openGraph: {
    title: "Books, Courses & Relationship Resources | Adesuwa Isenérè",
    description:
      "Explore Before You Say Yes book, online relationship masterclasses, and podcast episodes to support your relationship journey.",
    url: `${siteConfig.url}/media`,
    siteName: siteConfig.practiceName,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/online-courses.jpg",
        width: 1200,
        height: 630,
        alt: `Media & Resources — Adesuwa Isenérè`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books, Courses & Relationship Resources | Adesuwa Isenérè",
    description:
      "Relationship books, masterclasses, and podcast conversations with Adesuwa Isenérè.",
    images: ["/images/online-courses.jpg"],
  },
};

export default function MediaPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Media & Resources", path: "/media" }]),
          getMediaSchema(),
        ]}
      />
      <PageHero
        eyebrow="Media & Resources"
        title="Books, courses & conversations"
        description="Author, Speaker, Podcast Host — resources to support your journey beyond the counseling room."
      />
      <MediaGrid />
    </>
  );
}
