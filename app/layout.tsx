import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SupabaseKeepAlive } from "@/components/supabase-keepalive"
import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { StructuredData } from "@/components/seo/structured-data"
import "./globals.css"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const siteUrl = "https://ai4insurance.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI 4 Insurance — 보험 실무를 데이터로 다시 설계합니다",
    template: "%s · AI 4 Insurance",
  },
  description:
    "30년 재보험 실무와 보험계리사 전문성으로 만든 보험 자동화 도구와 실무 교육. 코리안리 30년 · 보험계리사 · KCI 논문 8편.",
  keywords: [
    "보험계리",
    "재보험",
    "보험 머신러닝",
    "보험료 산출",
    "DFA",
    "보험 데이터 분석",
    "tkLeen",
  ],
  authors: [{ name: "인태교" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/png/11-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/png/11-favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/brand/png/03-app-icon-navy-256.png", sizes: "256x256" }],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "AI 4 Insurance",
    title: "AI 4 Insurance — 보험 실무를 데이터로 다시 설계합니다",
    description:
      "검증된 전문가가 직접 만든 보험 자동화 도구와 실무 교육. 코리안리 30년 · 보험계리사 · KCI 논문 8편.",
    images: [{ url: "/brand/png/09-lockup-horizontal-light-1440.png", width: 1440, height: 380, alt: "tkLeen" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={jetbrains.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* IBM Plex Sans KR — 한글 유니코드 범위 분할 로드 */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600&display=swap"
        />
        <StructuredData />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SupabaseKeepAlive />
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <ScrollToTop />
          <Toaster richColors position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
