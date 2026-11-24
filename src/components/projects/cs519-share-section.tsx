import React from "react";
import Link from "next/link";
import {
  File01Icon,
  WhatsappIcon,
  CheckmarkCircle02Icon,
  Mortarboard02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CS519ShareSection() {
  const whatsappShareUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I have a CS519 Project file. I would like to share the file, discuss feasibility, and get complete handling support.",
  });

  const highlights = [
    {
      title: "Direct File & Proposal Review",
      desc: "Send your PDF, Word document, or proposal text on WhatsApp for rapid feasibility inspection.",
    },
    {
      title: "Supervisor Rubric Alignment",
      desc: "We verify supervisor-specific expectations, tool constraints, and marking schemes beforehand.",
    },
    {
      title: "Milestone-by-Milestone Roadmap",
      desc: "Full assistance covering documentation, coding, database integration, and viva coaching.",
    },
  ];

  return (
    <section className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-white via-neutral-warmWhite to-white p-7 sm:p-10 shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Heading and pitch */}
        <div className="lg:col-span-7 space-y-4">
          
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight leading-tight">
            Do You Have a <span className="text-brand-deepTeal">CS519 Project?</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Have a CS519 project? Share your project requirements directly with us. We deliver complete development from documentation to final defense.
          </p>


        </div>

        {/* Right Column: Visual File Sharing Card */}
        <div className="lg:col-span-5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
            <Link
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-xs"
            >
              <AppIcon icon={WhatsappIcon} size={20} strokeWidth={2} />
              <span>Discuss on WhatsApp</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>Explore All Services</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
