import { ArrowUpRight, MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDipAMlP52003kNn_K4Xh57Kudf0UBuDbOx9sXFKrDtcwYyg/viewform";

export function ContactForm() {
  return (
    <a
      href={contactFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl ring-1 ring-foreground/10 transition-shadow hover:shadow-xl"
    >
      <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-blush transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[16/10]">
        <MessageCircleHeart className="size-16 text-primary/30" />
      </div>
      <div className="flex items-center justify-between gap-4 bg-card p-6">
        <div>
          <p className="font-heading text-lg">Ready to talk?</p>
          <p className="mt-1 text-sm text-foreground/60">
            Fill out the form and I&apos;ll get back to you shortly.
          </p>
        </div>
        <Button size="lg" className="shrink-0" render={<span />}>
          Open the form
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </a>
  );
}
