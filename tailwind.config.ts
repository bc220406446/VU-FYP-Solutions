import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Design System - Primary Brand Colors
        brand: {
          deepInk: "#06141B",
          darkNavy: "#11212D",
          slate: "#253745",
          deepTeal: "#0C7075",
          primaryTeal: "#0F969C",
          softBlue: "#6DA5C0",
        },
        // Design System - Neutrals
        neutral: {
          warmWhite: "#F5F6F3",
          white: "#FFFFFF",
          lightGrey: "#CCD0CE",
          mutedGrey: "#9BA8AB",
          slateText: "#4A5C6A",
          border: "#DCE2E1",
        },
        // Design System - Semantics
        semantic: {
          success: "#237A57",
          warning: "#B7791F",
          error: "#C04444",
          info: "#397C9A",
        },
        // shadcn/ui compatible semantic CSS variable mappings
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-roboto)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(6, 20, 27, 0.05), 0 1px 2px -1px rgba(6, 20, 27, 0.05)",
        card: "0 4px 6px -1px rgba(6, 20, 27, 0.05), 0 2px 4px -2px rgba(6, 20, 27, 0.05)",
        elevated: "0 10px 15px -3px rgba(6, 20, 27, 0.07), 0 4px 6px -4px rgba(6, 20, 27, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
