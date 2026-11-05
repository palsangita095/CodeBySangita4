"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import ThemeToggle from "@/components/ThemeToggle"
import { SparklesText } from "@/components/ui/sparkles-text"
import { navLinks, profile } from "@/JSON/data/profile"

const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub size={18} />,
  linkedin: <FaLinkedinIn size={18} />,
  mail: <Mail size={18} />,
}

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenu(false)}>
            <SparklesText
              sparklesCount={6}
              colors={{ first: "#4caf50", second: "#facc15" }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white"
            >
              {profile.name}
            </SparklesText>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-xl bg-gradient-to-r from-brand-green to-brand-yellow px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              Hire Me
            </a>

            <button
              suppressHydrationWarning
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center rounded-xl p-2 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-[420px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-3 border-t border-slate-200 dark:border-slate-800 pt-4">
              <a
                href="https://github.com/palsangita095"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
              >
                {socialIcons.github}
              </a>
              <a
                href="https://www.linkedin.com/in/sangitapal19/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
              >
                {socialIcons.linkedin}
              </a>
              <a
                href="mailto:sangitapal131@gmail.com"
                aria-label="Email"
                className="rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
              >
                {socialIcons.mail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
