import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { navItems } from "@/content/site"

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-background pt-16">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="label-meta text-brand">Error 404</p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            요청하신 주소가 변경되었거나 더 이상 존재하지 않습니다. 아래에서 원하는 곳으로 이동하세요.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                홈으로
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/insights">
                자료실 둘러보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <nav className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </main>
  )
}
