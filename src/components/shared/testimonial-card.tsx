import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-blush ring-0">
      <CardContent className="flex h-full flex-col">
        <Quote className="size-6 text-primary/40" />
        <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/80 italic">
          “{testimonial.quote}”
        </p>
        <div className="mt-5 border-t border-primary/10 pt-4">
          <p className="font-heading text-sm">{testimonial.name}</p>
          {testimonial.role && (
            <p className="text-xs text-foreground/60">{testimonial.role}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
