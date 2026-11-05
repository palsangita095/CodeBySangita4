export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface SkillGroup {
  title: string
  skills: { name: string; icon: string }[]
}

export interface Project {
  id: number
  title: string
  org: string
  description: string
  highlights: string[]
  technologies: string[]
  repoUrl: string
  period: string
  featured?: boolean
}

export interface Education {
  degree: string
  institution: string
  stream: string
  pattern: string
  location: string
}
