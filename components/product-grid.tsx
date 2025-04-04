"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"
import { ShoppingCart, Eye, Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: Product) => {
    addItem(product)

    // Mostrar notificación de producto agregado
    toast({
      title: "Producto agregado al carrito",
      description: `1 x ${product.name}`,
      action: (
        <div className="h-16 w-16 relative mr-2 flex-shrink-0">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      ),
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const discountedPrice = product.price - (product.price * product.discount) / 100

        return (
          <Card
            key={product.id}
            className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardContent className="p-0">
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
                    onClick={() => handleAddToCart(product)}
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
              <div className="p-4">
                <Link href={`/producto/${product.id}`} className="block">
                  <h3 className="font-lustria text-lg font-medium hover:text-primary transition-colors line-clamp-2 h-12">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>

                {/* Estrellas de valoración (simuladas) */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-lg">{formatPrice(discountedPrice)}</span>
                  {product.discount > 0 && (
                    <span className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button variant="outline" className="w-full" onClick={() => handleAddToCart(product)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Agregar al carrito
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

