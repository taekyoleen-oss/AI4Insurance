import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MessageSquare, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const courses = [
    {
      title: "엑셀365를 활용한 통계분석 기초",
      description: "엑셀365의 최신 통계 함수와 데이터 분석 도구를 활용하여 보험 실무에 필요한 데이터 처리 및 분석 능력을 향상시킵니다.",
      duration: "4주",
      level: "초급",
      topics: ["XLOOKUP, FILTER, GROUPBY", "LAMBDA, LET, SCAN 함수", "보험료 산출 모델링", "최적값 산출 및 순환 참조"],
      icon: BookOpen,
    },
    {
      title: "엑셀로 하는 일반보험 모델링 실무",
      description: "일반보험 프라이싱을 위한 빈도 및 심도 모형을 엑셀로 실습하며, 다양한 통계 기법과 시뮬레이션을 통해 실무 적용 능력을 강화합니다.",
      duration: "6주",
      level: "중급",
      topics: ["빈도 모형(이항, 포아송, 음이항)", "심도 모형(정규, 로그정규, 지수)", "Monte Carlo 시뮬레이션", "비비례 재보험 모델"],
      icon: TrendingUp,
    },
    {
      title: "데이터 사이언스 이론 및 실무",
      description: "보험사에서 활용 가능한 머신러닝 기법을 중심으로 지도 및 비지도 학습의 이론과 실습을 병행합니다.",
      duration: "8주",
      level: "중급",
      topics: ["로지스틱 회귀, 의사결정나무", "KNN, 나이브 베이즈", "주성분 분석, K-평균 클러스터링", "엑셀 기반 머신러닝 모델 구축"],
      icon: Users,
    },
    {
      title: "엑셀을 통한 파이썬 데이터 분석",
      description: "엑셀365에 내장된 파이썬 기능을 활용하여 데이터 전처리부터 분석, 시각화까지 통합된 분석 환경을 실습합니다.",
      duration: "6주",
      level: "중급",
      topics: ["엑셀 내 파이썬 연동", "파이썬 기반 분석 결과 엑셀 출력", "머신러닝 분석 및 차트 생성", "실무 데이터 기반 모델링"],
      icon: MessageSquare,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">교육 과정</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            체계적인 커리큘럼으로 기초부터 고급까지 단계별 학습이 가능합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{course.duration}</Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">주요 학습 내용:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6">자세히 보기</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div id="community" className="bg-card rounded-lg p-8">
          <div className="text-center mb-8">
            <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">정보 교환 커뮤니티</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              동료들과 함께 학습하고 실무 경험을 공유할 수 있는 온라인 커뮤니티에 참여하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">활성 회원</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">토론 주제</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-2 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">전문가 멘토</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-3 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">실시간 지원</div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button size="lg">커뮤니티 가입하기</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
