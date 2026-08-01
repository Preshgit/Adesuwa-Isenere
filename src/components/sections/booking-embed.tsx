import { CalendarDays } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { calendlyUrl } from "@/lib/constants";

export function BookingEmbed() {
  return (
    <Section id="booking">
      <SectionHeading
        eyebrow="Book a Session"
        title="Find a time that works for you"
        description="Pick a slot below and I'll confirm your session shortly after."
        align="center"
      />
      <AnimatedReveal delay={0.1} className="mt-10 overflow-hidden rounded-2xl border border-border">
        {/* TODO: replace calendlyUrl in src/lib/constants.ts with the real scheduling link */}
        <iframe
          src={calendlyUrl}
          title="Book a session"
          className="h-[700px] w-full"
          loading="lazy"
        />
      </AnimatedReveal>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-foreground/60">
        <CalendarDays className="size-4" />
        Prefer to reach out first? Use the contact page instead.
      </p>
    </Section>
  );
}
