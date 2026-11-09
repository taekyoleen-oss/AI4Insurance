import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { profile } from "@/content/profile"
import { research } from "@/content/research"
import { trustStats } from "@/content/site"

export function Authority() {
  const recentPapers = research.slice(0, 3)

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* 좌측: 전문가 소개 */}
          <Reveal>
            <p className="label-meta mb-3 text-brand">Authority</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              검증된 전문가가
              <br />
              직접 만들었습니다
            </h2>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-2xl font-medium text-foreground">{profile.name}</span>
              <span className="text-sm text-muted-foreground">{profile.credentials}</span>
            </div>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
            >
              프로필 · 경력 전체 보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* 우측: 지표 + 최신 논문 */}
          <div className="space-y-5">
            <Reveal delay={80} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-xl font-medium text-foreground">{s.value}</div>
                  <div className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={140} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-brand" />
                <span className="label-meta text-muted-foreground">최신 연구 실적</span>
              </div>
              <ul className="space-y-4">
                {recentPapers.map((p) => (
                  <li key={p.title} className="border-l-2 border-brand/30 pl-4">
                    <p className="text-sm font-medium leading-snug text-foreground">{p.title}</p>
                    <p className="label-meta mt-1.5 text-muted-foreground">
                      {p.journal} · {p.date}{p.kci ? " · KCI" : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/about#research"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
              >
                논문 8편 전체 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
