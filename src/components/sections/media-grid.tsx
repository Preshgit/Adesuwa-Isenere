import { Podcast } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ProductCard } from "@/components/shared/product-card";
import { SocialLinks } from "@/components/shared/social-links";
import { books, courses } from "@/content/media";

export function MediaGrid() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Books & Materials"
          title="Resources to guide your journey"
          description="Practical, honest resources on relationships and wellness, starting with the book."
        />
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[...books, ...courses].map((product, i) => (
            <AnimatedReveal key={product.title} delay={i * 0.08}>
              <ProductCard product={product} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <SectionHeading eyebrow="Podcast & Speaking" title="Listen & connect" align="center" />
        <AnimatedReveal delay={0.1} className="mx-auto mt-6 max-w-lg text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-blush text-primary">
            <Podcast className="size-5" />
          </span>
          <p className="mt-3 text-foreground/70">
            Catch episodes and conversations on healing, relationships, and everyday wisdom -
            follow along on YouTube and social media.
          </p>
          <SocialLinks className="mt-5 justify-center" />
        </AnimatedReveal>
      </Section>
    </>
  );
}
