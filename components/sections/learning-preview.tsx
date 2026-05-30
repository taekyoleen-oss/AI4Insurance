import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/layout/reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { CourseCard } from "@/components/cards/course-card"
import { courses } from "@/content/courses"

export function LearningPreview() {
  const featured = courses.slice(0, 2)

  return (
    <section id="learning" className="bg-muted/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Learning"
          title="보험 배움 마당"
          description="실무 중심의 보험 데이터 분석·모델링 교육 과정. 엑셀과 파이썬으로 현장에 바로 적용합니다."
          link={{ href: "/learning", label: "배움 마당 전체" }}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {featured.map((course, i) => (
            <Reveal key={course.id} delay={i * 80}>
              <CourseCard course={course} className="lift">
                <Link
                  href="/learning"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
                >
                  과정 자세히 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CourseCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
