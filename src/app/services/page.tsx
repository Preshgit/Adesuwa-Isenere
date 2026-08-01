import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { PricingCard } from "@/components/shared/pricing-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { BookingEmbed } from "@/components/sections/booking-embed";
import { services } from "@/content/services";
import { pricingTiers } from "@/content/pricing";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual, pre-marital, couples and family counseling, plus trainings and workshops from Merry Hearts Counselling.",
};

export default function ServicesPage() {
  return (
    <>
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
        <SectionHeading eyebrow="Pricing" title="Simple, transparent packages" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <AnimatedReveal key={tier.name} delay={i * 0.1}>
              <PricingCard tier={tier} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <BookingEmbed />
      <FaqAccordion />
    </>
  );
}
