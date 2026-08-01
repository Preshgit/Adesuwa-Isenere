import { cn } from "@/lib/utils";
import { AnimatedReveal } from "./animated-reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <AnimatedReveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <span className="font-heading text-sm font-medium tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight font-medium text-balance sm:text-4xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-foreground/70",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedReveal>
  );
}
