import { Plus } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/sections/section-heading"
import { CourseDialog } from "@/components/learning/course-dialog"
import { courses } from "@/content/courses"
import { cn } from "@/lib/utils"

// 과정별 패널 색 — 테마와 무관하게 고정
const panelTones = [
  "bg-[#0f1c2e] text-[#e8edf1]",
  "bg-[#4a90c2] text-[#0f1c2e]",
  "bg-[#2e4258] text-[#e8edf1]",
  "bg-[#d5dee5] text-[#0f1c2e]",
]

export function LearningPreview() {
  return (
    <section id="learning" className="pb-28 sm:pb-40">
      <Container>
        <SectionHeading
          count={courses.length}
          label="배움 마당"
          title="보험 배움 마당"
          description="실무 중심의 보험 데이터 분석·모델링 교육 과정. 엑셀과 파이썬으로 현장에 바로 적용합니다."
          link={{ href: "/learning", label: "배움 마당 전체" }}
        />
      </Container>

      {/* 풀블리드 컬러 패널 — 클릭하면 과정 상세가 열린다 */}
      <ul className="mt-16 grid gap-1.5 px-1.5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        {courses.map((course, i) => (
          <li key={course.id}>
            <CourseDialog course={course}>
              <button
                type="button"
                className={cn(
                  "group flex h-full min-h-[22rem] w-full cursor-pointer flex-col justify-between p-7 text-left transition-[filter] duration-500 hover:brightness-110 sm:p-8 lg:min-h-[30rem]",
                  panelTones[i % panelTones.length],
                )}
              >
                <span className="flex w-full items-start justify-between">
                  <span className="flex gap-1.5">
                    <span className="chip">{course.level}</span>
                    <span className="chip">{course.duration}</span>
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition-transform duration-500 group-hover:rotate-90">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
                <span className="block">
                  <span className="block text-[1.65rem] font-light leading-[1.25] tracking-[-0.035em]">
                    {course.title}
                  </span>
                  <span className="mt-4 block text-[0.95rem] leading-relaxed opacity-80">{course.description}</span>
                  <span className="mt-6 inline-block text-[0.9rem] font-medium underline decoration-current/40 underline-offset-4">
                    과정 자세히 보기
                  </span>
                </span>
              </button>
            </CourseDialog>
          </li>
        ))}
      </ul>
    </section>
  )
}
