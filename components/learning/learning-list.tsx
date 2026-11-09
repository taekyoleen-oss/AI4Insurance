"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Reveal } from "@/components/layout/reveal"
import { CourseCard } from "@/components/cards/course-card"
import { courses as allCourses, type Course } from "@/content/courses"
import { cn } from "@/lib/utils"

const filters = ["전체", "초급", "중급"] as const
type Filter = (typeof filters)[number]

export function LearningList() {
  const [filter, setFilter] = React.useState<Filter>("전체")
  const courses = filter === "전체" ? allCourses : allCourses.filter((c) => c.level === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f
                ? "border-brand bg-brand text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <Reveal key={course.id} delay={i * 50}>
            <CourseCard course={course} className="lift">
              <CourseDialog course={course} />
            </CourseCard>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function CourseDialog({ course }: { course: Course }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          자세히 보기
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">{course.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 flex items-center gap-2">
          <span className="label-meta rounded-full bg-accent px-2.5 py-1 text-accent-foreground">{course.level}</span>
          <span className="label-meta text-muted-foreground">{course.duration}</span>
        </div>
        <div className="mt-6 space-y-6">
          <DetailBlock label="교육 개요" text={course.details.overview} />
          <DetailBlock label="교육 대상" text={course.details.target} />
          <DetailBlock label="준비 사항" text={course.details.requirements} />
          <div>
            <p className="label-meta mb-3 text-muted-foreground">교육 내용</p>
            <ul className="space-y-2">
              {course.details.curriculum.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button asChild className="w-full gap-2">
            <Link href="/contact">
              교육 신청·문의
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="label-meta mb-2 text-muted-foreground">{label}</p>
      <p className="text-sm leading-relaxed text-foreground">{text}</p>
    </div>
  )
}
