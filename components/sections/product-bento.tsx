import { ArrowUpRight, Clock } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { products } from "@/content/products"
import { cn } from "@/lib/utils"

export function ProductBento() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tools"
          title="실무에서 바로 쓰는 자동화 도구"
          description="30년 재보험 현장에서 길어 올린 방법론을 그대로 제품화했습니다. tkLeen 생태계의 4가지 흐름."
          link={{ href: "/products", label: "도구 전체 보기" }}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => {
            const isComingSoon = p.status === "coming-soon"
            const CardTag = p.href ? "a" : "div"
            return (
              <Reveal key={p.id} delay={i * 70}>
                <CardTag
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7",
                    p.href ? "lift cursor-pointer" : "opacity-80",
                  )}
                >
                  {/* 포인트 컬러 띠 */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 opacity-80"
                    style={{ background: p.accent }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-medium text-foreground">{p.name}</h3>
                        {isComingSoon && (
                          <span className="label-meta inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-muted-foreground">
                            <Clock className="h-3 w-3" /> 준비중
                          </span>
                        )}
                      </div>
                      <p className="label-meta mt-1.5 text-muted-foreground">{p.tagline}</p>
                    </div>
                    {p.href && (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    )}
                  </div>

                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardTag>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
