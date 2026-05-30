export interface Paper {
  authors: string
  date: string // 표기용 (YYYY. M)
  year: number
  title: string
  journal: string
  detail?: string // 권호·페이지
  kci?: boolean
}

// 인태교 연구 실적 (최신순)
export const research: Paper[] = [
  {
    authors: "인태교, 전희주",
    date: "2026. 1",
    year: 2026,
    title: "암 진단자의 특성에 따른 경과년도 별 주요치료율 차이 분석",
    journal: "보험학회지",
    detail: "제145호",
    kci: true,
  },
  {
    authors: "인태교, 전희주",
    date: "2025. 5",
    year: 2025,
    title:
      "노인코호트DB를 이용한 개인건강상태에 따른 노인장기요양등급 예측모형",
    journal: "한국데이터정보과학회지",
    detail: "36(3), 443-455",
    kci: true,
  },
  {
    authors: "전희주, 인태교",
    date: "2025. 4",
    year: 2025,
    title:
      "간편고지보험 가입대상자 우량층 확대를 위한 요율차등화 연구: 질병입원발생 및 질병수술발생을 중심으로",
    journal: "보험학회지",
    detail: "제142호, 115-141",
    kci: true,
  },
  {
    authors: "전희주, 인태교",
    date: "2025. 4",
    year: 2025,
    title:
      "과거질병이력과 건강검진지표에 기반한 치매 발병 예측모형 개발 — 국민건강보험공단 노인코호트DB 사용",
    journal: "금융감독연구",
    detail: "제12권 1호, 1-23",
    kci: true,
  },
  {
    authors: "전희주, 문기태, 인태교",
    date: "2024. 4",
    year: 2024,
    title:
      "건강상태에 따른 사망률 및 유병기간 분석과 건강여명을 활용한 건강나이 산출에 관한 연구",
    journal: "금융감독연구",
    detail: "제11권 1호, 33-66",
    kci: true,
  },
  {
    authors: "전희주, 인태교",
    date: "2024. 4",
    year: 2024,
    title:
      "간편고지보험 고지항목별 무사고기간에 따른 암 발생 및 치료 상대위험도 예측",
    journal: "보험학회지",
    detail: "제138호, 41-72",
    kci: true,
  },
  {
    authors: "전희주, 인태교, 황용순",
    date: "2023. 7",
    year: 2023,
    title:
      "신용정보에 따른 입원 및 수술 발생 상대위험도 적용방안 연구: 신용정보원 데이터 이용",
    journal: "보험학회지",
    detail: "제135호, 101-125",
  },
  {
    authors: "전희주, 인태교",
    date: "2022. 12",
    year: 2022,
    title:
      "국민건강보험 표본코호트2.0DB를 활용한 건강상태에 따른 암발생과 암수술건수 상대위험도 연구",
    journal: "리스크관리연구",
    detail: "제33권 4호, 53-83",
  },
]
