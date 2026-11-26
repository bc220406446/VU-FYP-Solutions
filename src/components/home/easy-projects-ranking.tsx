import React from "react";
import Link from "next/link";
import {
  UserCheck01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  StarIcon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function EasyProjectsRanking() {
  const easyCategories = [
    {
      title: "Answer Question Community, Learning and Knowledge Platform",
      category: "Web Application Development",
      supervisor: "Abdullah Qamar",
      button: "View Details",
    },
    {
      title: "Charity Management System for Donation and Request Handling",
      category: "Web Application Development",
      supervisor: "Ammara Rasheed",
      button: "View Details",
    },
    {
      title: "CampusEase – Smart Lost & Found System for University Campuses",
      category: "Web Application Development",
      supervisor: "Ehsan Ul Haq",
      button: "View Details",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="rounded-2xl border border-border bg-white p-7 sm:p-10 shadow-card">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-border">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight">
              Want to Choose an <span className="text-brand-deepTeal">Easy Project?</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
              Explore our curated list of Virtual University Final Year Projects, organized ranking-wise based on our assessment to help you make an informed decision
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-xs shrink-0"
          >
            <span>Explore Easy Projects</span>
            <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* 3 Ranked Categories */}
        <h4 className="text-xl sm:text-2xl font-bold font-heading text-brand-deepInk tracking-tight pt-8 text-center">
          Our <span className="text-brand-deepTeal">Top 3 Recommended </span> Easy Projects For You
        </h4>
                {/* 3 Recommended Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {easyCategories.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-border bg-neutral-warmWhite/50 hover:bg-white p-6 flex flex-col justify-between space-y-5 hover:border-brand-deepTeal/50 transition-all duration-200 shadow-2xs hover:shadow-card group"
            >
              <div className="space-y-3.5">
                {/* Project Title */}
                <h3 className="font-heading font-bold text-base text-brand-deepInk leading-snug group-hover:text-brand-deepTeal transition-colors line-clamp-2 min-h-[44px]">
                  {project.title}
                </h3>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium font-sans text-brand-deepTeal">
                    {project.category}
                  </span>
                </div>

                {/* Supervisor Display */}
                <div className="flex items-center gap-2 text-xs text-neutral-slateText pt-1">
                  <span className="text-brand-deepTeal shrink-0">
                    <AppIcon icon={UserCheck01Icon} size={16} strokeWidth={2} />
                  </span>
                  <span className="font-medium text-brand-deepInk">{project.supervisor}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border/80">
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-brand-deepTeal hover:text-white hover:border-brand-deepTeal font-sans font-medium text-xs transition-colors shadow-2xs"
                >
                  <span>{project.button}</span>
                  <AppIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
