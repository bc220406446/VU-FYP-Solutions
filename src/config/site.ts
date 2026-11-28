/**
 * DeveloperBano - Site Configuration
 * Centralized site metadata, branding constants, and structural configuration.
 */

export const siteConfig = {
  name: "DeveloperBano",
  shortName: "DevBano",
  description:
    "Premium FYP project resources, project development services, technical guides, and student learning experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/images/general/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/923328322488",
    github: "https://github.com/developerbano",
    youtube: "https://youtube.com/@developerbano",
  },
  contact: {
    email: "muhammadkamranyar@gmail.com",
    whatsappDisplay: "+92 332 8322488",
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Services", href: "/services" },
    { title: "Helping Material", href: "/helping-material" },
    { title: "Supervisor Reviews", href: "/supervisor-reviews" },
    { title: "Student Projects", href: "/student-projects" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
