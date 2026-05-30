import { cn } from "@/lib/utils"
import type { Course } from "@/content/courses"

export function CourseCard({
  course,
  className,
  children,
}: {
  course: Course
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("flex h-full flex-col rounded-2xl border border-border bg-card p-6", className)}>
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "label-meta rounded-full px-2.5 py-1",
            course.level === "초급"
              ? "bg-sage/15 text-[color:var(--sage)]"
              : "bg-accent text-accent-foreground",
          )}
        >
          {course.level}
        </span>
        <span className="label-meta text-muted-foreground">{course.duration}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-medium leading-snug text-foreground">{course.title}</h3>
      <p className="mt-2.5 flex-grow text-sm leading-relaxed text-muted-foreground">{course.description}</p>

      {children && <div className="mt-5">{children}</div>}
    </div>
  )
}
