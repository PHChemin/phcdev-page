import React, { useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
  mode = "container",
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode
  }[]
  contentClassName?: string
  /** `container` scrolls inside the block. `page` follows the window. */
  mode?: "container" | "page"
}) => {
  const items = content ?? []
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll(
    mode === "page"
      ? { target: ref, offset: ["start start", "end start"] }
      : { container: ref, offset: ["start start", "end start"] },
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (items.length === 0) return
    const breakpoints = items.map((_, index) => index / items.length)
    const closest = breakpoints.reduce((best, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      return distance < Math.abs(latest - breakpoints[best]!) ? index : best
    }, 0)
    setActiveCard(closest)
  })

  if (items.length === 0) return null

  const active = items[Math.min(activeCard, items.length - 1)]!

  const copy = (
    <div className="max-w-2xl">
      {items.map((item, index) => (
        <div key={item.title + index} className="my-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === index ? 1 : 0.35 }}
            className="text-2xl font-bold text-foreground"
          >
            {item.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === index ? 1 : 0.35 }}
            className="mt-6 max-w-sm text-base text-muted-foreground"
          >
            {item.description}
          </motion.p>
        </div>
      ))}
      <div className="h-40" />
    </div>
  )

  const panel = (
    <div
      className={cn(
        "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-primary text-primary-foreground lg:block",
        contentClassName,
      )}
    >
      {active.content ?? null}
    </div>
  )

  if (mode === "page") {
    return (
      <div
        ref={ref}
        className="relative"
        style={{ height: `${Math.max(items.length, 1) * 80}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center gap-10 px-6 md:px-10">
          <div className="max-w-xl">
            <motion.h2
              key={active.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-foreground"
            >
              {active.title}
            </motion.h2>
            <motion.p
              key={active.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 max-w-md text-base text-muted-foreground"
            >
              {active.description}
            </motion.p>
          </div>
          {panel}
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative flex h-[30rem] justify-center gap-10 overflow-y-auto rounded-md bg-card p-6 text-foreground md:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        {copy}
      </div>
      {panel}
    </div>
  )
}
