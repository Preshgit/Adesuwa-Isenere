"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Marriage & Family Counselor
          </span>
          <h1 className="mt-4 text-4xl leading-[1.1] font-medium text-balance sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
            Helping you heal, choose better, and love well — counseling, trainings, and resources
            for singles and newly married couples building relationships that last.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" render={<Link href="/services#booking" />}>
              Book a Session
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/about" />}>
              Meet Adesuwa
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-foreground/5 sm:max-w-sm md:max-w-md"
        >
          <Image
            src="/images/adesuwa-hero.jpg"
            alt={siteConfig.name}
            fill
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 85vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/90 px-4 py-3 text-center backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <p className="font-heading text-sm text-foreground sm:text-base">{siteConfig.name}</p>
            <p className="text-xs text-foreground/60">Marriage & Family Counselor</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
