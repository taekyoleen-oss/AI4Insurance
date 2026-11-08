export type ProductStatus = "active" | "coming-soon"

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  href: string | null
  status: ProductStatus
  accent: string // 카드 포인트 색 (tkLeen 생태계 톤)
  image: string // public/images — Unsplash License(상업적 이용 가능)
  imageAlt: string
}

export const products: Product[] = [
  {
    id: "life-matrix-flow",
    name: "Life Matrix Flow",
    tagline: "생명보험료 산출 자동화",
    description:
      "생명보험의 보험료 산출 자동화 플랫폼으로, 복잡한 생명보험료 계산을 간편하고 정확하게 수행할 수 있습니다.",
    features: [
      "생명보험료 산출 자동화",
      "위험률·해약율 기반 정밀 계산",
      "시나리오별 보험료 비교",
    ],
    href: "https://life-matrix-flow.vercel.app/",
    status: "active",
    accent: "#4a90c2",
    image: "/images/tool-life.jpg",
    imageAlt: "해질녘 서울 도심과 한강, 불이 켜진 거리",
  },
  {
    id: "insure-auto-flow",
    name: "Insure Auto Flow",
    tagline: "End-to-End 머신러닝 자동화",
    description:
      "보험사를 위한 End-to-End 머신러닝 자동화 플랫폼으로, 데이터 파이프라인부터 모델링까지 전체 프로세스를 자동화합니다.",
    features: [
      "데이터 파이프라인 자동 구성",
      "지도·비지도 학습 모델링",
      "결과 리포트 및 배포",
    ],
    href: "https://www.insureautoflow.com/",
    status: "active",
    accent: "#1b2845",
    image: "/images/tool-ml.jpg",
    imageAlt: "분석 대시보드 그래프가 떠 있는 노트북 화면",
  },
  {
    id: "dfa-auto-flow",
    name: "DFA Auto Flow",
    tagline: "동적재무분석(DFA) 자동화",
    description:
      "동적재무분석(DFA) 자동화 플랫폼으로, 복잡한 재무 시나리오 분석과 리스크 모델링을 자동화하여 효율적인 의사결정을 지원합니다.",
    features: [
      "재무 시나리오 시뮬레이션",
      "리스크 모델링 자동화",
      "경영 의사결정 지원 리포트",
    ],
    href: "https://www.dfaautoflow.com/",
    status: "active",
    accent: "#7ba88f",
    image: "/images/tool-dfa.jpg",
    imageAlt: "곡선으로 휘어지는 건축물 외벽 패턴",
  },
  {
    id: "reserve-matrix-flow",
    name: "Reserve Matrix Flow",
    tagline: "지급준비금 추정 (준비중)",
    description:
      "지급준비금을 추정하는 도구로, 보험사의 책임준비금 산출을 자동화하여 정확하고 효율적인 준비금 관리를 지원합니다.",
    features: [
      "책임준비금 산출 자동화",
      "준비금 적정성 검증",
      "결산·감독 보고 연계",
    ],
    href: null,
    status: "coming-soon",
    accent: "#a9866b",
    image: "/images/tool-reserve.jpg",
    imageAlt: "도서관 서가에 길게 늘어선 책들",
  },
]
