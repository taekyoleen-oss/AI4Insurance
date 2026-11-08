import { cn } from "@/lib/utils"

interface BrandIconProps {
  className?: string
  size?: number
  // 워드마크(사이트명) 표시 여부
  showWordmark?: boolean
  // auto: 라이트/다크 테마를 따름 · light: 어두운 배경(히어로·네이비) 위 고정
  tone?: "auto" | "light"
}

// tkLeen 마크 — public/brand/svg/01-primary-transparent.svg, 02-reversed-transparent.svg
export function BrandIcon({ className, size = 34, showWordmark = true, tone = "auto" }: BrandIconProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative shrink-0" style={{ width: size, height: size }} aria-hidden="true">
        {tone === "light" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/brand/svg/02-reversed-transparent.svg" alt="" width={size} height={size} />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/svg/01-primary-transparent.svg" alt="" width={size} height={size} className="block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/svg/02-reversed-transparent.svg" alt="" width={size} height={size} className="hidden dark:block" />
          </>
        )}
      </span>
      {showWordmark && (
        <span
          className={cn(
            "text-[1.05rem] font-medium leading-none tracking-[-0.03em]",
            tone === "light" ? "text-white" : "text-current",
          )}
        >
          AI 4 Insurance
        </span>
      )}
    </span>
  )
}
