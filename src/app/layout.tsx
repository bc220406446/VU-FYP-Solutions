import type { Metadata, Viewport } from "next";
import { Poppins, Roboto, JetBrains_Mono } from "next/font/google";
import { TopAnnouncementBar } from "@/components/layout/top-announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7FAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#05161A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "VU FYP Solutions | CS619 & CS519 Final Year Project Support",
    template: "%s | VU FYP Solutions",
  },
  description:
    "Complete Final Year Project solutions for Virtual University CS619 & CS519 students. Documentation, implementation, and viva preparation.",
  keywords: [
    "VU FYP Solutions",
    "DeveloperBano",
    "CS619 FYP",
    "CS519 FYP",
    "Virtual University Final Year Project",
    "VU Documentation",
    "SRS Design Viva",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "VU FYP Solutions | CS619 & CS519 Final Year Project Support",
    description:
      "Complete Final Year Project solutions for Virtual University CS619 & CS519 students.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "VU FYP Solutions",
    description:
      "Complete Final Year Project solutions for Virtual University CS619 & CS519 students.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-brand-primaryTeal selection:text-white">
        <TopAnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
