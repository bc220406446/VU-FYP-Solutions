import { BundleOfferBanner } from "@/components/home/bundle-offer-banner";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesSection } from "@/components/home/services-section";
import { SeeOurWorkSection } from "@/components/home/see-our-work";
import { EasyProjectsRanking } from "@/components/home/easy-projects-ranking";
import { BuildOnYourOwnSection } from "@/components/home/build-on-your-own";
import { ResourceCards } from "@/components/home/resource-cards";
import { CtaBanner } from "@/components/home/cta-banner";

/**
 * DeveloperBano / VU FYP Solutions - Home Page
 * Server-Side Rendered (SSR) entry point composed of modular sections matching mockup.
 */
export default async function HomePage() {
  return (
    <div className="w-full space-y-2 pb-8">
      {/* 1. Bundle Offer Notification Bar */}
      <BundleOfferBanner />

      {/* 2. Hero Section with WebP Hero Scene Image */}
      <HeroSection />

      {/* 3. Four-point Trust & Reliability Bar */}
      <TrustBar />

      {/* 4. Complete Services & Pricing Packages (CS519, CS619, Individual) */}
      <ServicesSection />

      {/* 5. See Our Work Section (Real Projects from devkamran.me) */}
      <SeeOurWorkSection />

      {/* 6. Easy Projects Ranking Guide */}
      <EasyProjectsRanking />

      {/* 7. Build On Your Own Pathway (Directs to Blog & Guidelines) */}
      <BuildOnYourOwnSection />

      {/* 8. Secondary Resource Cards (Supervisor Reviews & Helping Material) */}
      <ResourceCards />

      {/* 9. High-Conversion Bottom CTA Banner ("Start Your FYP with Confidence" in crisp white) */}
      <CtaBanner />
    </div>
  );
}
