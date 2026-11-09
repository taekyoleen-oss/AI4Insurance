import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"

export function CtaBand() {
  return (
    <section className="py-10">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-7 py-16 text-navy-foreground sm:px-14 sm:py-20">
          {/* 배경 그리드 모티프 */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 70% 80% at 85% 20%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 85% 20%, black, transparent)",
            }}
          />
          <div className="relative max-w-2xl">
            <p className="label-meta mb-4 text-brand">Contact</p>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-[2.5rem]">
              실무 적용이 궁금하신가요?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-foreground/75">
              교육 과정·도구 도입·데이터 컨설팅 — 보험 실무의 데이터 전환을 함께 설계합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  문의하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link href="/products">도구 둘러보기</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
