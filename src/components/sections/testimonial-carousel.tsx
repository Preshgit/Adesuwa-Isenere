import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/content/testimonials";

export function TestimonialCarousel() {
  return (
    <Section background="muted">
      <SectionHeading
        eyebrow="Client Stories"
        title="Words from those I've walked with"
        align="center"
      />
      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {testimonials.map((testimonial, i) => (
          <AnimatedReveal
            key={testimonial.name + i}
            delay={i * 0.1}
            className="w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-auto"
          >
            <TestimonialCard testimonial={testimonial} />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
