import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-0">
            <Image src="/banner-otono.jpeg" alt="Promoción especial de otoño" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="text-white space-y-4">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-2">
                Colección de otoño
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                Renueva tu hogar con nuestra colección de otoño
              </h2>
              <p className="opacity-90 max-w-md">
                Descubre nuestra selección de muebles y decoración con tonos cálidos y texturas acogedoras para crear un
                ambiente perfecto esta temporada.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" variant="secondary" className="font-medium">
                  <Link href="/tienda">Ver colección</Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="aspect-square max-w-xs mx-auto relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Colección de otoño"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

