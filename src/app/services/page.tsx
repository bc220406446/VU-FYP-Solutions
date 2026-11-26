import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { ServicesSection } from "@/components/home/services-section";
import { IndividualServicesSection } from "@/components/services/individual-services-section";
import { LmsHandlingSection } from "@/components/services/lms-handling-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Complete VU CS619 & CS519 Packages, Phases & LMS Handling",
  description:
    "Explore complete CS519 & CS619 project handling packages, 9 individual phase & viva services, and full or half-semester VU LMS handling.",
  openGraph: {
    title: "Services | VU FYP Solutions",
    description:
      "Complete project handling packages, individual CS619/CS519 phase solutions, and VU LMS handling.",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-background min-h-screen pb-8">
      {/* Hero / Page Intro Header */}
      <section className="bg-gradient-to-b from-white to-neutral-warmWhite/60">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 space-y-3">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-neutral-slateText font-sans"
          >
            <Link
              href="/"
              className="hover:text-brand-deepTeal transition-colors"
            >
              Home
            </Link>
            <AppIcon
              icon={ArrowRight01Icon}
              size={12}
              className="text-neutral-mutedGrey"
            />
            <span className="text-brand-deepInk font-medium">Services</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 py-1 text-brand-deepTeal text-md font-semibold font-sans">
                <span>Unable to Handle Your Project at the moment? We&apos;ve got you covered.</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
                Get Our FYP &amp; Academic{" "}
                <span className="text-brand-deepTeal">Services</span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
                Choose a complete CS519 or CS619 project package, order{" "}
                <Link
                  href="#individual-services"
                  className="text-brand-deepTeal font-medium hover:text-brand-darkNavy transition-colors"
                >
                  individual phase assignment
                </Link>
                , or get full-semester{" "}
                <Link
                  href="#lms-handling"
                  className="text-brand-deepTeal font-medium hover:text-brand-darkNavy transition-colors"
                >
                  LMS handling
                </Link>
                , tailored to your exact needs. All prices are negotiable based
                on the requirements of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Complete Project Packages Block (Header merged into Hero above) */}
      <ServicesSection individualHref="#individual-services" hideHeader />

      {/* 2. Individual Services Products Catalog (All, CS619, CS519 - 9 Activities) */}
      <IndividualServicesSection services={servicesData} />

      {/* 3. LMS Handling Section (Half Semester, Full Semester, Individual LMS) */}
      <LmsHandlingSection />

      {/* 4. Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}
