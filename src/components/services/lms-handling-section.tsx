import React from "react";
import Link from "next/link";
import {
  Tick02Icon,
  WhatsappIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function LmsHandlingSection() {
  const fullSemesterUrl = buildWhatsAppUrl({
    serviceTitle: "Full Semester LMS Handling - Up to 6 Books (Rs. 7,200)",
  });

  const halfSemesterUrl = buildWhatsAppUrl({
    serviceTitle: "Half Semester LMS Handling - Up to 6 Books (Rs. 3,600)",
  });

  const individualLmsUrl = buildWhatsAppUrl({
    serviceTitle: "Individual LMS Activity Handling (Assignment / GDB / Quiz)",
  });

  return (
    <section
      id="lms-handling"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 text-brand-deepTeal text-xs font-semibold font-sans">
          <span>Want LMS Handling Too? We will cover you there too.</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight">
          VU LMS <span className="text-brand-deepTeal">Handling</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-slateText font-sans">
          Stay stress-free all semester with full-semester, half-semester, or
          individual LMS activity handling.
        </p>
      </div>

      {/* 3-Card Grid matching Project Handling Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Half Semester Handling */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-card flex flex-col justify-between hover:border-brand-primaryTeal/50 transition-all duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Half Semester LMS Handling
              </h3>
            </div>

            <div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#B45309]">
                  Rs. 3,600
                </span>
                <span className="text-xs font-sans text-neutral-mutedGrey">
                  / up to 6 books
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Package Includes</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Up to 6 Subjects / Books Covered</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Pre-Midterm or Post-Midterm Half</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>All Assignments, GDBs &amp; Quizzes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Lecture Watching </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Important Files Provision for exams</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>On-Time Submission Before Deadlines</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={halfSemesterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-sm"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
              <span>Book Half Semester</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Card 2: Full Semester Handling */}
        <div className="rounded-xl border-2 border-brand-deepTeal/40 bg-white p-7 shadow-elevated flex flex-col justify-between relative">
          <div className="absolute -top-3 right-6 bg-brand-deepTeal text-white text-[11px] font-sans font-semibold px-3 py-0.5 rounded-full shadow-2xs">
            Best Value
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Full Semester LMS Handling
              </h3>
            </div>

            <div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#B45309]">
                  Rs. 7,200
                </span>
                <span className="text-xs font-sans text-neutral-mutedGrey">
                  / up to 6 books
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Package Includes</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Up to 6 Subjects / Books Covered</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Complete Semester (Mid + Final Term)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>All Assignments, GDBs &amp; Quizzes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Lecture Watching </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Important Files Provision for exams</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>On-Time Submission Before Deadlines</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={fullSemesterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white font-sans font-medium text-sm transition-colors shadow-sm"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} />
              <span>Book Full Semester</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Card 3: Individual LMS Services */}
        <div className="rounded-xl border border-border bg-white p-7 shadow-card flex flex-col justify-between hover:border-brand-primaryTeal/50 transition-all duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-heading text-brand-deepInk">
                Individual LMS Services
              </h3>
            </div>

            <div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-slateText font-sans leading-relaxed">
                Need help with a single assignment, GDB, or quiz? Order any
                individual LMS task on demand.
              </p>
            </div>

            <ul className="space-y-3 border-t border-border pt-5 text-sm text-neutral-slateText font-sans">
              <li className="flex items-start gap-2.5">
                <b>Individual Tasks Cover</b>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Normal Assignment Solution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Cisco Certification Assignment Solution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>GDB Solution</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Quiz Assistance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>Lecture Watching</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 shrink-0">
                  <AppIcon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                </span>
                <span>All Subjects Supported</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 mt-auto">
            <Link
              href={individualLmsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-warmWhite border border-border text-brand-deepInk hover:bg-white hover:border-brand-primaryTeal/40 font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <AppIcon icon={WhatsappIcon} size={18} strokeWidth={2} className="text-emerald-600" />
              <span>Inquire for Single Task</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
