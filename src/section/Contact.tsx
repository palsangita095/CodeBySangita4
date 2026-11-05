"use client"

import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "motion/react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { profile } from "@/JSON/data/profile"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: "tel:+919073173610" },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
]

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim()

    if (!email || !subject || !message) {
      toast.error("Please fill in all fields.")
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.")
      return
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Email service is not configured. Add your EmailJS keys to the .env file.",
      )
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_email: email, subject, message, to_email: profile.email },
        { publicKey: PUBLIC_KEY },
      )
      setSent(true)
      form.reset()
      toast.success("Message sent! I'll get back to you soon.")
    } catch {
      toast.error("Failed to send. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
          Contact
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let&apos;s <span className="text-gradient-brand">Connect</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I&apos;m currently looking for new opportunities - my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll try
          my best to get back to you!
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="rounded-lg bg-brand-green/15 p-2.5 text-brand-green-dark dark:text-brand-green">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            )
            return item.href ? (
              <a key={item.label} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/palsangita095"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-300 hover:text-brand-green hover:border-brand-green/50 transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sangitapal19/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-300 hover:text-brand-green hover:border-brand-green/50 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-900 dark:text-white"
              >
                Your email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-11"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1 block text-sm font-medium text-slate-900 dark:text-white"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Opportunity / Collaboration"
                className="h-11"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-900 dark:text-white"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Let's talk about..."
              />
            </div>

            {sent && (
              <p className="text-sm text-brand-green-dark dark:text-brand-green text-center">
                Email sent successfully!
              </p>
            )}

            <ShimmerButton
              type="submit"
              disabled={loading}
              className="h-11 w-full font-semibold disabled:opacity-60"
              background="rgba(20, 20, 20, 1)"
              shimmerColor="#facc15"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </span>
              )}
            </ShimmerButton>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
