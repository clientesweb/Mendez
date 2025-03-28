import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Clock, Tag, ChevronLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { Button } from "@/components/ui/button"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { formatDate } from "@/lib/utils"

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

  // Get related posts
  const relatedPosts = getRelatedPosts(params.slug, 2)

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

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar || "/placeholder.svg?height=100&width=100"}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{post.author.name}</span>
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
                </div>

                {/* Article Content */}
                <div className="mb-8" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />

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

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Compartir:</span>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Compartir en Facebook</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Compartir en Twitter</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">Compartir en LinkedIn</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Compartir por email</span>
                        </Button>
                      </div>
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

