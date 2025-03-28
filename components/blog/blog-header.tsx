import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
          <form className="flex gap-2 max-w-md">
            <Input type="search" placeholder="Buscar artículos..." className="w-full md:w-[200px] lg:w-[300px]" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Buscar</span>
            </Button>
          </form>
        </div>
      </div>

      <div className="h-[1px] bg-border w-full" />
    </div>
  )
}

