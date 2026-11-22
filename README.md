# DeveloperBano

DeveloperBano is an educational technology platform dedicated to providing students with high-quality Final Year Project (FYP) resources, customized project development services, technical guides, and student learning experiences.

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js (App Router, React 19) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS with centralized design tokens |
| **UI Components** | shadcn/ui primitive architecture |
| **Icon System** | Hugeicons (`@hugeicons/react`, `@hugeicons/core-free-icons`) |
| **Database** | Supabase PostgreSQL |
| **Media Storage** | Supabase Storage |
| **Client Library** | `@supabase/supabase-js`, `@supabase/ssr` |
| **Form Handling** | React Hook Form |
| **Validation** | Zod |
| **Animations** | Framer Motion |
| **Image Optimization** | Next.js Image |
| **Spam Protection** | Cloudflare Turnstile |
| **Deployment** | Vercel |

---

## Design System

DeveloperBano follows a restrained **Deep Teal + Slate + Warm Off-White** visual identity.

### 1. Color Palette

#### Primary Brand Colors
- **Deep Ink (`#06141B`)**: Main dark backgrounds and strong headings.
- **Dark Navy (`#11212D`)**: Dark surfaces and secondary dark backgrounds.
- **Slate (`#253745`)**: Secondary dark elements.
- **Deep Teal (`#0C7075`)**: Primary brand color and primary call-to-actions.
- **Primary Teal (`#0F969C`)**: Interactive highlights, accents, and link states.
- **Soft Blue (`#6DA5C0`)**: Selective secondary accents.

#### Neutral Colors
- **Warm White (`#F5F6F3`)**: Primary website background.
- **White (`#FFFFFF`)**: Cards and surfaces.
- **Light Grey (`#CCD0CE`)**: Subtle visual elements and card borders.
- **Muted Grey (`#9BA8AB`)**: Secondary and muted text.
- **Slate Text (`#4A5C6A`)**: Primary body typography.
- **Border (`#DCE2E1`)**: Subtle borders and dividers.

#### Semantic Colors
- **Success (`#237A57`)**: Success states and positive actions.
- **Warning (`#B7791F`)**: Warning indicators.
- **Error (`#C04444`)**: Validation errors and alert states.
- **Information (`#397C9A`)**: Informational banners.

### 2. Typography System

- **Headings**: `Poppins` (Weights: `500 Medium`, `600 SemiBold`, `700 Bold`)
- **Body**: `Roboto` (Weights: `400 Regular`, `500 Medium`, `700 Bold`)
- **Monospace / Code**: `JetBrains Mono`

*Note: Inter, Geist, and Space Grotesk are strictly excluded per design standards.*

### 3. Iconography

All interface icons are powered exclusively by **Hugeicons** using clean, outline strokes for visual consistency and pixel-perfect 24×24 geometry.

---

## Directory Structure

```text
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── blogs/
│   │   ├── testimonials/
│   │   └── general/
│   ├── icons/
│   ├── fonts/
│   └── documents/
├── content/
│   ├── projects/
│   └── blogs/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── projects/
│   │   ├── services/
│   │   ├── blogs/
│   │   ├── helping-material/
│   │   ├── supervisor-reviews/
│   │   ├── student-projects/
│   │   ├── contact/
│   │   └── api/
│   │       └── reviews/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── projects/
│   ├── data/
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   └── server.ts
│   │   └── whatsapp.ts
│   ├── hooks/
│   ├── types/
│   └── config/
│       └── site.ts
├── .env.example
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Populate the required credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build and Typecheck

```bash
npm run lint
npx tsc --noEmit
npm run build
```
