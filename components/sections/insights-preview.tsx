import Link from "next/link"
import { Container } from "@/components/layout/container"
import { InsightBoard } from "@/components/cards/insight-card"
import type { BlogPostMeta } from "@/lib/markdown"

function MarqueeItem({ count }: { count: number }) {
  return (
    <span className="flex shrink-0 items-start gap-4 pr-16">
      <span className="text-[clamp(3.5rem,9vw,8.5rem)] font-light leading-none tracking-[-0.05em]">
        보험 모델링 실무 자료
      </span>
      <span className="chip tabular mt-3 text-brand-ink">{count}</span>
    </span>
  )
}

export function InsightsPreview({ posts }: { posts: BlogPostMeta[] }) {
  const latest = posts.slice(0, 5)
  if (latest.length === 0) return null

  return (
    <section id="insights" className="border-t border-foreground/10 pb-28 pt-24 sm:pb-40 sm:pt-32">
      {/* 흐르는 대형 제목 — 호버 시 정지, 동작 줄이기 시 정지 */}
      <h2 className="sr-only">보험 모델링 실무 자료</h2>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((k) => (
            <MarqueeItem key={k} count={posts.length} />
          ))}
        </div>
      </div>

      <Container className="mt-16 sm:mt-24">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground">
            전통적 모델링부터 머신러닝·딥러닝까지. 엑셀·파이썬 기반의 실무 지식을 공유합니다.
          </p>
          <Link
            href="/insights"
            className="inline-flex h-11 shrink-0 items-center self-start rounded-full border border-foreground/25 px-5 text-[0.9rem] font-medium transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background md:self-auto"
          >
            <span className="roll">
              <span className="roll-inner" data-text="자료실 전체">
                자료실 전체
              </span>
            </span>
          </Link>
        </div>
        <InsightBoard posts={latest} />
      </Container>
    </section>
  )
}
