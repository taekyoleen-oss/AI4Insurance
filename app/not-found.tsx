import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { navItems } from "@/content/site"

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-background pt-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="chip tabular">404</span>
          <h1 className="mt-6 text-display-md">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            요청하신 주소가 변경되었거나 더 이상 존재하지 않습니다. 아래에서 원하는 곳으로 이동하세요.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                홈으로
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/insights">
                자료실 둘러보기
              </Link>
            </Button>
          </div>

          <nav className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
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
