import { getBlogPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import { BlogPostPageClient } from "./BlogPostPageClient"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Mendez Muebles & Hogar",
      description: "Lo sentimos, el artículo que buscas no existe o ha sido removido.",
    }
  }

  return {
    title: `${post.title} | Blog | Mendez Muebles & Hogar`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPageClient params={params} post={post} />
}

