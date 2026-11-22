import React from "react";
import Link from "next/link";
import {
  PackageIcon,
  Calendar03Icon,
  WhatsappIcon,
  ArrowRight01Icon,
  File01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function BundleOfferBanner() {
  const whatsappUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I want to avail the Complete FYP Handling Bundle Offer.",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <div className="relative overflow-hidden rounded-xl border border-brand-primaryTeal/30 bg-gradient-to-r from-white via-[#EBF4F6] to-white p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Details */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] text-xs font-semibold font-sans">
              <AppIcon icon={PackageIcon} size={14} strokeWidth={2} />
              <span>Bundle Offer</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-deepInk tracking-tight">
                Complete FYP Handling
              </h2>
              <p className="mt-1 text-sm text-neutral-slateText font-sans">
                Get your CS519 or CS619 project fully handled, from documentation to final delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-medium text-neutral-slateText font-sans">
              <span className="inline-flex items-center gap-1.5 bg-white/90 border border-border px-3 py-1 rounded-md shadow-2xs">
                <AppIcon icon={File01Icon} size={14} className="text-brand-deepTeal" />
                Documentation
              </span>
              <span className="text-border">|</span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 border border-border px-3 py-1 rounded-md shadow-2xs">
                <AppIcon icon={SourceCodeIcon} size={14} className="text-brand-deepTeal" />
                Implementation
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 w-full lg:w-auto shrink-0 border-t lg:border-t-0 border-border/60 pt-4 lg:pt-0">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-slateText font-sans">
              <AppIcon icon={Calendar03Icon} size={16} className="text-brand-deepTeal" />
              <span>Book your project today and avoid last-minute hassle.</span>
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deepTeal hover:bg-brand-primaryTeal text-white font-sans font-medium text-sm transition-all duration-150 shadow-sm w-full sm:w-auto"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
              <span>Book on WhatsApp</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
