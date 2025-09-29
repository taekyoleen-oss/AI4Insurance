import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Folder, Tag, Clock } from "lucide-react";
import { Navigation } from "@/components/navigation";

interface BlogPostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              목록으로 돌아가기
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header Section */}
          <div className="p-8 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4" />
                <Badge variant="secondary" className="capitalize">
                  {post.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>약 5분 읽기</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none prose-slate dark:prose-invert
                prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
                prose-code:text-sm prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono
                prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
                prose-ul:list-disc prose-ol:list-decimal prose-li:mb-2
                prose-table:border-collapse prose-th:border prose-th:border-slate-300 dark:prose-th:border-slate-600 prose-th:bg-slate-50 dark:prose-th:bg-slate-800 prose-th:p-2
                prose-td:border prose-td:border-slate-300 dark:prose-td:border-slate-600 prose-td:p-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts or Navigation */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              더 많은 글 보기
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  모든 글 보기
                </Button>
              </Link>
              <Link href={`/category/${post.category}`}>
                <Button variant="outline" size="sm">
                  {post.category} 카테고리
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}
