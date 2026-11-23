import React from "react";
import Link from "next/link";
import {
  Mortarboard02Icon,
  WhatsappIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CtaBanner() {
  const whatsappUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I want to start my CS619 / CS519 Final Year Project.",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-deepInk via-brand-darkNavy to-brand-deepTeal text-white p-8 sm:p-12 shadow-card">
        {/* Subtle Architectural Grid Accent (Clean geometry without radial orbs or glow) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-10 pointer-events-none flex items-center justify-end overflow-hidden">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="60" y="80" width="100" height="220" rx="2" fill="white" />
            <rect x="180" y="50" width="140" height="250" rx="2" fill="white" />
            <rect x="340" y="100" width="100" height="200" rx="2" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight !text-white text-white" style={{ color: "#FFFFFF" }}>
              Start Your FYP with Confidence
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-lightGrey font-sans leading-relaxed">
            Get expert support for your CS619 or CS519 project, from documentation to final delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-neutral-warmWhite text-brand-deepInk font-sans font-semibold text-sm transition-colors shadow-xs"
            >
              <AppIcon icon={WhatsappIcon} size={20} className="text-emerald-600" />
              <span>Book on WhatsApp</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 hover:bg-white/10 text-white font-sans font-medium text-sm transition-colors"
            >
              <span>Explore Projects</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
