"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { CourseDialog } from "@/components/learning/course-dialog"
import { courses as allCourses } from "@/content/courses"
import { cn } from "@/lib/utils"

const filters = ["전체", "초급", "중급"] as const
type Filter = (typeof filters)[number]

// 배움 마당 — 과정 목록(행 단위). 행을 누르면 상세 다이얼로그가 열린다.
export function LearningList() {
  const [filter, setFilter] = React.useState<Filter>("전체")
  const courses = filter === "전체" ? allCourses : allCourses.filter((c) => c.level === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="난이도 필터">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "inline-flex h-10 cursor-pointer items-center rounded-full border px-5 text-[0.9rem] font-medium transition-colors duration-300",
              filter === f
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/20 text-muted-foreground hover:border-foreground/50 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-10 border-t border-foreground/15">
        {courses.map((course) => (
          <li key={course.id} className="border-b border-foreground/15">
            <CourseDialog course={course}>
              <button
                type="button"
                className="group grid w-full cursor-pointer gap-x-8 gap-y-4 py-9 text-left transition-colors duration-300 hover:bg-foreground/[0.03] md:grid-cols-[10rem_1fr_auto] md:items-center md:px-3"
              >
                <span className="flex gap-1.5">
                  <span className="chip text-brand-ink">{course.level}</span>
                  <span className="chip">{course.duration}</span>
                </span>
                <span className="block">
                  <span className="block text-[1.5rem] font-light leading-snug tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.875rem]">
                    {course.title}
                  </span>
                  <span className="mt-2 block max-w-[60ch] text-[0.975rem] leading-relaxed text-muted-foreground">
                    {course.description}
                  </span>
                </span>
                <span className="inline-flex h-11 items-center gap-2 self-start rounded-full border border-foreground/20 px-5 text-[0.9rem] font-medium transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background md:self-center">
                  자세히 보기
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </CourseDialog>
          </li>
        ))}
      </ul>
    </div>
  )
}
