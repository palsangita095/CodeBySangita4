"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import { SparklesText } from "@/components/ui/sparkles-text"
import { Separator } from "@/components/ui/separator"
import { navLinks, profile } from "@/JSON/data/profile"

export default function Footer() {
  const socials = [
    { icon: FaGithub, href: "https://github.com/palsangita095", label: "GitHub" },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sangitapal19/",
      label: "LinkedIn",
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/10 bg-linear-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-700/20" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-600/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/">
              <SparklesText
                sparklesCount={6}
                colors={{ first: "#4caf50", second: "#facc15" }}
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                {profile.name}
              </SparklesText>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.summary}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300 transition group-hover:scale-110" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-black dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href="tel:+919073173610"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Status
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              Open to internships and entry-level opportunities in MERN stack
              development.
            </p>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-2xl bg-gradient-to-r from-brand-green to-brand-yellow px-6 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-slate-200 dark:bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Ac {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm font-mono text-brand-green">
            while (!(succeed = try()));
          </p>
        </div>
      </div>
    </footer>
  )
}
