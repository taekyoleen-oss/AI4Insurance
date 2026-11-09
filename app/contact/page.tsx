import type { Metadata } from "next"
import { Mail, Clock, Send } from "lucide-react"
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
        eyebrow="Contact"
        title="실무 적용이 궁금하신가요?"
        description="교육 과정·도구 도입·데이터 컨설팅 — 무엇이든 편하게 문의주세요. 빠른 시일 내 답변드립니다."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* 폼 */}
          <Reveal className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-2">
              <Send className="h-5 w-5 text-brand" />
              <h2 className="font-display text-xl font-medium text-foreground">개별 문의</h2>
            </div>
            <ContactForm />
          </Reveal>

          {/* 연락 정보 */}
          <div className="space-y-5">
            <Reveal delay={60} className="rounded-3xl border border-border bg-card p-7">
              <p className="label-meta mb-4 text-muted-foreground">연락처</p>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-brand"
              >
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">{contact.email}</span>
              </a>
            </Reveal>

            <Reveal delay={120} className="rounded-3xl border border-border bg-card p-7">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
                <p className="label-meta text-muted-foreground">운영 시간</p>
              </div>
              <ul className="space-y-2.5 text-sm">
                {contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span className="text-foreground">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-muted/60 p-3.5 text-xs leading-relaxed text-muted-foreground">
                {contact.note}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  )
}
