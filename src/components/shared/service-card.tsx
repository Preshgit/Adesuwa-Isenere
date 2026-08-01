import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardContent className="flex h-full flex-col">
        <span className="flex size-12 items-center justify-center rounded-full bg-blush text-primary">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-5 font-heading text-xl">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-foreground/70">
          {service.description}
        </p>
        <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-foreground/70">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
