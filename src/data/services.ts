import { ServiceItem } from "@/types";

/**
 * DeveloperBano - Services Catalog Data Source
 * 9 single-activity products: 6 for CS619 and 3 for CS519.
 */
export const servicesData: ServiceItem[] = [
  // --- CS619 (6 Activities) ---
  {
    id: "cs619-srs",
    slug: "cs619-srs-document",
    title: "CS619 - Phase 1: SRS Document",
    course: "CS619",
    price: "Rs. 4,000",
    description:
      "Complete Software Requirements Specification tailored strictly to VU supervisor rubrics, including project scope, problem statement, functional and non-functional requirements, UML use cases, methodology, Gantt chart, and supervisor revision support.",
    features: [],
    icon: "file",
    turnaroundTime: "2-3 Days",
  },
  {
    id: "cs619-design",
    slug: "cs619-design-document",
    title: "CS619 - Phase 2: Design Document",
    course: "CS619",
    price: "Rs. 5,000",
    description:
      "Complete software design documentation covering system architecture, database schema, ERD, class and sequence diagrams, UI wireframes, and comprehensive test cases, formatted according to the official VU template.",
    features: [],
    icon: "layers",
    turnaroundTime: "3-4 Days",
  },
  {
    id: "cs619-prototype-dev",
    slug: "cs619-prototype-development",
    title: "CS619 - Phase 3: Prototype Development",
    course: "CS619",
    price: "Rs. 8,000",
    description:
      "Working project prototype with core modules and database integration, developed according to assignment requirements, including remote setup on your machine and preparation for supervisor prototype viva.",
    features: [],
    icon: "code",
    turnaroundTime: "5-7 Days",
  },
  {
    id: "cs619-prototype-viva",
    slug: "cs619-prototype-viva-prep",
    title: "CS619 - Prototype Viva Preparation Only",
    course: "CS619",
    price: "Rs. 3,500",
    description:
      "Focused prototype viva preparation covering how your project code works, code flow, database connectivity, core modules, and basic programming and technical concepts directly related to your project code.",
    features: [],
    icon: "mortarboard",
    turnaroundTime: "1-2 Days",
  },
  {
    id: "cs619-final-dev",
    slug: "cs619-final-deliverable-development",
    title: "CS619 - Final Deliverable Development",
    course: "CS619",
    price: "Rs. 16,000",
    description:
      "Complete CS619 final deliverable with fully working and tested source code, final project report, presentation slides, remote setup on your machine, pre-submission verification, and final viva preparation.",
    features: [],
    icon: "computer",
    turnaroundTime: "7-10 Days",
  },
  {
    id: "cs619-final-viva",
    slug: "cs619-final-viva-prep",
    title: "CS619 - Final Deliverable Viva Preparation Only",
    course: "CS619",
    price: "Rs. 5,500",
    description:
      "Comprehensive final viva coaching covering your complete project codebase, system architecture, project functionality, presentation preparation, expected panel questions, and relevant subject-related questions.",
    features: [],
    icon: "mortarboard",
    turnaroundTime: "1-2 Days",
  },

  // --- CS519 (3 Activities) ---
  {
    id: "cs519-documentation",
    slug: "cs519-documentation",
    title: "CS519 - Documentation",
    course: "CS519",
    price: "Rs. 5,000",
    description:
      "Complete CS519 project documentation tailored to VU guidelines and supervisor requirements, including project scope, problem statement, functional and non-functional requirements, UML diagrams, system design, testing documentation, and supervisor revision support.",
    features: [],
    icon: "file",
    turnaroundTime: "3-5 Days",
  },
  {
    id: "cs519-final-dev",
    slug: "cs519-final-deliverable-development",
    title: "CS519 - Final Deliverable Development",
    course: "CS519",
    price: "Rs. 12,000",
    description:
      "Complete CS519 final deliverable with fully working and tested source code, final project report, presentation slides, database and environment setup, remote setup on your machine, pre-submission verification, and final viva preparation.",
    features: [],
    icon: "computer",
    turnaroundTime: "5-7 Days",
  },
  {
    id: "cs519-final-viva",
    slug: "cs519-final-viva-prep",
    title: "CS519 - Final Deliverable Viva Preparation Only",
    course: "CS519",
    price: "Rs. 4,000",
    description:
      "Dedicated CS519 final viva coaching covering your complete project codebase, project functionality, code walkthrough, presentation preparation, expected examiner questions, and relevant subject-related questions.",
    features: [],
    icon: "mortarboard",
    turnaroundTime: "1-2 Days",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
