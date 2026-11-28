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
    studentName: "Jahangeer",
    course: "CS519",
    projectTitle: "Student Management Web Application",
    quote:
      "Mera Student Management System ka project aur documentation pehli hi attempt mein approve ho gayi thi. Code bilkul clean tha aur 1-on-1 walkthrough se supervisor ko har module explain karna bohat aasan ho gaya.",
  },
  {
    id: "remark-2",
    studentName: "Kinza Ilyas",
    course: "CS619",
    projectTitle: "Graze Smasher (ML & NLP)",
    quote:
      "Main ne sirf apna Final Deliverable in se banwaya tha. Python ML model aur frontend dono perfectly integrate ho kar mere laptop par setup ho gaye aur final submission time par complete mil gayi.",
  },
  {
    id: "remark-3",
    studentName: "Bilal Ahmed",
    course: "CS619",
    projectTitle: "Smart Query Management System",
    quote:
      "Code bohat clean tha aur documentation bhi proper VU pattern ke mutabiq thi. Jab bhi defense se pehle koi cheez samajhni hoti thi, WhatsApp par foran guidance mil jati thi.",
  },
  {
    id: "remark-4",
    studentName: "Sanaullah Khan",
    course: "CS619",
    projectTitle: "Community Skill Exchange",
    quote:
      "Final Deliverable aur Viva Prep ka package book kiya tha. Mere laptop par remote setup bilkul smoothly ho gaya aur mock viva session se final defense mein bohat confidence mila.",
  },
];
