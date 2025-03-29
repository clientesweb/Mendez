import { BlogSearch } from "@/components/blog/blog-search"

interface BlogHeaderProps {
  title: string
  description?: string
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <div className="mb-10 md:mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mb-2">{title}</h1>
          {description && <p className="text-muted-foreground max-w-2xl">{description}</p>}
        </div>

        <div className="w-full md:w-auto">
          <BlogSearch className="max-w-md" />
        </div>
      </div>

      <div className="h-[1px] bg-border w-full" />
    </div>
  )
}

