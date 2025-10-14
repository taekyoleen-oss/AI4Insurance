"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export function AboutSection() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="hidden md:block">
            <h2 className="text-3xl font-bold text-foreground mb-2">인태교</h2>
            <p className="text-sm text-muted-foreground mb-8">(보험계리사, 경영학 박사, 보험상품개발 및 재보험 경력)</p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg w-full h-full">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
                  </div>
                  <CardContent className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-800">경력 사항</h3>
                    </div>
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
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg w-full h-full">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
                  </div>
                  <CardContent className="relative p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-green-800">연구 실적</h3>
                    </div>
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
                  </CardContent>
                </Card>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-4 max-w-md">
                  <Dialog open={openDialog === "intro"} onOpenChange={(open) => setOpenDialog(open ? "intro" : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="h-16 w-32 flex flex-col items-center justify-center space-y-1 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-800 rounded-lg"
                      >
                        <div className="text-lg font-semibold">소개</div>
                        <div className="text-xs text-blue-600">자세히 보기</div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>소개</DialogTitle>
                      </DialogHeader>
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
            </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={openDialog === "achievements"} onOpenChange={(open) => setOpenDialog(open ? "achievements" : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="h-16 w-32 flex flex-col items-center justify-center space-y-1 bg-green-50 hover:bg-green-100 border-green-200 text-green-800 rounded-lg"
                      >
                        <div className="text-lg font-semibold">주요 성과</div>
                        <div className="text-xs text-green-600">자세히 보기</div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>주요 성과</DialogTitle>
                      </DialogHeader>
                <div className="space-y-4">
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
                    </DialogContent>
                  </Dialog>

                  <Dialog open={openDialog === "philosophy"} onOpenChange={(open) => setOpenDialog(open ? "philosophy" : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="h-16 w-32 flex flex-col items-center justify-center space-y-1 bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-800 rounded-lg"
                      >
                        <div className="text-lg font-semibold">교육 철학</div>
                        <div className="text-xs text-purple-600">자세히 보기</div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>교육 철학</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  "이론과 실무의 완벽한 결합을 통해 보험업계의 실질적인 문제를 해결할 수 있는 데이터 전문가를 양성하는
                  것이 저의 목표입니다. 복잡한 개념도 쉽게 이해할 수 있도록 실제 사례 중심의 교육을 제공합니다."
                </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">전문 분야</h3>
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
          </div>
        </div>
      </div>
    </section>
  )
}
