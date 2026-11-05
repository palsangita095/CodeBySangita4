"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import { MorphingText } from "@/components/ui/morphing-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { profile } from "@/JSON/data/profile"

const PATH_COUNT = 36

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: PATH_COUNT }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${300 + i * 6}C-${
      380 - i * 5 * position
    } -${175 + i * 6} -${312 - i * 5 * position} ${200 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    opacity: 0.07 + i * 0.013,
    delay: i * 0.03,
  }))

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ y: [0, position * 14, 0] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: position > 0 ? 0 : 1.5,
      }}
    >
      <svg
        className="w-full h-full text-slate-300 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 2.5,
                delay: path.delay,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 1.5,
                delay: path.delay,
                ease: "easeOut",
              },
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

const socials = [
  { icon: FaGithub, href: "https://github.com/palsangita095", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/sangitapal19/",
    label: "LinkedIn",
  },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Phone, href: "tel:+919073173610", label: "Phone" },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="w-full max-w-5xl text-center">
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-green-dark dark:text-brand-green"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-brand-green"
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.6, 1] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            Open to work
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gradient-brand">Hey, I&apos;m </span>
            <span className="text-slate-900 dark:text-white">{profile.name}</span>
          </h1>

          <div className="mt-4">
            <MorphingText
              texts={profile.heroRoles}
              className="h-14 text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-200 md:h-16"
            />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-green to-brand-yellow px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-48 sm:w-auto"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>

            <ShimmerButton
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-48 sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold"
              background="rgba(20, 20, 20, 1)"
              shimmerColor="#4caf50"
            >
              View My Work
            </ShimmerButton>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-3 text-slate-700 dark:text-slate-300 backdrop-blur transition-all hover:-translate-y-1 hover:text-brand-green hover:shadow-lg"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
