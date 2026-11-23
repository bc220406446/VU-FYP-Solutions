import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsappIcon,
  ArrowRight01Icon,
  SourceCodeIcon,
  File01Icon,
  ComputerIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const discussWhatsAppUrl = buildWhatsAppUrl({
    message: "Hello VU FYP Solutions, I would like to discuss my CS619 / CS519 Final Year Project.",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Headline and Call-to-actions */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk leading-[1.18] tracking-tight">
            Complete FYP <br className="hidden sm:inline" />
            Solutions for <br className="hidden sm:inline" />
            <span className="text-brand-deepTeal">VU Students</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-slateText font-sans leading-relaxed max-w-xl">
            From project documentation to complete implementation and viva preparation,
            get the technical support you need for your CS619 or CS519 final year project.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Link
              href={discussWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-deepTeal hover:bg-[#095E63] text-white font-sans font-medium text-sm transition-colors shadow-sm"
            >
              <AppIcon icon={WhatsappIcon} size={20} strokeWidth={2} />
              <span>Discuss Your Project</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite hover:border-brand-primaryTeal/40 font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>View Projects</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Right Column: WebP Hero Scene Image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-border bg-white shadow-elevated p-2 sm:p-3 overflow-hidden">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-warmWhite">
              <Image
                src="/images/general/hero-laptop.webp"
                alt="VU FYP Project - Documentation, Implementation, Testing and Viva Preparation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
