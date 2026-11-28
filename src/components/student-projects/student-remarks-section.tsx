"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import type { ServiceCourse, StudentRemark } from "@/types";

interface StudentRemarksSectionProps {
  remarks: StudentRemark[];
}

export function StudentRemarksSection({ remarks }: StudentRemarksSectionProps) {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState<ServiceCourse>("CS619");
  const [remarksText, setRemarksText] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSubmitOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSubmitOpen]);

  const handleOpenModal = () => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitOpen(true);
  };

  const handleCloseModal = () => {
    setIsSubmitOpen(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/student-remarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName,
          projectName,
          projectType,
          remarks: remarksText,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitError(result.error || "Could not submit your remarks.");
        return;
      }

      setSubmitSuccess(true);
      setStudentName("");
      setProjectName("");
      setProjectType("CS619");
      setRemarksText("");
    } catch {
      setSubmitError("Network error while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="student-remarks"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 space-y-6"
    >
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
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
                  {remark.course}
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

      {/* Share Remarks CTA Block */}
      <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk">
            Developed Your Project With Us?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-slateText font-sans">
            Submit your experience publicly so other students can see how we
            worked with you.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenModal}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-sm font-sans font-medium transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          Share Remarks for Us
        </button>
      </div>

      {/* Share Remarks Modal */}
      {isSubmitOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(5, 22, 26, 0.65)",
              backdropFilter: "blur(3px)",
              padding: "1rem",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-remarks-modal-title"
            onClick={handleCloseModal}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "36rem",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
              }}
              className="rounded-2xl border border-border bg-white shadow-elevated overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-border bg-neutral-warmWhite/60 shrink-0">
                <h2
                  id="share-remarks-modal-title"
                  className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk"
                >
                  Share Remarks for Us
                </h2>
                <p className="text-xs sm:text-sm font-sans text-neutral-slateText mt-0.5">
                  Tell future students about your project experience with VU FYP
                  Solutions.
                </p>
              </div>

              <form
                id="share-remarks-form"
                onSubmit={handleSubmit}
                style={{ flex: "1 1 auto", minHeight: 0, overflowY: "auto" }}
                className="p-6 space-y-4"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="remark-student-name"
                    className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="remark-student-name"
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Hamza Tariq"
                    className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="remark-project-name"
                      className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                    >
                      Project Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="remark-project-name"
                      type="text"
                      required
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="e.g. Sovereign Store"
                      className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="remark-project-type"
                      className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                    >
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="remark-project-type"
                      value={projectType}
                      onChange={(e) =>
                        setProjectType(e.target.value as ServiceCourse)
                      }
                      className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                    >
                      <option value="CS619">CS619</option>
                      <option value="CS519">CS519</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="remark-text"
                    className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                  >
                    Remarks for Us <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="remark-text"
                    rows={4}
                    required
                    value={remarksText}
                    onChange={(e) => setRemarksText(e.target.value)}
                    placeholder="Share how our documentation, development, setup, or viva prep helped you..."
                    className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal resize-y"
                  />
                </div>

                {submitError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs sm:text-sm text-red-700 font-sans">
                    {submitError}
                  </div>
                )}

                {submitSuccess && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 flex items-start gap-2 text-xs sm:text-sm text-emerald-900 font-sans">
                    <p className="p-2 mt-0.5 shrink-0 text-emerald-600 font-medium">
                      Thank you! Your remarks have been submitted and will be
                      published after review.
                    </p>
                  </div>
                )}
              </form>

              <div className="px-6 py-4 border-t border-border bg-neutral-warmWhite/40 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="share-remarks-form"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy disabled:opacity-60 text-white text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
