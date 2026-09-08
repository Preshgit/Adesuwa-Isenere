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
        <SectionHeading
          eyebrow="Pricing"
          title="Counseling packages"
          description="Every package is booked and paid for securely through Selar."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
