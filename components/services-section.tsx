import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MessageSquare, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const courses = [
    {
      title: "보험 통계학 기초",
      description: "보험업무에 필요한 기본 통계 개념과 분석 방법을 학습합니다.",
      duration: "4주",
      level: "초급",
      topics: ["확률론", "통계적 추론", "회귀분석", "시계열 분석"],
      icon: BookOpen,
    },
    {
      title: "머신러닝 실무 과정",
      description: "보험 데이터를 활용한 머신러닝 모델 구축과 활용법을 익힙니다.",
      duration: "6주",
      level: "중급",
      topics: ["지도학습", "비지도학습", "모델 평가", "특성 엔지니어링"],
      icon: TrendingUp,
    },
    {
      title: "리스크 모델링",
      description: "보험 리스크 평가와 예측 모델링 전문 과정입니다.",
      duration: "8주",
      level: "고급",
      topics: ["신용리스크", "운영리스크", "시장리스크", "스트레스 테스트"],
      icon: Users,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
