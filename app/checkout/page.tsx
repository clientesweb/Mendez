"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, Truck, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import { sendCheckoutToWhatsApp } from "@/lib/whatsapp"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    paymentMethod: "transferencia",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos a tu carrito antes de realizar el pedido.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await sendCheckoutToWhatsApp(items, subtotal, formData)

      toast({
        title: "¡Pedido enviado!",
        description: "Hemos recibido tu pedido. Te contactaremos pronto para confirmar los detalles.",
      })

      clearCart()
      router.push("/checkout/success")
    } catch (error) {
      console.error("Error al procesar el pedido:", error)
      toast({
        title: "Error al procesar el pedido",
        description: "Ha ocurrido un error al enviar tu pedido. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const shipping = 1500 // Costo de envío fijo
  const total = subtotal + shipping

  return (
    <main className="py-10">
      <div className="container px-4">
        <div className="mb-8">
          <Link href="/tienda" className="flex items-center text-muted-foreground hover:text-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver a la tienda
          </Link>
          <h1 className="font-lustria text-3xl font-bold mt-4 mb-2">Finalizar compra</h1>
          <p className="text-muted-foreground">Complete sus datos para finalizar el pedido</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground" />
            <h2 className="font-lustria text-xl font-medium">Tu carrito está vacío</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Parece que aún no has agregado productos a tu carrito. Explora nuestra tienda para encontrar lo que
              necesitas.
            </p>
            <Button asChild className="mt-4">
              <Link href="/tienda">Ver productos</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-lustria text-xl font-bold">Información personal</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-lustria text-xl font-bold">Dirección de envío</h2>
                    <Truck className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Código Postal</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="province">Provincia</Label>
                        <Input
                          id="province"
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-lustria text-xl font-bold">Método de pago</h2>
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="transferencia" id="transferencia" />
                      <Label htmlFor="transferencia" className="flex-1 cursor-pointer">
                        Transferencia bancaria
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="efectivo" id="efectivo" />
                      <Label htmlFor="efectivo" className="flex-1 cursor-pointer">
                        Efectivo al recibir
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="mercadopago" id="mercadopago" />
                      <Label htmlFor="mercadopago" className="flex-1 cursor-pointer">
                        MercadoPago
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Instrucciones especiales para la entrega, preferencias, etc."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="lg:hidden">
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <h3 className="font-lustria text-lg font-bold">Resumen del pedido</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Envío</span>
                        <span>{formatPrice(shipping)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Procesando..." : "Confirmar pedido"}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-lg p-6 sticky top-24">
                <h3 className="font-lustria text-lg font-bold mb-4">Resumen del pedido</h3>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {items.map((item) => {
                    const price = item.price - (item.price * item.discount) / 100
                    return (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                          {item.quantity > 1 && (
                            <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                              {item.quantity}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-muted-foreground text-xs">{item.category}</p>
                          <p className="text-sm mt-1">{formatPrice(price)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

