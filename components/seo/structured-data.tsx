import { profile, expertise } from "@/content/profile"
import { research } from "@/content/research"

const base = "https://ai4insurance.com"

// 인태교(Person) + 사이트(WebSite) 구조화 데이터 — 검색 신뢰도/리치 결과용
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "AI 4 Insurance",
        inLanguage: "ko-KR",
        description:
          "30년 재보험 실무와 보험계리사 전문성으로 만든 보험 자동화 도구와 실무 교육.",
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: profile.name,
        jobTitle: "보험계리사",
        description: profile.summary,
        url: `${base}/about`,
        worksFor: { "@type": "Organization", name: "코리안리" },
        knowsAbout: [...expertise],
        knowsLanguage: ["ko", "en"],
        // 대표 연구 실적 (최신 5편)
        subjectOf: research.slice(0, 5).map((p) => ({
          "@type": "ScholarlyArticle",
          headline: p.title,
          datePublished: String(p.year),
          publisher: { "@type": "Organization", name: p.journal },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // 정적 데이터만 직렬화 — XSS 위험 없음
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
