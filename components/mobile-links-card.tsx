"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, MessageCircle, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export function MobileLinksCard() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top - 120;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === "/") {
        // 홈페이지에 있으면 바로 스크롤 시도
        if (!scrollToElement()) {
          // 요소가 아직 로드되지 않았다면 잠시 후 재시도
          setTimeout(() => {
            scrollToElement();
          }, 100);
        }
      } else {
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push("/");
        setTimeout(() => {
          // 여러 번 시도하여 요소가 로드될 때까지 기다림
          let attempts = 0;
          const maxAttempts = 10;
          const tryScroll = () => {
            if (scrollToElement() || attempts >= maxAttempts) {
              return;
            }
            attempts++;
            setTimeout(tryScroll, 200);
          };
          tryScroll();
        }, 300);
      }
    } else {
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
