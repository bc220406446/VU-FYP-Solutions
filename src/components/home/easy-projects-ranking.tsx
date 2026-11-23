import React from "react";
import Link from "next/link";
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  StarIcon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function EasyProjectsRanking() {
  const easyCategories = [
    {
      rank: "#1",
      title: "Web-Based Portals & Booking Systems",
      stack: "PHP, Laravel or Next.js + MySQL",
      reason: "Predictable CRUD scope, established supervisor grading criteria, and lowest viva defense failure rate.",
      approvalRate: "99% Pass Rate",
      vivaDifficulty: "Low Complexity",
    },
    {
      rank: "#2",
      title: "Academic & Community Management Portals",
      stack: "React, Node.js or Django + PostgreSQL",
      reason: "Structured role-based authentication with straightforward database relations that supervisors approve quickly.",
      approvalRate: "97% Pass Rate",
      vivaDifficulty: "Manageable",
    },
    {
      rank: "#3",
      title: "Streamlit / Python Data Explorers",
      stack: "Python, scikit-learn, Pandas",
      reason: "Clear dataset boundaries, algorithmic transparency, and minimal client-side deployment hurdles.",
      approvalRate: "95% Pass Rate",
      vivaDifficulty: "Moderate",
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
              Check out our Easy Projects Ranking curated for high supervisor approval, manageable tech stacks, and minimal viva stress.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-deepTeal hover:bg-[#095E63] text-white font-sans font-medium text-sm transition-colors shadow-xs shrink-0"
          >
            <span>Explore Easy Projects Ranking</span>
            <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* 3 Ranked Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {easyCategories.map((cat) => (
            <div
              key={cat.rank}
              className="rounded-xl border border-border/80 bg-neutral-warmWhite p-5 flex flex-col justify-between space-y-4 hover:border-brand-deepTeal/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center h-7 w-7 rounded-md bg-brand-deepTeal text-white font-mono text-xs font-bold">
                    {cat.rank}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {cat.approvalRate}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-brand-deepInk leading-snug">
                  {cat.title}
                </h3>

                <div className="font-mono text-xs text-brand-deepTeal font-medium">
                  {cat.stack}
                </div>

                <p className="text-xs text-neutral-slateText font-sans leading-relaxed">
                  {cat.reason}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-sans text-neutral-mutedGrey">
                <span className="flex items-center gap-1.5">
                  <AppIcon icon={CheckmarkCircle02Icon} size={15} className="text-emerald-600" />
                  <span>{cat.vivaDifficulty}</span>
                </span>
                <Link
                  href="/projects"
                  className="font-medium text-brand-deepTeal hover:underline flex items-center gap-1"
                >
                  <span>Select</span>
                  <AppIcon icon={ArrowRight01Icon} size={13} strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
