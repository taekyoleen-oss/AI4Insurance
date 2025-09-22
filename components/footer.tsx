export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">보험 ML 교육센터</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              보험업계의 디지털 전환을 선도하는 전문 교육기관입니다. 실무 중심의 통계학과 머신러닝 교육을 통해 미래 보험
              전문가를 양성합니다.
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">교육과정</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>보험 통계학 기초</li>
              <li>머신러닝 실무</li>
              <li>리스크 모델링</li>
              <li>데이터 분석</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>온라인 커뮤니티</li>
              <li>1:1 멘토링</li>
              <li>취업 지원</li>
              <li>자료실</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 보험 ML 교육센터. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
