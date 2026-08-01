import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MediaGrid } from "@/components/sections/media-grid";

export const metadata: Metadata = {
  title: "Media & Resources",
  description:
    "Books, online courses, and podcast episodes from Adesuwa Isenérè — resources for singles and newly married couples.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media & Resources"
        title="Books, courses & conversations"
        description="Author, Speaker, Podcast Host — resources to support your journey beyond the counseling room."
      />
      <MediaGrid />
    </>
  );
}
