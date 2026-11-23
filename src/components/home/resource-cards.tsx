import React from "react";
import Link from "next/link";
import {
  UserGroupIcon,
  Book02Icon,
  ArrowRight01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function ResourceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Supervisor Reviews */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-subtle flex flex-col justify-between hover:border-brand-primaryTeal/40 transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand-deepTeal/10 text-brand-deepTeal flex items-center justify-center shrink-0">
                  <AppIcon icon={UserGroupIcon} size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                  Supervisor Reviews
                </h3>
              </div>
              <p className="text-sm text-neutral-slateText font-sans leading-relaxed">
                Read real experiences from students about VU supervisors and share your own review.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-4">
            <Link
              href="/supervisor-reviews"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deepTeal hover:bg-[#0A5A5E] text-white font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>View Reviews</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Card 2: Helping Material */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-subtle flex flex-col justify-between hover:border-brand-primaryTeal/40 transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand-deepTeal/10 text-brand-deepTeal flex items-center justify-center shrink-0">
                  <AppIcon icon={Book02Icon} size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                  Helping Material
                </h3>
              </div>
              <p className="text-sm text-neutral-slateText font-sans leading-relaxed">
                Viva questions, project guidelines, templates and other useful resources for CS619 & CS519.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-4">
            <Link
              href="/helping-material"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-deepTeal hover:bg-[#0A5A5E] text-white font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>Explore Material</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
