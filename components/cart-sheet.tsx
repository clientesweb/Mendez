"use client"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-lustria text-xl">Tu Carrito</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-12">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="font-lustria text-lg font-medium mb-2">Tu carrito está vacío</h3>
            <p className="text-muted-foreground text-center mb-6">
              Parece que aún no has agregado productos a tu carrito.
            </p>
            <Button asChild onClick={() => onOpenChange(false)}>
              <Link href="/tienda">Explorar productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {items.map((item) => {
                const price = item.price - (item.price * item.discount) / 100
                const totalPrice = price * item.quantity

                return (
                  <div key={item.id} className="flex py-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-lustria text-base font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Reducir cantidad</span>
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Aumentar cantidad</span>
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{formatPrice(totalPrice)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Eliminar</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4 pt-4">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Envío</span>
                  <span>A coordinar</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <SheetFooter className="flex flex-col gap-2 sm:flex-col">
                <Button className="w-full" asChild>
                  <Link href="/checkout">Finalizar compra</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                  Seguir comprando
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

