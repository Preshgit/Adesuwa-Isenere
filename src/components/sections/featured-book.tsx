import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Button } from "@/components/ui/button";
import { books } from "@/content/media";

export function FeaturedBook() {
  const book = books[0];
  if (!book) return null;

  return (
    <Section background="blush">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        {book.image && (
          <AnimatedReveal
            y={32}
            className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-foreground/5 sm:max-w-[300px]"
          >
            <Image
              src={book.image}
              alt={book.title}
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
            />
          </AnimatedReveal>
        )}
        <AnimatedReveal delay={0.1} className="text-center lg:text-left">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-card text-primary shadow-sm lg:mx-0">
            <BookOpen className="size-6" />
          </span>
          <span className="mt-5 block font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Featured Book
          </span>
          <h2 className="mt-3 text-3xl font-medium text-balance">{book.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70 lg:mx-0">{book.description}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button size="lg" render={<Link href={book.href} target="_blank" rel="noopener noreferrer" />}>
              {book.ctaLabel}
              <ArrowUpRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/media" />}>
              Explore books & courses
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
