import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/layout/reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  link?: { href: string; label: string }
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="label-meta mb-3 text-brand">{eyebrow}</p>}
        <h2 className="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </Reveal>
  )
}
