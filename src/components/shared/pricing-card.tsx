import { Check, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/types/content";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "h-full ring-1",
        tier.highlighted ? "bg-secondary text-secondary-foreground ring-secondary" : "ring-foreground/10"
      )}
    >
      <CardContent className="flex h-full flex-col">
        {tier.badge && (
          <Badge
            className={cn(
              "w-fit",
              tier.highlighted ? "bg-gold text-secondary" : "bg-primary/10 text-primary"
            )}
          >
            {tier.badge}
          </Badge>
        )}
        <h3 className={cn("font-heading text-xl", tier.badge && "mt-3")}>{tier.name}</h3>
        <p
          className={cn(
            "mt-1 text-xs font-medium tracking-wide uppercase",
            tier.highlighted ? "text-secondary-foreground/60" : "text-foreground/50"
          )}
        >
          {tier.duration}
        </p>
        <p
          className={cn(
            "mt-3 text-2xl font-medium",
            tier.highlighted ? "text-gold" : "text-primary"
          )}
        >
          {tier.price}
        </p>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            tier.highlighted ? "text-secondary-foreground/70" : "text-foreground/70"
          )}
        >
          {tier.description}
        </p>
        <ul className="mt-5 flex-1 space-y-2.5 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className={cn("mt-0.5 size-4 shrink-0", tier.highlighted ? "text-gold" : "text-primary")} />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          render={<a href={tier.ctaHref} target="_blank" rel="noopener noreferrer" />}
          variant={tier.highlighted ? "default" : "outline"}
          className="mt-6 w-full"
        >
          {tier.ctaLabel ?? "Get This Package"}
          <ArrowUpRight className="size-4" />
        </Button>
        {tier.note && (
          <p
            className={cn(
              "mt-3 text-center text-xs",
              tier.highlighted ? "text-secondary-foreground/60" : "text-foreground/50"
            )}
          >
            {tier.note}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
