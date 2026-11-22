import { BundleOfferBanner } from "@/components/home/bundle-offer-banner";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesSection } from "@/components/home/services-section";
import { ResourceCards } from "@/components/home/resource-cards";
import { CtaBanner } from "@/components/home/cta-banner";

/**
 * DeveloperBano / VU FYP Solutions - Home Page
 * Server-Side Rendered (SSR) entry point composed of modular sections.
 */
export default async function HomePage() {
  return (
    <div className="w-full space-y-2 pb-8">
      {/* 1. Bundle Offer Notification Bar */}
      <BundleOfferBanner />

      {/* 2. Hero Section with Headline, Highlights & Interactive Visual */}
      <HeroSection />

      {/* 3. Four-point Trust & Reliability Bar */}
      <TrustBar />

      {/* 4. Complete Services & Pricing Packages (CS519, CS619, Individual) */}
      <ServicesSection />

      {/* 5. Secondary Resource Cards (Supervisor Reviews & Helping Material) */}
      <ResourceCards />

      {/* 6. High-Conversion Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}
