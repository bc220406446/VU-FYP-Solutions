import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/shared/icon";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const recentProjects: ProjectItem[] = [
  {
    id: "sovereign-store",
    title: "Sovereign E-Commerce Store",
    category: "Full-Stack Web App",
    image: "/images/projects/sovereign-store.webp",
    link: "/projects",
  },
  {
    id: "graze-smasher",
    title: "Graze Smasher",
    category: "Machine Learning & NLP",
    image: "/images/projects/graze-smasher.webp",
    link: "/projects",
  },
  {
    id: "smart-query-management",
    title: "Query Management System",
    category: "Academic Query Portal",
    image: "/images/projects/smart-query-management.webp",
    link: "/projects",
  },
];

export function SeeOurWorkSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading, description, and link */}
        <div className="lg:col-span-3 space-y-4 lg:pr-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deepInk tracking-tight leading-tight">
            See <span className="text-brand-deepTeal">Our Work</span>
          </h2>
          <p className="text-sm text-neutral-slateText font-sans leading-relaxed">
            Explore our recent project developments and see the quality of our implementation.
          </p>
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-border text-brand-deepInk hover:bg-neutral-warmWhite hover:border-brand-deepTeal/40 font-sans font-medium text-sm transition-colors shadow-2xs"
            >
              <span>View All Projects</span>
              <AppIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Right Columns: 3 Real Project Demonstration Cards */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {recentProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group rounded-xl border border-border bg-white overflow-hidden shadow-subtle hover:border-brand-deepTeal/50 transition-colors flex flex-col block"
            >
              {/* Real Project Image from devkamran.me */}
              <div className="relative h-44 w-full bg-brand-darkNavy overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 300px"
                  className="object-fill object-top transition-transform duration-300 group-hover:scale-105"
                />
                {/* Yellow "Latest" Badge in top-left matching mockup */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F59E0B] text-black shadow-xs">
                    Latest
                  </span>
                </div>
              </div>

              {/* Card Meta & Tech Pills */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="font-heading font-bold text-sm text-brand-deepInk leading-snug group-hover:text-brand-deepTeal transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
