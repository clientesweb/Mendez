"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "todos",
    name: "Todos",
    description: "Todos los productos",
    image: "/logo.png",
    href: "/tienda",
  },
  {
    id: "muebles",
    name: "Muebles",
    description: "Sofás, mesas, sillas y más",
    image: "/categories/muebles.jpeg",
    href: "/categorias/muebles",
  },
  {
    id: "electro",
    name: "Electro",
    description: "Electrodomésticos para tu hogar",
    image: "/categories/electro.jpeg",
    href: "/categorias/electro",
  },
  {
    id: "bazar",
    name: "Bazar",
    description: "Artículos para cocina y decoración",
    image: "/categories/bazar.jpeg",
    href: "/categorias/bazar",
  },
  {
    id: "colchones",
    name: "Colchones",
    description: "Colchones y sommiers de calidad",
    image: "/categories/colchones.jpeg",
    href: "/categorias/colchones",
  },
]

interface CategoryFilterProps {
  activeCategory?: string
}

export function CategoryFilter({ activeCategory = "todos" }: CategoryFilterProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="w-full mb-8 md:mb-12">
      <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-3 md:gap-4 md:justify-center">
        {categories.map((category) => {
          const isActive = category.id === activeCategory
          return (
            <Link
              key={category.id}
              href={category.href}
              className={cn(
                "flex flex-col items-center min-w-[100px] md:min-w-[120px] p-3 rounded-lg transition-all relative group",
                isActive ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-foreground",
              )}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mb-2 border-2 border-background">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <span className="text-sm font-medium">{category.name}</span>

              {hoveredCategory === category.id && !isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-0 right-0 bg-black text-white text-xs p-2 rounded-md z-10 text-center mx-auto w-max whitespace-nowrap"
                >
                  {category.description}
                </motion.div>
              )}

              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

