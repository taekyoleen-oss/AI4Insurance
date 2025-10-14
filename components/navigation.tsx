"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthDialog } from "@/components/auth-dialog"
import { useRouter } from "next/navigation"

export function Navigation() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const router = useRouter()


  // 직접 스크롤 처리 함수 (모바일 링크 카드와 동일한 로직)
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 헤더 높이를 고려한 오프셋 (128px = 32 * 4)
      const headerOffset = 128;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      
      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === '/') {
        // 홈페이지에 있으면 바로 스크롤
        handleScrollToSection(sectionId);
      } else {
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push('/')
        setTimeout(() => {
          handleScrollToSection(sectionId);
        }, 300) // 페이지 로딩을 위해 시간 증가
      }
    } else {
      router.push(href)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const navItems = [
    { name: "소개", href: "/#about" },
    { name: "보험 배움 마당", href: "/#services-title" },
    { name: "커뮤니티", href: "/#community" },
    { name: "문의", href: "/#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI 4 Insurance
              </h1>
            </button>
          </div>

          {/* PC용 네비게이션 - md 이상에서만 표시 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/5 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">로그아웃</span>
              </Button>
            ) : (
              <AuthDialog />
            )}
          </div>

          {/* 모바일용 네비게이션 - md 미만에서만 표시 */}
          <div className="md:hidden flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-muted-foreground hover:text-primary px-2 py-1 text-sm font-medium transition-colors hover:bg-primary/5 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-1"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">로그아웃</span>
              </Button>
            ) : (
              <AuthDialog />
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}



