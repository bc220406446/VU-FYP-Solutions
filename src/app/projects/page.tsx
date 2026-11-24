import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { projectsCatalog } from "@/data/projects";
import { ProjectListClient } from "@/components/projects/project-list-client";
import { CS519ShareSection } from "@/components/projects/cs519-share-section";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

export const metadata: Metadata = {
  title: "Project List | VU CS619 & CS519 Final Year Projects",
  description:
    "Browse and search Final Year Projects by supervisor, semester session, difficulty level, and supervisor behavior. Comprehensive FYP solutions for Virtual University students.",
  openGraph: {
    title: "Project List | VU FYP Solutions",
    description:
      "Search CS619 & CS519 final year projects with difficulty rankings and supervisor behavior insights.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-slateText font-sans">
          <Link href="/" className="hover:text-brand-deepTeal transition-colors">
            Home
          </Link>
          <AppIcon icon={ArrowRight01Icon} size={12} className="text-neutral-mutedGrey" />
          <span className="text-brand-deepInk font-medium">Projects</span>
        </nav>

        {/* Page Title & Introductory Header */}
        <div className="space-y-3 max-w-4xl">
        
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
            Project List
          </h1>

          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Explore our curated list of Virtual University Final Year Projects, organized ranking-wise based on our assessment to help you make an informed decision. Browse the available projectsand use the available filters for category, session, technical difficulty, and supervisor behaviour (Polite, Strict, or Moody) to find the project that best matches your preferences.
          </p>
        </div>

        {/* Interactive Browse & Filterable Projects Table */}
        <ProjectListClient initialProjects={projectsCatalog} />

        {/* Bottom CS519 Project File Sharing Section */}
        <CS519ShareSection />
      </div>
    </div>
  );
}
