"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
  UserCheck01Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { ProjectListingItem } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ProjectListClientProps {
  initialProjects: ProjectListingItem[];
}

export function ProjectListClient({ initialProjects }: ProjectListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSession, setSelectedSession] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedBehaviour, setSelectedBehaviour] = useState("all");

  // Derive unique categories
  const categories = useMemo(() => {
    const list = Array.from(new Set(initialProjects.map((p) => p.category).filter(Boolean)));
    return list;
  }, [initialProjects]);

  // Derive unique sessions
  const sessions = useMemo(() => {
    const list = Array.from(new Set(initialProjects.map((p) => p.session).filter(Boolean)));
    return list;
  }, [initialProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Name / keyword search
      const matchesSearch =
        searchTerm.trim() === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      // Session filter
      const matchesSession =
        selectedSession === "all" || project.session === selectedSession;

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        project.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      // Behaviour filter
      const matchesBehaviour =
        selectedBehaviour === "all" ||
        project.supervisorBehaviour.toLowerCase() === selectedBehaviour.toLowerCase();

      return matchesSearch && matchesCategory && matchesSession && matchesDifficulty && matchesBehaviour;
    });
  }, [initialProjects, searchTerm, selectedCategory, selectedSession, selectedDifficulty, selectedBehaviour]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "all" ||
    selectedSession !== "all" ||
    selectedDifficulty !== "all" ||
    selectedBehaviour !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedSession("all");
    setSelectedDifficulty("all");
    setSelectedBehaviour("all");
  };

  return (
    <div className="space-y-6">
      {/* Browse & Filter Controls Toolbar */}
      <div className="rounded-xl border border-border bg-white p-5 sm:p-6 shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <h2 className="text-base font-bold font-heading text-brand-deepInk">
            Filter Projects
          </h2>
          <div className="text-xs text-neutral-slateText font-sans">
            Showing <strong className="text-brand-deepInk">{filteredProjects.length}</strong> of{" "}
            {initialProjects.length} projects
          </div>
        </div>

        {/* Search & Dropdown Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {/* Search by Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-mutedGrey">
              <AppIcon icon={Search01Icon} size={16} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, supervisor..."
              className="w-full pl-9 pr-8 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk placeholder:text-neutral-mutedGrey focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-neutral-mutedGrey hover:text-brand-deepInk"
                aria-label="Clear search"
              >
                <AppIcon icon={Cancel01Icon} size={14} />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer truncate"
            >
              <option value="all">Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Session Dropdown */}
          <div>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              aria-label="Filter by session"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer"
            >
              <option value="all">Session</option>
              {sessions.map((sess) => (
                <option key={sess} value={sess}>
                  {sess}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Dropdown */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              aria-label="Filter by difficulty"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer"
            >
              <option value="all">Difficulty Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Supervisor Behaviour Dropdown */}
          <div>
            <select
              value={selectedBehaviour}
              onChange={(e) => setSelectedBehaviour(e.target.value)}
              aria-label="Filter by supervisor behaviour"
              className="w-full px-3 py-2.5 bg-neutral-warmWhite border border-border rounded-lg text-sm text-brand-deepInk focus:outline-none focus:ring-2 focus:ring-brand-deepTeal/40 focus:border-brand-deepTeal transition-all font-sans cursor-pointer"
            >
              <option value="all">Supervisor Behaviour</option>
              <option value="Polite">Polite</option>
              <option value="Strict">Strict</option>
              <option value="Moody">Moody</option>
            </select>
          </div>
        </div>

        {/* Active Filter Clear Tag */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2 text-xs font-sans border-t border-border/60">
            <span className="text-neutral-slateText">Filters applied</span>
            <button
              type="button"
              onClick={resetFilters}
              className="font-medium text-brand-deepTeal hover:underline flex items-center gap-1"
            >
              <span>Reset all filters</span>
              <AppIcon icon={Cancel01Icon} size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Projects Table Container */}
      <div className="rounded-xl border border-border bg-white shadow-subtle overflow-hidden">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-warmWhite text-neutral-mutedGrey">
              <AppIcon icon={Search01Icon} size={22} />
            </div>
            <h3 className="font-heading font-bold text-base text-brand-deepInk">
              No matching projects found
            </h3>
            <p className="text-xs text-neutral-slateText font-sans max-w-sm mx-auto">
              We couldn&apos;t find any project matching your search criteria. Try modifying your search term or clearing dropdown filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 rounded-lg bg-brand-deepTeal text-white text-xs font-medium hover:bg-brand-darkNavy transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-deepInk text-white text-xs font-heading font-semibold tracking-wider uppercase border-b border-brand-slate">
                  <th scope="col" className="py-3.5 px-4 sm:px-6 min-w-[300px]">
                    Project Title
                  </th>
                  <th scope="col" className="py-3.5 px-4 min-w-[200px]">
                    Category
                  </th>
                  <th scope="col" className="py-3.5 px-4 min-w-[170px]">
                    Supervisor
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-center min-w-[110px]">
                    Session
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-center min-w-[110px]">
                    Difficulty
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-center min-w-[120px]">
                    Supervisor Behaviour
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-center sm:px-6 min-w-[130px]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm font-sans text-neutral-slateText">
                {filteredProjects.map((project, idx) => {
                  const whatsappUrl = buildWhatsAppUrl({
                    projectTitle: project.title,
                    message: `Hello VU FYP Solutions, I want to discuss and handle the project "${project.title}" (Supervisor: ${project.supervisor}, Difficulty: ${project.difficulty}).`,
                  });

                  return (
                    <tr
                      key={project.id}
                      className={`hover:bg-neutral-warmWhite/80 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-neutral-warmWhite/30"
                        }`}
                    >
                      {/* Project Title */}
                      <td className="py-4 px-4 sm:px-6 align-middle font-medium text-brand-deepInk font-heading">
                        <Link
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-deepTeal transition-colors line-clamp-2"
                        >
                          {project.title}
                        </Link>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-4 align-middle text-xs leading-relaxed text-neutral-slateText">
                        <span className="inline-block">
                          {project.category}
                        </span>
                      </td>

                      {/* Supervisor */}
                      <td className="py-4 px-4 align-middle whitespace-nowrap text-brand-deepInk font-medium">
                        <div className="flex items-center gap-1.5">
                          <span>{project.supervisor}</span>
                        </div>
                      </td>

                      {/* Session */}
                      <td className="py-4 px-4 align-middle whitespace-nowrap text-center">
                        {project.session ? (
                          <span className="inline-flex items-center gap-1 text-neutral-slateText">
                            {project.session}
                          </span>
                        ) : (
                          <span className="text-neutral-mutedGrey">-</span>
                        )}
                      </td>

                      {/* Difficulty */}
                      <td className="py-4 px-4 align-middle whitespace-nowrap text-center">
                        {(project.difficulty)}
                      </td>

                      {/* Supervisor Behaviour */}
                      <td className="py-4 px-4 align-middle whitespace-nowrap text-center">
                        {(project.supervisorBehaviour)}
                      </td>

                      {/* Details Link / Action */}
                      <td className="py-4 px-4 sm:px-6 align-middle text-center whitespace-nowrap">
                        <Link
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs font-semibold font-sans transition-colors"
                        >
                          <span>View Details</span>
                          <AppIcon icon={ArrowRight01Icon} size={13} strokeWidth={2.2} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
