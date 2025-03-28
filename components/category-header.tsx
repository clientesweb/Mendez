import Image from "next/image"

interface CategoryHeaderProps {
  title: string
  description: string
  image: string
}

export function CategoryHeader({ title, description, image }: CategoryHeaderProps) {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] mb-8 md:mb-12 overflow-hidden rounded-xl">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h1>
        <p className="text-white/90 max-w-xl text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

