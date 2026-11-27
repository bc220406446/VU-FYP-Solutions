import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";
import { CtaBanner } from "@/components/home/cta-banner";
import { allBlogArticles, getBlogBySlug } from "@/data/blogs";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) {
    return { title: "Article Not Found | VU FYP Solutions" };
  }
  return {
    title: `${article.title} | VU FYP Solutions`,
    description: article.summary,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full bg-background min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-slateText font-sans"
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
          <Link
            href="/blogs"
            className="hover:text-brand-deepTeal transition-colors"
          >
            Blogs
          </Link>
          <AppIcon
            icon={ArrowRight01Icon}
            size={12}
            className="text-neutral-mutedGrey"
          />
          <span className="text-brand-deepInk font-medium truncate">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
            <span className="text-neutral-mutedGrey">
              {article.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brand-deepInk tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
            {article.summary}
          </p>
        </header>

        {/* Article Body */}
        <article className="rounded-xl border border-border bg-white p-6 sm:p-8 shadow-card space-y-8">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold font-heading text-brand-deepInk">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base text-neutral-slateText font-sans leading-relaxed">
                {section.body}
              </p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-slateText font-sans">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-brand-deepTeal hover:underline"
            >
              <AppIcon icon={ArrowLeft01Icon} size={16} strokeWidth={2} />
              <span>Back to All Blogs</span>
            </Link>

            <Link
              href="/helping-material"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-deepTeal hover:bg-brand-darkNavy text-white text-xs sm:text-sm font-sans font-medium transition-colors"
            >
              <span>Download Patterns &amp; Samples</span>
              <AppIcon icon={ArrowRight01Icon} size={15} strokeWidth={2} />
            </Link>
          </div>
        </article>
      </div>

      <CtaBanner />
    </div>
  );
}
