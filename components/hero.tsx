"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Slides para el carrusel del hero con estilo minimalista
const heroSlides = [
  {
    id: 1,
    title: "Diseño y Confort",
    subtitle: "Creando espacios únicos para tu hogar",
    image: "/hero/hero-slide-1.jpeg",
    cta: {
      primary: {
        text: "Explorar Muebles",
        link: "/categorias/muebles",
      },
      secondary: {
        text: "Ver Ofertas",
        link: "/tienda",
      },
    },
  },
  {
    id: 2,
    title: "Electrodomésticos",
    subtitle: "Tecnología y calidad para tu día a día",
    image: "/hero/hero-slide-2.jpeg",
    cta: {
      primary: {
        text: "Ver Electrodomésticos",
        link: "/categorias/electro",
      },
      secondary: {
        text: "Contactar",
        link: "/contacto",
      },
    },
  },
  {
    id: 3,
    title: "Transforma tu Hogar",
    subtitle: "Encuentra todo lo que necesitas en un solo lugar",
    image: "/hero/hero-slide-3.png",
    cta: {
      primary: {
        text: "Descubrir",
        link: "/tienda",
      },
      secondary: {
        text: "Conocer Más",
        link: "/nosotros",
      },
    },
  },
]

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
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
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

  const slide = heroSlides[currentSlide]

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
          key={slide.id}
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
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32 text-white max-w-full">
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
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">{slide.title}</h1>
          <p className="font-inter text-lg md:text-xl opacity-80 max-w-lg">{slide.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="font-inter bg-white text-black hover:bg-white/90 border-0 w-full sm:w-auto"
            >
              <Link href={slide.cta.primary.link}>{slide.cta.primary.text}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-inter bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto"
            >
              <Link href={slide.cta.secondary.link}>{slide.cta.secondary.text}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center gap-3">
        {heroSlides.map((_, index) => (
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

