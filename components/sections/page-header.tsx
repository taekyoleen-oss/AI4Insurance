import { Container } from "@/components/layout/container"

interface PageHeaderProps {
  eyebrow?: string
  count?: number
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}

// 서브페이지 머리말 — 좌측 칩, 대형 제목, 우측 정렬 설명
export function PageHeader({ eyebrow, count, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-foreground/10 pb-16 pt-36 sm:pb-24 sm:pt-48">
      <Container>
        {eyebrow && (
          <p className="fade-rise flex items-center gap-1">
            {typeof count === "number" && <span className="chip tabular">{count}</span>}
            <span className="chip">{eyebrow}</span>
          </p>
        )}
        <h1 className="mt-8 max-w-[16ch] text-display-lg">
          <span className="line-mask">
            <span>{title}</span>
          </span>
        </h1>
        {(description || children) && (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="lg:col-start-2">
              {description && (
                <p
                  className="fade-rise max-w-[36rem] text-[1.125rem] leading-relaxed text-muted-foreground"
                  style={{ "--d": "250ms" } as React.CSSProperties}
                >
                  {description}
                </p>
              )}
              {children && <div className="mt-8">{children}</div>}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
