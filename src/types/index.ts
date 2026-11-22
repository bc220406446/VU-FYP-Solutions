/**
 * DeveloperBano - Core TypeScript Type Definitions
 */

export type ProjectCategory =
  | "web-development"
  | "mobile-apps"
  | "ai-machine-learning"
  | "blockchain"
  | "iot-hardware"
  | "cloud-devops";

export type ProjectDifficulty = "beginner" | "intermediate" | "advanced";

export interface ProjectMetadata {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  difficulty: ProjectDifficulty;
  technologies: string[];
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  publishedAt: string;
  updatedAt?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  turnaroundTime?: string;
}

export interface BlogPostMetadata {
  id: string;
  slug: string;
  title: string;
  summary: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  coverImage?: string;
}

export interface SupervisorReview {
  id: string;
  studentName: string;
  university?: string;
  projectTitle: string;
  reviewComment: string;
  status: "pending" | "approved" | "rejected";
  rating?: number;
  createdAt: string;
}

export type UIState =
  | "idle"
  | "loading"
  | "empty"
  | "error"
  | "success"
  | "offline";
