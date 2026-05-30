"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  as?: React.ElementType
}

// 스크롤 진입 시 fade+slide. prefers-reduced-motion은 globals.css에서 처리.
export function Reveal({ children, className, delay = 0, as, ...props }: RevealProps) {
  const Comp: React.ElementType = as ?? "div"
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // IntersectionObserver 미지원 시 즉시 노출
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(el)

    // 안전망: 어떤 이유로든 옵저버가 발화하지 않아도 콘텐츠가 사라지지 않도록
    const fallback = window.setTimeout(() => setVisible(true), 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Comp>
  )
}
