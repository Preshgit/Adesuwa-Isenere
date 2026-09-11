"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendNewsletterSignup } from "@/lib/emailjs";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      await sendNewsletterSignup({ email });
      setSubmitted(true);
      setEmail("");
      toast.success("You're subscribed! Look out for our next update.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gold">
        <span className="flex size-5 items-center justify-center rounded-full bg-gold/20">
          <Check className="size-3" />
        </span>
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          required
          className="h-10 rounded-xl border border-secondary-foreground/20 bg-secondary-foreground/10 px-3.5 text-sm text-secondary-foreground placeholder:text-secondary-foreground/50 focus-visible:border-gold focus-visible:ring-gold/30 dark:border-secondary-foreground/20 dark:bg-background/50"
        />
        <Button
          type="submit"
          size="sm"
          disabled={loading}
          className="h-10 px-4.5 shrink-0 rounded-xl font-semibold bg-gold text-[#2a1015] hover:bg-gold/90 shadow-xs transition-all"
        >
          {loading ? <Loader2 className="size-3.5 animate-spin" /> : "Join"}
        </Button>
      </div>
      <p className="text-[11px] text-secondary-foreground/60">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
