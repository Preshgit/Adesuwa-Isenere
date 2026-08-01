import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col">
        {product.badge && (
          <Badge className="w-fit bg-primary/10 text-primary">{product.badge}</Badge>
        )}
        <h3 className="mt-3 font-heading text-xl">{product.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
          {product.description}
        </p>
        {product.price && (
          <p className="mt-4 text-lg font-medium text-primary">{product.price}</p>
        )}
        <Button
          render={<Link href={product.href} target="_blank" rel="noopener noreferrer" />}
          className="mt-5 w-full"
        >
          {product.ctaLabel}
          <ArrowUpRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
