import { Hero } from "@/components/sections/hero";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { FeaturedBook } from "@/components/sections/featured-book";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesGrid showAll={false} showCta />
      <TestimonialCarousel />
      <FeaturedBook />
      <NewsletterCTA />
    </>
  );
}
