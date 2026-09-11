import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { PricingCard } from "@/components/shared/pricing-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { BookingEmbed } from "@/components/sections/booking-embed";
import {
  JsonLd,
  getBreadcrumbSchema,
  getServicesSchema,
  getFaqSchema,
} from "@/components/seo/json-ld";
import { services } from "@/content/services";
import { pricingTiers } from "@/content/pricing";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Relationship & Marriage Counseling Services | Lagos & Online Nigeria",
  description:
    "Professional relationship counseling, pre-marital therapy, family systems, and emotional healing packages with Adesuwa Isenérè in Lagos & online across Nigeria.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Relationship & Marriage Counseling Services | Merry Hearts Counselling",
    description:
      "Individual, pre-marital, couples and family counseling, plus specialized emotional healing packages. In-person in Lagos and virtual worldwide.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.practiceName,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/adesuwa-hero.jpg",
        width: 1200,
        height: 630,
        alt: `Counseling Services — ${siteConfig.practiceName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship & Marriage Counseling Services | Merry Hearts Counselling",
    description:
      "Individual, couples, pre-marital and family counseling in Lagos and virtual worldwide.",
    images: ["/images/adesuwa-hero.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Services", path: "/services" }]),
          getServicesSchema(),
          getFaqSchema(),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Counseling & Trainings"
        description={`Offered through ${siteConfig.practiceName} — support for wherever you are in your relationship journey.`}
      />

      <Section>
        <SectionHeading
          eyebrow="Merry Hearts Counselling"
          title="How we can work together"
          description="Every service is rooted in compassion, confidentiality, and clinical excellence — practical support for singles, couples, and families."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedReveal key={service.title} delay={i * 0.08}>
              <ServiceCard service={service} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section background="blush">
        <SectionHeading
          eyebrow="Pricing"
          title="Counseling packages"
          description="Every package is booked and paid for securely through Selar."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, i) => (
            <AnimatedReveal key={tier.name} delay={i * 0.06}>
              <PricingCard tier={tier} />
            </AnimatedReveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-foreground/60">
          Each package is structured to deliver results within its stated sessions. If more support
          is needed, additional sessions are billed separately at the standard rate. Full booking,
          payment, and rescheduling terms are shared at checkout.
        </p>
      </Section>

      <BookingEmbed />
      <FaqAccordion />
    </>
  );
}
