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

export type ProjectDifficulty = "Easy" | "Medium" | "Hard" | "beginner" | "intermediate" | "advanced";

export type SupervisorBehaviour = "Polite" | "Strict" | "Moody";

export interface ProjectListingItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  supervisor: string;
  session: string;
  difficulty: "Easy" | "Medium" | "Hard";
  supervisorBehaviour: "Polite" | "Strict" | "Moody";
  description?: string;
  technologies?: string[];
}

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
  supervisor?: string;
  session?: string;
  supervisorBehaviour?: SupervisorBehaviour;
}

export type ServiceCourse = "CS619" | "CS519";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  course: ServiceCourse;
  price: string;
  priceNote?: string;
  badge?: string;
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

export type WorkDomain = "Web" | "AI/ML" | "Mobile";

export interface StudentProjectWork {
  id: string;
  slug: string;
  title: string;
  course: ServiceCourse;
  domain: WorkDomain;
  categoryLabel: string;
  image?: string;
  session: string;
  liveUrl: string;
  githubUrl: string;
}

export interface StudentRemark {
  id: string;
  studentName: string;
  course: ServiceCourse;
  projectTitle: string;
  quote: string;
}

export type MaterialKind = "Pattern" | "Sample";

export interface HelpingMaterialItem {
  id: string;
  title: string;
  course: ServiceCourse;
  kind: MaterialKind;
  description: string;
  pdfPath: string;
  sourcePath: string;
  sourceExt: "DOCX" | "DOC" | "PPTX" | "PPT";
  sizeLabel: string;
}

export interface LearningResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  sourceLabel: string;
}

export type UIState =
  | "idle"
  | "loading"
  | "empty"
  | "error"
  | "success"
  | "offline";
