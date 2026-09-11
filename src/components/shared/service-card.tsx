import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types/content";

export function ServiceCard({
  service,
  isSpan = false,
}: {
  service: Service;
  isSpan?: boolean;
}) {
  const Icon = service.icon;

  return (
    <Card className="h-full rounded-2xl border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush text-primary shadow-xs">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-medium sm:text-2xl text-balance">
          {service.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/70 flex-1">
          {service.description}
        </p>
        <ul
          className={
            isSpan
              ? "mt-6 space-y-2 border-t border-border/70 pt-5 text-sm text-foreground/70 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 lg:flex lg:flex-col lg:space-y-2 lg:gap-0"
              : "mt-6 space-y-2 border-t border-border/70 pt-5 text-sm text-foreground/70"
          }
        >
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
