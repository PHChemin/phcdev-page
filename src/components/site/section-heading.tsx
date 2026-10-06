import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  intro?: ReactNode
  align?: "left" | "center"
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-5xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-xs tracking-[0.22em] text-eyebrow uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
