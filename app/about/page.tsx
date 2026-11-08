import type { Metadata } from "next"
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

// 좌측 칩 + 제목 / 우측 본문으로 나뉘는 소개 페이지 공통 구획
function Block({
  id,
  label,
  title,
  children,
}: {
  id?: string
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="grid scroll-mt-28 gap-8 border-t border-foreground/15 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <span className="chip">{label}</span>
        <h2 className="mt-5 text-display-md">{title}</h2>
      </Reveal>
      <div>{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader eyebrow="소개" title={profile.name} description={profile.credentials}>
        <dl className="grid grid-cols-2 gap-px border-y border-foreground/15 bg-foreground/15">
          {trustStats.map((s) => (
            <div key={s.label} className="bg-background py-5 pr-4 even:pl-5">
              <dt className="text-[0.875rem] text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-[1.5rem] font-light tracking-[-0.03em]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <Container>
        {/* 소개글 */}
        <Reveal className="py-16 sm:py-24">
          <div className="ml-auto max-w-[44rem] space-y-6 text-[1.1875rem] leading-[1.8] text-foreground/85">
            {profile.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Block label="경력" title="경력 타임라인">
          <ol className="border-t border-foreground/15">
            {timeline.map((entry) => (
              <li
                key={entry.period + entry.title}
                className="grid gap-1 border-b border-foreground/15 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <p className="tabular text-[0.9rem] text-brand-ink">{entry.period}</p>
                <div>
                  <h3 className="text-[1.125rem] font-medium tracking-[-0.02em]">{entry.title}</h3>
                  {entry.detail && (
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">{entry.detail}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="성과" title="주요 성과">
          <ul className="border-t border-foreground/15">
            {achievements.map((a) => (
              <li key={a} className="border-b border-foreground/15 py-5 text-[1.0625rem] leading-relaxed">
                {a}
              </li>
            ))}
          </ul>
        </Block>

        <Block id="research" label={`논문 ${research.length}편`} title="연구 실적">
          <p className="mb-8 max-w-[38rem] text-muted-foreground">
            국민건강보험·신용정보 등 공공·금융 데이터를 활용한 보험 위험률 및 예측모형 연구.
          </p>
          <ol className="border-t border-foreground/15">
            {research.map((p) => (
              <li
                key={p.title}
                className="grid gap-2 border-b border-foreground/15 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-8"
              >
                <p className="tabular text-[0.9rem] text-muted-foreground">{p.date}</p>
                <div>
                  <p className="text-[1.0625rem] font-medium leading-snug tracking-[-0.015em]">{p.title}</p>
                  <p className="mt-2 text-[0.925rem] text-muted-foreground">
                    {p.authors}, <span className="text-foreground/75">{p.journal}</span>
                    {p.detail ? `, ${p.detail}` : ""}
                  </p>
                  {p.kci && <span className="chip mt-3 text-brand-ink">KCI 등재</span>}
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="분야" title="전문 분야">
          <ul className="flex flex-wrap gap-2">
            {expertise.map((tag) => (
              <li key={tag} className="rounded-full border border-foreground/20 px-4 py-2 text-[0.95rem]">
                {tag}
              </li>
            ))}
          </ul>
        </Block>
      </Container>

      {/* 교육 철학 — 네이비 풀블리드 인용 */}
      <section className="border-b border-white/10 bg-navy py-24 text-navy-foreground sm:py-36">
        <Container>
          <figure className="ml-auto max-w-[56rem]">
            <blockquote className="text-[clamp(1.625rem,3.4vw,2.75rem)] font-light leading-[1.35] tracking-[-0.035em]">
              {profile.philosophy}
            </blockquote>
            <figcaption className="mt-10 text-[0.95rem] text-navy-muted">{profile.name}, 보험계리사</figcaption>
          </figure>
        </Container>
      </section>

      <CtaBand />
    </main>
  )
}
