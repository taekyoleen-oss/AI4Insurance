import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"

interface PageHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 to-transparent" />
      <Container>
        <Reveal>
          {eyebrow && <p className="label-meta mb-4 text-brand">{eyebrow}</p>}
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  )
}
