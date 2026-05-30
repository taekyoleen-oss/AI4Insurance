import type { Metadata } from "next"
import { Award, Quote } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { PageHeader } from "@/components/sections/page-header"
import { CtaBand } from "@/components/sections/cta-band"
import { profile, timeline, achievements, expertise } from "@/content/profile"
import { research } from "@/content/research"
import { trustStats } from "@/content/site"

export const metadata: Metadata = {
  title: "소개 — 인태교",
  description:
    "인태교 · 보험계리사 · 경영학 박사. 코리안리 30년 재보험 실무, KCI 논문 8편. 경력 타임라인과 연구 실적.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="About"
        title={<>{profile.name}</>}
        description={profile.credentials}
      >
        <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4">
              <div className="font-display text-xl font-medium text-foreground">{s.value}</div>
              <div className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </PageHeader>

      <Container className="py-16 sm:py-20">
        {/* 소개 */}
        <Reveal className="mx-auto max-w-[680px]">
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-muted-foreground">
            {profile.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {/* 경력 타임라인 */}
        <section className="mt-20">
          <Reveal>
            <p className="label-meta mb-3 text-brand">Career</p>
            <h2 className="font-display text-3xl font-medium text-foreground">경력 타임라인</h2>
          </Reveal>
          <div className="mt-10 max-w-3xl">
            <ol className="relative border-l border-border pl-8">
              {timeline.map((entry, i) => (
                <Reveal as="li" key={entry.period + entry.title} delay={i * 40} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-background" />
                  <p className="label-meta text-brand">{entry.period}</p>
                  <h3 className="mt-1 text-base font-semibold text-foreground">{entry.title}</h3>
                  {entry.detail && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* 주요 성과 */}
        <section className="mt-20">
          <Reveal>
            <p className="label-meta mb-3 text-brand">Highlights</p>
            <h2 className="font-display text-3xl font-medium text-foreground">주요 성과</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a} delay={i * 50} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm leading-relaxed text-foreground">{a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 연구 실적 */}
        <section id="research" className="mt-20 scroll-mt-24">
          <Reveal>
            <p className="label-meta mb-3 text-brand">Research</p>
            <h2 className="font-display text-3xl font-medium text-foreground">연구 실적 · 논문 {research.length}편</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              국민건강보험·신용정보 등 공공·금융 데이터를 활용한 보험 위험률 및 예측모형 연구.
            </p>
          </Reveal>
          <ol className="mt-10 space-y-px overflow-hidden rounded-2xl border border-border">
            {research.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={Math.min(i * 30, 200)}
                className="flex flex-col gap-2 bg-card p-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <div className="label-meta shrink-0 text-muted-foreground sm:w-24">{p.date}</div>
                <div className="flex-1">
                  <p className="text-[0.95rem] font-medium leading-snug text-foreground">{p.title}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {p.authors} · <span className="text-foreground/70">{p.journal}</span>
                    {p.detail ? `, ${p.detail}` : ""}
                    {p.kci && (
                      <span className="label-meta ml-2 rounded bg-accent px-1.5 py-0.5 text-accent-foreground">KCI</span>
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* 전문 분야 */}
        <section className="mt-20">
          <Reveal>
            <p className="label-meta mb-3 text-brand">Expertise</p>
            <h2 className="font-display text-3xl font-medium text-foreground">전문 분야</h2>
          </Reveal>
          <Reveal delay={60} className="mt-7 flex flex-wrap gap-2.5">
            {expertise.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </Reveal>
        </section>

        {/* 교육 철학 */}
        <section className="mt-20">
          <Reveal className="relative mx-auto max-w-3xl rounded-3xl border border-border bg-muted/40 p-8 sm:p-12">
            <Quote className="h-8 w-8 text-brand/40" />
            <p className="mt-4 font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              {profile.philosophy}
            </p>
            <p className="mt-6 label-meta text-muted-foreground">— {profile.name}, 보험계리사</p>
          </Reveal>
        </section>
      </Container>

      <CtaBand />
    </main>
  )
}
