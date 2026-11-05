"use client"

import { motion } from "motion/react"
import { GraduationCap, MapPin, BookOpen } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { education } from "@/JSON/data/education"

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
          Academics
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold">
          My <span className="text-gradient-brand">Education</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-gradient-to-r from-brand-green to-brand-yellow p-3 shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="pt-6 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-base font-medium text-brand-green-dark dark:text-brand-green">
                {item.institution}
              </p>

              <div className="mt-5 flex flex-col items-center gap-3 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:justify-center">
                <span className="flex items-center gap-1.5">
                  {/* <BookOpen size={15} /> */}
                  {item.stream}
                </span>
                {/* <span className="hidden sm:inline text-slate-300 dark:text-slate-600">
                  |
                </span> */}
                <span className="rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-medium">
                  {item.pattern}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-600">
                  |
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
