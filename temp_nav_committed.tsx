"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthDialog } from "@/components/auth-dialog"
import { useRouter } from "next/navigation"

export function Navigation() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const router = useRouter()


  // 紐⑤컮??移쒗솕?곸씤 ?ㅽ겕濡?泥섎━ ?⑥닔
  const handleScrollToSection = (sectionId: string) => {
    // ?붿냼瑜?李얠쓣 ?뚭퉴吏 ?ъ떆??    const findAndScroll = (retries = 0) => {
      const element = document.getElementById(sectionId);
      
      if (!element) {
        // ?붿냼瑜?李얠? 紐삵븳 寃쎌슦 ?ъ떆??(理쒕? 5踰?
        if (retries < 5) {
          setTimeout(() => findAndScroll(retries + 1), 100);
        } else {
          console.warn(`?뱀뀡??李얠쓣 ???놁뒿?덈떎: ${sectionId}`);
        }
        return;
      }

      // ?ㅻ퉬寃뚯씠??諛??믪씠 怨꾩궛 (紐⑤컮?쇱뿉?????믪쓣 ???덉쓬)
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 120;
      const headerOffset = navHeight + 20; // ?ъ쑀 怨듦컙 異붽?

      // ?붿냼???ㅼ젣 ?꾩튂 怨꾩궛
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const offsetPosition = elementTop - headerOffset;

      // 紐⑤컮?쇱뿉?????덉젙?곸씤 ?ㅽ겕濡?      const scrollToPosition = () => {
        // requestAnimationFrame???ъ슜?섏뿬 ??遺?쒕윭???ㅽ겕濡?        requestAnimationFrame(() => {
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        });
      };

      // 利됱떆 ?ㅽ겕濡??쒕룄
      scrollToPosition();

      // 紐⑤컮??釉뚮씪?곗? ?명솚?깆쓣 ?꾪빐 異붽? ?쒕룄
      setTimeout(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const targetScroll = Math.max(0, offsetPosition);
        
        // 紐⑺몴 ?꾩튂???꾨떖?섏? 紐삵븳 寃쎌슦 ?ъ떆??        if (Math.abs(currentScroll - targetScroll) > 50) {
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
      
      // ?꾩옱 ?섏씠吏媛 ?덊럹?댁??몄? ?뺤씤
      if (window.location.pathname === '/') {
        // ?덊럹?댁????덉쑝硫?諛붾줈 ?ㅽ겕濡?        // ?쎄컙??吏?곗쓣 ?먯뼱 ?대┃ ?대깽?멸? ?꾩쟾??泥섎━?섎룄濡???        setTimeout(() => {
          handleScrollToSection(sectionId);
        }, 50);
      } else {
        // ?ㅻⅨ ?섏씠吏???덉쑝硫??덊럹?댁?濡??대룞 ???ㅽ겕濡?        router.push('/')
        // ?섏씠吏 濡쒕뱶 ???ㅽ겕濡?(??湲??湲??쒓컙)
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
    { name: "?뚭컻", href: "/#about" },
    { name: "蹂댄뿕 諛곗? 留덈떦", href: "/#services-title" },
    { name: "而ㅻ??덊떚", href: "/#community" },
    { name: "臾몄쓽", href: "/#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PC???덉씠?꾩썐 - md ?댁긽?먯꽌留??쒖떆 */}
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
                <span className="hidden sm:inline">濡쒓렇?꾩썐</span>
              </Button>
            ) : (
              <AuthDialog />
            )}
          </div>
        </div>

        {/* 紐⑤컮?쇱슜 ?덉씠?꾩썐 - md 誘몃쭔?먯꽌留??쒖떆 */}
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
            
            {/* 紐⑤컮?쇱뿉?쒕뒗 ?ㅻ퉬寃뚯씠??硫붾돱 ?쒓굅, ?몄쬆 踰꾪듉留??쒖떆 */}
            <div className="flex items-center">
              {isLoggedIn ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-1"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">濡쒓렇?꾩썐</span>
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



