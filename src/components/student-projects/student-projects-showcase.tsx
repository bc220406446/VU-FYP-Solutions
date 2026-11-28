"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight01Icon,
  GithubIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import type { ServiceCourse, StudentProjectWork } from "@/types";

type WorkFilter = "All" | ServiceCourse;

const FILTERS: WorkFilter[] = ["All", "CS619", "CS519"];

interface StudentProjectsShowcaseProps {
  projects: StudentProjectWork[];
}

export function StudentProjectsShowcase({
  projects,
}: StudentProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.course === activeFilter);

  return (
    <section
      id="portfolio-grid"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 sm:pb-16 scroll-mt-20"
    >
      {/* Centered Header + Filters */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight">
          Completed <span className="text-brand-deepTeal">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
          Browse real CS619 and CS519 deliverables built cleanly and defended
          successfully.
        </p>

        {/* Centered Filter Pills: All, CS619, CS519 */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 pt-3"
          role="tablist"
          aria-label="Filter projects by course"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5",
                  isActive
                    ? "bg-brand-deepTeal text-white shadow-xs font-semibold"
                    : "bg-white border border-border text-neutral-slateText hover:text-brand-deepInk hover:border-brand-primaryTeal/40"
                )}
              >
                <span>{filter}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-border bg-white overflow-hidden shadow-card hover:border-brand-primaryTeal/50 hover:shadow-elevated transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Preview Image */}
              {project.image && (
                <div className="relative h-48 w-full bg-brand-darkNavy overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fill object-top"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-sans font-semibold bg-brand-deepInk/85 text-white backdrop-blur-xs">
                      {project.course}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 pb-4 space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs font-sans">
                  <span className="font-semibold text-brand-deepTeal">
                    {project.domain} • {project.categoryLabel}
                  </span>
                  <span className="text-neutral-mutedGrey">
                    {project.session}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-brand-deepInk leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Card Footer: See Live & View GitHub */}
            <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-xs sm:text-sm transition-colors shadow-2xs"
              >
                <span>See Live</span>
                <AppIcon icon={ArrowUpRight01Icon} size={15} strokeWidth={2} />
              </Link>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-warmWhite border border-border text-brand-deepInk hover:bg-white hover:border-brand-primaryTeal/50 font-sans font-medium text-xs sm:text-sm transition-colors"
              >
                <AppIcon icon={GithubIcon} size={16} strokeWidth={2} />
                <span>View GitHub</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
