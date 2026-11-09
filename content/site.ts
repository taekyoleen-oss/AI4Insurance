// 사이트 전역 상수 — 내비게이션, 연락처, 브랜드
export const site = {
  name: "AI 4 Insurance",
  brand: "tkLeen",
  domain: "ai4insurance.com",
  tagline: "보험 실무를, 데이터로 다시 설계합니다",
  description:
    "30년 재보험 실무와 보험계리사 전문성으로 만든 보험 자동화 도구와 실무 교육.",
} as const

export const navItems = [
  { name: "소개", href: "/about" },
  { name: "배움 마당", href: "/learning" },
  { name: "자료실", href: "/insights" },
  { name: "앱 자료실", href: "/app-resources" },
  { name: "문의", href: "/contact" },
] as const

export const contact = {
  email: "taekyoleen@gmail.com",
  hours: [
    { day: "평일", time: "09:00 - 18:00" },
    { day: "토요일", time: "10:00 - 16:00" },
    { day: "일요일/공휴일", time: "휴무" },
  ],
  note: "긴급 문의는 이메일로 연락주시면 24시간 내 답변드립니다.",
} as const

// 신뢰 지표 스트립
export const trustStats = [
  { value: "30년", label: "코리안리 재보험 실무" },
  { value: "보험계리사", label: "2002년 자격 취득" },
  { value: "논문 8편", label: "KCI 등재 다수" },
  { value: "실무 앱 11종", label: "보험·통계 분석과 강의 지원" },
] as const
