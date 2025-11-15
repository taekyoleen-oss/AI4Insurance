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
    // 요소를 찾을 때까지 재시도
    const findAndScroll = (retries = 0) => {
      const element = document.getElementById(sectionId);
      
      if (!element) {
        // 요소를 찾지 못한 경우 재시도 (최대 5번)
        if (retries < 5) {
          setTimeout(() => findAndScroll(retries + 1), 100);
        } else {
          console.warn(`섹션을 찾을 수 없습니다: ${sectionId}`);
        }
        return;
      }

      // 네비게이션 바 높이 계산 (모바일에서 더 높을 수 있음)
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 120;
      const headerOffset = navHeight + 20; // 여유 공간 추가

      // 요소의 실제 위치 계산
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const offsetPosition = elementTop - headerOffset;

      // 모바일에서 더 안정적인 스크롤
      const scrollToPosition = () => {
        // requestAnimationFrame을 사용하여 더 부드러운 스크롤
        requestAnimationFrame(() => {
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        });
      };

      // 즉시 스크롤 시도
      scrollToPosition();

      // 모바일 브라우저 호환성을 위해 추가 시도
      setTimeout(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const targetScroll = Math.max(0, offsetPosition);
        
        // 목표 위치에 도달하지 못한 경우 재시도
        if (Math.abs(currentScroll - targetScroll) > 50) {
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }
      }, 300);
    };

    findAndScroll();
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      
      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === '/') {
        // 홈페이지에 있으면 바로 스크롤
        // 약간의 지연을 두어 클릭 이벤트가 완전히 처리되도록 함
        setTimeout(() => {
          handleScrollToSection(sectionId);
        }, 50);
      } else {
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push('/')
        // 페이지 로드 후 스크롤 (더 긴 대기 시간)
        setTimeout(() => {
          handleScrollToSection(sectionId);
        }, 800);
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
          <div className="flex items-center justify-between h-16">
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
            
            {/* 모바일에서는 네비게이션 메뉴 제거, 인증 버튼만 표시 */}
            <div className="flex items-center">
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

      </div>
    </nav>
  )
}



