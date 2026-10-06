import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from "react"

import { cn } from "@/lib/utils"

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

function hexToRgb(hex: string): number[] {
  let value = hex.replace("#", "")
  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("")
  }
  const hexInt = parseInt(value, 16)
  if (Number.isNaN(hexInt)) return [255, 255, 255]
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255]
}

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const pointer = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = useRef(1)
  const rgb = useRef(hexToRgb(color))

  useEffect(() => {
    rgb.current = hexToRgb(color)
  }, [color])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvasContainerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    context.current = ctx

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let raf = 0
    let visible = true
    let stopped = false

    const circleParams = (): Circle => ({
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: Math.floor(Math.random() * canvasSize.current.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    })

    const resizeCanvas = () => {
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2)
      dpr.current = nextDpr
      canvasSize.current.w = container.offsetWidth
      canvasSize.current.h = container.offsetHeight
      canvas.width = canvasSize.current.w * nextDpr
      canvas.height = canvasSize.current.h * nextDpr
      canvas.style.width = `${canvasSize.current.w}px`
      canvas.style.height = `${canvasSize.current.h}px`
      ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0)
      circles.current = Array.from({ length: quantity }, () => circleParams())
    }

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number,
    ) => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
      return remapped > 0 ? remapped : 0
    }

    const drawCircle = (circle: Circle) => {
      const { x, y, translateX, translateY, size: radius, alpha } = circle
      ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0)
      ctx.translate(translateX, translateY)
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(${rgb.current.join(", ")}, ${alpha})`
      ctx.fill()
      ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0)
    }

    const drawFrame = () => {
      ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0)
      ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      const safeEase = Math.max(ease, 0.01)
      const frozen = reducedMotion.matches

      for (let i = 0; i < circles.current.length; i++) {
        const circle = circles.current[i]!
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ]
        const closestEdge = Math.min(...edge)
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
        )
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge
        }

        if (!frozen) {
          circle.x += circle.dx + vx
          circle.y += circle.dy + vy
          circle.translateX +=
            (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
            safeEase
          circle.translateY +=
            (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
            safeEase
        }

        const out =
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size

        if (out && !frozen) {
          circles.current[i] = circleParams()
          continue
        }

        drawCircle(circle)
      }
    }

    const shouldRun = () =>
      visible && !document.hidden && !reducedMotion.matches && !stopped

    const frame = () => {
      drawFrame()
      if (!shouldRun()) return
      raf = window.requestAnimationFrame(frame)
    }

    const start = () => {
      window.cancelAnimationFrame(raf)
      if (!shouldRun()) {
        drawFrame()
        return
      }
      raf = window.requestAnimationFrame(frame)
    }

    const onPointer = (event: MouseEvent) => {
      pointer.current.x = event.clientX
      pointer.current.y = event.clientY
      const rect = canvas.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = pointer.current.x - rect.left - w / 2
      const y = pointer.current.y - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        resizeCanvas()
        start()
      }, 200)
    }

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false
      start()
    })
    intersection.observe(container)

    const onVisibility = () => start()
    const onMotion = () => start()

    resizeCanvas()
    start()
    window.addEventListener("mousemove", onPointer, { passive: true })
    window.addEventListener("resize", onResize)
    document.addEventListener("visibilitychange", onVisibility)
    reducedMotion.addEventListener("change", onMotion)

    return () => {
      stopped = true
      window.cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener("mousemove", onPointer)
      window.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", onVisibility)
      reducedMotion.removeEventListener("change", onMotion)
      intersection.disconnect()
    }
  }, [quantity, staticity, ease, size, refresh, vx, vy, color])

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
