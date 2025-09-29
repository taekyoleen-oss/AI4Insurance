"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Folder, Tag, FileText, X } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
}

interface FilterableBlogListProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

export default function FilterableBlogList({ posts, categories, tags }: FilterableBlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 필터링된 포스트 계산
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    // 카테고리 필터 적용
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // 태그 필터 적용 (선택된 태그 중 하나라도 포함되면 표시)
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.some(selectedTag => post.tags.includes(selectedTag))
      );
    }
    
    return filtered;
  }, [posts, selectedCategory, selectedTags]);

  // 필터 초기화
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // 태그 클릭 핸들러
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // 이미 선택된 태그면 제거
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      // 선택되지 않은 태그면 추가
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <div className="sticky top-8">
          {/* Active Filters */}
          {(selectedCategory || selectedTags.length > 0) && (
            <Card className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-blue-700 dark:text-blue-300">
                  <X className="w-5 h-5" />
                  활성 필터
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <Badge 
                      variant="default" 
                      className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                      onClick={() => setSelectedCategory(null)}
                    >
                      <Folder className="w-3 h-3 mr-1" />
                      {selectedCategory}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  )}
                  {selectedTags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="default" 
                      className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                      onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  모든 필터 초기화
                </button>
              </CardContent>
            </Card>
          )}

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
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category}`}
                    className={`w-full flex items-center gap-2 p-2 rounded-lg transition-colors group ${
                      selectedCategory === category
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <FileText className={`w-4 h-4 ${
                      selectedCategory === category
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`} />
                    <span className="capitalize text-sm font-medium">{category}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {posts.filter(post => post.category === category).length}
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
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className={`inline-flex items-center gap-1 transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:border-blue-400'
                    }`}
                  >
                    <Badge 
                      variant={selectedTags.includes(tag) ? "default" : "outline"} 
                      className={`text-xs ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 dark:hover:border-blue-400'
                      }`}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
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
        {/* Filter Results Info */}
        {(selectedCategory || selectedTags.length > 0) && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
            <p className="text-blue-700 dark:text-blue-300">
              {selectedCategory && selectedTags.length > 0 
                ? `"${selectedCategory}" 카테고리와 "${selectedTags.join(', ')}" 태그로 필터링된 결과: ${filteredPosts.length}개`
                : selectedCategory 
                ? `"${selectedCategory}" 카테고리로 필터링된 결과: ${filteredPosts.length}개`
                : `"${selectedTags.join(', ')}" 태그로 필터링된 결과: ${filteredPosts.length}개`
              }
            </p>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 line-clamp-2 mb-2">
                  {post.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit capitalize">
                  {post.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
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

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              {selectedCategory || selectedTags.length > 0 
                ? "선택한 필터에 해당하는 글이 없습니다." 
                : "아직 작성된 글이 없습니다."
              }
            </p>
            {(selectedCategory || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                필터 초기화
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
