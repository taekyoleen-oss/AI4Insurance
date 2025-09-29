"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Sparkles, Zap, Target, Calculator, Heart, TrendingUp } from "lucide-react"

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
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              보험 배움 마당
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary/20 hover:bg-primary/5 bg-transparent"
              onClick={() => {
                const communitySection = document.getElementById('community');
                if (communitySection) {
                  communitySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              보험 모델링 실무자료
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">보험통계 분석 방법론</h3>
            <p className="text-muted-foreground">
              보험업계에 특화된 통계 분석 기법과 방법론을 통해 정확한 리스크 평가와 프라이싱을 수행합니다.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">건강/의료 데이터 분석</h3>
            <p className="text-muted-foreground">
              건강보험 데이터와 의료 정보를 활용한 개인별 건강 위험도 평가 및 맞춤형 보험 상품 개발을 지원합니다.
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-chart-2/20 to-chart-2/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-chart-2/25 transition-all">
              <TrendingUp className="h-8 w-8 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold mb-2">보험 AI분석 선진화 방안</h3>
            <p className="text-muted-foreground">
              최신 AI 기술과 고급 분석 기법을 도입하여 보험업계의 데이터 활용도와 의사결정 정확성을 혁신적으로 향상시킵니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
