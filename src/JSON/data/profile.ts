import type { NavLink, SocialLink } from "@/@type"

export const profile = {
  name: "Sangita Pal",
  role: "MERN Stack Trainee",
  tagline: "Aspiring Full Stack Developer",
  email: "sangitapal131@gmail.com",
  phone: "9073173610",
  location: "Kolkata, West Bengal, India",
  address:
    "5/55 Jagatipota Plot - 8, P.O. - Dhalua, PS - Sonarpur, Kolkata - 700152",
  summary:
    "Skilled frontend developer specializing in TypeScript, React, and Next.js, with a proven ability to build fast, scalable, and SEO-optimized web applications. Passionate about clean architecture, performance optimization, and delivering seamless user experiences.",
  heroRoles: [
    "MERN Stack Trainee",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Problem Solver",
  ],
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/palsangita095",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sangitapal19/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:sangitapal131@gmail.com",
    icon: "mail",
  },
  {
    name: "Phone",
    url: "tel:+919073173610",
    icon: "phone",
  },
]
