import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPostMeta } from "@/lib/markdown"
import { categoryLabel, insightHref } from "@/content/categories"

function formatDate(dateString: string) {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return dateString
  return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })
}

export function InsightCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={insightHref(post.category, post.slug)}
      className="lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex items-center justify-between">
        <span className="label-meta rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
          {categoryLabel(post.category)}
        </span>
        <time className="label-meta text-muted-foreground">{formatDate(post.date)}</time>
      </div>

      <h3 className="mt-4 font-display text-lg font-medium leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2.5 flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
    </Link>
  )
}
