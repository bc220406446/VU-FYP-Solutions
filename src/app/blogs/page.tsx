import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { BlogBuildIntro } from "@/components/blogs/blog-build-intro";
import { CtaBanner } from "@/components/home/cta-banner";
import { documentationBlogTopics } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs & FYP Documentation Guides | VU CS619 & CS519",
  description:
    "Step-by-step VU CS619 and CS519 documentation guides covering SRS, Design Document, UML diagrams, Database Design, and Test Cases.",
  openGraph: {
    title: "Blogs & Documentation Guides | VU FYP Solutions",
    description:
      "Build your Virtual University Final Year Project on your own with our structured FYP documentation topics.",
  },
};

export default function BlogsPage() {
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
          <span className="text-brand-deepInk font-medium">Blogs</span>
        </nav>

        {/* Page Title & Introductory Header */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-deepInk tracking-tight">
            Blogs &amp; <span className="text-brand-deepTeal">Guides</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            Step-by-step Virtual University CS619 and CS519 guidelines,
            documentation walkthroughs, and viva defense strategies for students
            building on their own.
          </p>
        </div>
      </div>

      {/* Working on Your Project on Your Own? (Blog-specific block) */}
      <BlogBuildIntro />

      {/* FYP Documentation – Blog Topics (List Format) */}
      <section
        id="articles"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight">
              FYP Documentation {" "}
              <span className="text-brand-deepTeal">Development Guide Blogs</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-slateText font-sans">
              Complete topic-by-topic guide covering every section of your VU
              SRS to Final Deliverable.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white shadow-card overflow-hidden">
          <ol className="divide-y divide-border">
            {documentationBlogTopics.map((topic, index) => (
              <li key={topic.id}>
                <Link
                  href={`/blogs/${topic.slug}`}
                  className="group px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-neutral-warmWhite/70 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm sm:text-base font-heading font-semibold text-brand-deepInk group-hover:text-brand-deepTeal transition-colors">
                          {topic.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-slateText font-sans line-clamp-1">
                        {topic.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-xs font-sans font-medium text-brand-deepTeal">
                    <span className="hidden sm:inline text-neutral-mutedGrey">
                      {topic.readingTimeMinutes} min read
                    </span>
                    <AppIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}
