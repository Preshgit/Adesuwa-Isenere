import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon ?? Sparkles;

  return (
    <Card className="h-full overflow-hidden rounded-2xl py-0 ring-1 ring-foreground/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 sm:aspect-[16/9]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 100vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-blush to-muted p-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-background shadow-sm text-primary">
              <Icon className="size-6" />
            </span>
            <span className="mt-2.5 font-heading text-sm text-foreground/70">{product.title}</span>
          </div>
        )}
      </div>
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        {product.badge && (
          <Badge className="w-fit bg-primary/10 text-primary font-medium text-xs px-2.5 py-0.5">
            {product.badge}
          </Badge>
        )}
        <h3 className="mt-2.5 font-heading text-xl font-medium sm:text-2xl">{product.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-3">
          {product.description}
        </p>
        {product.price && (
          <p className="mt-2.5 text-lg font-medium text-primary">{product.price}</p>
        )}
        <Button
          render={<Link href={product.href} target="_blank" rel="noopener noreferrer" />}
          className="mt-4 w-full font-semibold shadow-xs"
        >
          {product.ctaLabel}
          <ArrowUpRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
