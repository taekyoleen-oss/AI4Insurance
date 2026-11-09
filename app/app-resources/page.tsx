import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import { CtaBand } from "@/components/sections/cta-band"
import { AppList } from "@/components/sections/product-bento"
import { apps } from "@/content/apps"

export const metadata: Metadata = {
  title: "앱 자료실",
  description: "보험료 산출·ML·DFA 분석부터 강의 지원·PDF·수식 변환까지, 보험·통계 실무 앱 모음.",
}

export default function AppResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="앱 자료실"
        count={apps.length}
        title="보험·통계 실무 앱"
        description="모델 분석과 강의·문서 작업에 쓰는 앱 모음입니다. 각 앱은 새 창에서 열리며, 헤더 우측 상단의 앱 메뉴에서도 바로 이동할 수 있습니다."
      />
      <Container className="py-16 sm:py-20">
        <AppList />
      </Container>
      <CtaBand />
    </main>
  )
}
