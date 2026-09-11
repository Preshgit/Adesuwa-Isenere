import type { Metadata } from "next";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";
import { SocialLinks } from "@/components/shared/social-links";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";
import { contactInfo, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book a Session | Merry Hearts Counselling Lagos",
  description:
    "Reach out to Adesuwa Isenérè at Merry Hearts Counselling. Schedule an in-person session in Lagos, Nigeria or book virtual counseling worldwide via Zoom and Google Meet.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact & Book a Session | Merry Hearts Counselling",
    description:
      "Get in touch with Marriage & Family Counselor Adesuwa Isenérè. In-person appointments in Lagos and virtual counseling worldwide.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.practiceName,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/adesuwa-about.jpg",
        width: 1200,
        height: 630,
        alt: `Contact — ${siteConfig.practiceName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book a Session | Merry Hearts Counselling",
    description:
      "Schedule in-person counseling in Lagos or virtual therapy worldwide with Adesuwa Isenérè.",
    images: ["/images/adesuwa-about.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Have a question, or ready to book? Reach out — I'd love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <AnimatedReveal className="space-y-6">
            <Card>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <MessageSquare className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">WhatsApp</p>
                    <a
                      href="https://wa.me/2347017396035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <Mail className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">Email</p>
                    <a
                      href={contactInfo.emailHref}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <Phone className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">Phone</p>
                    <a
                      href={contactInfo.phoneHref}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-border/60 pt-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                    <MapPin className="size-4.5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm text-foreground/60">Consultation Formats</p>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Virtual worldwide (Zoom / Google Meet)<br />
                      In-person in Lagos by appointment
                    </p>
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
