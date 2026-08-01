import { GraduationCap, HeartHandshake, Home, Users } from "lucide-react";
import type { Service } from "@/types/content";

// Draft copy — intake form left service descriptions blank (Q5).
// Replace with Adesuwa's own wording before launch.
export const services: Service[] = [
  {
    icon: HeartHandshake,
    title: "Individual Counseling",
    description:
      "One-on-one sessions for singles navigating emotional patterns, past hurt, or decisions about relationships — a space to understand yourself before you build with someone else.",
    features: ["Emotional healing", "Relationship readiness", "Personal growth"],
  },
  {
    icon: Users,
    title: "Pre-Marital & Couples Counseling",
    description:
      "For couples preparing for marriage or working through challenges together — honest, guided conversations that build a healthier foundation.",
    features: ["Pre-marital preparation", "Communication & conflict", "Building trust"],
  },
  {
    icon: Home,
    title: "Family Counseling",
    description:
      "Support for families navigating patterns that started long before this generation — breaking cycles and building healthier home dynamics.",
    features: ["Family systems", "Generational patterns", "Cultural & faith context"],
  },
  {
    icon: GraduationCap,
    title: "Trainings & Workshops",
    description:
      "Group trainings on wellness and relationships for singles and newly married couples, drawn from Adesuwa's books, courses, and counseling practice.",
    features: ["Group workshops", "Online courses", "Relationship education"],
  },
];
