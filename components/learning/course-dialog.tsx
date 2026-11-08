"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Course } from "@/content/courses"

// 교육 과정 상세 — 트리거(children)는 카드·패널 등 호출부가 정한다
export function CourseDialog({ course, children }: { course: Course; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto rounded-2xl border-0 p-0 sm:rounded-2xl" showCloseButton={false}>
        <div className="relative bg-navy px-7 pb-8 pt-10 text-navy-foreground sm:px-10">
          <DialogClose className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-[#0f1c2e]">
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">닫기</span>
          </DialogClose>
          <div className="flex gap-1.5">
            <span className="chip">{course.level}</span>
            <span className="chip">{course.duration}</span>
          </div>
          <DialogHeader className="mt-5 text-left">
            <DialogTitle className="text-[1.875rem] font-light leading-tight tracking-[-0.035em]">
              {course.title}
            </DialogTitle>
            <DialogDescription className="mt-3 text-[1rem] leading-relaxed text-navy-muted">
              {course.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-7 pb-8 pt-2 sm:px-10">
          <dl className="divide-y divide-border">
            <DetailRow label="교육 개요" text={course.details.overview} />
            <DetailRow label="교육 대상" text={course.details.target} />
            <DetailRow label="준비 사항" text={course.details.requirements} />
          </dl>
          <div className="border-t border-border pt-6">
            <p className="text-[0.9rem] font-medium text-muted-foreground">교육 내용</p>
            <ol className="mt-4 space-y-3">
              {course.details.curriculum.map((item, i) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] text-[0.975rem] leading-relaxed">
                  <span className="tabular text-muted-foreground">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <Link
            href="/contact"
            className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-primary text-[0.95rem] font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            교육 신청·문의
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function DetailRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
      <dt className="text-[0.9rem] font-medium text-muted-foreground">{label}</dt>
      <dd className="text-[0.975rem] leading-relaxed">{text}</dd>
    </div>
  )
}
