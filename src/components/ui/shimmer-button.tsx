import React, {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

type ShimmerButtonProps<T extends ElementType = "button"> = {
  as?: T
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

function ShimmerButtonInner<T extends ElementType = "button">(
  {
    as,
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    borderRadius = "100px",
    shimmerDuration = "3s",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...props
  }: ShimmerButtonProps<T>,
  ref: React.ForwardedRef<Element>,
) {
  const Comp = (as ?? "button") as ElementType

  return (
    <Comp
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex min-h-11 cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div
        className="-z-30 @container-[size] absolute inset-0 overflow-visible blur-[2px] motion-reduce:hidden"
      >
        <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      <span className="relative z-10">{children}</span>
      <div
        className={cn(
          "absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
          "transform-gpu transition-all duration-300 ease-in-out",
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
        )}
      />
      <div className="absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />
    </Comp>
  )
}

export const ShimmerButton = React.forwardRef(ShimmerButtonInner) as <
  T extends ElementType = "button",
>(
  props: ShimmerButtonProps<T> & { ref?: React.ForwardedRef<Element> },
) => React.ReactElement
