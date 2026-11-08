import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getPostBySlug } from "@/lib/markdown"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { ReadingProgress } from "@/components/insights/reading-progress"
import { categoryLabel } from "@/content/categories"

export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params
  const post = await getPostBySlug(category, slug)
  if (!post) return { title: "자료실" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  }
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { category, slug } = await params
  const post = await getPostBySlug(category, slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen bg-background pt-28 pb-16 sm:pt-32">
      <ReadingProgress />
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            자료실로 돌아가기
          </Link>

          {/* 헤더 */}
          <header className="mt-8 border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
              <Link
                href={`/insights/category/${post.category}`}
                className="chip text-brand-ink transition-opacity hover:opacity-75"
              >
                {categoryLabel(post.category)}
              </Link>
              <time dateTime={post.date} className="chip tabular">
                {formattedDate}
              </time>
              <span className="chip">약 5분 읽기</span>
            </div>
            <h1 className="mt-7 text-[clamp(2rem,4.4vw,3.25rem)] font-light leading-[1.15] tracking-[-0.04em]">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/insights/tag/${tag}`}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* 본문 */}
          <article
            className="article mt-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 하단 내비 */}
          <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-8">
            <Button asChild variant="outline">
              <Link href="/insights">모든 글 보기</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/insights/category/${post.category}`}>
                {categoryLabel(post.category)} 더 보기
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
