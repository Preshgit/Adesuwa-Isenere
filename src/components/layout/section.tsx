import { cn } from "@/lib/utils";
import { Container } from "./container";

const backgrounds = {
  default: "bg-background",
  muted: "bg-muted",
  blush: "bg-blush",
  accent: "bg-accent",
  secondary: "bg-secondary text-secondary-foreground",
} as const;

export function Section({
  className,
  containerClassName,
  background = "default",
  id,
  children,
}: {
  className?: string;
  containerClassName?: string;
  background?: keyof typeof backgrounds;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", backgrounds[background], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
