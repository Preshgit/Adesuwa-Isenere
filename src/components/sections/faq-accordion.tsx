import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { faqs } from "@/content/faqs";

export function FaqAccordion() {
  return (
    <Section background="muted">
      <SectionHeading eyebrow="FAQs" title="Common questions" align="center" />
      <AnimatedReveal className="mx-auto mt-10 max-w-2xl" delay={0.1}>
        <Accordion className="rounded-2xl border border-border bg-card px-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={String(i)}>
              <AccordionTrigger className="font-heading text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedReveal>
    </Section>
  );
}
