"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, MessageCircle, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export function MobileLinksCard() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    console.log("handleNavigation called with:", path);
    
    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      console.log("Target ID:", targetId);
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        console.log("Element found:", element);
        
        if (element) {
          console.log("Scrolling to element:", element);
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
          });
          return true;
        } else {
          console.log("Element not found, trying again...");
          return false;
        }
      };
      
      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === "/") {
        console.log("On homepage, scrolling immediately");
        // 홈페이지에 있으면 바로 스크롤
        if (!scrollToElement()) {
          // 요소가 없으면 여러 번 시도
          let attempts = 0;
          const maxAttempts = 10;
          const tryScroll = () => {
            console.log(`Attempt ${attempts + 1} to find element`);
            if (scrollToElement() || attempts >= maxAttempts) {
              return;
            }
            attempts++;
            setTimeout(tryScroll, 200);
          };
          setTimeout(tryScroll, 100);
        }
      } else {
        console.log("Not on homepage, navigating to /");
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push("/");
        setTimeout(() => {
          console.log("After navigation, trying to scroll");
          let attempts = 0;
          const maxAttempts = 15;
          const tryScroll = () => {
            console.log(`Post-navigation attempt ${attempts + 1} to find element`);
            if (scrollToElement() || attempts >= maxAttempts) {
              return;
            }
            attempts++;
            setTimeout(tryScroll, 300);
          };
          tryScroll();
        }, 500);
      }
    } else {
      console.log("Not a hash link, navigating to:", path);
      router.push(path);
    }
  };

  const linkItems = [
    {
      title: "보험 배움 마당",
      description: "보험 통계 및 AI 분석 교육 과정",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/#services-title",
      color: "from-primary to-primary/80",
    },
    {
      title: "보험 모델링 실무 자료",
      description: "실무 중심의 보험 데이터 분석 자료",
      icon: <FileText className="h-5 w-5" />,
      href: "/#community",
      color: "from-accent to-accent/80",
    },
    {
      title: "문의하기",
      description: "궁금한 점이 있으시면 언제든 문의하세요",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "/#contact",
      color: "from-chart-2 to-chart-2/80",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="space-y-3">
          {linkItems.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full h-auto p-4 justify-start text-left hover:shadow-md transition-all duration-200"
              onClick={() => handleNavigation(item.href)}
            >
              <div className="flex items-center gap-4 w-full">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
