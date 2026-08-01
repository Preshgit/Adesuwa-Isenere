"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/shared/form-field";
import { sendContactEmail } from "@/lib/emailjs";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    try {
      await sendContactEmail(values);
      reset();
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Something went wrong sending your message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <FormField
        id="phone"
        label="Phone (optional)"
        placeholder="+234..."
        error={errors.phone?.message}
        {...register("phone")}
      />
      <FormField
        id="message"
        as="textarea"
        label="Message"
        placeholder="How can we help?"
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />
      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Send Message
      </Button>
    </form>
  );
}
