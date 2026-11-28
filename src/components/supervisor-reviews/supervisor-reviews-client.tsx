"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Search01Icon, Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import type {
  SupervisorBehaviour,
  VivaExperience,
} from "@/data/supervisor-reviews";

interface SupervisorReviewsClientProps {
  experiences: VivaExperience[];
}

function getCompletenessRank(item: VivaExperience): number {
  const hasTitle = item.projectTitle.trim().length > 0;
  const hasSupervisor = item.supervisorName.trim().length > 0;

  if (hasTitle && hasSupervisor) return 0; // 1. Both title and supervisor
  if (!hasTitle && hasSupervisor) return 1; // 2. Supervisor only, no title
  if (hasTitle && !hasSupervisor) return 2; // 3. Title only, no supervisor
  return 3; // 4. Neither
}

export function SupervisorReviewsClient({
  experiences,
}: SupervisorReviewsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBehaviour, setSelectedBehaviour] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<VivaExperience | null>(null);

  // Submit Experience Modal State
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [rating, setRating] = useState("5");
  const [behaviour, setBehaviour] = useState<SupervisorBehaviour>("Polite");
  const [experienceText, setExperienceText] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const rankDiff = getCompletenessRank(a) - getCompletenessRank(b);
      return rankDiff !== 0 ? rankDiff : a.id - b.id;
    });
  }, [experiences]);

  const filteredExperiences = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return sortedExperiences.filter((item) => {
      const matchesSearch =
        q === "" ||
        item.projectTitle.toLowerCase().includes(q) ||
        item.supervisorName.toLowerCase().includes(q);

      const matchesBehaviour =
        selectedBehaviour === "all" ||
        item.supervisorBehaviour.toLowerCase() ===
          selectedBehaviour.toLowerCase();

      const matchesRating =
        selectedRating === "all" || String(item.rating) === selectedRating;

      return matchesSearch && matchesBehaviour && matchesRating;
    });
  }, [sortedExperiences, searchTerm, selectedBehaviour, selectedRating]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedBehaviour !== "all" ||
    selectedRating !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBehaviour("all");
    setSelectedRating("all");
  };

  const displayedExperiences = showAll
    ? filteredExperiences
    : filteredExperiences.slice(0, 5);

  // Lock body scroll & close modal on Escape key
  useEffect(() => {
    if (!selectedExperience && !isSubmitOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedExperience(null);
        setIsSubmitOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience, isSubmitOpen]);

  const handleOpenSubmitModal = () => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitOpen(true);
  };

  const handleCloseSubmitModal = () => {
    setIsSubmitOpen(false);
    setSubmitError(null);
  };

  const handleSubmitExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectTitle,
          supervisorName,
          rating: Number(rating),
          supervisorBehaviour: behaviour,
          experience: experienceText,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitError(result.error || "Could not submit your experience.");
        return;
      }

      setSubmitSuccess(true);
      setProjectTitle("");
      setSupervisorName("");
      setRating("5");
      setBehaviour("Polite");
      setExperienceText("");
    } catch {
      setSubmitError("Network error while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Browse & Filter Controls Toolbar (matching Projects page) */}
      <div className="rounded-xl border border-border bg-white p-5 sm:p-6 shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-base font-bold font-heading text-brand-deepInk">
            Filter Reviews
          </h2>
          <div className="flex items-center gap-3 text-xs text-neutral-slateText font-sans">
            <span>
              Showing{" "}
              <strong className="text-brand-deepInk">
                {filteredExperiences.length}
              </strong>{" "}
              of {experiences.length} reviews
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-brand-deepTeal font-semibold hover:underline cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Search & Dropdown Filter Grid (Single Row, 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Search by Title & Supervisor */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-mutedGrey">
              <AppIcon icon={Search01Icon} size={16} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, supervisor..."
              aria-label="Search by project title or supervisor"
              className="w-full pl-9 pr-8 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk placeholder:text-neutral-mutedGrey focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-neutral-mutedGrey hover:text-brand-deepInk cursor-pointer"
                aria-label="Clear search"
              >
                <AppIcon icon={Cancel01Icon} size={14} />
              </button>
            )}
          </div>

          {/* Behaviour Dropdown */}
          <div>
            <select
              value={selectedBehaviour}
              onChange={(e) => setSelectedBehaviour(e.target.value)}
              aria-label="Filter by supervisor behaviour"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer"
            >
              <option value="all">Behaviour</option>
              <option value="Polite">Polite</option>
              <option value="Strict">Strict</option>
              <option value="Moody">Moody</option>
            </select>
          </div>

          {/* Rating Dropdown */}
          <div>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              aria-label="Filter by rating"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer"
            >
              <option value="all">Rating</option>
              <option value="5">★ 5 / 5</option>
              <option value="4">★ 4 / 5</option>
              <option value="3">★ 3 / 5</option>
              <option value="2">★ 2 / 5</option>
              <option value="1">★ 1 / 5</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="rounded-xl border border-border bg-white shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-neutral-warmWhite text-xs font-heading font-bold uppercase tracking-wider text-brand-deepInk">
                <th className="py-3.5 px-5 w-14">#</th>
                <th className="py-3.5 px-5 min-w-[200px]">Project Title</th>
                <th className="py-3.5 px-5 min-w-[170px]">Supervisor</th>
                <th className="py-3.5 px-5 w-28">Behaviour</th>
                <th className="py-3.5 px-5 w-24">Rating</th>
                <th className="py-3.5 px-5 w-36 text-right">Experience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm font-sans">
              {displayedExperiences.length > 0 ? (
                displayedExperiences.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-neutral-warmWhite/60 transition-colors"
                  >
                    <td className="py-4 px-5 text-xs font-mono text-neutral-mutedGrey align-middle">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-5 font-semibold text-brand-deepInk align-middle">
                      {item.projectTitle.trim() || (
                        <span className="text-neutral-mutedGrey font-normal italic">
                          Not Specified
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 text-neutral-slateText align-middle">
                      {item.supervisorName.trim() || (
                        <span className="text-neutral-mutedGrey italic">
                          Not Specified
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 align-middle">
                      <span
                        className={cn(
                          "inline-flex items-center px-2.5 py-0.5 text-xs font-sans font-semibold",
                          (item.supervisorBehaviour)
                        )}
                      >
                        {item.supervisorBehaviour}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-mono text-xs font-bold text-[#B45309] align-middle">
                      ★ {item.rating}/5
                    </td>
                    <td className="py-4 px-5 text-right align-middle">
                      <button
                        type="button"
                        onClick={() => setSelectedExperience(item)}
                        className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs font-sans font-medium transition-colors shadow-2xs shrink-0 cursor-pointer"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 px-5 text-center text-sm text-neutral-slateText"
                  >
                    No viva experiences matched your filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredExperiences.length > 5 && (
          <div className="border-t border-border bg-neutral-warmWhite/40 px-5 py-3.5 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sm font-sans font-semibold text-brand-deepTeal hover:text-brand-darkNavy hover:underline cursor-pointer"
            >
              {showAll
                ? "Show Less"
                : `View More (${filteredExperiences.length - 5} more)`}
            </button>
          </div>
        )}
      </div>

      {/* Share Viva Experience Block */}
      <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk">
            Gave Your Viva Recently?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-slateText font-sans">
            Help other students by submitting your viva experience.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenSubmitModal}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-sm font-sans font-medium transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          Submit Experience
        </button>
      </div>

      {/* Submit Experience Modal */}
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
            aria-labelledby="submit-viva-modal-title"
            onClick={handleCloseSubmitModal}
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
                <div>
                  <h2
                    id="submit-viva-modal-title"
                    className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk"
                  >
                    Submit Your Viva Experience
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-neutral-slateText mt-0.5">
                    Share your project, supervisor behaviour, and questions asked.
                  </p>
                </div>
              </div>

              <form
                id="submit-viva-form"
                onSubmit={handleSubmitExperience}
                style={{ flex: "1 1 auto", minHeight: 0, overflowY: "auto" }}
                className="p-6 space-y-4"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="viva-project-title"
                    className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                  >
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="viva-project-title"
                    type="text"
                    required
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="e.g. Online Food Delivery System"
                    className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="viva-supervisor-name"
                    className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                  >
                    Supervisor Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="viva-supervisor-name"
                    type="text"
                    required
                    value={supervisorName}
                    onChange={(e) => setSupervisorName(e.target.value)}
                    placeholder="e.g. Sir Usman Waheed Bhatti"
                    className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk placeholder:text-neutral-mutedGrey focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="viva-rating"
                      className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                    >
                      Rating <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="viva-rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                    >
                      <option value="5">5 / 5 - Excellent</option>
                      <option value="4">4 / 5 - Good</option>
                      <option value="3">3 / 5 - Average</option>
                      <option value="2">2 / 5 - Tough</option>
                      <option value="1">1 / 5 - Very Difficult</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="viva-behaviour"
                      className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                    >
                      Behaviour <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="viva-behaviour"
                      value={behaviour}
                      onChange={(e) =>
                        setBehaviour(e.target.value as SupervisorBehaviour)
                      }
                      className="w-full rounded-lg border border-border bg-neutral-warmWhite/50 px-3.5 py-2.5 text-sm font-sans text-brand-deepInk focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/30 focus:border-brand-deepTeal"
                    >
                      <option value="Polite">Polite</option>
                      <option value="Strict">Strict</option>
                      <option value="Moody">Moody</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="viva-experience"
                    className="block text-xs sm:text-sm font-sans font-medium text-brand-deepInk"
                  >
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="viva-experience"
                    rows={4}
                    required
                    value={experienceText}
                    onChange={(e) => setExperienceText(e.target.value)}
                    placeholder="Share what your supervisor asked (demo, diagrams, favourite subject, coding questions)..."
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
                      Thank you! Your viva experience has been submitted for
                      review.
                    </p>
                  </div>
                )}

              </form>

              <div className="px-6 py-4 border-t border-border bg-neutral-warmWhite/40 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCloseSubmitModal}
                  className="px-4 py-2 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="submit-viva-form"
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

      {/* Experience Detail Modal rendered via Portal centered in viewport */}
      {selectedExperience &&
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
            aria-labelledby="viva-modal-title"
            onClick={() => setSelectedExperience(null)}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "42rem",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
              }}
              className="rounded-2xl border border-border bg-white shadow-elevated overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-border bg-neutral-warmWhite/60 shrink-0">
                <div className="space-y-1.5">
                  <h2
                    id="viva-modal-title"
                    className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk"
                  >
                    {selectedExperience.projectTitle.trim() ||
                      "VU Final Year Project Viva"}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans">
                    <span className="text-brand-deepTeal font-medium">
                      Supervisor:{" "}
                      {selectedExperience.supervisorName.trim() ||
                        "Not Specified"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div
                style={{ flex: "1 1 auto", minHeight: 0, overflowY: "auto" }}
                className="p-6"
              >
                <p className="text-sm font-sans text-neutral-slateText leading-relaxed whitespace-pre-line">
                  {selectedExperience.experience}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border bg-neutral-warmWhite/40 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
