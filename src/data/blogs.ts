export interface BlogSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readingTimeMinutes: number;
  sections: BlogSection[];
}

/**
 * 16 FYP Documentation Blog Topics displayed in list format on /blogs
 */
export const documentationBlogTopics: BlogArticle[] = [
  {
    id: "doc-01",
    slug: "introduction-purpose-scope-definitions",
    title:
      "How do you write Introduction, Purpose, Scope & Definitions in an SRS?",
    summary:
      "In this blog, you will learn how to structure the opening section of your SRS, define realistic project scope boundaries, and format standard VU acronyms and abbreviations.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Purpose & Project Background",
        body: "Start by explaining the real-world problem your application solves and who the primary users are. Keep it concise, formal, and directly tied to your approved VU project title.",
      },
      {
        heading: "Scope & Definitions",
        body: "Define what your system will deliver (and what is out of scope) so expectations stay realistic through Prototype and Final Deliverable.",
        bullets: [
          "List every user role and high-level capability included in the system.",
          "Include an Acronyms & Abbreviations table (e.g., SRS, ERD, DFD, UI, API, DBMS).",
        ],
      },
    ],
  },
  {
    id: "doc-02",
    slug: "functional-and-non-functional-requirements",
    title:
      "How do you write Functional and Non-Functional Requirements for an FYP SRS?",
    summary:
      "In this blog, you will learn how to write clear, numbered functional requirements by module and define measurable non-functional quality attributes that supervisors approve.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Functional Requirements",
        body: "Write clear, numbered statements using 'The system shall...' phrasing. Ensure every major feature in your scope has corresponding requirements.",
        bullets: [
          "Group requirements by module (Authentication, Admin Panel, User Dashboard, Reporting).",
          "Keep each requirement specific and verifiable.",
        ],
      },
      {
        heading: "Non-Functional Requirements",
        body: "Cover system quality attributes such as performance, security, reliability, usability, and maintainability.",
      },
    ],
  },
  {
    id: "doc-03",
    slug: "use-case-diagram",
    title: "How do you make a Use Case Diagram for your FYP?",
    summary:
      "In this blog, you will learn how to identify system actors, place use cases inside the system boundary, and correctly apply <<include>> and <<extend>> relationships.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Actors, System Boundary & Use Cases",
        body: "Place all use case ovals inside a rectangular system boundary box and place actors (Admin, Student, Guest) outside on the left or right.",
        bullets: [
          "Use verb-noun phrases for use cases (e.g., Manage Users, Submit Order).",
          "Use <<include>> for mandatory sub-steps and <<extend>> for optional flows.",
        ],
      },
    ],
  },
  {
    id: "doc-04",
    slug: "usage-scenarios",
    title: "How do you write Usage Scenarios for Use Case Diagrams?",
    summary:
      "In this blog, you will learn how to document complete usage scenario tables—including pre-conditions, main success flows, exception paths, and post-conditions—for every use case.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Standard VU Usage Scenario Table",
        body: "Every use case from your diagram should have its own structured table containing Use Case ID, Title, Actors, Pre-conditions, Main Success Scenario, Alternative/Exception Flows, and Post-conditions.",
      },
    ],
  },
  {
    id: "doc-05",
    slug: "development-methodology",
    title: "Which Development Methodology should you choose for a VU FYP?",
    summary:
      "In this blog, you will learn how to select and justify the VU Process Model, Waterfall, Agile, or Iterative methodology so your SRS matches Virtual University expectations.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Selecting & Justifying a Methodology",
        body: "Most VU projects adopt the VU Process Model (a hybrid of Waterfall and Iterative) because phases—SRS, Design, Prototype, Final—are submitted sequentially with iterative refinement.",
      },
    ],
  },
  {
    id: "doc-06",
    slug: "gantt-chart-ms-project",
    title: "How do you create a Gantt Chart in MS Project for your SRS?",
    summary:
      "In this blog, you will learn how to break down FYP phases into tasks, set durations and dependencies in MS Project, and export a clean Gantt chart for your SRS.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Structuring Your Gantt Chart",
        body: "Break your project into summary phases (SRS, Design Document, Prototype, Final Deliverable) and add realistic start/end dates and task dependencies in MS Project.",
      },
    ],
  },
  {
    id: "doc-07",
    slug: "project-schedule-submission-calendar",
    title:
      "How do you align your Project Schedule with the VU Submission Calendar?",
    summary:
      "In this blog, you will learn how to map your SRS, Design Document, Prototype, and Final Deliverable milestones directly to official Virtual University submission deadlines.",
    readingTimeMinutes: 3,
    sections: [
      {
        heading: "Mapping Milestones to VU Deadlines",
        body: "List each official VU milestone alongside its target submission date and key deliverables so your schedule matches VULMS announcements.",
      },
    ],
  },
  {
    id: "doc-08",
    slug: "architectural-representation-architecture-diagram",
    title:
      "How do you draw an Architecture Diagram for a Software Design Document?",
    summary:
      "In this blog, you will learn how to illustrate your application's Presentation, Business Logic, and Data layers using a clean 3-tier or MVC architecture diagram.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Layered Architecture Overview",
        body: "Show how the Presentation Layer (Browser/UI), Business Logic Layer (Server/Controllers/APIs), and Data Layer (MySQL/PostgreSQL/MongoDB) communicate.",
      },
    ],
  },
  {
    id: "doc-09",
    slug: "data-flow-diagram-dfd",
    title: "How do you make a Data Flow Diagram (DFD Level 0 & Level 1) for FYP?",
    summary:
      "In this blog, you will learn how data moves through your system by creating a Context Level (Level 0) DFD and breaking it down into Level 1 processes and data stores.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Level 0 (Context) & Level 1 DFD Rules",
        body: "Start with a single-process Context Diagram showing external entities interacting with the system, then decompose into numbered sub-processes and data stores in Level 1.",
      },
    ],
  },
  {
    id: "doc-10",
    slug: "sequence-diagrams",
    title: "How do you draw Sequence Diagrams for your Design Document?",
    summary:
      "In this blog, you will learn how to model step-by-step interactions between users, UI components, controllers, and the database using lifelines and activation bars.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Modeling Core System Flows",
        body: "Include sequence diagrams for Authentication, Primary CRUD operations, and key domain workflows, showing User -> UI -> Controller -> Database interactions.",
      },
    ],
  },
  {
    id: "doc-11",
    slug: "class-diagram",
    title: "How do you create a Class Diagram for your FYP Design Document?",
    summary:
      "In this blog, you will learn how to define classes, attributes, methods, visibility modifiers (+, -, #), and associations or inheritance relationships accurately.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Classes, Attributes, Methods & Relationships",
        body: "Define each class with proper visibility (+ public, - private, # protected), data types, and multiplicity (1, 0..*, 1..*) across associations.",
      },
    ],
  },
  {
    id: "doc-12",
    slug: "entity-relationship-diagram-erd",
    title:
      "How do you draw an Entity Relationship Diagram (ERD) for your database?",
    summary:
      "In this blog, you will learn how to identify database entities, assign primary and foreign keys, resolve many-to-many relationships, and label cardinalities.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Entities, Keys & Cardinalities",
        body: "Ensure every entity and relationship in your ERD maps cleanly to your Database Design tables without many-to-many gaps (resolve M:N with junction tables).",
      },
    ],
  },
  {
    id: "doc-13",
    slug: "database-design-diagram",
    title: "How do you create a Database Design Diagram (Relational Schema)?",
    summary:
      "In this blog, you will learn the difference between an ERD and a relational schema diagram, and how to map table columns, data types, and foreign-key links.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Relational Schema Diagram",
        body: "Unlike a conceptual ERD, the Database Design Diagram shows actual table names, column names, PK/FK markers, and referential links ready for SQL implementation.",
      },
    ],
  },
  {
    id: "doc-14",
    slug: "database-design",
    title:
      "How do you document Database Design & Normalized Table Schemas for FYP?",
    summary:
      "In this blog, you will learn how to normalize your tables to 3NF and document column names, data types, lengths, and constraints in clean schema specification tables.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Table Specifications & Normalization",
        body: "Provide structured schema tables listing Column Name, Data Type, Length, Constraints (PK, FK, NOT NULL, UNIQUE), and Description, normalized to 3NF.",
      },
    ],
  },
  {
    id: "doc-15",
    slug: "interface-design",
    title: "How do you design UI Wireframes & Interface Design for your FYP?",
    summary:
      "In this blog, you will learn how to create clear, consistent UI wireframes for login, dashboards, and core user workflows to include in your Design Document.",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Wireframes & Screen Consistency",
        body: "Include clear mockups for every key screen (Login, Registration, Admin Dashboard, User Portal, Reports) with brief captions explaining user actions.",
      },
    ],
  },
  {
    id: "doc-16",
    slug: "test-cases",
    title: "How do you write Software Test Cases for your FYP Design Document?",
    summary:
      "In this blog, you will learn how to write structured positive and negative test cases covering authentication, form validation, and core modules using the VU format.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Standard Test Case Format",
        body: "Include Test Case ID, Module/Feature, Pre-conditions, Test Steps/Input, Expected Result, Actual Result, and Pass/Fail Status—covering both valid and invalid inputs.",
      },
    ],
  },
];

/**
 * Milestone guides linked from the Home Page "Build on Your Own" cards
 */
const milestoneGuides: BlogArticle[] = [
  {
    id: "blog-srs-guidelines",
    slug: "srs-guidelines",
    title: "How do you complete your CS619 SRS Document (Phase 1)?",
    summary:
      "In this blog, you will learn how to define project scope, write functional and non-functional requirements, draw UML use case diagrams, and prepare a supervisor-ready Gantt chart.",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "1. Scope & Problem Statement",
        body: "Your Software Requirements Specification (SRS) sets the contract between you and your VU supervisor. Keep the scope realistic and clearly bound.",
      },
      {
        heading: "2. Requirements, UML & Gantt Chart",
        body: "Ensure functional requirements, use case diagrams, usage scenarios, methodology, and Gantt chart align with your VU semester schedule.",
      },
    ],
  },
  {
    id: "blog-design-guidelines",
    slug: "design-document-guidelines",
    title: "How do you complete your CS619 Design Document (Phase 2)?",
    summary:
      "In this blog, you will learn how to build system architecture, ER diagrams, database schemas, class and sequence diagrams, UI wireframes, and test cases.",
    readingTimeMinutes: 7,
    sections: [
      {
        heading: "1. ERD, Schema & Architecture",
        body: "Keep your ERD, relational database schema, and layered architecture diagram 100% consistent.",
      },
      {
        heading: "2. UML Diagrams, Wireframes & Test Cases",
        body: "Include clean sequence/class diagrams, UI wireframes, and positive/negative test cases.",
      },
    ],
  },
  {
    id: "blog-prototype-dev",
    slug: "prototype-development",
    title: "How do you build and defend your CS619 Prototype Phase?",
    summary:
      "In this blog, you will learn how to set up your development environment, connect your database, implement core modules, and pass your prototype viva.",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "1. Core Modules & Database Connectivity",
        body: "Demonstrate working authentication and 2–3 core CRUD workflows connected to your live database.",
      },
    ],
  },
  {
    id: "blog-final-deliverable",
    slug: "final-deliverable-development",
    title: "How do you prepare your Final Deliverable & Viva Defense?",
    summary:
      "In this blog, you will learn how to complete your source code, compile the final report, design presentation slides, and defend your project confidently.",
    readingTimeMinutes: 8,
    sections: [
      {
        heading: "1. Pre-Submission & Viva Defense",
        body: "Include an exported SQL dump, updated screenshots in your Final Report, clean presentation slides, and prepare your core CS concepts.",
      },
    ],
  },
];

export const allBlogArticles: BlogArticle[] = [
  ...documentationBlogTopics,
  ...milestoneGuides,
];

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return allBlogArticles.find((article) => article.slug === slug);
}
