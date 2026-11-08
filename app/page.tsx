import { Hero } from "@/components/sections/hero"
import { Statement } from "@/components/sections/statement"
import { ArchImage } from "@/components/sections/arch-image"
import { ProductBento } from "@/components/sections/product-bento"
import { Authority } from "@/components/sections/authority"
import { LearningPreview } from "@/components/sections/learning-preview"
import { InsightsPreview } from "@/components/sections/insights-preview"
import { CtaBand } from "@/components/sections/cta-band"
import { getAllPosts } from "@/lib/markdown"

export default function HomePage() {
  const latestPosts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Statement />
      <ArchImage />
      <ProductBento />
      <Authority />
      <LearningPreview />
      <InsightsPreview posts={latestPosts} />
      <CtaBand />
    </main>
  )
}
