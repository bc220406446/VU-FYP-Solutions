import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight01Icon,
  GlobalIcon,
  ArrowUpRight01Icon,
  WhatsappIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | VU FYP Solutions (CS619 & CS519)",
  description:
    "Get in touch with VU FYP Solutions on WhatsApp or email for CS619 & CS519 project handling, individual phase assignments, viva preparation, and LMS handling.",
  openGraph: {
    title: "Contact Us | VU FYP Solutions",
    description:
      "Discuss your CS619 or CS519 Final Year Project requirements directly with our team.",
  },
};

export default function ContactPage() {
  const directWhatsAppUrl = buildWhatsAppUrl({
    message:
      "Hello VU FYP Solutions, I would like to discuss my CS619 / CS519 Final Year Project.",
  });

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
          <span className="text-brand-deepInk font-medium">Contact</span>
        </nav>

        {/* Page Title & Introductory Header */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
            Contact <span className="text-brand-deepTeal">Us</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Have a question about CS619, CS519, individual phases, or VU LMS
            handling? Reach out directly on WhatsApp or send your requirements
            below.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Direct Card */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 py-2.5">
                <div className="h-10 w-10 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                  <AppIcon icon={WhatsappIcon} size={20} strokeWidth={1.9} />
                </div>
                <div>
                  <h2 className="text-base font-bold font-heading text-brand-deepInk">
                    WhatsApp Support
                  </h2>
                  <p className="text-sm font-mono font-semibold text-brand-deepInk">
                    {siteConfig.contact.whatsappDisplay}
                  </p>
                </div>
              </div>

              <Link
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-2xs"
              >
                <AppIcon icon={WhatsappIcon} size={17} strokeWidth={2} />
                <span>Chat on WhatsApp</span>
                <AppIcon icon={ArrowRight01Icon} size={15} strokeWidth={2} />
              </Link>
            </div>

            {/* Email Direct Card */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 py-2.5">
                <div className="h-10 w-10 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                  <AppIcon icon={Mail01Icon} size={20} strokeWidth={1.9} />
                </div>
                <div>
                  <h2 className="text-base font-bold font-heading text-brand-deepInk">
                    Email Inquiry
                  </h2>
                  <p className="text-sm font-mono font-semibold text-brand-deepInk truncate">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-2xs"
              >
                <AppIcon icon={Mail01Icon} size={17} strokeWidth={2} />
                <span>Send Email</span>
                <AppIcon icon={ArrowRight01Icon} size={15} strokeWidth={2} />
              </a>
            </div>

            {/* View My Portfolio */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-card space-y-4">
              <div className="flex items-center gap-3 py-2.5">
                <div className="h-10 w-10 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                  <AppIcon
                    icon={GlobalIcon}
                    size={20}
                    strokeWidth={1.9}
                  />
                </div>
                <div>
                  <h2 className="text-base font-bold font-heading text-brand-deepInk">
                    View My Portfolio
                  </h2>
                  <p className="text-sm font-mono font-semibold text-brand-deepInk">
                    devkamran.me
                  </p>
                </div>
              </div>

              <Link
                href="https://devkamran.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-2xs"
              >
                <span>Visit Portfolio</span>
                <AppIcon icon={ArrowUpRight01Icon} size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
