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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-deepInk via-brand-darkNavy to-brand-deepTeal text-white p-8 sm:p-12 shadow-elevated">
        {/* Subtle Decorative Background Geometry */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-15 pointer-events-none flex items-center justify-end overflow-hidden">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="50" y="80" width="120" height="220" rx="4" fill="white" />
            <rect x="200" y="40" width="160" height="260" rx="4" fill="white" />
            <rect x="390" y="110" width="100" height="190" rx="4" fill="white" />
            <circle cx="280" cy="100" r="30" fill="#0F969C" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white shrink-0">
              <AppIcon icon={Mortarboard02Icon} size={26} strokeWidth={2} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
              Start Your FYP with Confidence
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-lightGrey font-sans leading-relaxed">
            Get expert support for your CS619 or CS519 project, from idea to final delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-neutral-warmWhite text-brand-deepInk font-sans font-semibold text-sm transition-all shadow-sm"
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
