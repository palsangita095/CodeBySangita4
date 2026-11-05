"use client"

import { motion } from "motion/react"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiAppwrite,
  SiGit,
  SiGithub,
  SiVercel,
  SiRedux,
} from "react-icons/si"
import type { IconType } from "react-icons"

import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/JSON/data/skills"

const iconMap: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiAppwrite,
  SiGit,
  SiGithub,
  SiVercel,
  SiRedux,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
          Toolkit
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Professional <span className="text-gradient-brand">Skillset</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          The languages, frameworks, databases and tools I use to ship products.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 backdrop-blur"
          >
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-green to-brand-yellow" />
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill) => {
                const Icon = iconMap[skill.icon]
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-brand-green/50 hover:shadow-md"
                  >
                    {Icon ? (
                      <Icon
                        className="shrink-0 text-xl text-slate-500 dark:text-slate-400 transition-colors group-hover:text-brand-green"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
