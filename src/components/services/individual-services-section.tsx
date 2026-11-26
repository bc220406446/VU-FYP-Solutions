"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WhatsappIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { ServiceCourse, ServiceItem } from "@/types";

const COURSE_FILTERS: ("All" | ServiceCourse)[] = ["All", "CS619", "CS519"];

interface IndividualServicesSectionProps {
  services: ServiceItem[];
}

export function IndividualServicesSection({
  services,
}: IndividualServicesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<"All" | ServiceCourse>(
    "All"
  );

  const filteredServices =
    selectedCourse === "All"
      ? services
      : services.filter((service) => service.course === selectedCourse);

  return (
    <section
      id="individual-services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20"
    >
      {/* Centered Section Header + Course Filters */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 py-1 text-brand-deepTeal text-md font-semibold font-sans">
          <span>Need a specific phase assignment solution &amp;</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight">
          Individual <span className="text-brand-deepTeal">Services</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
          Pick only the specific CS619 or CS519 phase you need-whether it is
          documentation, development, or viva preparation.
        </p>

        {/* Course Filter Pills: All, CS619, CS519 */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 pt-3"
          role="tablist"
          aria-label="Filter individual services by course"
        >
          {COURSE_FILTERS.map((course) => {
            const isActive = selectedCourse === course;
            return (
              <button
                key={course}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tab-${course}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setSelectedCourse(course)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5",
                  isActive
                    ? "bg-brand-deepTeal text-white shadow-xs font-semibold"
                    : "bg-white border border-border text-neutral-slateText hover:text-brand-deepInk hover:border-brand-primaryTeal/40"
                )}
              >
                <span>{course}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Individual Service Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredServices.map((service) => {
          const whatsappUrl = buildWhatsAppUrl({
            serviceTitle: `${service.title} (${service.price})`,
          });

          return (
            <article
              key={service.id}
              id={service.slug}
              className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card flex flex-col justify-between hover:border-brand-primaryTeal/50 hover:shadow-elevated transition-all duration-200"
            >
              <div className="space-y-4">
                {/* 1. Title */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk leading-snug">
                  {service.title}
                </h3>

                {/* 2. Short Description */}
                <p className="text-xs sm:text-sm text-neutral-slateText font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-auto space-y-5">
                {/* 3. Price (visually prominent) & 4. Delivery Time */}
                <div className="flex items-baseline justify-between gap-3 border-t border-border pt-4">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-[#B45309]">
                    {service.price}
                  </span>
                  {service.turnaroundTime && (
                    <span className="text-xs font-sans font-medium text-brand-deepTeal px-2.5 py-1 rounded-md shrink-0">
                      Delivery Time: {service.turnaroundTime}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-sm"
                >
                  <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
                  <span>Book Now</span>
                  <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
