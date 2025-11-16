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

export function MobileProfileCard() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const profileButtons = [
    {
      id: "career",
      title: "경력사항",
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-blue-700">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="font-semibold">1996년 ~ 현재: 코리안리 근무</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>상품개발 및 계리업무를 중심으로 30년간 재보험 분야에 종사</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>1997~2009년 상품개발 실무자로써 우량체 등 개발</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2007년 스코르(SCOR) 재보험사 파견을 통해 글로벌 재보험 실무 경험 축적</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2009~2012년 리스크관리팀에서 DFA 구축/운영</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2012~2015년 장기자동차보험팀에서 장기업무 담당</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2015~2021년 선임계리사 선임(책임준비금 등 결산 및 지급여력 비율 검증)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2020~2025년 상품개발팀장으로 신상품 개발 주도</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p>2002년 보험계리사 자격 취득, 2018년 금융감독원 표창 수상</p>
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
          <div className="space-y-3 text-green-700 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 인태교 (2022. 12)</span>. 국민건강보험 표본코호트2.0DB를 활용한 건강상태에 따른 암발생과 암수술건수 상대위험도 연구, 리스크관리연구, 제 33권, 4호, 53-83.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 인태교, 황용순 (2023. 7)</span>. 신용정보에 따른 입원 및 수술 발생 상대위험도 적용방안 연구: 신용정보원 데이터 이용, 보험학회지, 제 135호, 101-125.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 인태교 (2024.4)</span>. 간편고지보험 고지항목별 무사고기간에 따른 암 발생 및 치료 상대위험도 예측, 보험학회지, 제 138호, 41-72. (KCI)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 문기태, 인태교 (2024, 4)</span>. 건강상태에 따른 사망률 및 유병기간 분석과 건강여명을 활용한 건강나이 산출에 관한 연구, 금융감독연구, 제 11권 1호, 33-66. (KCI)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 인태교 (2025, 4)</span>. 과거질병이력과 건강검진지표에 기반한 치매 발병 예측모형 개발 - 국민건강보험공단 노인코호트DB 사용, 금융감독연구, 제 12권 1호, 1-23. (KCI)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">전희주, 인태교 (2025.4)</span>. 간편고지보험 가입대상자 우량층 확대를 위한 요율차등화 연구: 질병입원발생 및 질병수술발생을 중심으로, 보험학회지, 제142호, 115-141. (KCI)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <p><span className="font-semibold">인태교, 전희주 (2025, 5)</span>. 노인코호트DB를 이용한 개인건강상태에 따른 노인장기요양등급 예측모형, 한국데이터정보과학회지, 36(3), 443-455.</p>
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
            보험업계에서 30년간 근무하며 보험 상품 개발과 리스크 분석을 전문적으로 수행해온 전문가입니다. 보험계리사 자격증과 통계학 박사 학위를 보유하고 있으며, 머신러닝과 통계 기법을 활용한 보험 및 재보험 프라이싱 모델링에 깊은 전문성을 갖추고 있습니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            생명보험, 손해보험뿐 아니라 금융재보험 등 다양한 재보험 분야에서도 실무 경험을 쌓아왔으며, 재보험 계약 구조와 수익성 분석에 능숙한 재보험 전문가입니다. 공공데이터 기반의 통계 분석에도 정통하며, 엑셀과 파이썬을 활용한 보험료 산출 및 자동화 시스템 구축에도 높은 역량을 보유하고 있습니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            현재는 보험사의 디지털 전환을 위한 교육과 컨설팅을 제공하며, 실무진들이 데이터 기반 의사결정을 효과적으로 수행할 수 있도록 지원하고 있습니다.
          </p>
          <div>
            <h4 className="font-semibold mb-2">전문 분야</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">신규위험률 산출</Badge>
              <Badge variant="secondary">보험상품 개발</Badge>
              <Badge variant="secondary">보험분야 머신러닝</Badge>
              <Badge variant="secondary">프라이싱</Badge>
              <Badge variant="secondary">금융재보험</Badge>
              <Badge variant="secondary">엑셀 데이터 분석</Badge>
              <Badge variant="secondary">비비례재보험</Badge>
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
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="text-muted-foreground">비비례재보험 모델링 및 시스템 도입 등 재보험 프라이싱</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <p className="text-muted-foreground">간편보험(SI), 신규담보 등 국내 신상품 도입 및 확대</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
              <p className="text-muted-foreground">생명 및 손해보험 빈도-심도 모델링 등 프라이싱 강화</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
              <p className="text-muted-foreground">신용정보, 건강정보 데이터를 통한 건강상태/신용도별 건강나이 모형</p>
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
            "이론과 실무의 완벽한 결합을 통해 보험업계의 실질적인 문제를 해결할 수 있는 데이터 전문가를 양성하는 것이 저의 목표입니다. 복잡한 개념도 쉽게 이해할 수 있도록 실제 사례 중심의 교육을 제공합니다."
          </blockquote>
        </div>
      ),
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        {/* 프로필 이미지와 이름 */}
        <div className="text-center mb-6">
          {/* 플랫폼 소개 문구 */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              보험사를 위한 End-to-End 머신러닝 자동화 플랫폼
            </p>
            <a
              href="https://www.InsureAutoFlow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              <span>InsureAutoFlow</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
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
              <DialogContent className="max-w-md mx-auto max-h-[80vh] overflow-y-auto">
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
