"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BrandIcon } from "@/components/layout/brand-icon"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { AppLauncher } from "@/components/layout/app-launcher"
import { apps } from "@/content/apps"
import { navItems } from "@/content/site"
import { cn } from "@/lib/utils"

function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span className="roll-inner" data-text={children}>
        {children}
      </span>
    </span>
  )
}

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [pastHero, setPastHero] = React.useState(false)

  React.useEffect(() => {
    // 홈: 히어로(100svh) 위에서는 투명·밝은 글자, 지나면 종이 배경으로 전환
    const onScroll = () => {
      const limit = isHome ? window.innerHeight - 72 : 8
      setPastHero(window.scrollY > limit)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isHome])

  const overlay = isHome && !pastHero
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-500",
        overlay
          ? "border-b border-transparent bg-transparent text-white"
          : "border-b border-border/70 bg-background/95 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="AI 4 Insurance 홈" className="shrink-0">
          <BrandIcon tone={overlay ? "light" : "auto"} />
        </Link>

        <div className="flex items-center gap-2">
          {/* 데스크톱 내비 — 알약형 그룹 + 텍스트 롤 호버 */}
          <nav
            aria-label="주요 메뉴"
            className={cn(
              "hidden items-center rounded-full p-1 lg:flex",
              overlay ? "bg-white/12 backdrop-blur-md" : "bg-foreground/[0.06]",
            )}
          >
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex h-9 items-center rounded-full px-4 text-[0.875rem] font-medium transition-colors duration-300",
                    active
                      ? overlay
                        ? "bg-white text-[#0f1c2e]"
                        : "bg-foreground text-background"
                      : "opacity-85 hover:opacity-100",
                  )}
                >
                  <Roll>{item.name}</Roll>
                </Link>
              )
            })}
          </nav>

          <AppLauncher />
          <ThemeToggle />

          <Link
            href="/contact"
            className={cn(
              "hidden h-10 items-center rounded-full px-5 text-[0.875rem] font-medium transition-colors duration-300 sm:flex",
              overlay ? "bg-white text-[#0f1c2e] hover:bg-white/85" : "bg-foreground text-background hover:bg-foreground/85",
            )}
          >
            <Roll>문의하기</Roll>
          </Link>

          {/* 모바일 메뉴 */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="메뉴 열기"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto border-l-0 bg-navy pb-10 text-navy-foreground">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <BrandIcon size={30} tone="light" />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="모바일 메뉴" className="mt-10 flex flex-col px-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "border-b border-white/10 py-4 text-[1.75rem] font-light tracking-tight transition-colors",
                        isActive(item.href) ? "text-white" : "text-white/60 hover:text-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <p className="mt-10 text-[0.8rem] text-white/50">앱 바로가기</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4">
                  {apps.map((app) => (
                    <li key={app.id}>
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 py-2.5 text-[0.95rem] text-white/75 transition-colors hover:text-white"
                      >
                        <app.icon className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                        {app.short}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
