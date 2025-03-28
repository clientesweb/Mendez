import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <main className="py-16">
      <div className="container px-4 max-w-2xl mx-auto text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="font-lustria text-3xl font-bold mb-4">¡Pedido realizado con éxito!</h1>
        <p className="text-muted-foreground mb-8">
          Gracias por tu compra. Hemos recibido tu pedido y te contactaremos pronto para confirmar los detalles. También
          recibirás un mensaje en WhatsApp con la información de tu pedido.
        </p>

        <div className="bg-secondary rounded-lg p-6 mb-8">
          <h2 className="font-lustria text-xl font-bold mb-4">¿Qué sigue?</h2>
          <ol className="text-left space-y-3">
            <li className="flex gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <p>Recibirás un mensaje de WhatsApp con los detalles de tu pedido.</p>
            </li>
            <li className="flex gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                2
              </span>
              <p>Nuestro equipo verificará la disponibilidad de los productos.</p>
            </li>
            <li className="flex gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                3
              </span>
              <p>Te contactaremos para coordinar el pago y la entrega.</p>
            </li>
            <li className="flex gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                4
              </span>
              <p>¡Disfruta de tus nuevos muebles!</p>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tienda">Seguir comprando</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

