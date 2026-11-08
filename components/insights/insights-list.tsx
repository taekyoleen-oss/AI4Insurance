"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { InsightBoard } from "@/components/cards/insight-card"
import type { BlogPostMeta } from "@/lib/markdown"
import { categoryLabel } from "@/content/categories"
import { cn } from "@/lib/utils"

interface InsightsListProps {
  posts: BlogPostMeta[]
  categories: string[]
}

export function InsightsList({ posts, categories }: InsightsListProps) {
  const [active, setActive] = React.useState<string | null>(null)
  const [query, setQuery] = React.useState("")

  const normalized = query.trim().toLowerCase()

  const filtered = React.useMemo(() => {
    return posts.filter((p) => {
      if (active && p.category !== active) return false
      if (!normalized) return true
      const haystack = [
        p.title,
        p.excerpt,
        categoryLabel(p.category),
        ...(p.tags ?? []),
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(normalized)
    })
  }, [posts, active, normalized])

  const countOf = (cat: string) => posts.filter((p) => p.category === cat).length
  const isFiltering = active !== null || normalized.length > 0

  return (
    <div>
      {/* 검색 */}
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="제목·태그·키워드로 검색"
          aria-label="자료실 검색"
          className="h-12 w-full rounded-full border border-foreground/20 bg-card pl-11 pr-11 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="검색어 지우기"
            className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 카테고리 필터 */}
      <div className="mt-5 flex flex-wrap gap-2">
        <FilterPill active={active === null} onClick={() => setActive(null)}>
          전체 <span className="tabular opacity-60">{posts.length}</span>
        </FilterPill>
        {categories.map((cat) => (
          <FilterPill key={cat} active={active === cat} onClick={() => setActive(cat)}>
            {categoryLabel(cat)} <span className="tabular opacity-60">{countOf(cat)}</span>
          </FilterPill>
        ))}
      </div>

      {/* 결과 카운트 */}
      {isFiltering && (
        <p className="mt-6 text-sm text-muted-foreground">
          검색 결과 <span className="font-semibold text-foreground">{filtered.length}</span>건
          {normalized && <> · &ldquo;{query.trim()}&rdquo;</>}
        </p>
      )}

      {/* 그리드 */}
      <div className="mt-10">
        <InsightBoard posts={filtered} />
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">검색 조건에 맞는 글이 없습니다.</p>
          <button
            onClick={() => {
              setQuery("")
              setActive(null)
            }}
            className="mt-3 text-sm font-medium text-brand-ink transition-colors hover:text-foreground"
          >
            필터 초기화
          </button>
        </div>
      )}
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border px-4 text-[0.9rem] font-medium transition-colors duration-300",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-foreground/20 text-muted-foreground hover:border-foreground/50 hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}
