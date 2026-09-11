import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

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
  const isThree = items.length === 3;

  return (
    <Section background={background}>
      <SectionHeading
        eyebrow="What I Offer"
        title="Counseling, trainings & resources"
        description="Support for singles, couples, and families — whatever stage of the relationship journey you're in."
      />
      <div
        className={cn(
          "mt-12 grid gap-6 lg:gap-8",
          isThree
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {items.map((service, i) => {
          const isSpanningItem = isThree && i === 2;
          return (
            <AnimatedReveal
              key={service.title}
              delay={i * 0.08}
              className={cn("h-full", isSpanningItem && "sm:col-span-2 lg:col-span-1")}
            >
              <ServiceCard service={service} isSpan={isSpanningItem} />
            </AnimatedReveal>
          );
        })}
      </div>
      {showCta && (
        <div className="mt-12 text-center">
          <Button render={<Link href="/services" />}>
            View all services
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}
