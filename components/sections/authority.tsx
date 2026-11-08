import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { profile } from "@/content/profile"
import { research } from "@/content/research"
import { trustStats } from "@/content/site"

function OutlineLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center rounded-full border border-foreground/25 px-5 text-[0.9rem] font-medium transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
    >
      <span className="roll">
        <span className="roll-inner" data-text={children}>
          {children}
        </span>
      </span>
    </Link>
  )
}

export function Authority() {
  const recentPapers = research.slice(0, 3)

  return (
    <section id="about" className="py-28 sm:py-40">
      <Container>
        <h2 className="text-display-xl">{profile.name}입니다</h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col justify-end lg:pr-16">
            <p className="text-[0.95rem] font-medium text-brand-ink">{profile.credentials}</p>
            <p className="mt-5 max-w-[36rem] text-[1.25rem] leading-[1.75] tracking-[-0.01em] sm:text-[1.375rem]">
              {profile.summary}
            </p>
            <div className="mt-9">
              <OutlineLink href="/about">프로필과 경력 전체 보기</OutlineLink>
            </div>
          </div>

          <div className="media-hover settle relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/desk-documents.jpg"
              alt="서류와 필기구가 놓인 오래된 나무 책상"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 신뢰 지표 — 괘선으로 구분한 4열 */}
        <dl className="mt-24 grid grid-cols-2 gap-px border-y border-foreground/15 bg-foreground/15 lg:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="bg-background py-7 pr-6 [&:not(:nth-child(2n+1))]:pl-6 lg:[&:not(:first-child)]:pl-6">
              <dt className="text-[0.9rem] text-muted-foreground">{s.label}</dt>
              <dd className="mt-3 text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-none tracking-[-0.04em]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* 최신 연구 실적 */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-4">
          <div>
            <h3 className="text-[1.75rem] font-light tracking-[-0.03em]">최신 연구 실적</h3>
            <div className="mt-6">
              <OutlineLink href="/about#research">{`논문 ${research.length}편 전체 보기`}</OutlineLink>
            </div>
          </div>
          <ul className="border-t border-foreground/15">
            {recentPapers.map((p) => (
              <li
                key={p.title}
                className="grid gap-2 border-b border-foreground/15 py-6 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <span className="tabular text-[0.9rem] text-muted-foreground">{p.date}</span>
                <div>
                  <p className="text-[1.0625rem] font-medium leading-snug">{p.title}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-[0.9rem] text-muted-foreground">
                    {p.journal}
                    {p.kci && <span className="chip h-6 px-2 text-[0.75rem] text-brand-ink">KCI 등재</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
