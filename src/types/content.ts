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
  duration: string;
  description: string;
  features: string[];
  note?: string;
  ctaHref: string;
  ctaLabel?: string;
  highlighted?: boolean;
  badge?: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  role?: string;
  rating?: number;
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
  image?: string;
  icon?: LucideIcon;
};
