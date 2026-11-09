import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/sections/section-heading"
import { apps, appGroups } from "@/content/apps"
import { cn } from "@/lib/utils"

// 앱 목록 — 그룹별 괘선 행 (홈 섹션과 앱 자료실 페이지가 함께 사용)
export function AppList({ onDark }: { onDark?: boolean }) {
  return (
    <div className="grid gap-14">
      {appGroups.map((group) => (
        <div key={group}>
          <p className="flex items-center gap-1">
            <span className="chip">{group}</span>
            <span className="chip tabular">{apps.filter((a) => a.group === group).length}</span>
          </p>
          <ul
            className={cn(
              "mt-5 grid border-t md:grid-cols-2 md:gap-x-10 lg:gap-x-16",
              onDark ? "border-white/15" : "border-foreground/15",
            )}
          >
            {apps
              .filter((a) => a.group === group)
              .map((app) => (
                <li key={app.id} className={cn("border-b", onDark ? "border-white/15" : "border-foreground/15")}>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${app.name} 새 창에서 열기`}
                    className="group flex items-start gap-4 py-5"
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        onDark ? "bg-white/[0.08]" : "bg-foreground/[0.06]",
                      )}
                    >
                      <app.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[1.05rem] font-medium tracking-[-0.02em]">{app.name}</span>
                      <span
                        className={cn(
                          "mt-1 block text-[0.925rem] leading-relaxed",
                          onDark ? "text-navy-muted" : "text-muted-foreground",
                        )}
                      >
                        {app.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 opacity-40 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// 홈 — 앱 소개: 강조 없이 간결한 목록
export function ProductBento() {
  return (
    <section id="apps" className="bg-navy pb-24 pt-24 text-navy-foreground sm:pb-32 sm:pt-32">
      <Container>
        <SectionHeading
          onDark
          count={apps.length}
          label="앱"
          title="보험·통계 실무 앱"
          description="모델 분석부터 강의·문서 작업까지, 직접 만들어 쓰는 앱입니다. 우측 상단 앱 메뉴에서도 바로 열 수 있습니다."
          link={{ href: "/app-resources", label: "앱 자료실" }}
        />
        <div className="mt-16 lg:mt-20">
          <AppList onDark />
        </div>
      </Container>
    </section>
  )
}
