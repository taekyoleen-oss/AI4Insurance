import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/markdown"

export default function HomePage() {
  // 서버 사이드에서 블로그 데이터 가져오기
  const latestPosts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection latestPosts={latestPosts} />
      <ContactSection />
      <Footer />
    </main>
  )
}
