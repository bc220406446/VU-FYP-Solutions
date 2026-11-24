import React from "react";
import Link from "next/link";
import { Megaphone01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function TopAnnouncementBar() {
  const whatsappUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I want to book my CS619 / CS519 Final Year Project.",
  });

  return (
    <div className="w-full bg-brand-darkNavy text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-deepTeal/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left justify-center">
          <span className="flex items-center justify-center h-5 w-5 rounded-full bg-brand-deepTeal/40 text-brand-primaryTeal shrink-0">
            <AppIcon icon={Megaphone01Icon} size={14} strokeWidth={2} />
          </span>
          <span className="font-sans font-medium text-neutral-lightGrey">
            <strong className="text-white font-semibold">VU CS619 & CS519 FYP Projects:</strong> Complete Project Development including Viva Preparation
          </span>
        </div>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EAB308] hover:bg-[#CA8A04] text-black font-sans font-semibold text-xs tracking-wide transition-colors shrink-0 shadow-xs"
        >
          <span>Book Your Project</span>
          <AppIcon icon={ArrowRight01Icon} size={14} strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}
