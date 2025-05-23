"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingCart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { products } from "@/lib/products/index"
import { motion } from "framer-motion"
import { formatPrice } from "@/lib/utils"
import { getHeroProductIds } from "@/components/hero"

// Función para obtener los productos destacados, excluyendo los que aparecen en el hero
export const getFeaturedProducts = (count = 10) => {
  // Obtenemos los IDs de los productos que aparecen en el hero
  const heroProductIds = getHeroProductIds()

  // Primero obtenemos los productos marcados como destacados que no están en el hero
  const featured = products.filter((product) => product.featured && !heroProductIds.includes(product.id))

  // Si hay menos de 'count' productos destacados, agregamos otros productos hasta llegar a 'count'
  if (featured.length < count) {
    const nonFeatured = products
      .filter((product) => !product.featured && !heroProductIds.includes(product.id))
      .slice(0, count - featured.length)

    return [...featured, ...nonFeatured]
  }

  // Si hay más de 'count' productos destacados, tomamos solo los primeros 'count'
  return featured.slice(0, count)
}

// Exportamos los IDs de los productos destacados para que otros componentes puedan evitar duplicarlos
export const getFeaturedProductIds = () => {
  return getFeaturedProducts().map((product) => product.id)
}

export function FeaturedProducts() {
  const { addItem } = useCart()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mostrar hasta 10 productos destacados
  const displayedProducts = getFeaturedProducts(10)

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
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
                          <h3 className="font-playfair text-base font-medium line-clamp-2 h-12">{product.name}</h3>
                        </Link>
                        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>

                        {/* Estrellas de valoración (simuladas) */}
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>

                        <div className="flex items-center gap-2 mt-auto">
                          <span className="font-medium text-base">{formatPrice(discountedPrice)}</span>
                          {product.discount > 0 && (
                            <span className="text-xs text-muted-foreground line-through">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 w-full text-xs"
                          onClick={() => addItem(product)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Agregar al carrito
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="flex justify-center mt-10">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-none">
              <Link href="/tienda">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

