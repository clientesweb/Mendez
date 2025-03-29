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

  // Asegurarse de que la URL de la imagen sea absoluta
  const coverImage = post.coverImage.startsWith("http") ? post.coverImage : `${siteConfig.url}${post.coverImage}`

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
          url: coverImage,
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
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Asegurarse de que la URL de la imagen sea absoluta
  const coverImage = post.coverImage.startsWith("http") ? post.coverImage : `${siteConfig.url}${post.coverImage}`

  // Datos estructurados para el artículo
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    headline: post.title,
    image: coverImage,
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
  }

  return (
    <>
      {/* Script para datos estructurados */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPostPageClient params={params} post={post} />
    </>
  )
}

