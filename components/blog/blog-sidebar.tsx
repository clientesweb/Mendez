import Link from "next/link"
import { Bookmark, Calendar } from "lucide-react"
import { BlogSearch } from "@/components/blog/blog-search"
import { getBlogPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export function BlogSidebar() {
  const posts = getBlogPosts()

  // Get unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  // Get unique tags
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  // Get recent posts
  const recentPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="p-6 bg-secondary/50">
        <h3 className="font-playfair text-lg font-medium mb-4">Buscar</h3>
        <BlogSearch buttonVariant="outline" className="bg-background" />
      </div>

      {/* Categories */}
      <div className="p-6 bg-secondary/50">
        <h3 className="font-playfair text-lg font-medium mb-4">Categorías</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="p-6 bg-secondary/50">
        <h3 className="font-playfair text-lg font-medium mb-4">Artículos recientes</h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                <h4 className="font-medium mb-1 line-clamp-2">{post.title}</h4>
              </Link>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Bookmark className="h-3 w-3" />
                  <span>{post.category}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="p-6 bg-secondary/50">
        <h3 className="font-playfair text-lg font-medium mb-4">Etiquetas</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="bg-background px-3 py-1 text-xs text-muted-foreground hover:text-primary hover:bg-background/80 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

