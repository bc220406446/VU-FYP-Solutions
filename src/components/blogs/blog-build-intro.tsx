import React from "react";
import {
  File01Icon,
  Layers01Icon,
  BashIcon,
  ComputerIcon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export function BlogBuildIntro() {
  const phaseSteps = [
    {
      icon: File01Icon,
      title: "SRS",
      desc: "Read our blogs to learn how to define project scope, write functional and non-functional requirements, draw use case diagrams, write usage scenarios, and build a Gantt chart.",
    },
    {
      icon: Layers01Icon,
      title: "Design Document",
      desc: "Read our blogs to learn how to design system architecture, create ER diagrams, database schemas, class and sequence diagrams, UI wireframes, and test cases.",
    },
    {
      icon: BashIcon,
      title: "Prototype",
      desc: "Read our blogs to learn how to set up your development environment, connect your database, implement core modules, and prepare for your prototype review.",
    },
    {
      icon: ComputerIcon,
      title: "Final Deliverable",
      desc: "Read our blogs to learn how to complete your source code, compile the final report, prepare presentation slides, and defend your final viva confidently.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-white via-neutral-warmWhite to-white p-7 sm:p-10 shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight leading-tight">
              Working on Your Project{" "}
              <span className="text-brand-deepTeal">on Your Own?</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
              Read our blog to learn how to build and document every step of
              your CS619 or CS519 Final Year Project on your own.
            </p>

            <p className="text-xs sm:text-sm text-neutral-mutedGrey font-sans">
              Follow our step-by-step documentation guides below to format
              diagrams, schemas, and test cases according to VU rubrics.
            </p>
          </div>

          {/* Right Cards Column: 4 Phase Guides */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phaseSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-white p-5 shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-deepTeal text-white flex items-center justify-center shrink-0">
                    <AppIcon icon={step.icon} size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-brand-deepInk leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-slateText font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
