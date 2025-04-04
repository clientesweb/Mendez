"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface CategorySliderProps {
  title: string
  categorySlug: string
  products: Product[]
}

export function CategorySlider({ title, categorySlug, products }: CategorySliderProps) {
  const { addItem } = useCart()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Función para desplazar el slider
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    const scrollAmount = clientWidth * 0.8

    if (direction === "left") {
      sliderRef.current.scrollTo({
        left: scrollLeft - scrollAmount,
        behavior: "smooth",
      })
    } else {
      sliderRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Función para actualizar la visibilidad de las flechas
  const handleScroll = () => {
    if (!sliderRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px de margen
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="relative py-8 md:py-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="font-playfair text-2xl md:text-3xl font-medium mb-2">{title}</h2>
          <div className="h-[1px] bg-primary/30 w-[60px]" />
        </div>
        <Link href={`/categorias/${categorySlug}`} className="text-primary hover:underline text-sm font-medium">
          Ver todos
        </Link>
      </div>

      {/* Controles de navegación */}
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 z-10 rounded-full bg-white/80 shadow-md hover:bg-white -translate-x-1/2 transform -translate-y-8"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>
      )}

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 z-10 rounded-full bg-white/80 shadow-md hover:bg-white translate-x-1/2 transform -translate-y-8"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      )}

      {/* Slider de productos */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4"
        onScroll={handleScroll}
      >
        {products.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100

          return (
            <div key={product.id} className="flex-shrink-0 w-[280px] md:w-[300px]">
              <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
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
                    <Link href={`/producto/${product.id}`} className="block group-hover:text-primary transition-colors">
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
                        <span className="text-xs text-muted-foreground line-through">{formatPrice(product.price)}</span>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

