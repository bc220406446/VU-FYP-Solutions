import React from "react";
import Link from "next/link";
import {
  File01Icon,
  Layers01Icon,
  Grid02Icon,
  Tick02Icon,
  WhatsappIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ServicesSectionProps {
  individualHref?: string;
  hideHeader?: boolean;
}

export function ServicesSection({
  individualHref = "/services",
  hideHeader = false,
}: ServicesSectionProps) {
  const cs519WhatsAppUrl = buildWhatsAppUrl({
    projectTitle: "CS519 Complete Project Handling (Rs. 20,000)",
  });

  const cs619WhatsAppUrl = buildWhatsAppUrl({
    projectTitle: "CS619 Complete Project Handling (Rs. 30,000)",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      {!hideHeader && (
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-brand-deepTeal text-xs font-semibold font-sans">
            <span>Unable to Handle Your Project at the moment? We've got you covered.</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight">
            Get Our <span className="text-brand-deepTeal">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-slateText font-sans">
            Choose a complete project package or explore individual services as per your need.
          </p>
        </div>
      )}

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: CS519 */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-card flex flex-col justify-between hover:border-brand-primaryTeal/50 transition-all duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Complete CS519 Project Handling
              </h3>
            </div>

            <div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#B45309]">
                  Rs. 20,000
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Package Includes</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Documentation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Final Deliverable</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Code Setup on Your Machine</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Viva Preparation</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={cs519WhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-sm"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
              <span>Book CS519 Project</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Card 2: CS619 */}
        <div className="rounded-xl border-2 border-brand-deepTeal/40 bg-white p-7 shadow-elevated flex flex-col justify-between relative">
          <div className="absolute -top-3 right-6 bg-brand-deepTeal text-white text-[11px] font-sans font-semibold px-3 py-0.5 rounded-full shadow-2xs">
            Most Popular
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Complete CS619 Project Handling
              </h3>
            </div>

            <div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#B45309]">
                  Rs. 30,000
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Package Includes</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>SRS Document</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Design Document</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Prototype Phase</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Final Deliverable</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Code Setup on Your Machine</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Viva Preparation</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={cs619WhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-sm"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
              <span>Book CS619 Project</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Card 3: Individual Services */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-card flex flex-col justify-between hover:border-brand-primaryTeal/50 transition-all duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Specific Phase Assignment Solution
              </h3>
            </div>

            <div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-slateText font-sans leading-relaxed">
                Need a specific phase assignment solution? Explore our individually available services.
              </p>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Individual Service Covers</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>SRS and design documentation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Prototype development</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Final Delieverable Solution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Viva Preparation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <b>Other Services</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>LMS Activities Handling</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={individualHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-warmWhite border border-border text-brand-deepInk hover:bg-white hover:border-brand-primaryTeal/40 font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>View All Services</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
