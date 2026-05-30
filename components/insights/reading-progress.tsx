"use client"

import * as React from "react"

// 자료실 글 읽기 진행바 — 페이지 스크롤 비율을 상단 바로 표시
export function ReadingProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      const ratio = scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, ratio)))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
