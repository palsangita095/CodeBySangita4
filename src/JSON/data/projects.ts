import type { Project } from "@/@type"

export const projects: Project[] = [
  {
    id: 1,
    title: "Clicon - E-commerce Web Application",
    org: "WEBSKITTERS ACADEMY",
    description:
      "Designed and developed a full-stack e-commerce web application featuring a customer-facing marketplace and a comprehensive administrative management panel.",
    highlights: [
      "Built server-rendered pages and dynamic routes using Next.js with responsive UI designs based on Figma specs.",
      "Managed client-side cart logic, order flows, and application state using Zustand / Redux Toolkit / TanStack Query.",
      "Integrated Supabase for PostgreSQL, role-based auth, and secure media uploads with Supabase Storage.",
      "Developed an admin dashboard for stock monitoring, low-stock alerts, order status tracking, and user management.",
      "Deployed and optimized the production application on Vercel backed by Supabase cloud infrastructure.",
    ],
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Material UI",
      "shadcn ui",
      "Magic UI",
      "Zustand",
      "Redux Toolkit",
      "TanStack Query",
      "Vercel",
    ],
    repoUrl: "https://github.com/palsangita095/Clicon_Next_Final_Project",
    period: "2025-04-17 - 2025-05-01",
    featured: true,
  },
  {
    id: 2,
    title: "Loan Service Landing Page",
    org: "WEBSKITTERS ACADEMY",
    description:
      "Developed a fully responsive loan service landing page for a financial brand using semantic HTML and modern CSS, with navigation bar, banner, signup form, about section, loan products, and footer.",
    highlights: [
      "Created a responsive landing page for a loan service based on HTML5 and CSS3 (Flexbox, Grid).",
      "Developed the homepage structure and design including hero section, loan offerings, about module, and a lead generation form.",
      "Ensured responsiveness across viewports using media queries and fluid layouts.",
      "Designed interactive UI elements including a mobile hamburger menu for better navigability.",
    ],
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid", "Media Queries"],
    repoUrl: "https://github.com/palsangita095/REAL-ESTATE",
    period: "2026-06-24 - 2026-07-07",
  },
]
