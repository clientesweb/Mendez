"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const { addItem } = useCart()

  if (products.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="font-lustria text-2xl font-bold mb-6">Productos relacionados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount) / 100

          return (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <Link href={`/producto/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 right-2 bg-primary">-{product.discount}%</Badge>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/producto/${product.id}`} className="block">
                    <h3 className="font-lustria text-lg font-medium hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-lg">{formatPrice(discountedPrice)}</span>
                    {product.discount > 0 && (
                      <span className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" className="w-full" onClick={() => addItem(product)}>
                  Agregar al carrito
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

