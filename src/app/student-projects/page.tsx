import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { StudentProjectsShowcase } from "@/components/student-projects/student-projects-showcase";
import { StudentRemarksSection } from "@/components/student-projects/student-remarks-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { createAdminClient, createClient } from "@/lib/supabase/server";
import { studentRemarks, studentWorks } from "@/data/student-projects";
import type { ServiceCourse, StudentRemark } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Work & Student Remarks | VU CS619 & CS519 Portfolio",
  description:
    "Explore completed CS619 and CS519 projects across Web, AI/ML, and Mobile along with verified student remarks and viva outcomes.",
  openGraph: {
    title: "Our Work & Student Remarks | VU FYP Solutions",
    description:
      "Completed VU Final Year Projects and student feedback before you book.",
  },
};

async function getApprovedStudentRemarks(): Promise<StudentRemark[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return [];
  }

  try {
    const supabase = process.env.SUPABASE_SERVICE_ROLE_KEY
      ? createAdminClient()
      : await createClient();

    const { data, error } = await supabase
      .from("student_remarks")
      .select("id, student_name, project_name, project_type, remarks, created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return data.map((row) => ({
      id: String(row.id),
      studentName: row.student_name ?? "",
      course: (row.project_type as ServiceCourse) || "CS619",
      projectTitle: row.project_name ?? "",
      session: new Date(row.created_at).getFullYear().toString(),
      quote: row.remarks ?? "",
    }));
  } catch {
    return [];
  }
}

export default async function StudentProjectsPage() {
  const approvedDbRemarks = await getApprovedStudentRemarks();
  const allRemarks = [...approvedDbRemarks, ...studentRemarks];

  return (
    <div className="w-full bg-background min-h-screen pb-8">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-neutral-warmWhite/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8 space-y-8">
          {/* Breadcrumb */}
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
            <span className="text-brand-deepInk font-medium">Our Work</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 py-1 text-brand-deepTeal text-sm font-semibold font-sans">
                <span>See Our Quality Before Booking</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
                Our Work &amp;{" "}
                <span className="text-brand-deepTeal">Student Remarks</span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
                Explore real CS619 and CS519 projects we have built and read
                feedback from Virtual University students who cleared their
                documentation, prototype, and final viva defenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Filterable Portfolio Grid */}
      <StudentProjectsShowcase projects={studentWorks} />

      {/* 2. Student Remarks / Testimonials + Share Remarks Modal */}
      <StudentRemarksSection remarks={allRemarks} />

      {/* 3. Direct WhatsApp CTA */}
      <CtaBanner />
    </div>
  );
}
