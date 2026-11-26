import React from "react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import type { StudentRemark } from "@/types";

interface StudentRemarksSectionProps {
  remarks: StudentRemark[];
}

export function StudentRemarksSection({ remarks }: StudentRemarksSectionProps) {
  return (
    <section
      id="student-remarks"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20"
    >
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 py-1 text-brand-deepTeal text-sm font-semibold font-sans">
          <span>Verified Student Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight">
          Student <span className="text-brand-deepTeal">Remarks</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
          What CS619 and CS519 students say after clearing their documentation,
          prototype, and final viva defenses with us.
        </p>
      </div>

      {/* Remarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remarks.map((remark) => (
          <article
            key={remark.id}
            className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans font-semibold text-brand-deepTeal">
                  {remark.course} • {remark.session}
                </span>
              </div>

              <p className="text-sm sm:text-base text-brand-deepInk font-sans leading-relaxed">
                &ldquo;{remark.quote}&rdquo;
              </p>
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-heading font-bold text-brand-deepInk">
                  {remark.studentName}
                </p>
                <p className="text-xs font-sans text-neutral-slateText">
                  {remark.projectTitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
