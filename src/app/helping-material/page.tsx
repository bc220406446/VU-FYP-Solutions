import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { HelpingMaterialHub } from "@/components/helping-material/helping-material-hub";
import {
  developmentSoftware,
  documentationPatterns,
  programmingResources,
  vivaPrepFiles,
  workSamples,
} from "@/data/helping-material";

export const metadata: Metadata = {
  title: "Helping Material | VU CS619 & CS519 Patterns, Samples & Guides",
  description:
    "Find documentation patterns, project samples, development tools and learning resources to support your final year project.",
  openGraph: {
    title: "Helping Material | VU FYP Solutions",
    description:
      "Documentation patterns, work samples, development software, and learning resources for Virtual University CS619 & CS519 students.",
  },
};

export default function HelpingMaterialPage() {
  return (
    <div className="w-full bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
          <span className="text-brand-deepInk font-medium">
            Helping Material
          </span>
        </nav>

        {/* Page Title & Introductory Header (consistent with Projects page) */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
            Helping Material
          </h1>

          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Find documentation patterns, project samples, development tools and
            learning resources to support your final year project.
          </p>
        </div>

        {/* Main Resource Sections */}
        <HelpingMaterialHub
          patterns={documentationPatterns}
          samples={workSamples}
          software={developmentSoftware}
          programming={programmingResources}
          vivaFiles={vivaPrepFiles}
        />
      </div>
    </div>
  );
}
