import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
        <h3 className="font-heading text-xl">{tier.name}</h3>
        <p
          className={cn(
            "mt-2 text-2xl font-medium",
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
            <li key={feature} className="flex items-center gap-2">
              <Check className={cn("size-4 shrink-0", tier.highlighted ? "text-gold" : "text-primary")} />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          render={<Link href="/contact" />}
          variant={tier.highlighted ? "default" : "outline"}
          className="mt-6 w-full"
        >
          Get in touch
        </Button>
      </CardContent>
    </Card>
  );
}
