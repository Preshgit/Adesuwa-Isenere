import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";
import { SocialLinks } from "@/components/shared/social-links";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Adesuwa Isenérè of Merry Hearts Counselling.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Have a question, or ready to book? Reach out — I'd love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <AnimatedReveal className="space-y-6">
            <Card>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">Phone</p>
                    <a href={contactInfo.phoneHref} className="text-base hover:text-primary">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">Email</p>
                    <a href={contactInfo.emailHref} className="text-base hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <p className="font-heading text-sm text-foreground/60">Follow along</p>
              <SocialLinks className="mt-3" />
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <ContactForm />
          </AnimatedReveal>
        </div>
      </Section>

      <NewsletterCTA />
    </>
  );
}
