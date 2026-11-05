"use client"

import { motion } from "motion/react"
import { Code2, Layout, Server, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { profile } from "@/JSON/data/profile"

const highlights = [
  {
    icon: Layout,
    title: "Frontend Focus",
    text: "React, Next.js, Tailwind CSS and Bootstrap for responsive, accessible interfaces.",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    text: "Strong command of JavaScript (ES6) and TypeScript for reliable, scalable code.",
  },
  {
    icon: Server,
    title: "Backend & Data",
    text: "Supabase (PostgreSQL, Auth, Storage) and Appwrite for full-stack features.",
  },
  {
    icon: Sparkles,
    title: "Clean Architecture",
    text: "Passionate about performance optimization and seamless user experiences.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
          About Me
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Know Who <span className="text-gradient-brand">I Am</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur"
        >
          <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            {profile.name}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m currently a {profile.role} at Webskitters Academy, building
            full-stack projects with Next.js and Supabase while sharpening the
            fundamentals that make web applications fast, scalable and
            SEO-friendly.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>MERN Stack</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="outline">Supabase</Badge>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex rounded-lg bg-brand-green/15 p-2.5 text-brand-green-dark dark:text-brand-green">
                  <Icon size={20} />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
