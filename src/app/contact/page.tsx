import type { Metadata } from "next";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";
import { SocialLinks } from "@/components/shared/social-links";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        alt: `Contact - ${siteConfig.practiceName}`,
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
        description="Have a question, or ready to book? Reach out, I'd love to hear from you."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 items-stretch">
          <AnimatedReveal className="h-full">
            <Card className="h-full border-border/80 shadow-sm flex flex-col justify-between">
              <CardContent className="flex h-full flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                      Direct Inquiries
                    </Badge>
                    <span className="text-xs text-foreground/50">Lagos & Online</span>
                  </div>

                  <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-medium text-balance">
                    Get in Touch Directly
                  </h2>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/70">
                    Have an urgent question, want to say hello, or prefer reaching out directly?
                    Connect with Adesuwa through any of the channels below.
                  </p>

                  <div className="mt-6 space-y-4 border-t border-border/60 pt-6 text-sm">
                    <div className="flex items-start gap-3.5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                        <MessageSquare className="size-4.5" />
                      </span>
                      <div>
                        <p className="font-heading text-xs text-foreground/60 uppercase tracking-wider">WhatsApp</p>
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
                        <p className="font-heading text-xs text-foreground/60 uppercase tracking-wider">Email</p>
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
                        <p className="font-heading text-xs text-foreground/60 uppercase tracking-wider">Phone</p>
                        <a
                          href={contactInfo.phoneHref}
                          className="text-base font-medium hover:text-primary transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
                        <MapPin className="size-4.5" />
                      </span>
                      <div>
                        <p className="font-heading text-xs text-foreground/60 uppercase tracking-wider">Consultation Formats</p>
                        <p className="text-sm leading-relaxed text-foreground/80">
                          <strong className="text-foreground font-semibold">Virtual:</strong> worldwide (Zoom / Google Meet)<br />
                          <strong className="text-foreground font-semibold">In-person:</strong> in Lagos by appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-heading text-sm font-medium text-foreground">Follow along</p>
                      <p className="text-xs text-foreground/50">Episodes, reflections & updates</p>
                    </div>
                    <SocialLinks />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="h-full" id="inquiry">
            <ContactForm />
          </AnimatedReveal>
        </div>
      </Section>

      <NewsletterCTA />
    </>
  );
}
