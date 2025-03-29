import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/metadata"
import { products } from "@/lib/products/index"
import { blogPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date()

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tienda`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

  // Categorías
  const categoryPages = siteConfig.mainCategories.map((category) => ({
    url: `${baseUrl}/categorias/${category.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Productos
  const productPages = products.map((product) => ({
    url: `${baseUrl}/producto/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Artículos del blog
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...mainPages, ...categoryPages, ...productPages, ...blogPages]
}

