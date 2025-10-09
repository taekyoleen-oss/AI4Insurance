"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Award,
  BookOpen,
  Target,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function MobileProfileCard() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const profileButtons = [
    {
      id: "career",
      title: "경력사항",
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold text-lg">현재 직책</h4>
            <p className="text-muted-foreground">보험 AI 분석 전문가</p>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">주요 경력</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>보험업계 15년 경력</li>
                <li>AI/ML 프로젝트 리딩 8년</li>
                <li>보험 데이터 분석 전문가</li>
                <li>대학 강의 및 세미나 진행</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "research",
      title: "연구 실적",
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            <div className="p-3 bg-primary/5 rounded-lg">
              <h4 className="font-semibold">논문 발표</h4>
              <p className="text-sm text-muted-foreground">
                보험 AI 분석 관련 논문 20편 이상
              </p>
            </div>
            <div className="p-3 bg-accent/5 rounded-lg">
              <h4 className="font-semibold">특허 출원</h4>
              <p className="text-sm text-muted-foreground">
                보험 데이터 분석 알고리즘 특허 5건
              </p>
            </div>
            <div className="p-3 bg-chart-2/5 rounded-lg">
              <h4 className="font-semibold">연구 프로젝트</h4>
              <p className="text-sm text-muted-foreground">
                정부/기업 연구과제 10건 이상
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "introduction",
      title: "소개",
      icon: <User className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            보험업계의 AI 혁신을 이끄는 전문가로, 데이터 사이언스와 머신러닝을
            활용한 보험 모델링의 새로운 패러다임을 제시하고 있습니다.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">전문 분야</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">보험 통계학</Badge>
                <Badge variant="secondary">머신러닝</Badge>
                <Badge variant="secondary">데이터 분석</Badge>
                <Badge variant="secondary">위험 모델링</Badge>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "achievements",
      title: "주요 성과",
      icon: <Target className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold text-primary">AI 모델 성능 향상</h4>
              <p className="text-sm text-muted-foreground">
                보험 사고 예측 정확도 30% 향상
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold text-accent">비용 절감 효과</h4>
              <p className="text-sm text-muted-foreground">
                보험사 운영비용 25% 절감
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold text-chart-2">교육 프로그램 개발</h4>
              <p className="text-sm text-muted-foreground">
                보험 AI 교육과정 5개 개발
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "philosophy",
      title: "교육 철학",
      icon: <GraduationCap className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "실무 중심의 교육을 통해 보험업계의 AI 혁신을 이끌어가는 인재를
            양성합니다."
          </blockquote>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">교육 원칙</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>실무 중심의 프로젝트 기반 학습</li>
                <li>최신 기술 트렌드 반영</li>
                <li>개인별 맞춤형 교육 과정</li>
                <li>지속적인 멘토링과 피드백</li>
              </ul>
            </div>
          </div>
        </div>
      ),
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
          <p className="text-muted-foreground">보험 AI 분석 전문가</p>
        </div>

        {/* 버튼들 */}
        <div className="space-y-3">
          {profileButtons.map((button) => (
            <Dialog
              key={button.id}
              open={openDialog === button.id}
              onOpenChange={(open) => setOpenDialog(open ? button.id : null)}
            >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 text-left"
                  onClick={() => setOpenDialog(button.id)}
                >
                  <div className="flex items-center gap-3">
                    {button.icon}
                    <span className="font-medium">{button.title}</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md mx-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {button.icon}
                    {button.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">{button.content}</div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
