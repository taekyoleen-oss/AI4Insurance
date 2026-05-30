import type { Metadata } from "next"
import { ArrowUpRight, LayoutGrid } from "lucide-react"
import { appLibraryUrl } from "@/content/site"

export const metadata: Metadata = {
  title: "앱 자료실",
  description: "바이브코딩랩 — 더 많은 앱을 활용하고 만들 수 있는 공간. AI 4 Insurance 안에서 바로 둘러보세요.",
}

export default function AppResourcesPage() {
  return (
    <main className="bg-background pt-16">
      <div className="flex h-[calc(100dvh-4rem)] flex-col">
        {/* 유틸리티 바 */}
        <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-5 py-3 sm:px-8">
          <div className="flex items-center gap-2.5">
            <LayoutGrid className="h-4 w-4 text-brand" />
            <div>
              <p className="text-sm font-semibold leading-none text-foreground">앱 자료실</p>
              <p className="mt-1 text-xs text-muted-foreground">바이브코딩랩 · vibecodinglab.ai.kr</p>
            </div>
          </div>
          <a
            href={appLibraryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            새 탭에서 열기
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* 임베드 — 상대 사이트가 framing을 허용하므로 하위 경로에 그대로 노출 */}
        <iframe
          src={appLibraryUrl}
          title="바이브코딩랩 앱 자료실"
          className="w-full flex-1 border-0 bg-white"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}
