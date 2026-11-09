import type { MetadataRoute } from "next"
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/markdown"

const base = "https://ai4insurance.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/app-resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ]

  const posts = getAllPosts()

  const articleRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/insights/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${base}/insights/category/${category}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }))

  const tagRoutes: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url: `${base}/insights/tag/${encodeURIComponent(tag)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }))

  return [...staticRoutes, ...articleRoutes, ...categoryRoutes, ...tagRoutes]
}
