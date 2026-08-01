import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export type PricingTier = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Testimonial = {
  name: string;
  quote: string;
  role?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Product = {
  title: string;
  description: string;
  price?: string;
  href: string;
  ctaLabel: string;
  badge?: string;
};
