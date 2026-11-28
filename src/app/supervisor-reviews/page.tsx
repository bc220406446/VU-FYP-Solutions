import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { SupervisorReviewsClient } from "@/components/supervisor-reviews/supervisor-reviews-client";
import { CtaBanner } from "@/components/home/cta-banner";
import { createAdminClient, createClient } from "@/lib/supabase/server";
import {
  vivaExperiences,
  type SupervisorBehaviour,
  type VivaExperience,
} from "@/data/supervisor-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Supervisor Reviews & Viva Experiences | VU CS619 & CS519",
  description:
    "Read real Virtual University CS619 & CS519 student viva experiences, supervisor questions, and evaluation insights before your defense.",
  openGraph: {
    title: "Supervisor Reviews & Viva Experiences | VU FYP Solutions",
    description:
      "Real VU student viva experiences and supervisor review insights for CS619 & CS519.",
  },
};

async function getApprovedDatabaseReviews(): Promise<VivaExperience[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return [];
  }

  try {
    const supabase = process.env.SUPABASE_SERVICE_ROLE_KEY
      ? createAdminClient()
      : await createClient();
    const { data, error } = await supabase
      .from("supervisor_reviews")
      .select(
        "id, project_title, supervisor_name, rating, supervisor_behaviour, experience"
      )
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return data.map((row, idx) => ({
      id: 10000 + idx,
      projectTitle: row.project_title ?? "",
      supervisorName: row.supervisor_name ?? "",
      rating: Number(row.rating) || 5,
      supervisorBehaviour: (row.supervisor_behaviour as SupervisorBehaviour) || "Polite",
      experience: row.experience ?? "",
    }));
  } catch {
    return [];
  }
}

export default async function SupervisorReviewsPage() {
  const approvedDbReviews = await getApprovedDatabaseReviews();
  const allExperiences = [...approvedDbReviews, ...vivaExperiences];

  return (
    <div className="w-full bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-neutral-slateText font-sans"
        >
          <Link
            href="/"
            className="hover:text-brand-deepTeal transition-colors"
          >
            Home
          </Link>
          <AppIcon
            icon={ArrowRight01Icon}
            size={12}
            className="text-neutral-mutedGrey"
          />
          <span className="text-brand-deepInk font-medium">
            Supervisor Reviews
          </span>
        </nav>

        {/* Page Title & Introductory Header */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
            Supervisor <span className="text-brand-deepTeal">Reviews</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Explore real Virtual University CS619 and CS519 viva experiences
            shared by students to see what supervisors ask, which diagrams they
            focus on, and how to prepare for your defense.
          </p>
        </div>

        {/* Searchable Table + Detail Modal */}
        <SupervisorReviewsClient experiences={allExperiences} />
      </div>

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}
