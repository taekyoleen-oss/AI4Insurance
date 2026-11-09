import Link from "next/link"
import { Container } from "@/components/layout/container"
import { products } from "@/content/products"
import { navItems, contact, site } from "@/content/site"

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/svg/02-reversed-transparent.svg" alt="" width={36} height={36} />
              <span className="font-display text-lg font-medium">AI 4 Insurance</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              30년 재보험 실무와 보험계리사 전문성으로 만든 보험 자동화 도구와 실무 교육.
            </p>
            <p className="label-meta mt-5 text-navy-foreground/50">
              by tk<span className="text-brand">L</span>een
            </p>
          </div>

          {/* 탐색 */}
          <div>
            <h4 className="label-meta mb-4 text-navy-foreground/50">탐색</h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-foreground/80 transition-colors hover:text-brand">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 도구 */}
          <div>
            <h4 className="label-meta mb-4 text-navy-foreground/50">도구</h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-foreground/80 transition-colors hover:text-brand"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="text-navy-foreground/45">{p.name} (준비중)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 연락 */}
          <div>
            <h4 className="label-meta mb-4 text-navy-foreground/50">연락</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="text-navy-foreground/80 transition-colors hover:text-brand">
                  {contact.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-navy-foreground/80 transition-colors hover:text-brand">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-foreground/10 pt-7 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AI 4 Insurance · {site.domain}. All rights reserved.</p>
          <p className="label-meta text-navy-foreground/40">인태교 · 보험계리사</p>
        </div>
      </Container>
    </footer>
  )
}
