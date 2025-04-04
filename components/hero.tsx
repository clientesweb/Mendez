"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/types"

// Definir los productos específicos para el hero
const heroProducts = [
  {
    id: "placard-3-puertas-2-cajones",
    name: "Placard 3 Puertas 2 Cajones Ropero Interior Sin Pintar",
    description:
      "El Placard Super Express de 3 puertas y 2 cajones combina funcionalidad y diseño para maximizar el espacio de almacenamiento en tu dormitorio. Cuenta con un amplio espacio de colgado junto con estantes especialmente diseñados para organizar tu ropa de la manera más conveniente.",
    price: 164705,
    discount: 15,
    image: "/hero/placard-blanco.jpeg",
    category: "Muebles",
  },
  {
    id: "despensero-2-puertas",
    name: "Mueble de cocina Despensero 2 Puertas",
    description:
      "Despensero de cocina con interior revestido de 1.50 metros de altura, ideal para organizar y almacenar alimentos, vajilla y utensilios. Fabricado en aglomerado revestido color chocolate con puertas en tono oscuro que contrastan con el interior blanco.",
    price: 105881,
    discount: 15,
    image: "/hero/despensero-marron.jpeg",
    category: "Muebles",
  },
  {
    id: "estufa-garrafera-torpedo-950",
    name: "Estufa Garrafera Torpedo 950 Negro",
    description:
      "Estufa garrafera de alta eficiencia con potencia de 1900/3800 calorías por hora, ideal para calentar ambientes de manera rápida y segura. Cuenta con válvula de seguridad, analizador atmosférico y encendido piezoeléctrico que garantizan un funcionamiento seguro.",
    price: 211764,
    discount: 15,
    image: "/hero/estufa-torpedo.jpeg",
    category: "Electro",
  },
]

// Agregar esta constante con los IDs de los productos del hero
export const heroProductIds = ["placard-3-puertas-2-cajones", "despensero-2-puertas", "estufa-garrafera-torpedo-950"]

// Modificar la función para que devuelva los productos del hero
export function getTopDiscountedProducts(count: number): Product[] {
  // Devolvemos los productos del hero convertidos al tipo Product
  return heroProducts as unknown as Product[]
}

// Agregar esta función para obtener los IDs de los productos del hero
export function getHeroProductIds(): string[] {
  return heroProductIds
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      nextSlide()
    }, 6000)
  }

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length)
  }

  // Auto-avance del carrusel
  useEffect(() => {
    startSlideTimer()
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  // Reiniciar el temporizador cuando cambia manualmente
  useEffect(() => {
    startSlideTimer()
  }, [currentSlide])

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  // Obtener el producto actual
  const product = heroProducts[currentSlide]
  const discountedPrice = product ? product.price - (product.price * product.discount) / 100 : 0

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] flex items-center overflow-hidden bg-black max-w-[100vw]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          onAnimationComplete={handleAnimationComplete}
          className="absolute inset-0 z-0"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32 text-white max-w-full">
        {product && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl space-y-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-[1px] bg-white/50"
            />
            <Badge className="bg-primary text-primary-foreground text-sm">{product.discount}% DESCUENTO</Badge>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">{product.name}</h1>
            <div className="flex items-center gap-3 text-xl md:text-2xl">
              <span className="font-bold">{formatPrice(discountedPrice)}</span>
              <span className="text-base md:text-lg text-white/70 line-through">{formatPrice(product.price)}</span>
            </div>
            <p className="font-inter text-lg md:text-xl opacity-80 max-w-lg">{product.description.split(".")[0]}.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="font-inter bg-white text-black hover:bg-white/90 border-0 w-full sm:w-auto"
              >
                <Link href={`/producto/${product.id}`}>Ver producto</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-inter bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href={`/categorias/${product.category.toLowerCase()}`}>
                  Ver más {product.category.toLowerCase()}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Controles de navegación */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-black/30 text-white hover:bg-black/50 h-10 w-10"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-black/30 text-white hover:bg-black/50 h-10 w-10"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center gap-3">
        {heroProducts.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-[2px] rounded-none transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

