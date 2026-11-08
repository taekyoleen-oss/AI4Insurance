import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/layout/container"

const credentials = ["코리안리 30년", "보험계리사", "KCI 논문 8편"]

const HEADLINE = "text-[clamp(2.9rem,7vw,7.25rem)] font-light leading-[1.02] tracking-[-0.05em]"

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[660px] overflow-hidden bg-navy text-white">
      {/* 서울 해질녘 전경 — Unsplash License */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-seoul-dusk.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[50%_60%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,19,32,0.62) 0%, rgba(10,19,32,0.12) 34%, rgba(10,19,32,0.18) 58%, rgba(10,19,32,0.82) 100%)",
        }}
      />

      <Container className="relative flex h-full flex-col justify-between pb-10 pt-28 sm:pb-12 sm:pt-32">
        <h1 className="sr-only">보험 실무를, 데이터로 다시 설계합니다</h1>

        {/* 상단 좌측 — 헤드라인 첫 줄 */}
        <div aria-hidden="true" className={HEADLINE}>
          <span className="line-mask">
            <span style={{ "--d": "250ms" } as React.CSSProperties}>보험 실무를,</span>
          </span>
        </div>

        {/* 하단 — 좌측 소개·행동 / 우측 헤드라인 둘째 줄 */}
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,25rem)_1fr]">
          <div className="order-2 lg:order-1">
            <ul className="fade-rise flex flex-wrap gap-2" style={{ "--d": "900ms" } as React.CSSProperties}>
              {credentials.map((c) => (
                <li key={c} className="chip bg-white/14 text-white backdrop-blur-sm">
                  {c}
                </li>
              ))}
            </ul>
            <p
              className="fade-rise mt-5 max-w-[25rem] text-[1.0625rem] leading-relaxed text-white/85"
              style={{ "--d": "1000ms" } as React.CSSProperties}
            >
              검증된 전문가가 직접 만든 보험 자동화 도구와 실무 교육. 생명·손해·재보험의 30년 현장 경험을
              머신러닝과 통계로 풀어냅니다.
            </p>
            <div
              className="fade-rise mt-7 flex flex-wrap gap-3"
              style={{ "--d": "1100ms" } as React.CSSProperties}
            >
              <Link
                href="/products"
                className="flex h-12 items-center rounded-full bg-white px-7 text-[0.95rem] font-medium text-[#0f1c2e] transition-colors duration-300 hover:bg-white/85"
              >
                <span className="roll">
                  <span className="roll-inner" data-text="도구 둘러보기">
                    도구 둘러보기
                  </span>
                </span>
              </Link>
              <Link
                href="/learning"
                className="flex h-12 items-center rounded-full border border-white/40 px-7 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                <span className="roll">
                  <span className="roll-inner" data-text="교육 과정 보기">
                    교육 과정 보기
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className={`order-1 text-right lg:order-2 ${HEADLINE}`}>
            <span className="line-mask">
              <span style={{ "--d": "420ms" } as React.CSSProperties}>데이터로</span>
            </span>
            <span className="line-mask">
              <span style={{ "--d": "560ms" } as React.CSSProperties}>다시 설계합니다</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
