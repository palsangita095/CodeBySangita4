"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface MorphingTextProps {
  className?: string
  texts: string[]
}

const SWAP_INTERVAL_MS = 3600
const FADE_DURATION_MS = 300

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (texts.length <= 1) return

    let cancelled = false
    let showTimer: ReturnType<typeof setTimeout> | undefined

    const swap = () => {
      setVisible(false)
      showTimer = setTimeout(() => {
        if (cancelled) return
        setIndex((current) => (current + 1) % texts.length)
        setVisible(true)
      }, FADE_DURATION_MS)
    }

    const interval = setInterval(swap, SWAP_INTERVAL_MS)

    return () => {
      cancelled = true
      clearInterval(interval)
      clearTimeout(showTimer)
    }
  }, [texts.length])

  return (
    <div
      className={cn(
        "relative mx-auto flex h-16 w-full max-w-3xl items-center justify-center text-center font-sans text-2xl font-bold leading-none md:h-24 md:text-3xl",
        className
      )}
    >
      <span
        className="transition-opacity ease-in-out"
        style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_DURATION_MS}ms` }}
      >
        {texts[index]}
      </span>
    </div>
  )
}
