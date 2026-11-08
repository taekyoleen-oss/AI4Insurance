import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
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
        eyebrow="도구"
        count={products.length}
        title="보험 실무를 자동화하는 4가지 흐름"
        description="30년 재보험 현장의 방법론을 그대로 제품화했습니다. 각 도구는 독립 플랫폼으로 운영됩니다."
      />

      <Container className="py-20 sm:py-28">
        <div className="space-y-24 sm:space-y-36">
          {products.map((p, i) => {
            const isComingSoon = p.status === "coming-soon"
            return (
              <Reveal
                as="article"
                key={p.id}
                id={p.id}
                className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
              >
                <div
                  className={cn(
                    "media-hover settle relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-muted",
                    i % 2 === 1 && "lg:order-2",
                    isComingSoon && "grayscale",
                  )}
                >
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                </div>

                <div>
                  <p className="flex flex-wrap gap-1.5">
                    <span className="chip">{p.tagline}</span>
                    <span className={cn("chip", !isComingSoon && "text-brand-ink")}>
                      {isComingSoon ? "준비중" : "운영중"}
                    </span>
                  </p>
                  <h2 className="mt-6 text-display-md">{p.name}</h2>
                  <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-8 max-w-[34rem] border-t border-foreground/15">
                    {p.features.map((f) => (
                      <li key={f} className="border-b border-foreground/15 py-3.5 text-[0.975rem]">
                        {f}
                      </li>
                    ))}
                  </ul>

                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-[0.95rem] font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/85"
                    >
                      플랫폼 바로가기
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">(새 창)</span>
                    </a>
                  ) : (
                    <p className="mt-9 inline-flex h-12 items-center rounded-full border border-foreground/15 px-7 text-[0.95rem] text-muted-foreground">
                      준비중입니다
                    </p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>

      <CtaBand />
    </main>
  )
}
