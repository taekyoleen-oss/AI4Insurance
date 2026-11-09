"use client"

import Link from "next/link"
import { LayoutGrid } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { apps, appGroups } from "@/content/apps"
import { cn } from "@/lib/utils"

// 헤더 우측 앱 런처 — 모든 앱을 한 번에 열어 바로가기
export function AppLauncher({ className }: { className?: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="앱 바로가기"
          className={cn(
            "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full opacity-85 transition-opacity hover:opacity-100 data-[state=open]:opacity-100",
            className,
          )}
        >
          <LayoutGrid className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={12}
        className="w-[min(25rem,calc(100vw-2rem))] rounded-2xl border-border/70 p-4 shadow-xl"
      >
        <div className="flex items-center justify-between px-1">
          <p className="text-[0.875rem] font-medium">앱 바로가기</p>
          <Link href="/app-resources" className="text-[0.8125rem] text-brand-ink hover:underline">
            전체 소개
          </Link>
        </div>
        {appGroups.map((group) => (
          <div key={group} className="mt-4">
            <p className="px-1 text-[0.75rem] text-muted-foreground">{group}</p>
            <ul className="mt-2 grid grid-cols-4 gap-1">
              {apps
                .filter((a) => a.group === group)
                .map((app) => (
                  <li key={app.id}>
                    <a
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={app.name}
                      className="group flex flex-col items-center gap-2 rounded-xl px-1 py-3 text-center transition-colors hover:bg-foreground/[0.05]"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5",
                          group === "모델분석"
                            ? "bg-[#4a90c2]/14 text-brand-ink"
                            : "bg-foreground/[0.07] text-foreground/80",
                        )}
                      >
                        <app.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-[0.78rem] leading-tight">{app.short}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
