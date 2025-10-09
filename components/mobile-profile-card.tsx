"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Award,
  BookOpen,
  Target,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function MobileProfileCard() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path.startsWith("/#")) {
      // 현재 페이지가 홈페이지인지 확인
      if (window.location.pathname === "/") {
        // 홈페이지에 있으면 바로 스크롤
        const element = document.querySelector(path.replace("/", ""));
        if (element) {
          const offsetTop = element.offsetTop - 80; // 네비게이션 바 높이만큼 오프셋
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      } else {
        // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
        router.push("/");
        setTimeout(() => {
          const element = document.querySelector(path.replace("/", ""));
          if (element) {
            const offsetTop = element.offsetTop - 80; // 네비게이션 바 높이만큼 오프셋
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }, 200); // 페이지 로딩을 위해 시간 증가
      }
    } else {
      router.push(path);
    }
  };

  const profileButtons = [
    {
      id: "career",
      title: "경력사항",
      icon: <Award className="h-5 w-5" />,
      href: "/#about",
    },
    {
      id: "research",
      title: "연구 실적",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/#about",
    },
    {
      id: "introduction",
      title: "소개",
      icon: <User className="h-5 w-5" />,
      href: "/#about",
    },
    {
      id: "achievements",
      title: "주요 성과",
      icon: <Target className="h-5 w-5" />,
      href: "/#about",
    },
    {
      id: "philosophy",
      title: "교육 철학",
      icon: <GraduationCap className="h-5 w-5" />,
      href: "/#about",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        {/* 프로필 이미지와 이름 */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground">인태교</h2>
          <p className="text-muted-foreground">(보험계리사, 경영학 박사, 보험상품개발 및 재보험 경력)</p>
        </div>

        {/* 버튼들 */}
        <div className="space-y-3">
          {profileButtons.map((button) => (
            <Button
              key={button.id}
              variant="outline"
              className="w-full justify-between h-12 text-left"
              onClick={() => handleNavigation(button.href)}
            >
              <div className="flex items-center gap-3">
                {button.icon}
                <span className="font-medium">{button.title}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
