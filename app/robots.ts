import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 임베드 전용 경로는 색인 제외 (실질 콘텐츠는 외부 사이트)
      disallow: ["/api/", "/app-resources"],
    },
    sitemap: "https://ai4insurance.com/sitemap.xml",
  }
}
