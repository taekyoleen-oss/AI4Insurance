import Link from "next/link"
import { Container } from "@/components/layout/container"
import { products } from "@/content/products"
import { navItems, contact, site } from "@/content/site"

const linkCls = "text-navy-foreground/80 transition-colors hover:text-white"

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-navy text-navy-foreground">
      <Container className="pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/svg/02-reversed-transparent.svg" alt="" width={36} height={36} />
              <span className="text-[1.05rem] font-medium tracking-[-0.03em]">AI 4 Insurance</span>
            </div>
            <p className="mt-5 max-w-[22rem] text-[0.95rem] leading-relaxed text-navy-muted">
              30년 재보험 실무와 보험계리사 전문성으로 만든 보험 자동화 도구와 실무 교육.
            </p>
            <p className="mt-5 text-[0.85rem] text-navy-muted">
              made by tk<span className="text-[#6aaad8]">L</span>een
            </p>
          </div>

          {/* 탐색 */}
          <div>
            <h4 className="text-[0.85rem] font-medium text-navy-muted">탐색</h4>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 도구 */}
          <div>
            <h4 className="text-[0.85rem] font-medium text-navy-muted">도구</h4>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {products.map((p) => (
                <li key={p.id}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
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
            <h4 className="text-[0.85rem] font-medium text-navy-muted">연락</h4>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${contact.email}`} className={`${linkCls} break-all`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <Link href="/contact" className={linkCls}>
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-7 text-[0.85rem] text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AI 4 Insurance, {site.domain}. All rights reserved.
          </p>
          <p>인태교, 보험계리사</p>
        </div>
      </Container>

      {/* 대형 워드마크 — 화면 폭에 맞춰 하단을 채움 */}
      <p
        aria-hidden="true"
        className="mt-10 select-none whitespace-nowrap text-center text-[15.2vw] font-light leading-[0.78] tracking-[-0.06em] text-white/[0.92]"
      >
        AI 4 Insurance
      </p>
    </footer>
  )
}
