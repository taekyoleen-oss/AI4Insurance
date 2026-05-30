import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { InsightCard } from "@/components/cards/insight-card"
import type { BlogPostMeta } from "@/lib/markdown"

export function InsightsPreview({ posts }: { posts: BlogPostMeta[] }) {
  const latest = posts.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <section id="insights" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="보험 모델링 실무 자료"
          description="전통적 모델링부터 머신러닝·딥러닝까지. 엑셀·파이썬 기반의 실무 지식을 공유합니다."
          link={{ href: "/insights", label: "자료실 전체" }}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <InsightCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
