"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { featuredProducts } from "@/lib/products/index"
import { motion } from "framer-motion"

export function FeaturedProducts() {
  const { addItem } = useCart()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mostrar solo los primeros 4 productos destacados
  const displayedProducts = featuredProducts.slice(0, 4)

  // Intersection Observer para animación al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const container = containerRef.current
    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 overflow-hidden" ref={containerRef}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium mb-3">Productos Destacados</h2>
            <div className="h-[1px] bg-primary/30 w-[60px] mb-4" />
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
              Nuestra selección de productos más populares, diseñados para transformar cualquier espacio.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/tienda"
              className="text-primary font-medium hover:underline inline-flex items-center group text-sm md:text-base"
            >
              Ver todos los productos
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            {displayedProducts.map((product) => {
              const discountedPrice = product.price - (product.price * product.discount) / 100

              return (
                <motion.div key={product.id} variants={item} className="overflow-hidden">
                  <Card className="group overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.discount > 0 && (
                          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                            -{product.discount}%
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <Button
                            size="icon"
                            className="rounded-full bg-white text-primary hover:bg-white/90"
                            onClick={() => addItem(product)}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Agregar al carrito</span>
                          </Button>
                          <Button size="icon" className="rounded-full bg-white text-primary hover:bg-white/90" asChild>
                            <Link href={`/producto/${product.id}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver producto</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <Link
                          href={`/producto/${product.id}`}
                          className="block group-hover:text-primary transition-colors"
                        >
                          <h3 className="font-playfair text-base md:text-lg font-medium">{product.name}</h3>
                        </Link>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{product.category}</p>
                        <div className="flex items-center gap-2 mt-auto">
                          <span className="font-medium text-base md:text-lg">${discountedPrice.toLocaleString()}</span>
                          {product.discount > 0 && (
                            <span className="text-xs md:text-sm text-muted-foreground line-through">
                              ${product.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="flex justify-center mt-8 md:mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-none">
              <Link href="/tienda">Ver más productos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

