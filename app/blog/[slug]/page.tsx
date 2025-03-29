import { getBlogPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import { BlogPostPageClient } from "./BlogPostPageClient"
import { siteConfig } from "@/lib/metadata"

// Metadatos estáticos para la página de blog
export const metadata = {
  title: "Artículo del Blog",
  description: "Descubre consejos, tendencias y guías sobre decoración, muebles y diseño de interiores.",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
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

