import type { ServiceCourse } from "@/types";

export interface DocumentResourceItem {
  id: string;
  fileName: string;
  course: ServiceCourse;
  downloadUrl: string;
}

export interface DevelopmentSoftwareItem {
  id: string;
  name: string;
  description: string;
  url: string;
  iconKey: "code" | "diagram" | "api" | "design";
}

export interface ProgrammingResourceItem {
  id: string;
  name: string;
  url?: string;
}

export const documentationPatterns: DocumentResourceItem[] = [
  // CS519
  {
    id: "pattern-cs519-doc",
    fileName: "CS519 Documentation Pattern.pdf",
    course: "CS519",
    downloadUrl: "/helping-material/CS519/CS519%20Documentation%20Pattern.pdf",
  },
  {
    id: "pattern-cs519-final-report",
    fileName: "CS519 Final Report Pattern.pdf",
    course: "CS519",
    downloadUrl: "/helping-material/CS519/CS519%20Final%20Report%20Pattern.pdf",
  },
  {
    id: "pattern-cs519-final-ppt",
    fileName: "CS519 Final Presentation Pattern.pdf",
    course: "CS519",
    downloadUrl:
      "/helping-material/CS519/CS519%20Final%20Presentation%20Pattern.pdf",
  },
  // CS619
  {
    id: "pattern-cs619-srs",
    fileName: "CS619 SRS Pattern.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20SRS%20Pattern.pdf",
  },
  {
    id: "pattern-cs619-design",
    fileName: "CS619 Design Document Pattern.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20Design%20Document%20Pattern.pdf",
  },
  {
    id: "pattern-cs619-final-report",
    fileName: "CS619 Final Presentation Report Pattern.pdf",
    course: "CS619",
    downloadUrl:
      "/helping-material/CS619/CS619%20Final%20Presentation%20Report%20Pattern.pdf",
  },
  {
    id: "pattern-cs619-ppt",
    fileName: "CS619 Presentation Pattern.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20Presentation%20Pattern.pdf",
  },
];

export const workSamples: DocumentResourceItem[] = [
  // CS519
  {
    id: "sample-cs519-doc",
    fileName: "CS519 Documentation Sample.pdf",
    course: "CS519",
    downloadUrl: "/helping-material/CS519/CS519%20Documentation%20Sample.pdf",
  },
  {
    id: "sample-cs519-final-report",
    fileName: "CS519 Final Report Sample.pdf",
    course: "CS519",
    downloadUrl: "/helping-material/CS519/CS519%20Final%20Report%20Sample.pdf",
  },
  {
    id: "sample-cs519-final-ppt",
    fileName: "CS519 Final Presentation Sample.pdf",
    course: "CS519",
    downloadUrl:
      "/helping-material/CS519/CS519%20Final%20Presentation%20Sample.pdf",
  },
  // CS619
  {
    id: "sample-cs619-srs",
    fileName: "CS619 SRS Sample.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20SRS%20Sample.pdf",
  },
  {
    id: "sample-cs619-design",
    fileName: "CS619 Design Document Sample.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20Design%20Document%20Sample.pdf",
  },
  {
    id: "sample-cs619-final-report",
    fileName: "CS619 Final Presentation Report Sample.pdf",
    course: "CS619",
    downloadUrl:
      "/helping-material/CS619/CS619%20Final%20Presentation%20Report%20Sample.pdf",
  },
  {
    id: "sample-cs619-ppt",
    fileName: "CS619 Presentation Sample.pdf",
    course: "CS619",
    downloadUrl: "/helping-material/CS619/CS619%20Presentation%20Sample.pdf",
  },
];

export const developmentSoftware: DevelopmentSoftwareItem[] = [
  {
    id: "sw-vscode",
    name: "Visual Studio Code",
    description: "Lightweight code editor for web, Python, and PHP projects.",
    url: "https://code.visualstudio.com/download",
    iconKey: "code",
  },
  {
    id: "sw-nodejs",
    name: "Node.js",
    description: "JavaScript runtime required for React, Next.js, and Express apps.",
    url: "https://nodejs.org/en/download",
    iconKey: "code",
  },
  {
    id: "sw-python",
    name: "Python",
    description: "Programming language and runtime for AI/ML, Flask, and Django.",
    url: "https://www.python.org/downloads/",
    iconKey: "code",
  },
  {
    id: "sw-xampp",
    name: "XAMPP",
    description: "Local Apache, PHP, and MySQL server stack for web projects.",
    url: "https://www.apachefriends.org/download.html",
    iconKey: "api",
  },
  {
    id: "sw-drawio",
    name: "Draw.io",
    description: "Free diagramming tool for UML, ERD, and architecture diagrams.",
    url: "https://app.diagrams.net/",
    iconKey: "diagram",
  },
];

export const programmingResources: ProgrammingResourceItem[] = [
  {
    id: "prog-html",
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "prog-css",
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "prog-js",
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "prog-python",
    name: "Python",
    url: "https://docs.python.org/3/",
  },
  {
    id: "prog-php",
    name: "PHP",
    url: "https://www.php.net/manual/en/",
  },
  {
    id: "prog-react",
    name: "React",
    url: "https://react.dev/learn",
  },
  {
    id: "prog-nextjs",
    name: "Next.js",
    url: "https://nextjs.org/docs",
  },
  {
    id: "prog-django",
    name: "Django",
    url: "https://docs.djangoproject.com/",
  },
  {
    id: "prog-nodejs",
    name: "Node.js",
    url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
  },
  {
    id: "prog-sql",
    name: "SQL",
    url: "https://www.w3schools.com/sql/",
  },
  {
    id: "prog-express",
    name: "Express",
    url: "https://expressjs.com/",
  },
  {
    id: "prog-mongodb",
    name: "MongoDB",
    url: "https://www.mongodb.com/docs/",
  },
];

export const vivaPrepFiles: DocumentResourceItem[] = [
  {
    id: "viva-fav-subject",
    fileName: "Favourite Subject Preparation.pdf",
    course: "CS619",
    downloadUrl:
      "/helping-material/Viva%20Material/Favourite%20Subject%20Preparation.pdf",
  },
  {
    id: "viva-fav-and-ppt",
    fileName: "Fvrt Subject + Presentation Preparation.pdf",
    course: "CS619",
    downloadUrl:
      "/helping-material/Viva%20Material/Fvrt%20Subject%20%2B%20Presentation%20Preparation.pdf",
  },
  {
    id: "viva-presentation-prep",
    fileName: "Presentation Preparation.pdf",
    course: "CS619",
    downloadUrl:
      "/helping-material/Viva%20Material/Presentation%20Preparation.pdf",
  },
];
