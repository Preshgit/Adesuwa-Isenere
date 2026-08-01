import type { PricingTier } from "@/types/content";

// Placeholder tiers — no pricing figures were provided in the intake form.
// Replace price/features with real rates before launch.
export const pricingTiers: PricingTier[] = [
  {
    name: "Single Session",
    price: "Contact for pricing",
    description: "A single individual or couples counseling session.",
    features: ["60-minute session", "In-person or virtual", "Confidential"],
  },
  {
    name: "Counseling Package",
    price: "Contact for pricing",
    description: "A multi-session package for deeper, ongoing work.",
    features: ["4–6 sessions", "In-person or virtual", "Progress check-ins"],
    highlighted: true,
  },
  {
    name: "Group Training",
    price: "Contact for pricing",
    description: "Workshops and trainings for groups and organizations.",
    features: ["Custom group size", "On-site or virtual", "Take-home materials"],
  },
];
