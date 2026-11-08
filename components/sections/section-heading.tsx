import Link from "next/link"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  // 좌측 칩: 개수(선택) + 섹션 이름
  count?: number
  label: string
  title: React.ReactNode
  description?: React.ReactNode
  link?: { href: string; label: string }
  className?: string
  // 다크(네이비) 섹션 위에서 보조 텍스트 색 조정
  onDark?: boolean
}

// 좌측 하단에 작은 칩, 우측에 큰 제목 — 섹션 진입 표지
export function SectionHeading({ count, label, title, description, link, className, onDark }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col-reverse gap-6 md:flex-row md:items-end md:justify-between">
        <p className="flex shrink-0 items-center gap-1">
          {typeof count === "number" && <span className="chip tabular">{count}</span>}
          <span className="chip">{label}</span>
        </p>
        <h2 className="text-display-lg md:max-w-[14ch] md:text-right">{title}</h2>
      </div>
      {(description || link) && (
        <div className="flex flex-col gap-4 md:ml-auto md:max-w-[34rem] md:items-end md:text-right">
          {description && (
            <p className={cn("text-[1.0625rem] leading-relaxed", onDark ? "text-navy-muted" : "text-muted-foreground")}>
              {description}
            </p>
          )}
          {link && (
            <Link
              href={link.href}
              className={cn(
                "inline-flex h-11 items-center rounded-full border px-5 text-[0.9rem] font-medium transition-colors duration-300",
                onDark
                  ? "border-white/30 hover:border-white hover:bg-white hover:text-[#0f1c2e]"
                  : "border-foreground/25 hover:border-foreground hover:bg-foreground hover:text-background",
              )}
            >
              <span className="roll">
                <span className="roll-inner" data-text={link.label}>
                  {link.label}
                </span>
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
