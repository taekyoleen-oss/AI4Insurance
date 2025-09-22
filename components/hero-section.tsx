"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Sparkles, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI 기반 보험 교육의 새로운 패러다임
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            보험의 미래를 만드는
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI & 데이터 사이언스
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            인공지능과 머신러닝으로 보험업계를 혁신하세요. 실시간 데이터 분석부터 예측 모델링까지, 차세대 보험 전문가가
            되기 위한 모든 것을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              AI 교육 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary/20 hover:bg-primary/5 bg-transparent"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              주요 통계 분석 소개
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">실시간 데이터 분석</h3>
            <p className="text-muted-foreground">
              빅데이터와 실시간 분석 기술로 보험 트렌드를 예측하고 인사이트를 도출합니다.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all">
              <Brain className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI 예측 모델링</h3>
            <p className="text-muted-foreground">
              딥러닝과 머신러닝을 활용한 리스크 예측 및 고객 행동 분석 모델을 구축합니다.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-chart-2/20 to-chart-2/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-chart-2/25 transition-all">
              <Target className="h-8 w-8 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold mb-2">스마트 자동화</h3>
            <p className="text-muted-foreground">
              AI 기반 자동화 솔루션으로 보험 업무 효율성을 극대화하고 혁신을 이끕니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
