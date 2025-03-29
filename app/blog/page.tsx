import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { getBlogPosts } from "@/lib/blog"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Blog | Consejos y tendencias para tu hogar",
  description:
    "Descubre consejos, tendencias y guías sobre decoración, muebles y diseño de interiores en nuestro blog.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const posts = getBlogPosts()

  // Filter posts based on search parameters
  let filteredPosts = [...posts]

  // Filter by search term
  const searchTerm = typeof searchParams.search === "string" ? searchParams.search.toLowerCase() : ""
  if (searchTerm) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm),
    )
  }

  // Filter by category
  const category = typeof searchParams.category === "string" ? searchParams.category : ""
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category)
  }

  // Filter by tag
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : ""
  if (tag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag))
  }

  // Featured post is the most recent one from filtered posts
  const featuredPost =
    filteredPosts.length > 0
      ? [...filteredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
      : null

  // Other posts excluding the featured one
  const otherPosts = featuredPost ? filteredPosts.filter((post) => post.id !== featuredPost.id) : filteredPosts

  // Determine the title based on filters
  let headerTitle = "Nuestro Blog"
  let headerDescription = "Descubre consejos, tendencias y guías sobre decoración, muebles y diseño de interiores."

  if (searchTerm) {
    headerTitle = `Resultados para "${searchTerm}"`
    headerDescription = `Artículos relacionados con tu búsqueda.`
  } else if (category) {
    headerTitle = `Categoría: ${category}`
    headerDescription = `Artículos en la categoría ${category}.`
  } else if (tag) {
    headerTitle = `Etiqueta: ${tag}`
    headerDescription = `Artículos con la etiqueta ${tag}.`
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <BlogHeader title={headerTitle} description={headerDescription} />

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-2">No se encontraron artículos</h2>
              <p className="text-muted-foreground">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <article className="group overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={featuredPost.coverImage || "/placeholder.svg?height=600&width=800"}
                          alt={featuredPost.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span className="bg-primary/10 text-primary px-2 py-1">{featuredPost.category}</span>
                          <time dateTime={featuredPost.date}>
                            {new Date(featuredPost.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>

                        <a href={`/blog/${featuredPost.slug}`} className="group-hover:text-primary transition-colors">
                          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                            {featuredPost.title}
                          </h2>
                        </a>

                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={featuredPost.author.avatar || "/placeholder.svg?height=100&width=100"}
                                alt={featuredPost.author.name}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <span className="font-medium">{featuredPost.author.name}</span>
                          </div>

                          <span className="text-muted-foreground text-sm">{featuredPost.readTime} min de lectura</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* All Posts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {otherPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <BlogSidebar />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

