import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { MobileHeroSection } from "@/components/mobile-hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/markdown";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  // 서버 사이드에서 블로그 데이터 가져오기
  const latestPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* fixed 네비 높이만큼 띄워서 바로 가기 띠가 네비 아래에 보이도록 */}
      <div className="pt-16">
        {/* Insure Auto Flow 바로 가기 - 상단 바 바로 아래 */}
        <div className="w-full border-b bg-muted/50 px-4 py-3 md:px-6 flex items-center">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 shrink-0"
          >
            <a
              href="https://insure-auto-flow-app.vercel.app/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="h-4 w-4" />
              Insure Auto Flow 바로 가기
            </a>
          </Button>
        </div>

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
      </div>
    </main>
  );
}
