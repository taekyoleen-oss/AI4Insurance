"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, MessageCircle, ExternalLink } from "lucide-react";

export function MobileLinksCard() {

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
        console.log('모바일 링크 카드 스크롤 오류:', error);
        // 폴백: 즉시 스크롤
        window.scrollTo(0, offsetPosition);
      }
    }
  };

  // 클릭 핸들러
  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    console.log('모바일 링크 카드 스크롤 시도:', sectionId);
    handleScrollToSection(sectionId);
  };

  const linkItems = [
    {
      title: "보험 배움 마당",
      description: "보험 통계 및 AI 분석 교육 과정",
      icon: <BookOpen className="h-5 w-5" />,
      sectionId: "services-title",
      color: "from-primary to-primary/80",
    },
    {
      title: "보험 모델링 실무 자료",
      description: "실무 중심의 보험 데이터 분석 자료",
      icon: <FileText className="h-5 w-5" />,
      sectionId: "community",
      color: "from-accent to-accent/80",
    },
    {
      title: "문의하기",
      description: "궁금한 점이 있으시면 언제든 문의하세요",
      icon: <MessageCircle className="h-5 w-5" />,
      sectionId: "contact",
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
              onClick={(e) => handleClick(e, item.sectionId)}
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
