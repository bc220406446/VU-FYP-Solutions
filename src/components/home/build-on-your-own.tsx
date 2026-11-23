import React from "react";
import Link from "next/link";
import {
  Book02Icon,
  SourceCodeIcon,
  File01Icon,
  ComputerIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function BuildOnYourOwnSection() {
  const guideTopics = [
    {
      icon: File01Icon,
      title: "SRS & IEEE Documentation Guidelines",
      desc: "Step-by-step templates for functional requirements, use cases, ER diagrams, and sequence flows.",
    },
    {
      icon: SourceCodeIcon,
      title: "Clean Architecture & Database Schemas",
      desc: "Best practices for writing modular backend logic and designing 3NF normalized databases.",
    },
    {
      icon: ComputerIcon,
      title: "Real Viva Defense Questions & Answers",
      desc: "Curated questions asked by VU supervisors during Mid-Term and Final Viva presentations.",
    },
    {
      icon: Book02Icon,
      title: "Phase-by-Phase Submission Checklists",
      desc: "Avoid common rejections with supervisor-tested checklists before uploading to VULMS.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-white via-neutral-warmWhite to-white p-7 sm:p-10 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-deepTeal/10 text-brand-deepTeal text-xs font-semibold font-sans">
              <AppIcon icon={Book02Icon} size={14} strokeWidth={2} />
              <span>Self-Paced Student Track</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight leading-tight">
              Want to Build on <span className="text-brand-deepTeal">Your Own?</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
              Prefer to develop and document everything yourself? We have published complete, battle-tested development guidelines, templates, and viva defense tips in our Blog.
            </p>

            <p className="text-xs sm:text-sm text-neutral-mutedGrey font-sans">
              Learn how to format documentation to standard VU rubrics, structure your repositories, and prepare slides that supervisors commend.
            </p>

            <div className="pt-2">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-deepTeal hover:bg-[#095E63] text-white font-sans font-medium text-sm transition-colors shadow-xs"
              >
                <span>Read Development Guidelines in Blog</span>
                <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right Cards Column: 4 Guides */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guideTopics.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-white p-5 shadow-2xs hover:border-brand-deepTeal/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-deepTeal/10 text-brand-deepTeal flex items-center justify-center shrink-0">
                    <AppIcon icon={topic.icon} size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-brand-deepInk leading-snug">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-slateText font-sans leading-relaxed">
                  {topic.desc}
                </p>

                <div className="pt-1">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-deepTeal hover:underline"
                  >
                    <span>Read Guide</span>
                    <AppIcon icon={ArrowRight01Icon} size={13} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
