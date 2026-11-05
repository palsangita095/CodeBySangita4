"use client"

import { motion } from "motion/react"
import { CalendarDays, Building2, CheckCircle2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { projects } from "@/JSON/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
          Portfolio
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold">
          My <span className="text-gradient-brand">Projects</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Full-stack builds created during my MERN stack training at Webskitters
          Academy.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <MagicCard
              gradientSize={250}
              gradientFrom="#4caf50"
              gradientTo="#facc15"
              className="h-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Building2 size={13} />
                      {project.org}
                    </p>
                  </div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                    className="rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 transition hover:text-brand-green hover:border-brand-green/50"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>

                <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <CalendarDays size={13} />
                  {project.period}
                </p>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-brand-green"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
