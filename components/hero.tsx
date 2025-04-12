"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import type { Product } from "@/lib/types"
import { useMobile } from "@/hooks/use-mobile"

// Agregar esta constante con los IDs de los productos del hero
export const heroProductIds = ["placard-3-puertas-2-cajones", "despensero-2-puertas", "estufa-garrafera-torpedo-950"]

// Modificar la función para que devuelva los productos del hero
export function getTopDiscountedProducts(count: number): Product[] {
  return []
}

// Agregar esta función para obtener los IDs de los productos del hero
export function getHeroProductIds(): string[] {
  return heroProductIds
}

export function Hero() {
  const isMobile = useMobile()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Banners para dispositivos móviles
  const mobileBanners = ["/hero/banner-slide-1.png", "/hero/banner-slide-2.png"]

  // Efecto para el autoplay (solo en móvil)
  useEffect(() => {
    if (!autoplay || !isMobile) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === mobileBanners.length - 1 ? 0 : prev + 1))
    }, 5000) // Cambiar cada 5 segundos

    return () => clearInterval(interval)
  }, [autoplay, isMobile, mobileBanners.length])

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Link href="/tienda" className="block w-full relative">
        <div className="relative w-full">
          {/* Versión móvil del banner con slider */}
          {isMobile ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
              >
                <div className="relative w-full" style={{ height: "auto" }}>
                  <Image
                    src={mobileBanners[currentSlide] || "/placeholder.svg"}
                    alt="Super Oferta - 15% OFF en transferencia - Mendez Muebles & Hogar"
                    width={600}
                    height={800}
                    priority
                    className="w-full h-auto"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Versión desktop del banner (sin slider) */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full"
            >
              <div className="relative w-full" style={{ height: "auto" }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-mendez-mueble-PkFOeM1eRmcLxoG3ZqwgQ894CGGkmX.png"
                  alt="Super Oferta - 15% OFF en transferencia - Mendez Muebles & Hogar"
                  width={1400}
                  height={400}
                  priority
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </div>
            </motion.div>
          )}

          {/* Overlay de hover para indicar que es clickable */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
        </div>
      </Link>

      {/* Indicadores de diapositivas (solo en móvil) */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {mobileBanners.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                setCurrentSlide(index)
                setAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-4" : "bg-white/70"
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
