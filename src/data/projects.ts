import { ProjectMetadata } from "@/types";

/**
 * DeveloperBano - Project Catalog Data Source
 * Foundational data structure for projects. Real projects will be populated here or via MDX / Supabase.
 */
export const projectsData: ProjectMetadata[] = [];

export function getProjectBySlug(slug: string): ProjectMetadata | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): ProjectMetadata[] {
  return projectsData.filter((project) => project.featured);
}
