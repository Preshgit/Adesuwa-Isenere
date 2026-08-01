import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          eyebrow="About Adesuwa"
          title="My mission is to help you heal, choose better, and love well."
        />
        <AnimatedReveal delay={0.1} className="space-y-5 text-base leading-relaxed text-foreground/70">
          <p>
            I became a counselor because I believe that most of the pain people carry in their
            relationships did not begin there — it began long before, in their first homes, in
            childhoods, in the patterns they watched and inherited and never had the right
            language for.
          </p>
          <p>
            My work is to help you find that language; to name what has been driving the
            patterns; to heal what needs healing, and to build a life and relationships that
            actually feel like yours.
          </p>
          <Button variant="link" className="px-0 text-primary" render={<Link href="/about" />}>
            Read my full story
            <ArrowRight className="size-4" />
          </Button>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
