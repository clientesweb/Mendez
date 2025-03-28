import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "compact"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isCompact = variant === "compact"

  return (
    <article className={`group overflow-hidden ${isCompact ? "flex gap-4" : "flex flex-col"}`}>
      <Link
        href={`/blog/${post.slug}`}
        className={`block overflow-hidden ${isCompact ? "w-1/3 flex-shrink-0" : "w-full aspect-[16/9]"} relative`}
      >
        <Image
          src={post.coverImage || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className={`flex flex-col ${isCompact ? "flex-1" : "p-5"}`}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <span className="bg-primary/10 text-primary px-2 py-1">{post.category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className={`font-playfair ${isCompact ? "text-lg" : "text-xl md:text-2xl"} font-medium mb-2`}>
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>

        {!isCompact && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

