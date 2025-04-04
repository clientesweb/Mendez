"use client"

import { useState } from "react"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }

    // Mostrar notificación de producto agregado
    toast({
      title: "Producto agregado al carrito",
      description: `${quantity} x ${product.name}`,
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

    setQuantity(1)
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center">
        <div className="flex items-center border rounded-l-md">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={decreaseQuantity}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Reducir cantidad</span>
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={increaseQuantity}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Aumentar cantidad</span>
          </Button>
        </div>
        <Button className="flex-1 rounded-l-none" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}

