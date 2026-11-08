import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPostMeta } from "@/lib/markdown"
import { categoryLabel, insightHref } from "@/content/categories"

function formatDate(dateString: string) {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return dateString
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`
}

// 자료실 게시판 한 줄 — 날짜 / 분류 / 제목·요약 / 이동
export function InsightRow({ post }: { post: BlogPostMeta }) {
  return (
    <li className="border-b border-foreground/15">
      <Link
        href={insightHref(post.category, post.slug)}
        className="group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 py-7 transition-colors duration-300 hover:bg-foreground/[0.03] md:grid-cols-[7.5rem_9rem_1fr_auto] md:items-center md:px-3"
      >
        <time dateTime={post.date} className="tabular order-1 text-[0.9rem] text-muted-foreground md:order-none">
          {formatDate(post.date)}
        </time>
        <span className="order-2 justify-self-end md:order-none md:justify-self-start">
          <span className="chip text-brand-ink">{categoryLabel(post.category)}</span>
        </span>
        <span className="order-3 col-span-2 block md:order-none md:col-span-1">
          <span className="block text-[1.25rem] font-normal leading-snug tracking-[-0.025em] transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-brand-ink sm:text-[1.375rem]">
            {post.title}
          </span>
          {post.excerpt && (
            <span className="mt-1.5 line-clamp-1 block text-[0.95rem] text-muted-foreground">{post.excerpt}</span>
          )}
        </span>
        <span
          aria-hidden="true"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background md:flex"
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </li>
  )
}

// 게시판 목록 래퍼
export function InsightBoard({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <ul className="border-t border-foreground/15">
      {posts.map((post) => (
        <InsightRow key={post.slug} post={post} />
      ))}
    </ul>
  )
}
