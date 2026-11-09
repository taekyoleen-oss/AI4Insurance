import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
              <Link
                href={`/insights/category/${post.category}`}
                className="label-meta rounded-full bg-accent px-2.5 py-1 text-accent-foreground transition-opacity hover:opacity-80"
              >
                {categoryLabel(post.category)}
              </Link>
              <span className="label-meta inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {formattedDate}
              </span>
              <span className="label-meta inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 약 5분 읽기
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-[2.5rem]">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/insights/tag/${tag}`}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-brand hover:text-brand"
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
