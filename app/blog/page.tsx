import { getAllPosts, getAllCategories, getAllTags } from "@/lib/markdown";
import FilterableBlogList from "@/components/blog/FilterableBlogList";
import { Navigation } from "@/components/navigation";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            보험 모델링 실무자료
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            보험과 관련한 최신지식 및 데이터 분석 방법 및 모델링을 위한 공간입니다. 전통적인 모델링 기법 뿐만 아니라 머신러닝, 딥러닝과 같은 최신 모델을 이해하고, 실제로 활용하고자 합니다. 특히 엑셀을 활용한 보험료 산출, 모델링, 파이썬 분석 등을 통해 실무적인 지식을 높이고자 합니다.
          </p>
        </div>

        <FilterableBlogList posts={posts} categories={categories} tags={tags} />
      </div>
    </div>
  );
}
