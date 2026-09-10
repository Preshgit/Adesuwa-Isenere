import { ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contactFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDipAMlP52003kNn_K4Xh57Kudf0UBuDbOx9sXFKrDtcwYyg/viewform";

export function ContactForm() {
  return (
    <Card className="h-full border-border/80 shadow-sm">
      <CardContent className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
              Confidential & Direct
            </Badge>
            <span className="text-xs text-foreground/50">Google Form</span>
          </div>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-medium text-balance">
            Client Inquiry & Intake
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/70">
            Whether you are inquiring about individual counseling, marriage support, or booking a
            speaking engagement, please share a few details below so I can understand how best to
            support you.
          </p>

          <div className="mt-6 space-y-4 border-t border-border/60 pt-6 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">100% Confidential</p>
                <p className="text-xs text-foreground/60">
                  Your information is private and handled strictly by Adesuwa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Quick & Thoughtful</p>
                <p className="text-xs text-foreground/60">
                  Takes about 2–3 minutes to describe your background and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Prompt Follow-Up</p>
                <p className="text-xs text-foreground/60">
                  Expect a personal reply with session availability within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border/60 pt-5">
          <Button
            size="lg"
            className="w-full font-semibold shadow-sm"
            render={<a href={contactFormUrl} target="_blank" rel="noopener noreferrer" />}
          >
            Open Client Intake Form
            <ArrowUpRight className="size-4.5" />
          </Button>
          <p className="mt-2 text-center text-xs text-foreground/50">
            Opens securely in a new tab via Google Forms
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
