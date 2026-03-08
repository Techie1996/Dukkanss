import { Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollectionsSection from "@/components/sections/FeaturedCollectionsSection";
import ProductRailSection from "@/components/sections/ProductRailSection";
import TrustSection from "@/components/sections/TrustSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <Suspense>
        <FeaturedCollectionsSection />
      </Suspense>
      <Suspense>
        <ProductRailSection
          title="Best sellers"
          subtitle="Loved by our customers across Europe."
          queryKey="best-sellers"
        />
      </Suspense>
      <Suspense>
        <ProductRailSection
          title="New arrivals"
          subtitle="Fresh finds for your weekly pantry."
          queryKey="new-arrivals"
        />
      </Suspense>
      <TrustSection />
      <ReviewsSection />
      <NewsletterSection />
    </div>
  );
}

