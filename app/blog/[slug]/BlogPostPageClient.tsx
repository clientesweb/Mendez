"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ChevronLeft, Facebook, Twitter, Linkedin, Mail, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { Button } from "@/components/ui/button"
import { getRelatedPosts } from "@/lib/blog"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { formatDate } from "@/lib/utils"
import { motion } from "framer-motion"

interface BlogPostPageClientProps {
  params: {
    slug: string
  }
  post: any
}

export function BlogPostPageClient({ params, post }: BlogPostPageClientProps) {
  const [showShareButtons, setShowShareButtons] = useState(false)

  if (!post) {
    return null
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(params.slug, 2)

  // Función para formatear el contenido del blog
  const formatContent = (content: string) => {
    // Dividir el contenido en párrafos
    const paragraphs = content.split("\n\n")

    return paragraphs.map((paragraph, index) => {
      // Detectar encabezados
      if (paragraph.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
            {paragraph.substring(2)}
          </h1>
        )
      } else if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
            {paragraph.substring(3)}
          </h2>
        )
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-5 mb-2">
            {paragraph.substring(4)}
          </h3>
        )
      }

      // Detectar listas
      if (paragraph.includes("\n- ")) {
        const listItems = paragraph.split("\n- ")
        const title = listItems.shift()

        return (
          <div key={index} className="my-4">
            {title && title !== "" && <p className="mb-2">{title}</p>}
            <ul className="list-disc pl-6 space-y-1">
              {listItems.map((item, i) => (
                <li key={i} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      }

      // Párrafos normales
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  // Compartir en redes sociales
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = post.title

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
      "_blank",
    )
  }

  const shareByEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`Te recomiendo este artículo: ${shareUrl}`)}`,
      "_blank",
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver al blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {/* Article Header */}
                <div className="mb-8 non-prose">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1">{post.category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min de lectura</span>
                      </div>
                    </div>

                    <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mb-6">{post.title}</h1>

                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                          {post.author.avatar ? (
                            <Image
                              src={post.author.avatar || "/placeholder.svg?height=100&width=100"}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-primary font-bold">{post.author.name.charAt(0)}</span>
                          )}
                        </div>
                        <span className="font-medium">{post.author.name}</span>
                      </div>

                      <div className="relative">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => setShowShareButtons(!showShareButtons)}
                        >
                          <Share2 className="h-4 w-4" />
                          Compartir
                        </Button>

                        {showShareButtons && (
                          <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 z-10 flex gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full"
                              onClick={shareOnFacebook}
                            >
                              <Facebook className="h-4 w-4" />
                              <span className="sr-only">Compartir en Facebook</span>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full"
                              onClick={shareOnTwitter}
                            >
                              <Twitter className="h-4 w-4" />
                              <span className="sr-only">Compartir en Twitter</span>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full"
                              onClick={shareOnLinkedIn}
                            >
                              <Linkedin className="h-4 w-4" />
                              <span className="sr-only">Compartir en LinkedIn</span>
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full" onClick={shareByEmail}>
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">Compartir por email</span>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Article Content */}
                <div className="mb-8 leading-relaxed">{formatContent(post.content)}</div>

                {/* Article Footer */}
                <div className="mt-12 pt-6 border-t non-prose">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag}`}
                          className="bg-secondary px-3 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h2 className="font-playfair text-2xl font-medium mb-6">Artículos relacionados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

