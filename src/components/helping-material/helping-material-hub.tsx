import React from "react";
import Link from "next/link";
import {
  File01Icon,
  Image01Icon,
  Download01Icon,
  ComputerIcon,
  Layers01Icon,
  BashIcon,
  Grid02Icon,
  Book02Icon,
  Mortarboard02Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import type {
  DevelopmentSoftwareItem,
  DocumentResourceItem,
  ProgrammingResourceItem,
} from "@/data/helping-material";

const SOFTWARE_ICONS: Record<
  DevelopmentSoftwareItem["iconKey"],
  typeof ComputerIcon
> = {
  code: BashIcon,
  diagram: Layers01Icon,
  api: ComputerIcon,
  design: Grid02Icon,
};

interface HelpingMaterialHubProps {
  patterns: DocumentResourceItem[];
  samples: DocumentResourceItem[];
  software: DevelopmentSoftwareItem[];
  programming: ProgrammingResourceItem[];
  vivaFiles: DocumentResourceItem[];
}

export function HelpingMaterialHub({
  patterns,
  samples,
  software,
  programming,
  vivaFiles,
}: HelpingMaterialHubProps) {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {/* Section 2: Documentation Patterns | Samples of Work (Two Columns) */}
      <section aria-label="Documentation Patterns and Samples">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <DocumentGroupCard
            title="Documentation Patterns"
            subtitle="Ready-to-follow official formats for CS519 and CS619."
            items={patterns}
          />

          <DocumentGroupCard
            title="Samples of Work"
            subtitle="Reference examples of completed documentation and presentations."
            items={samples}
          />
        </div>
      </section>

      {/* Section 3: Development Software | Programming & Learning Resources (Two Columns) */}
      <section aria-label="Development Software and Learning Resources">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Development Software */}
          <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card space-y-5">
            <div className="flex items-start gap-3">
              <div>
                <h2 className="text-xl font-bold font-heading text-brand-deepInk">
                  Development Software
                </h2>
                <p className="text-xs sm:text-sm text-neutral-slateText font-sans mt-0.5">
                  Essential tools for coding, diagramming, API testing, and UI
                  design.
                </p>
              </div>
            </div>

            <ul className="divide-y divide-border border-t border-border">
              {software.map((item) => {
                const IconComponent = SOFTWARE_ICONS[item.iconKey];
                return (
                  <li
                    key={item.id}
                    className="py-3.5 first:pt-4 last:pb-0 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="min-w-0">
                        <p className="text-sm font-heading font-semibold text-brand-deepInk">
                          {item.name}
                        </p>
                        <p className="text-xs text-neutral-slateText font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs font-sans font-medium shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepTeal transition-colors shrink-0"
                    >
                      <span>Visit Website</span>
                      <AppIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Programming & Learning Resources */}
          <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card space-y-5">
            <div className="flex items-start gap-3">
              <div>
                <h2 className="text-xl font-bold font-heading text-brand-deepInk">
                  Programming &amp; Learning Resources
                </h2>
                <p className="text-xs sm:text-sm text-neutral-slateText font-sans mt-0.5">
                  Official documentation and learning guides for core FYP
                  technologies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              {programming.map((tech) =>
                tech.url ? (
                  <Link
                    key={tech.id}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-border bg-neutral-warmWhite/60 hover:bg-white hover:border-brand-primaryTeal/50 px-4 py-3 flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepTeal transition-colors"
                  >
                    <span className="text-sm font-sans font-semibold text-brand-deepInk group-hover:text-brand-deepTeal transition-colors">
                      {tech.name}
                    </span>
                    <AppIcon
                      icon={ArrowUpRight01Icon}
                      size={15}
                      strokeWidth={2}
                      className="text-neutral-mutedGrey group-hover:text-brand-deepTeal transition-colors shrink-0"
                    />
                  </Link>
                ) : (
                  <div
                    key={tech.id}
                    className="rounded-lg border border-border bg-neutral-warmWhite/40 px-4 py-3 flex items-center justify-between gap-2"
                  >
                    <span className="text-sm font-sans font-semibold text-brand-deepInk">
                      {tech.name}
                    </span>
                    <span className="text-[11px] font-sans text-neutral-mutedGrey">
                      Soon
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Full-Width Viva & Project Preparation */}
      <section
        aria-labelledby="viva-prep-heading"
        className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card space-y-5"
      >
        <div className="flex items-start gap-3">
          <div>
            <h2
              id="viva-prep-heading"
              className="text-xl font-bold font-heading text-brand-deepInk"
            >
              Viva &amp; Project Preparation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-slateText font-sans mt-0.5">
              Prepare for your project presentation, technical questions and
              final evaluation.
            </p>
          </div>
        </div>

        {vivaFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border pt-5">
            {vivaFiles.map((file) => (
              <div
                key={file.id}
                className="rounded-lg border border-border bg-neutral-warmWhite/60 p-4 flex flex-col justify-between gap-4"
              >
                <p className="text-sm font-sans font-medium text-brand-deepInk leading-snug">
                  {file.fileName}
                </p>

                <a
                  href={file.downloadUrl}
                  download={file.fileName}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs font-sans font-medium shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepTeal transition-colors"
                >
                  <AppIcon icon={Download01Icon} size={14} strokeWidth={2} />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-border pt-5 space-y-4">
            <div className="rounded-lg border border-dashed border-border bg-neutral-warmWhite/60 px-5 py-7 text-center space-y-3">
              <p className="text-sm font-heading font-semibold text-brand-deepInk">
                Viva preparation PDFs will be added here soon
              </p>
              <p className="text-xs sm:text-sm font-sans text-neutral-slateText max-w-xl mx-auto">
                In the meantime, use the CS519 &amp; CS619 Presentation Patterns
                and Samples above, or explore our viva preparation services and
                guidelines:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                <Link
                  href="/services#cs619-final-viva-prep"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-border text-xs font-sans font-medium text-brand-deepTeal hover:bg-brand-deepTeal hover:text-white hover:border-brand-deepTeal transition-colors"
                >
                  CS619 Viva Prep
                </Link>
                <Link
                  href="/services#cs519-final-viva-prep"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-border text-xs font-sans font-medium text-brand-deepTeal hover:bg-brand-deepTeal hover:text-white hover:border-brand-deepTeal transition-colors"
                >
                  CS519 Viva Prep
                </Link>
                <Link
                  href="/blogs"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-border text-xs font-sans font-medium text-brand-deepInk hover:border-brand-deepTeal/50 transition-colors"
                >
                  Viva Guidelines (Blog)
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

interface DocumentGroupCardProps {
  title: string;
  subtitle: string;
  items: DocumentResourceItem[];
}

function DocumentGroupCard({
  title,
  subtitle,
  items,
}: DocumentGroupCardProps) {
  const cs519Items = items.filter((item) => item.course === "CS519");
  const cs619Items = items.filter((item) => item.course === "CS619");

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card space-y-6">
      {/* Column Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div>
            <h2 className="text-xl font-bold font-heading text-brand-deepInk">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-slateText font-sans mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* CS519 Group */}
      <div className="space-y-2 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-deepTeal">
            CS519
          </span>
        </div>
        <ul className="divide-y divide-border">
          {cs519Items.map((item) => (
            <DocumentRow key={item.id} item={item} />
          ))}
        </ul>
      </div>

      {/* CS619 Group */}
      <div className="space-y-2 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-deepTeal">
            CS619
          </span>
        </div>
        <ul className="divide-y divide-border">
          {cs619Items.map((item) => (
            <DocumentRow key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function DocumentRow({ item }: { item: DocumentResourceItem }) {
  return (
    <li className="py-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="min-w-0">
          <p className="text-sm font-sans font-medium text-brand-deepInk truncate">
            {item.fileName}
          </p>
        </div>
      </div>

      <a
        href={item.downloadUrl}
        download={item.fileName}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs font-sans font-medium shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepTeal transition-colors shrink-0"
      >
        <AppIcon icon={Download01Icon} size={14} strokeWidth={2} />
        <span>Download</span>
      </a>
    </li>
  );
}
