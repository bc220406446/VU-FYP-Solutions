import type { StudentProjectWork, StudentRemark } from "@/types";

export const studentWorks: StudentProjectWork[] = [
  {
    id: "work-sovereign-store",
    slug: "sovereign-ecommerce-store",
    title: "Sovereign E-Commerce Store",
    course: "CS619",
    domain: "Web",
    categoryLabel: "Full-Stack Web App",
    image: "/images/projects/sovereign-store.webp",
    session: "Spring 2026",
    liveUrl: "https://sovereign-e-commerce-store.vercel.app",
    githubUrl: "https://github.com/bc220406446/sovereign-e-commerce-store",
  },
  {
    id: "work-graze-smasher",
    slug: "graze-smasher",
    title: "Graze Smasher",
    course: "CS619",
    domain: "AI/ML",
    categoryLabel: "Machine Learning & NLP",
    image: "/images/projects/graze-smasher.webp",
    session: "Fall 2025",
    liveUrl: "https://grazesmasher.pythonanywhere.com/",
    githubUrl: "https://github.com/bc220406446/graze_smasher",
  },
  {
    id: "work-query-management",
    slug: "smart-query-management-system",
    title: "Smart Query Management System",
    course: "CS619",
    domain: "Web",
    categoryLabel: "Academic Query Portal",
    image: "/images/projects/smart-query-management.webp",
    session: "Spring 2026",
    liveUrl: "https://smart-query-management.vercel.app/",
    githubUrl: "https://github.com/bc220406446/Smart-Query-Management",
  },
  {
    id: "work-community-skill-exchange",
    slug: "community-skill-exchange",
    title: "Community Skill Exchange",
    course: "CS619",
    domain: "Web",
    categoryLabel: "Peer Learning Platform",
    image: "/images/projects/community-skill-exchange.webp",
    session: "Fall 2025",
    liveUrl: "https://community-skill-exchange-platform.vercel.app/",
    githubUrl: "https://github.com/bc220406446/Community-Skill-Exchange-Platform",
  },
  {
    id: "work-student-management-app",
    slug: "student-management-web-application",
    title: "Student Management Web Application",
    course: "CS519",
    domain: "Web",
    categoryLabel: "PHP & MySQL Portal",
    image: "/images/projects/student-management-web-app.webp",
    session: "Spring 2026",
    liveUrl: "https://smwa.freehosting.dev/login.php",
    githubUrl: "https://github.com/bc220406446/Student-Management-Web-Application",
  },
];

export const studentRemarks: StudentRemark[] = [
  {
    id: "remark-1",
    studentName: "Hamza Tariq",
    course: "CS619",
    projectTitle: "Sovereign E-Commerce Store",
    session: "Spring 2026",
    quote:
      "My SRS and Design Document were approved in the first attempt without major revisions, and the 1-on-1 viva walkthrough made it super easy to explain every module to my supervisor.",
  },
  {
    id: "remark-2",
    studentName: "Ayesha Siddiqui",
    course: "CS619",
    projectTitle: "Graze Smasher (ML & NLP)",
    session: "Fall 2025",
    quote:
      "I was stuck on connecting my Python ML model with the frontend before my prototype deadline. They set everything up remotely on my laptop and prepped me for every viva question.",
  },
  {
    id: "remark-3",
    studentName: "Bilal Ahmed",
    course: "CS619",
    projectTitle: "Smart Query Management System",
    session: "Spring 2026",
    quote:
      "Clean code, proper VU-formatted documentation, and very responsive on WhatsApp whenever I needed a quick explanation before my defense.",
  },
  {
    id: "remark-4",
    studentName: "Sanaullah Khan",
    course: "CS619",
    projectTitle: "Community Skill Exchange",
    session: "Fall 2025",
    quote:
      "Booked the Final Deliverable + Viva Prep package. Everything ran smoothly on my local machine and the mock viva session gave me real confidence.",
  },
];
