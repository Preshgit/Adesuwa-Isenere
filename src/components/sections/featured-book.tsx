import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Button } from "@/components/ui/button";
import { books } from "@/content/media";

export function FeaturedBook() {
  const book = books[0];
  if (!book) return null;

  return (
    <Section background="blush">
      <AnimatedReveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-card text-primary shadow-sm">
          <BookOpen className="size-7" />
        </span>
        <div>
          <span className="font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Featured Book
          </span>
          <h2 className="mt-3 text-3xl font-medium text-balance">{book.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70">{book.description}</p>
        </div>
        <Button render={<Link href="/media" />}>
          Explore books & courses
          <ArrowUpRight className="size-4" />
        </Button>
      </AnimatedReveal>
    </Section>
  );
}
