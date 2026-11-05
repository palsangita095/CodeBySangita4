import type { SkillGroup } from "@/@type"

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6)", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Appwrite", icon: "SiAppwrite" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Zustand", icon: "SiRedux" },
    ],
  },
]
