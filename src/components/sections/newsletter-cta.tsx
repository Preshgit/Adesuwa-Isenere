"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { sendNewsletterSignup } from "@/lib/emailjs";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterValues) {
    try {
      await sendNewsletterSignup(values);
      setSubmitted(true);
      reset();
      toast.success("You're subscribed! Look out for our next update.");
    } catch {
      toast.error("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <Section id="newsletter" background="secondary">
      <AnimatedReveal className="mx-auto max-w-xl text-center">
        <Mail className="mx-auto size-8 text-gold" />
        <h2 className="mt-4 text-3xl font-medium text-balance">
          Relationship insights, straight to your inbox
        </h2>
        <p className="mt-3 text-secondary-foreground/75">
          Join the newsletter for reflections on healing, choosing well, and loving better.
        </p>

        {submitted ? (
          <p className="mt-6 font-medium text-gold">Thank you for subscribing!</p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
            noValidate
          >
            <div className="sm:w-72">
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                aria-invalid={!!errors.email}
                className="bg-background text-foreground"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-left text-xs text-destructive-foreground/90">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting} className="shrink-0">
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              Subscribe
            </Button>
          </form>
        )}
      </AnimatedReveal>
    </Section>
  );
}
