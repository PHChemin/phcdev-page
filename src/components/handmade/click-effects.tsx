import { useEffect, useRef } from "react"

export type ClickEffectVariant = "burst" | "sparks" | "confetti" | "icon"

type ClickEffectsProps = {
  variant?: ClickEffectVariant
  color?: string
  /** Overrides `color`; each particle picks one at random. */
  colors?: string[]
  effectSize?: number
  /** Seconds. Each variant has its own default. */
  duration?: number
  /** Character or emoji drawn by the `icon` variant. */
  icon?: string
  className?: string
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  max: number
  size: number
  color: string
  angle: number
  spin: number
}

type Config = Required<Omit<ClickEffectsProps, "className" | "duration" | "colors">> & {
  palette: string[]
  duration: number
}

const DEFAULT_DURATION: Record<ClickEffectVariant, number> = {
  burst: 0.4,
  sparks: 0.35,
  confetti: 1.2,
  icon: 0.9,
}

const MAX_PARTICLES = 400

const random = (min: number, max: number) => min + Math.random() * (max - min)
const pick = (palette: string[]) => palette[Math.floor(Math.random() * palette.length)]!
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function spawnParticles(x: number, y: number, config: Config): Particle[] {
  const { variant, effectSize, palette } = config
  const max = Math.max(config.duration, 0.05)
  const base = { x, y, life: 1, max, angle: 0, spin: 0 }

  switch (variant) {
    case "sparks": {
      const count = 10
      const offset = Math.random() * Math.PI
      return Array.from({ length: count }, (_, i) => ({
        ...base,
        vx: 0,
        vy: 0,
        angle: offset + (Math.PI * 2 * i) / count,
        size: random(0.18, 0.28) * effectSize,
        color: pick(palette),
      }))
    }
    case "confetti":
      return Array.from({ length: 28 }, () => {
        const angle = random(-Math.PI * 0.85, -Math.PI * 0.15)
        const speed = random(3, 5.5) * (effectSize / 80)
        return {
          ...base,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          max: max * random(0.75, 1.1),
          size: random(6, 10),
          color: pick(palette),
          angle: Math.random() * Math.PI * 2,
          spin: random(-0.25, 0.25),
        }
      })
    case "icon":
      return Array.from({ length: 3 }, (_, i) => {
        const angle = -Math.PI / 2 + (i - 1) * 0.75 + random(-0.15, 0.15)
        const speed = random(1.6, 2.2)
        return {
          ...base,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          max: max * (i === 1 ? 1 : 0.8),
          size: effectSize * (i === 1 ? 0.4 : 0.28),
          color: pick(palette),
          angle: Math.random() * Math.PI * 2,
        }
      })
    default:
      return Array.from({ length: 16 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.35
        const speed = 1.4 + Math.random() * (effectSize / 45)
        return {
          ...base,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: random(1.5, 3.5),
          color: pick(palette),
        }
      })
  }
}

function stepParticle(particle: Particle, variant: ClickEffectVariant, step: number) {
  if (variant === "sparks") return

  particle.x += particle.vx * step
  particle.y += particle.vy * step

  if (variant === "confetti") {
    particle.vy += 0.18 * step
    const drag = Math.pow(0.985, step)
    particle.vx *= drag
    particle.vy *= drag
    particle.angle += particle.spin * step
  } else if (variant === "icon") {
    particle.vy *= Math.pow(0.985, step)
    particle.angle += 0.08 * step
  } else {
    const drag = Math.pow(0.96, step)
    particle.vx *= drag
    particle.vy *= drag
  }
}

function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
  config: Config,
) {
  const { life } = particle
  ctx.fillStyle = particle.color
  ctx.strokeStyle = particle.color

  switch (config.variant) {
    case "sparks": {
      const progress = easeOutCubic(1 - life)
      const inner = config.effectSize * (0.12 + progress * 0.4)
      const outer = inner + particle.size * life
      const cos = Math.cos(particle.angle)
      const sin = Math.sin(particle.angle)
      ctx.globalAlpha = Math.min(1, life * 2)
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(particle.x + cos * inner, particle.y + sin * inner)
      ctx.lineTo(particle.x + cos * outer, particle.y + sin * outer)
      ctx.stroke()
      break
    }
    case "confetti": {
      ctx.globalAlpha = Math.min(1, life * 3)
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.angle)
      ctx.scale(1, Math.cos(particle.angle * 3))
      ctx.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2)
      ctx.restore()
      break
    }
    case "icon": {
      const progress = 1 - life
      const pop = progress < 0.2 ? easeOutCubic(progress / 0.2) * 1.15 : 1.15 - Math.min(0.15, progress - 0.2)
      ctx.globalAlpha = Math.min(1, life * 1.5)
      ctx.save()
      ctx.translate(particle.x + Math.sin(particle.angle) * 4, particle.y)
      ctx.scale(pop, pop)
      ctx.font = `${particle.size}px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(config.icon, 0, 0)
      ctx.restore()
      break
    }
    default:
      ctx.globalAlpha = Math.max(0, life)
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * life, 0, Math.PI * 2)
      ctx.fill()
  }

  ctx.globalAlpha = 1
}

/** Click animation over the whole page. Pass the client accent color(s). */
export default function ClickEffects({
  variant = "burst",
  color = "#0f6b5c",
  colors,
  effectSize = 80,
  duration,
  icon = "♥",
  className = "",
}: ClickEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const configRef = useRef<Config | null>(null)

  useEffect(() => {
    configRef.current = {
      variant,
      color,
      palette: colors && colors.length > 0 ? colors : [color],
      effectSize,
      duration: duration ?? DEFAULT_DURATION[variant],
      icon,
    }
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: { config: Config; particle: Particle }[] = []
    let raf = 0
    let last = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      particles = particles.filter(({ config, particle }) => {
        stepParticle(particle, config.variant, dt * 60)
        particle.life -= dt / particle.max
        if (particle.life <= 0) return false
        drawParticle(ctx, particle, config)
        return true
      })

      if (particles.length === 0) {
        raf = 0
        return
      }
      raf = requestAnimationFrame(draw)
    }

    const onClick = (event: MouseEvent) => {
      const config = configRef.current
      if (!config) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const spawned = spawnParticles(event.clientX, event.clientY, config)
      particles.push(...spawned.map((particle) => ({ config, particle })))
      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES)
      }

      if (raf === 0) {
        last = performance.now()
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("click", onClick)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
