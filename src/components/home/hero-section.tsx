import React from "react";
import Link from "next/link";
import {
  WhatsappIcon,
  ArrowRight01Icon,
  SourceCodeIcon,
  File01Icon,
  ComputerIcon,
  CheckmarkCircle02Icon,
  Mortarboard02Icon,
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
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-deepTeal font-sans bg-brand-deepTeal/10 px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primaryTeal animate-pulse"></span>
            Virtual University • CS619 / CS519
          </div>

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
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-deepTeal hover:bg-[#0A5A5E] text-white font-sans font-medium text-sm transition-all shadow-sm group"
            >
              <AppIcon icon={WhatsappIcon} size={20} strokeWidth={2} />
              <span>Discuss Your Project</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite hover:border-brand-primaryTeal/40 font-sans font-medium text-sm transition-all shadow-2xs"
            >
              <span>View Projects</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>

          {/* Key Feature Highlights */}
          <div className="pt-6 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center text-brand-deepTeal shrink-0 shadow-2xs">
                <AppIcon icon={SourceCodeIcon} size={20} strokeWidth={1.8} />
              </div>
              <div className="text-xs">
                <span className="font-heading font-semibold text-brand-deepInk block">
                  Project
                </span>
                <span className="text-neutral-slateText font-sans">Development</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center text-brand-deepTeal shrink-0 shadow-2xs">
                <AppIcon icon={File01Icon} size={20} strokeWidth={1.8} />
              </div>
              <div className="text-xs">
                <span className="font-heading font-semibold text-brand-deepInk block">
                  Documentation
                </span>
                <span className="text-neutral-slateText font-sans">(SRS, Design, Reports)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center text-brand-deepTeal shrink-0 shadow-2xs">
                <AppIcon icon={ComputerIcon} size={20} strokeWidth={1.8} />
              </div>
              <div className="text-xs">
                <span className="font-heading font-semibold text-brand-deepInk block">
                  Viva
                </span>
                <span className="text-neutral-slateText font-sans">Preparation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Device / Binder Mockup Representation */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Ambient subtle glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-deepTeal/10 to-brand-primaryTeal/10 rounded-2xl blur-xl -z-10" />

            {/* Laptop Mockup Box */}
            <div className="rounded-xl border border-border bg-white shadow-elevated overflow-hidden">
              {/* Laptop Header Bar */}
              <div className="bg-brand-deepInk px-4 py-2.5 flex items-center justify-between border-b border-brand-slate">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[11px] text-neutral-mutedGrey tracking-wide">
                  VU FYP Project Portal
                </span>
                <div className="w-10"></div>
              </div>

              {/* Laptop Screen Content */}
              <div className="p-6 bg-gradient-to-b from-brand-darkNavy to-brand-deepInk text-white space-y-5">
                <div className="flex items-center justify-between border-b border-brand-slate pb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-brand-primaryTeal font-mono font-medium">
                      Final Deliverable Checklist
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white mt-0.5">
                      VU FYP Project
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-brand-deepTeal/20 border border-brand-primaryTeal/40 flex items-center justify-center text-brand-primaryTeal">
                    <AppIcon icon={Mortarboard02Icon} size={22} strokeWidth={2} />
                  </div>
                </div>

                {/* Milestone Checklist items */}
                <div className="space-y-3">
                  {[
                    { title: "Documentation", desc: "SRS, Design & Test Cases" },
                    { title: "Implementation", desc: "Clean code & working software" },
                    { title: "Testing & Fixes", desc: "Bug-free supervisor submission" },
                    { title: "Viva Preparation", desc: "Q&A guide & presentation slides" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-primaryTeal/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-400 shrink-0">
                          <AppIcon icon={CheckmarkCircle02Icon} size={18} strokeWidth={2.2} />
                        </span>
                        <div>
                          <span className="text-sm font-sans font-medium text-white block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-neutral-mutedGrey font-sans">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                        Complete
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Project Binder Badges */}
            <div className="mt-4 flex items-center justify-end gap-3">
              <div className="flex items-center gap-2 bg-brand-slate text-white px-4 py-2 rounded-lg border border-white/10 shadow-sm">
                <div className="w-2 h-6 rounded-full bg-brand-deepTeal" />
                <div className="text-xs font-mono font-bold tracking-wider">CS619</div>
              </div>
              <div className="flex items-center gap-2 bg-brand-deepInk text-white px-4 py-2 rounded-lg border border-white/10 shadow-sm">
                <div className="w-2 h-6 rounded-full bg-[#D97706]" />
                <div className="text-xs font-mono font-bold tracking-wider">CS519</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
