import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function ServicesGrid({
  showAll = true,
  showCta = false,
  background = "default",
}: {
  showAll?: boolean;
  showCta?: boolean;
  background?: "default" | "muted" | "blush";
}) {
  const items = showAll ? services : services.slice(0, 3);

  return (
    <Section background={background}>
      <SectionHeading
        eyebrow="What I Offer"
        title="Counseling, trainings & resources"
        description="Support for singles, couples, and families — whatever stage of the relationship journey you're in."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((service, i) => (
          <AnimatedReveal key={service.title} delay={i * 0.08}>
            <ServiceCard service={service} />
          </AnimatedReveal>
        ))}
      </div>
      {showCta && (
        <div className="mt-10 text-center">
          <Button render={<Link href="/services" />}>
            View all services
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}
