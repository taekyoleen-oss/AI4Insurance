import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByTag, getAllTags, getAllCategories } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Folder, FileText } from "lucide-react";
import { Navigation } from "@/components/navigation";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const tags = getAllTags();
  const categories = getAllCategories();

  if (!tags.includes(tag)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2 mb-6">
              <ArrowLeft className="w-4 h-4" />
              홈으로 돌아가기
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              #{tag} 태그
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {posts.length}개의 글이 있습니다.
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              {/* Categories */}
              <Card className="mb-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Folder className="w-5 h-5" />
                    카테고리
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/category/${cat}`}
                        className="w-full flex items-center gap-2 p-2 rounded-lg transition-colors group hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <FileText className="w-4 h-4 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        <span className="capitalize text-sm font-medium">{cat}</span>
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {posts.filter(post => post.category === cat).length}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Tag className="w-5 h-5" />
                    태그
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <Link
                        key={t}
                        href={`/tag/${t}`}
                        className={`inline-flex items-center gap-1 transition-colors ${
                          t === tag
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:border-blue-400'
                        }`}
                      >
                        <Badge 
                          variant={t === tag ? "default" : "outline"} 
                          className={`text-xs ${
                            t === tag
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:border-blue-400'
                          }`}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {t}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
                      <Badge variant="secondary" className="ml-auto capitalize">
                        <Folder className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.category}/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      자세히 보기 →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              이 태그에 해당하는 글이 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  
  return tags.map((tag) => ({
    tag,
  }));
}
