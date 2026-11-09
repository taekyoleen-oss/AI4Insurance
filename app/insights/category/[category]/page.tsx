import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPostsByCategory, getAllCategories } from "@/lib/markdown"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import { InsightCard } from "@/components/cards/insight-card"
import { categoryLabel } from "@/content/categories"

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  return { title: `${categoryLabel(category)} · 자료실` }
}

export default async function InsightsCategoryPage({ params }: PageProps) {
  const { category } = await params
  if (!getAllCategories().includes(category)) notFound()
  const posts = getPostsByCategory(category)

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Insights · Category"
        title={categoryLabel(category)}
        description={`'${categoryLabel(category)}' 카테고리의 실무 자료 ${posts.length}편.`}
      >
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          자료실 전체
        </Link>
      </PageHeader>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">이 카테고리에 아직 글이 없습니다.</p>
        )}
      </Container>
    </main>
  )
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }))
}
