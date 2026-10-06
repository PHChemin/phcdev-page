import { useCallback, useEffect, useState, type ReactNode } from "react"
import { motion, useMotionTemplate } from "motion/react"

import { cn } from "@/lib/utils"

interface Position {
  x: number
  y: number
}

interface LensProps {
  children: ReactNode
  zoomFactor?: number
  lensSize?: number
  position?: Position
  defaultPosition?: Position
  isStatic?: boolean
  duration?: number
  lensColor?: string
  ariaLabel?: string
  className?: string
}

export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 0, y: 0 },
  defaultPosition,
  duration = 0.1,
  lensColor = "black",
  ariaLabel = "Área de zoom",
  className,
}: LensProps) {
  const zoom = Math.max(1.01, zoomFactor)
  const size = Math.max(1, lensSize)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState<Position>(position)
  const [source, setSource] = useState<HTMLDivElement | null>(null)
  const [cloneHost, setCloneHost] = useState<HTMLDivElement | null>(null)

  const showLens = isStatic || Boolean(defaultPosition) || isHovering
  const currentPosition = isStatic
    ? position
    : defaultPosition && !isHovering
      ? defaultPosition
      : mousePosition

  const syncClone = useCallback(() => {
    if (!source || !cloneHost) return
    cloneHost.replaceChildren(
      ...Array.from(source.childNodes, (node) => node.cloneNode(true)),
    )
  }, [source, cloneHost])

  useEffect(() => {
    if (showLens) syncClone()
  }, [showLens, children, syncClone])

  const maskImage = useMotionTemplate`radial-gradient(circle ${size / 2}px at ${currentPosition.x}px ${currentPosition.y}px, ${lensColor} 100%, transparent 100%)`

  return (
    <div
      className={cn("relative z-20 overflow-hidden rounded-xl", className)}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsHovering(false)
      }}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <div ref={setSource}>{children}</div>
      {showLens ? (
        <motion.div
          aria-hidden
          inert
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration }}
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
            zIndex: 50,
          }}
        >
          <div
            ref={setCloneHost}
            className="absolute inset-0"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: `${currentPosition.x}px ${currentPosition.y}px`,
            }}
          />
        </motion.div>
      ) : null}
    </div>
  )
}
