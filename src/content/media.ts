import { GraduationCap } from "lucide-react";
import type { Product } from "@/types/content";
import { bookSelarUrl, selarStoreUrl } from "@/lib/constants";

export const books: Product[] = [
  {
    title: "Before You Say Yes",
    description:
      "The conversations, questions, and truths that prepare you for marriage - a guide for every woman standing at a crossroad, helping you choose better before you commit.",
    href: bookSelarUrl,
    ctaLabel: "Buy the Book",
    badge: "Featured",
    image: "/images/BeforeYouSayYesEbook.jpeg",
  },
];

export const courses: Product[] = [
  {
    title: "Online Courses",
    description:
      "Self-paced online courses on relationship wellness, healing, and building healthy relationships.",
    href: selarStoreUrl,
    ctaLabel: "Explore Courses",
    image: "/images/online-courses.jpg",
    badge: "Masterclass",
  },
];
