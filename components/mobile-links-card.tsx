"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, MessageCircle, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export function MobileLinksCard() {
  const router = useRouter();

  // 앵커 링크를 사용하여 네이티브 스크롤을 활용합니다.

  const linkItems = [
    {
      title: "보험 배움 마당",
      description: "보험 통계 및 AI 분석 교육 과정",
      icon: <BookOpen className="h-5 w-5" />,
      href: "#services-title",
      color: "from-primary to-primary/80",
    },
    {
      title: "보험 모델링 실무 자료",
      description: "실무 중심의 보험 데이터 분석 자료",
      icon: <FileText className="h-5 w-5" />,
      href: "#community",
      color: "from-accent to-accent/80",
    },
    {
      title: "문의하기",
      description: "궁금한 점이 있으시면 언제든 문의하세요",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#contact",
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
              asChild
              variant="outline"
              className="w-full h-auto p-4 justify-start text-left hover:shadow-md transition-all duration-200"
            >
              <a href={item.href}>
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
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
