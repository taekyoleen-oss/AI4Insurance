// 블로그(자료실) 카테고리 폴더명 → 한글 라벨
export const categoryLabels: Record<string, string> = {
  analysis: "데이터 분석",
  distributions: "확률분포",
  "excel-python": "엑셀·파이썬",
  insurance: "보험 일반",
  life: "일상·성장",
  "model-fitting": "분포 적합",
  modeling: "모델링",
  regression: "회귀 분석",
  statistics: "통계",
  tech: "기술",
}

export function categoryLabel(category: string): string {
  return categoryLabels[category] ?? category
}

// 자료실 글 링크 (슬러그는 이미 encodeURIComponent 처리됨)
export function insightHref(category: string, slug: string): string {
  return `/insights/${category}/${slug}`
}
