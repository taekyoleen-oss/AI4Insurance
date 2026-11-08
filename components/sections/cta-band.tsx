import Link from "next/link"
import { Container } from "@/components/layout/container"

export function CtaBand() {
  return (
    <section className="bg-navy pb-24 pt-28 text-navy-foreground sm:pb-32 sm:pt-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="text-display-lg max-w-[12ch]">실무 적용이 궁금하신가요?</h2>
          <div>
            <p className="max-w-[30rem] text-[1.0625rem] leading-relaxed text-navy-muted">
              교육 과정, 도구 도입, 데이터 컨설팅까지. 보험 실무의 데이터 전환을 함께 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex h-12 items-center rounded-full bg-white px-7 text-[0.95rem] font-medium text-[#0f1c2e] transition-colors duration-300 hover:bg-white/85"
              >
                <span className="roll">
                  <span className="roll-inner" data-text="문의하기">
                    문의하기
                  </span>
                </span>
              </Link>
              <Link
                href="/products"
                className="flex h-12 items-center rounded-full border border-white/30 px-7 text-[0.95rem] font-medium transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                <span className="roll">
                  <span className="roll-inner" data-text="도구 둘러보기">
                    도구 둘러보기
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
