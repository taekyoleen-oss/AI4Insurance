import {
  Brain,
  Calculator,
  FileCode2,
  FileText,
  ImagePlus,
  LineChart,
  PenLine,
  Presentation,
  Sigma,
  SlidersHorizontal,
  Table2,
  type LucideIcon,
} from "lucide-react"

// 헤더 앱 런처 · 앱 자료실 · 푸터가 함께 쓰는 앱 목록 (링크는 여기서만 관리)
export type AppGroup = "모델분석" | "업무지원"

export interface AppLink {
  id: string
  short: string // 런처 타일용 짧은 이름
  name: string
  description: string
  href: string
  group: AppGroup
  icon: LucideIcon
}

export const apps: AppLink[] = [
  {
    id: "life-matrix-flow",
    short: "보험료 산출",
    name: "Life Matrix Flow",
    description: "생명보험 보험료와 책임준비금을 모듈 형식으로 자동 산출합니다.",
    href: "https://life-matrix-flow-new-livid.vercel.app/",
    group: "모델분석",
    icon: Calculator,
  },
  {
    id: "ml-auto-flow",
    short: "ML 자동분석",
    name: "ML Auto Flow",
    description: "머신러닝을 모듈화해 파이썬으로 검증하고, 여러 모델을 조합해 산출합니다.",
    href: "https://www.insureautoflow.com/",
    group: "모델분석",
    icon: Brain,
  },
  {
    id: "dfa-auto-flow",
    short: "DFA 분석",
    name: "DFA Auto Flow",
    description: "동적재무분석(DFA)의 재무 시나리오와 리스크 모델링을 자동화합니다.",
    href: "https://www.dfaautoflow.com/",
    group: "모델분석",
    icon: LineChart,
  },
  {
    id: "flexible-insurance",
    short: "자유설계보험",
    name: "Flexible Insurance",
    description: "계약자의 미래 현금흐름에 맞춰 보장과 보험료를 설계하는 종신·암 보험 앱입니다.",
    href: "https://flexibleinsurance.vercel.app/",
    group: "모델분석",
    icon: SlidersHorizontal,
  },
  {
    id: "lecture-assistant",
    short: "강의 지원",
    name: "강의 지원 앱",
    description: "PDF 전체보기와 펜·도형 그리기 도구로 강의 진행을 돕습니다.",
    href: "https://lecture-assistant-chi.vercel.app/",
    group: "업무지원",
    icon: Presentation,
  },
  {
    id: "pdf-master",
    short: "PDF Master",
    name: "PDF Master",
    description: "여러 PDF를 합치고, 필요한 페이지만 추출하거나 삭제합니다.",
    href: "https://pdf-master-lyart.vercel.app/",
    group: "업무지원",
    icon: FileText,
  },
  {
    id: "pro-exam-calculator",
    short: "계리 계산기",
    name: "Actuary Pro Calc",
    description: "계리사 1차 시험 허용 계산기의 계산 과정을 단계별로 보여줍니다.",
    href: "https://pro-exam-calculator.vercel.app/",
    group: "업무지원",
    icon: Sigma,
  },
  {
    id: "actuarial-whiteboard",
    short: "화이트보드",
    name: "보험수리 화이트보드",
    description: "보험수리 기호와 KaTeX 수식, 타임라인 도형을 지원하는 계산용 보드입니다.",
    href: "https://actuarial-whiteboard.vercel.app/",
    group: "업무지원",
    icon: PenLine,
  },
  {
    id: "formula-converter",
    short: "수식 변환",
    name: "이미지 수식변환기",
    description: "이미지나 텍스트를 LaTeX·PPT·Word 수식으로 변환합니다.",
    href: "https://mathocr-formula-in-office-converter.vercel.app/",
    group: "업무지원",
    icon: ImagePlus,
  },
  {
    id: "md-latex-studio",
    short: "MD·LaTeX",
    name: "마크다운·LaTeX 스튜디오",
    description: "마크다운과 LaTeX 문서를 편집하고 실시간으로 미리 봅니다.",
    href: "https://md-la-te-x-studio.vercel.app/",
    group: "업무지원",
    icon: FileCode2,
  },
  {
    id: "sheetpython",
    short: "SheetPython",
    name: "SheetPython",
    description: "스프레드시트 위에서 파이썬 코드를 셀 단위로 작성·실행합니다.",
    href: "https://sheetpython.vercel.app/",
    group: "업무지원",
    icon: Table2,
  },
]

export const appGroups: AppGroup[] = ["모델분석", "업무지원"]
