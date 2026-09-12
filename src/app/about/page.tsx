import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Adesuwa Isenérè | Marriage & Family Counselor",
  description:
    "Meet Adesuwa Isenérè, Marriage & Family Counselor and founder of Merry Hearts Counselling. Learn about her clinical mission to help individuals and couples heal, break patterns, and build healthy relationships.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Adesuwa Isenérè | Marriage & Family Counselor",
    description:
      "Marriage & Family Counselor, Author, Speaker, and Podcast Host. Helping people break generational patterns, heal emotional wounds, and build healthy relationships.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.practiceName,
    type: "profile",
    locale: "en_NG",
    images: [
      {
        url: "/images/adesuwa-about.jpg",
        width: 1200,
        height: 630,
        alt: `Adesuwa Isenérè - Marriage & Family Counselor`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adesuwa Isenérè | Marriage & Family Counselor",
    description:
      "Meet Adesuwa Isenérè - Marriage & Family Counselor of Merry Hearts Counselling. Healing wounds and breaking patterns.",
    images: ["/images/adesuwa-about.jpg"],
  },
};

const values = [
  {
    icon: Heart,
    title: "Compassion Without Compromise",
    description:
      "I lead with warmth in every interaction, while holding professional boundaries and clinical rigour with equal commitment.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality as Sacred Trust",
    description:
      "What happens in the counseling room stays there. Every client's trust is the foundation of the work we do together.",
  },
  {
    icon: Sparkles,
    title: "Hope as a Clinical Commitment",
    description:
      "I believe people can change and healing is possible - no one is beyond help, growth, or the life they're hoping for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About Adesuwa"
        title="Break the pattern. Heal the wound. Build the life."
      />

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
          <AnimatedReveal className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-foreground/5">
              <Image
                src="/images/adesuwa-about.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 85vw"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="flex flex-col justify-center">
            <span className="font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
              My Story & Approach
            </span>
            <h2 className="mt-2.5 font-heading text-2xl font-medium leading-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Helping you heal, choose better, and love well.
            </h2>
            <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
              <p>
                I became a counselor because I believe that most of the pain people carry in their
                relationships did not begin there. It began long before, in their first homes, in
                childhoods, in the patterns they watched and inherited and never had the right
                language for.
              </p>
              <p>
                My work is to help you find that language; to name what has been driving the
                patterns; to heal what needs healing and to build, on the other side of that work,
                a life and relationships that actually feel like yours.
              </p>
              <p>
                Whether you are navigating a relationship decision, healing from a painful past, or
                learning to love and be loved well, you are in the right place.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </Section>

      <Section background="blush">
        <SectionHeading
          eyebrow="Mission & Vision"
          title="Why I do this work"
          description="Every session, conversation, and resource is grounded in helping individuals and families build lasting emotional health."
          align="center"
        />
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
          <AnimatedReveal delay={0.08} className="h-full">
            <Card className="h-full border-border/60 bg-card/90 shadow-xs backdrop-blur-xs transition-all duration-300 hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3.5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-blush text-primary">
                    <Compass className="size-5" />
                  </span>
                  <h3 className="font-heading text-xl font-medium text-foreground">Mission</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  To help individuals, couples, and families break unhealthy emotional patterns,
                  heal from the inside out, and build relationships that reflect their fullest
                  potential through counseling, education, and honest conversation.
                </p>
              </CardContent>
            </Card>
          </AnimatedReveal>

          <AnimatedReveal delay={0.16} className="h-full">
            <Card className="h-full border-border/60 bg-card/90 shadow-xs backdrop-blur-xs transition-all duration-300 hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3.5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-blush text-primary">
                    <Sparkles className="size-5" />
                  </span>
                  <h3 className="font-heading text-xl font-medium text-foreground">Vision</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  A world where emotional health is not a luxury, where healing is not a sign of
                  weakness, and where every person has access to the tools, support, and truth they
                  need to live and love well.
                </p>
              </CardContent>
            </Card>
          </AnimatedReveal>
        </div>
      </Section>

      <Section background="muted">
        <SectionHeading eyebrow="How I Work" title="What guides every session" align="center" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedReveal key={value.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <CardContent className="flex h-full flex-col items-center">
                    <span className="flex size-12 items-center justify-center rounded-full bg-blush text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
