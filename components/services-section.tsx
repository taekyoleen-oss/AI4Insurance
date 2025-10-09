"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookOpen, Users, MessageSquare, TrendingUp } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { LatestBlogCards } from "@/components/latest-blog-cards"
import { BlogPostMeta } from "@/lib/markdown"

interface ServicesSectionProps {
  latestPosts: BlogPostMeta[]
}

export function ServicesSection({ latestPosts }: ServicesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const router = useRouter()

  const courses = [
    {
      title: "엑셀365를 활용한 통계분석 기초",
      description: "엑셀365의 최신 통계 함수와 데이터 분석 도구를 활용하여 보험 실무에 필요한 데이터 처리 및 분석 능력을 향상시킵니다.",
      level: "초급",
      duration: "2일",
      details: {
        overview: "엑셀365 최신 버전의 강화된 통계 및 데이터 분석 도구 소개",
        target: "보험회사 통계 분석, 상품개발 등 엑셀 활용 실무자",
        requirements: "엑셀365 버전 탑재 노트북 필수",
        curriculum: [
          "데이터 분석용 신규 함수 20여종 소개 및 활용 (XLOOKUP, FILTER, GROUPBY 등)",
          "엑셀365 상품개발 및 업무 활용 실습",
          "데이터 분석 간소화 및 가공 실습",
          "최적값 산출 및 순환참조 해찾기 실습"
        ]
      }
    },
    {
      title: "엑셀로 하는 일반보험 모델링 실무",
      description: "일반보험 프라이싱을 위한 빈도 및 심도 모형을 엑셀로 실습하며, 다양한 통계 기법과 시뮬레이션을 통해 실무 적용 능력을 강화합니다.",
      level: "중급",
      duration: "3일",
      details: {
        overview: "빈도모형과 심도모형 소개 및 활용 방안",
        target: "보험회사 일반보험 프라이싱 및 수리 관련 부서 실무자",
        requirements: "노트북 필수 (엑셀365 버전 권장)",
        curriculum: [
          "빈도 모형(이항, 포아송, 음이항) 소개 및 일반보험 활용 실습",
          "심도 모형(정규, 로그정규, 지수, 파레토 등) 소개 및 일반보험 활용 실습",
          "각종 보험가격 손해액 산출 및 Monte Carlo 시뮬레이션",
          "극단치 분석 및 Lee-Carter 등 보험사 활용 가능한 분석 소개",
          "엑셀365 데이터 기반 함수 활용 모델 구축 실습",
          "비비례(Excess of Loss, Stop) 모델 이론 및 실습"
        ]
      }
    },
    {
      title: "데이터 사이언스 이론 및 실무",
      description: "보험사에서 활용 가능한 머신러닝 기법을 중심으로 지도 및 비지도 학습의 이론과 실습을 병행합니다.",
      level: "중급",
      duration: "3일",
      details: {
        overview: "보험사 활용 가능한 머신러닝 종류 및 원리 학습",
        target: "보험회사 통계 분석, 상품개발 등 엑셀 활용 실무자",
        requirements: "노트북 필수 (엑셀365 권장)",
        curriculum: [
          "머신러닝 개요 및 기존 모델과 차이점",
          "보험사 활용 데이터 및 분석 목표 소개",
          "로지스틱, 의사결정나무, KNN, 나이브-베이즈 지도학습 이론 및 실습",
          "주성분 분석, K-평균 등 비지도학습 이론 및 실습",
          "초급 딥러닝 개념 및 실무 예제",
          "엑셀 기반 분석 과정 및 데이터 모델 구축 실습"
        ]
      }
    },
    {
      title: "엑셀을 통한 파이썬 데이터 분석",
      description: "엑셀365에 내장된 파이썬 기능을 활용하여 데이터 전처리부터 분석, 시각화까지 통합된 분석 환경을 실습합니다.",
      level: "중급",
      duration: "2일",
      details: {
        overview: "엑셀 내 파이썬 활용 데이터 분석 소개",
        target: "보험회사 통계 분석, 상품개발 엑셀 활용 실무자",
        requirements: "엑셀365 탑재 노트북 필수",
        curriculum: [
          "엑셀365 내 파이썬 주요 특징 및 장단점",
          "엑셀-파이썬 데이터 처리 기본 실습",
          "데이터 전처리(엑셀), 분석(파이썬), 결과 엑셀 변환 실습",
          "머신러닝 분석 및 차트 생성 방법 실습"
        ]
      }
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id="services-title" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            보험 배움 마당
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            실무 중심의 보험 데이터 분석 및 모델링 교육 과정을 통해 전문성을 향상시키세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{course.duration}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {course.description}
                </p>
                <div className="mt-auto pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedCourse(index)}
                      >
                        자세히 보기
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{course.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">교육 개요</h4>
                          <p className="text-muted-foreground">{course.details.overview}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">교육 대상</h4>
                          <p className="text-muted-foreground">{course.details.target}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">준비 사항</h4>
                          <p className="text-muted-foreground">{course.details.requirements}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">교육 내용</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {course.details.curriculum.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="community" className="bg-card rounded-lg p-8">
          <div className="text-center mb-8">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">보험 모델링 실무자료</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              동료들과 함께 학습하고 실무 경험을 공유할 수 있는 온라인 커뮤니티에 참여하세요.
            </p>
          </div>


          <div className="mb-8">
            <h4 className="text-lg font-semibold text-center mb-6">최신 실무 자료</h4>
            <LatestBlogCards posts={latestPosts} />
          </div>

          <div className="flex justify-center mt-8">
            {isLoggedIn ? (
              <Button 
                size="lg" 
                onClick={() => router.push('/blog')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                보험 모델링 실무자료 보기
              </Button>
            ) : (
              <Button 
                size="lg" 
                onClick={() => {
                  // 로그인되지 않은 경우 로그인 다이얼로그 표시
                  if ((window as any).openAuthDialog) {
                    (window as any).openAuthDialog();
                  }
                }}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                커뮤니티 들어가기
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
