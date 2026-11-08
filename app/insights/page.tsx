import type { Metadata } from "next"
import { getAllPosts, getAllCategories } from "@/lib/markdown"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import { InsightsList } from "@/components/insights/insights-list"

export const metadata: Metadata = {
  title: "자료실",
  description:
    "보험 모델링 실무 자료 — 전통적 모델링부터 머신러닝·딥러닝까지. 엑셀·파이썬 기반 보험 데이터 분석 지식.",
}

export default function InsightsPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="자료실"
        count={posts.length}
        title="보험 모델링 실무 자료"
        description="보험과 관련한 최신 지식, 데이터 분석 방법, 모델링을 위한 공간입니다. 전통적 모델링은 물론 머신러닝·딥러닝과 엑셀·파이썬 기반의 실무 지식을 공유합니다."
      />
      <Container className="py-16 sm:py-20">
        <InsightsList posts={posts} categories={categories} />
      </Container>
    </main>
  )
}
