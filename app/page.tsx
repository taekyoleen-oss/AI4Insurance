import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { MobileHeroSection } from "@/components/mobile-hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/markdown";

export default function HomePage() {
  // 서버 사이드에서 블로그 데이터 가져오기
  const latestPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* PC용 레이아웃 - md 이상에서만 표시 */}
      <div className="hidden md:block">
        <HeroSection />
        <AboutSection />
        <ServicesSection latestPosts={latestPosts} />
        <ContactSection />
      </div>

      {/* 모바일용 레이아웃 - md 미만에서만 표시 */}
      <div className="md:hidden">
        <MobileHeroSection />
        <AboutSection />
        <ServicesSection latestPosts={latestPosts} />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
