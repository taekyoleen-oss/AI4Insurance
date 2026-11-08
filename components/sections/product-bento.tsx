import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/sections/section-heading"
import { products, type Product } from "@/content/products"
import { cn } from "@/lib/utils"

// 홈 — 도구 갤러리: 엇갈린 2열(둘째 열은 아래로 밀리고 패럴랙스)
export function ProductBento() {
  const left = products.filter((_, i) => i % 2 === 0)
  const right = products.filter((_, i) => i % 2 === 1)

  return (
    <section id="products" className="bg-navy pb-28 pt-24 text-navy-foreground sm:pb-40 sm:pt-36">
      <Container>
        <SectionHeading
          onDark
          count={products.length}
          label="도구"
          title="실무에서 바로 쓰는 자동화 도구"
          description="30년 재보험 현장에서 길어 올린 방법론을 그대로 제품화했습니다. tkLeen 생태계의 4가지 흐름."
          link={{ href: "/products", label: "도구 전체 보기" }}
        />

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 lg:mt-28">
          <div className="flex flex-col gap-16 md:gap-28">
            {left.map((p) => (
              <ToolTile key={p.id} product={p} />
            ))}
          </div>
          <div className="drift flex flex-col gap-16 md:mt-56 md:gap-28" style={{ "--drift": "56px" } as React.CSSProperties}>
            {right.map((p) => (
              <ToolTile key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ToolTile({ product: p }: { product: Product }) {
  const live = p.status === "active" && p.href
  const Tag = live ? "a" : "div"

  return (
    <Tag
      {...(live ? { href: p.href!, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn("group block", live && "cursor-pointer")}
      aria-label={live ? `${p.name} 새 창에서 열기` : undefined}
    >
      <div className="media-hover settle relative aspect-[4/5] overflow-hidden bg-white/5">
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className={cn("object-cover", !live && "grayscale-[60%] opacity-70")}
        />
        {live && (
          <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f1c2e] opacity-0 transition-[opacity,transform] duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.6rem] font-normal leading-tight tracking-[-0.03em]">{p.name}</h3>
          <p className="mt-1 text-[0.95rem] text-navy-muted">{p.tagline}</p>
        </div>
        <span className={cn("chip shrink-0", live ? "text-[#9fd0b4]" : "text-navy-muted")}>
          {live ? "운영중" : "준비중"}
        </span>
      </div>

      <p className="mt-4 max-w-[52ch] text-[0.975rem] leading-relaxed text-navy-foreground/75">{p.description}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.features.map((f) => (
          <li key={f} className="chip text-navy-foreground/80">
            {f}
          </li>
        ))}
      </ul>
    </Tag>
  )
}
