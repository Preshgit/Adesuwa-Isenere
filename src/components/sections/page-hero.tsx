import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Container } from "@/components/layout/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <Container className="py-16 text-center md:py-20">
        <AnimatedReveal>
          <span className="font-heading text-sm font-medium tracking-[0.2em] text-gold uppercase">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl leading-tight font-medium text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-secondary-foreground/75">
              {description}
            </p>
          )}
        </AnimatedReveal>
      </Container>
    </section>
  );
}
