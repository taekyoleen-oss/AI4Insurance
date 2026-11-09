import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { trustStats } from "@/content/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* 절제된 배경 — 미세 그라데이션 + 그리드 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in srgb, var(--navy) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--navy) 7%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 70% 20%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 70% 20%, black, transparent)",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* 좌측: 카피 */}
          <div>
            <Reveal as="p" className="label-meta mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-muted-foreground">
              코리안리 30년 · 보험계리사 · KCI 논문 8편
            </Reveal>
            <Reveal as="h1" delay={60} className="font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              보험 실무를,
              <br />
              데이터로 <span className="text-brand">다시 설계</span>합니다
            </Reveal>
            <Reveal as="p" delay={120} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              검증된 전문가가 직접 만든 보험 자동화 도구와 실무 교육.
              생명·손해·재보험의 30년 현장 경험을 머신러닝과 통계로 풀어냅니다.
            </Reveal>
            <Reveal delay={180} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/products">
                  도구 둘러보기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/learning">교육 과정 보기</Link>
              </Button>
            </Reveal>
          </div>

          {/* 우측: 절제된 데이터 그리드 그래픽 */}
          <Reveal delay={140} className="relative">
            <div className="lift rounded-2xl border border-border bg-card/80 p-6 shadow-[0_24px_60px_-30px_rgba(27,40,69,0.4)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/brand/svg/01-primary-transparent.svg" alt="" width={28} height={28} className="block dark:hidden" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/brand/svg/02-reversed-transparent.svg" alt="" width={28} height={28} className="hidden dark:block" />
                  <span className="label-meta text-muted-foreground">tkLeen workflow</span>
                </div>
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand/40" />
                  <span className="h-2 w-2 rounded-full bg-sage/50" />
                  <span className="h-2 w-2 rounded-full bg-navy/30" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-5">
                {trustStats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-background/60 p-4">
                    <div className="font-display text-2xl font-medium text-foreground">{s.value}</div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* 미니 차트 모티프 */}
              <div className="mt-3 flex items-end gap-1.5 rounded-xl border border-border bg-background/60 p-4">
                {[38, 52, 44, 68, 60, 82, 74, 96].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-brand/70"
                    style={{ height: `${h * 0.6}px` }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
