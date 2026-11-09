import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import { CtaBand } from "@/components/sections/cta-band"
import { LearningList } from "@/components/learning/learning-list"

export const metadata: Metadata = {
  title: "보험 배움 마당",
  description:
    "실무 중심의 보험 데이터 분석·모델링 교육 과정. 엑셀365 통계, 일반보험 모델링, 데이터 사이언스, 엑셀-파이썬 분석.",
}

export default function LearningPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Learning"
        title="보험 배움 마당"
        description="실무 중심의 보험 데이터 분석·모델링 교육 과정을 통해 전문성을 향상시키세요. 모든 과정은 엑셀·파이썬으로 현장에 바로 적용됩니다."
      />
      <Container className="py-16 sm:py-20">
        <LearningList />
      </Container>
      <CtaBand />
    </main>
  )
}
