"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { BlogPostMeta } from "@/lib/markdown"

interface LatestBlogCardsProps {
  posts: BlogPostMeta[]
}

export function LatestBlogCards({ posts }: LatestBlogCardsProps) {
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  const handleCardClick = (post: BlogPostMeta) => {
    if (isLoggedIn) {
      // 로그인된 경우 블로그로 이동
      router.push('/blog')
    } else {
      // 로그인되지 않은 경우 로그인 다이얼로그 표시
      if ((window as any).openAuthDialog) {
        (window as any).openAuthDialog()
      }
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.slice(0, 3).map((post, index) => (
        <Card 
          key={post.slug} 
          className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
          onClick={() => handleCardClick(post)}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {formatDate(post.date)}
              </div>
            </div>
            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{post.tags.length - 2}
                  </Badge>
                )}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary hover:text-primary/80 p-0 h-auto"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(post)
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
