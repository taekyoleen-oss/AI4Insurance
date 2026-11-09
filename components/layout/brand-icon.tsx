import { cn } from "@/lib/utils"

interface BrandIconProps {
  className?: string
  size?: number
  // 워드마크(사이트명) 표시 여부
  showWordmark?: boolean
}

// tkLeen 마크 — 라이트는 primary, 다크는 reversed로 자동 전환.
// 파일: public/brand/svg/01-primary-transparent.svg, 02-reversed-transparent.svg
export function BrandIcon({ className, size = 34, showWordmark = true }: BrandIconProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="relative shrink-0"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/svg/01-primary-transparent.svg"
          alt=""
          width={size}
          height={size}
          className="block dark:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/svg/02-reversed-transparent.svg"
          alt=""
          width={size}
          height={size}
          className="hidden dark:block"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-[1.15rem] font-medium leading-none tracking-tight text-foreground">
          AI 4 Insurance
        </span>
      )}
    </span>
  )
}
