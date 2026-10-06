import React, { useEffect, useId, useMemo, useRef, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 *  DotPattern Component Props
 *
 * @param {number} [width=16] - The horizontal spacing between dots
 * @param {number} [height=16] - The vertical spacing between dots
 * @param {number} [x=0] - The x-offset of the entire pattern
 * @param {number} [y=0] - The y-offset of the entire pattern
 * @param {number} [cx=1] - The x-offset of individual dots
 * @param {number} [cy=1] - The y-offset of individual dots
 * @param {number} [cr=1] - The radius of each dot
 * @param {string} [className] - Additional CSS classes to apply to the SVG container
 * @param {boolean} [glow=false] - Whether dots should have a glowing animation effect
 */
interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}

/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container and can optionally display glowing dots.
 *
 * @component
 *
 * @see DotPatternProps for the props interface.
 *
 * @example
 * // Basic usage
 * <DotPattern />
 *
 * // With glowing effect and custom spacing
 * <DotPattern
 *   width={20}
 *   height={20}
 *   glow={true}
 *   className="opacity-50"
 * />
 *
 * @notes
 * - The pattern fills its container and can glow without one node per random restart.
 * - Automatically responds to container size changes
 * - When glow is enabled, dots will animate with random delays and durations
 * - Uses Motion for animations
 * - Dots color can be controlled via the text color utility classes
 */

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const updateDimensions = () => {
      const { width: nextWidth, height: nextHeight } = element.getBoundingClientRect()
      setDimensions({ width: nextWidth, height: nextHeight })
    }

    updateDimensions()
    const observer = new ResizeObserver(updateDimensions)
    observer.observe(element)

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotion = () => setReducedMotion(motionQuery.matches)
    syncMotion()
    motionQuery.addEventListener("change", syncMotion)

    return () => {
      observer.disconnect()
      motionQuery.removeEventListener("change", syncMotion)
    }
  }, [])

  const dots = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return []
    const cols = Math.max(1, Math.ceil(dimensions.width / width))
    const rows = Math.max(1, Math.ceil(dimensions.height / height))
    return Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: (i % 10) * 0.35,
        duration: 2.4 + (i % 5) * 0.35,
      }
    })
  }, [dimensions.width, dimensions.height, width, height, x, y, cx, cy])

  const animateGlow = glow && !reducedMotion

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={animateGlow ? `url(#${id}-gradient)` : "currentColor"}
          initial={animateGlow ? { opacity: 0.4, scale: 1 } : {}}
          animate={
            animateGlow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={
            animateGlow
              ? {
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  )
}
