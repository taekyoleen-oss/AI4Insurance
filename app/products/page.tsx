import type { Metadata } from "next"
import { ArrowUpRight, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { PageHeader } from "@/components/sections/page-header"
import { CtaBand } from "@/components/sections/cta-band"
import { products } from "@/content/products"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "도구",
  description:
    "보험 실무 자동화 도구 — Life Matrix Flow, Insure Auto Flow, DFA Auto Flow, Reserve Matrix Flow. tkLeen 생태계의 4가지 워크플로우.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Tools"
        title={<>보험 실무를 자동화하는 <span className="text-brand">4가지 흐름</span></>}
        description="30년 재보험 현장의 방법론을 그대로 제품화했습니다. 각 도구는 독립 플랫폼으로 운영됩니다."
      />

      <Container className="py-16 sm:py-20">
        <div className="space-y-6">
          {products.map((p, i) => {
            const isComingSoon = p.status === "coming-soon"
            return (
              <Reveal key={p.id} delay={i * 60}>
                <article
                  className={cn(
                    "relative grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]",
                    isComingSoon && "opacity-80",
                  )}
                >
                  <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: p.accent }} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">{p.name}</h2>
                      {isComingSoon ? (
                        <span className="label-meta inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                          <Clock className="h-3 w-3" /> 준비중
                        </span>
                      ) : (
                        <span className="label-meta inline-flex items-center gap-1 rounded-full bg-sage/15 px-2.5 py-1 text-[color:var(--sage)]">
                          운영중
                        </span>
                      )}
                    </div>
                    <p className="label-meta mt-2 text-muted-foreground">{p.tagline}</p>
                    <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    {p.href ? (
                      <Button asChild className="mt-7 gap-2">
                        <a href={p.href} target="_blank" rel="noopener noreferrer">
                          플랫폼 바로가기
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="mt-7 gap-2">
                        준비중입니다
                        <Clock className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="rounded-2xl border border-border bg-background/60 p-6">
                    <p className="label-meta mb-4 text-muted-foreground">핵심 기능</p>
                    <ul className="space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>

      <CtaBand />
    </main>
  )
}
