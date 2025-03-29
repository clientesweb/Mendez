import type { Metadata } from "next"
import { getBlogPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import { BlogPostPageClient } from "./BlogPostPageClient"
import { siteConfig } from "@/lib/metadata"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
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
    alternates: {
      canonical: `${siteConfig.url}/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Blog | Mendez Muebles & Hogar`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${params.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    // Datos estructurados para artículo de blog
    other: {
      article: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.coverImage,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Organization",
          name: post.author.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: "Mendez Muebles & Hogar",
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        description: post.excerpt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${params.slug}`,
        },
      }),
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPageClient params={params} post={post} />
}

