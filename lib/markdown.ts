import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
  excerpt: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
}

const postsDirectory = path.join(process.cwd(), 'content');

// 파일명에서 날짜와 제목 파싱
export function parseFileName(fileName: string): { date: string; title: string } {
  const match = fileName.match(/^(\d{4}-\d{2}-\d{2})\s*-\s*(.+)\.md$/);
  if (match) {
    return {
      date: match[1],
      title: match[2]
    };
  }
  return {
    date: new Date().toISOString().split('T')[0],
    title: fileName.replace('.md', '')
  };
}

// 마크다운 파일을 HTML로 변환
export async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const htmlContent = processedContent.toString();
  
  // HTML을 다시 파싱하여 rehype 플러그인 적용
  const result = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeHighlight, { 
      detect: true,
      ignoreMissing: true,
      languages: {
        javascript: require('highlight.js/lib/languages/javascript'),
        typescript: require('highlight.js/lib/languages/typescript'),
        python: require('highlight.js/lib/languages/python'),
        java: require('highlight.js/lib/languages/java'),
        css: require('highlight.js/lib/languages/css'),
        html: require('highlight.js/lib/languages/xml'),
        json: require('highlight.js/lib/languages/json'),
        bash: require('highlight.js/lib/languages/bash'),
        sql: require('highlight.js/lib/languages/sql'),
        markdown: require('highlight.js/lib/languages/markdown')
      }
    })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        className: ['heading-link'],
        'aria-hidden': 'true'
      }
    })
    .use(rehypeStringify)
    .process(htmlContent);

  return result.toString();
}

// 모든 블로그 포스트 가져오기
export function getAllPosts(): BlogPostMeta[] {
  const categories = fs.readdirSync(postsDirectory);
  const allPosts: BlogPostMeta[] = [];

  categories.forEach(category => {
    const categoryPath = path.join(postsDirectory, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      
      files.forEach(fileName => {
        if (fileName.endsWith('.md')) {
          const { date, title } = parseFileName(fileName);
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          allPosts.push({
            slug: encodeURIComponent(fileName.replace('.md', '')),
            title: data.title || title,
            date: data.date || date,
            category,
            tags: data.tags || [],
            excerpt: data.excerpt || content.substring(0, 150) + '...'
          });
        }
      });
    }
  });

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 특정 포스트 가져오기
export async function getPostBySlug(category: string, slug: string): Promise<BlogPost | null> {
  // URL 디코딩
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(postsDirectory, category, `${decodedSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { date, title } = parseFileName(`${decodedSlug}.md`);
  
  const processedContent = await processMarkdown(content);

  return {
    slug: slug, // 원본 slug 유지 (URL용)
    title: data.title || title,
    date: data.date || date,
    category,
    tags: data.tags || [],
    content: processedContent,
    excerpt: data.excerpt || content.substring(0, 150) + '...'
  };
}

// 카테고리별 포스트 가져오기
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.category === category);
}

// 태그별 포스트 가져오기
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

// 모든 카테고리 가져오기
export function getAllCategories(): string[] {
  return fs.readdirSync(postsDirectory).filter(item => 
    fs.statSync(path.join(postsDirectory, item)).isDirectory()
  );
}

// 모든 태그 가져오기
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagSet = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}
