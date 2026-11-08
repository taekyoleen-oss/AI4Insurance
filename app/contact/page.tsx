import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/sections/page-header"
import { Reveal } from "@/components/layout/reveal"
import { ContactForm } from "@/components/contact/contact-form"
import { contact } from "@/content/site"

export const metadata: Metadata = {
  title: "문의",
  description: "교육 과정·도구 도입·데이터 컨설팅 문의. 보험 실무의 데이터 전환을 함께 설계합니다.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="문의"
        title="실무 적용이 궁금하신가요?"
        description="교육 과정·도구 도입·데이터 컨설팅까지, 무엇이든 편하게 문의주세요. 빠른 시일 내 답변드립니다."
      />

      <Container className="py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* 폼 */}
          <Reveal>
            <h2 className="text-display-md">개별 문의</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          {/* 연락 정보 — 괘선 목록 */}
          <Reveal delay={60} className="lg:pt-3">
            <dl className="border-t border-foreground/15">
              <div className="border-b border-foreground/15 py-6">
                <dt className="text-[0.875rem] text-muted-foreground">연락처</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all text-[1.125rem] text-brand-ink underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-foreground/15 py-6">
                <dt className="text-[0.875rem] text-muted-foreground">운영 시간</dt>
                <dd className="mt-3">
                  <ul className="space-y-2.5 text-[0.975rem]">
                    {contact.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="tabular text-muted-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[0.9rem] leading-relaxed text-muted-foreground">{contact.note}</p>
          </Reveal>
        </div>
      </Container>
    </main>
  )
}
