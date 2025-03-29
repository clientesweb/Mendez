import { getBlogPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import { BlogPostPageClient } from "./BlogPostPageClient"

// Eliminamos completamente la función generateMetadata para simplificar

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPageClient params={params} post={post} />
}

