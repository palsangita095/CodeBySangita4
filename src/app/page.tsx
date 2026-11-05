"use client"

import Navbar from "@/layout/Navbar"
import Footer from "@/layout/Footer"
import Hero from "@/section/Hero"
import About from "@/section/About"
import Skills from "@/section/Skills"
import Projects from "@/section/Projects"
import Education from "@/section/Education"
import Contact from "@/section/Contact"
import ScrollVelocity from "@/components/ScrollVelocity"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />

      <div className="relative flex-1">
        <Hero />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>

        <div className="hidden md:block border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-6">
          <ScrollVelocity
            texts={["Thank you for visiting my portfolio", "Do connect with me"]}
            velocity={100}
            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow"
            damping={50}
            stiffness={400}
            numCopies={6}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
