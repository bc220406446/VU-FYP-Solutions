import React from "react";
import Link from "next/link";
import {
  File01Icon,
  Layers01Icon,
  BashIcon,
  ComputerIcon,
  Book02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

interface BuildOnYourOwnSectionProps {
  hideActions?: boolean;
}

export function BuildOnYourOwnSection({
  hideActions = false,
}: BuildOnYourOwnSectionProps = {}) {
  const guideTopics = [
    {
      icon: File01Icon,
      title: "SRS Guidelines",
      desc: "Learn to define project scope, write functional and non-functional requirements, create use case diagrams and usage scenarios, select a development methodology, and prepare a Gantt chart.",
      link: "/blogs/srs-guidelines",
    },
    {
      icon: Layers01Icon,
      title: "Design Document Guidelines",
      desc: "Learn to design system architecture, create database schemas, ER diagrams, class diagrams, sequence diagrams, UI wireframes and write Test Cases.",
      link: "/blogs/design-document-guidelines",
    },
    {
      icon: BashIcon,
      title: "Prototype Development",
      desc: "Learn to set up a working prototype, connect databases, implement essential features, and demonstrate core functionalities for supervisor review.",
      link: "/blogs/prototype-development",
    },
    {
      icon: ComputerIcon,
      title: "Final Deliverable Development",
      desc: "Learn to complete source code, deploy your application, write documentation, prepare presentation slides, and confidently defend your project in the final viva.",
      link: "/blogs/final-deliverable-development",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-white via-neutral-warmWhite to-white p-7 sm:p-10 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-brand-deepTeal text-xs font-semibold font-sans">
              Self-Paced Student Track
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

            {!hideActions && (
              <div className="pt-2">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-xs"
                >
                  <span>Read Development Guidelines in Blog</span>
                  <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Cards Column: 4 Milestone Guides */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guideTopics.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-white p-5 shadow-2xs hover:border-brand-deepTeal/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                    <AppIcon icon={topic.icon} size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-brand-deepInk leading-snug">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-slateText font-sans leading-relaxed">
                  {topic.desc}
                </p>

                {!hideActions && (
                  <div className="pt-1">
                    <Link
                      href={topic.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-deepTeal hover:underline"
                    >
                      <span>Read Guide</span>
                      <AppIcon icon={ArrowRight01Icon} size={13} strokeWidth={2} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
