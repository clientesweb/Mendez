"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "muebles",
    name: "Muebles",
    description: "Sofás, mesas, sillas y más para tu hogar",
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

export function Categories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4">Explora por Categorías</h2>
          <div className="h-[1px] bg-primary/30 w-[60px] mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra los productos perfectos para cada espacio de tu hogar
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item} className="overflow-hidden">
              <Link href={category.href} className="block h-full">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-0 group">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-48 sm:h-56 md:h-64 w-full">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full">
                        <h3 className="font-playfair text-xl md:text-2xl font-medium mb-1 group-hover:text-white transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-xs md:text-sm opacity-90 mb-2 md:mb-4">{category.description}</p>
                        <div className="flex items-center text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          <span>Ver productos</span>
                          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

