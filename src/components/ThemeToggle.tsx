"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const emptySubscribe = () => () => {}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  if (!mounted) {
    return <button suppressHydrationWarning aria-hidden className="border rounded-full p-2 opacity-50" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="border border-slate-200 dark:border-slate-700 rounded-full p-2 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
