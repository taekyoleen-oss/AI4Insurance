"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthDialog } from "@/components/auth-dialog"
import { useRouter } from "next/navigation"

export function Navigation() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const router = useRouter()


  // 모바일 친화적인 스크롤 처리 함수
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 모바일에서 더 큰 오프셋 적용
      const headerOffset = 150; // 모바일 네비게이션 높이 고려
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      // 모바일에서 더 안정적인 스크롤을 위해 여러 방법 시도
      try {
        // 1. 기본 window.scrollTo 시도
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // 2. 모바일에서 안정성을 위해 setTimeout으로 재시도
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
        
        // 3. scrollIntoView도 함께 시도 (모바일 호환성)
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 200);
        
      } catch (error) {
        console.log('스크롤 오류:', error);
        // 폴백: 즉시 스크롤
        window.scrollTo(0, offsetPosition);
      }
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      
      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === '/') {
        // 홈페이지에 있으면 바로 스크롤
        console.log('모바일 스크롤 시도:', sectionId);
        handleScrollToSection(sectionId);
      } else {
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push('/')
        setTimeout(() => {
          console.log('페이지 이동 후 스크롤 시도:', sectionId);
          handleScrollToSection(sectionId);
        }, 500) // 모바일에서 더 긴 대기 시간
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
        {/* PC용 레이아웃 - md 이상에서만 표시 */}
        <div className="hidden md:flex justify-between items-center h-16">
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

          <div className="flex items-center space-x-8">
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
        </div>

        {/* 모바일용 레이아웃 - md 미만에서만 표시 */}
        <div className="md:hidden">
          <div className="flex items-center gap-2 mb-4">
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
          
          <div className="flex flex-wrap gap-2">
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



