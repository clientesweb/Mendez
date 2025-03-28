"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "María Fernández",
    role: "Diseñadora de Interiores",
    content:
      "Los muebles de Mendez son excepcionales. La calidad y el diseño superan cualquier expectativa. He recomendado sus productos a todos mis clientes y siempre quedan encantados.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Arquitecto",
    content:
      "Trabajar con Mendez Muebles ha sido una experiencia fantástica. Su atención al detalle y la calidad de sus productos son incomparables. Definitivamente seguiré colaborando con ellos en futuros proyectos.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Laura Gómez",
    role: "Cliente",
    content:
      "Compré un sofá y una mesa de comedor, y estoy encantada con ambos. La entrega fue puntual y el servicio al cliente excelente. Los muebles son hermosos y de gran calidad.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Javier Martínez",
    role: "Cliente",
    content:
      "Renovamos toda nuestra sala de estar con muebles de Mendez y ha quedado espectacular. La calidad es excepcional y el diseño atemporal. Totalmente recomendable.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const testimonialsPerPage = 2
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const containerRef = useRef<HTMLDivElement>(null)

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  const nextPage = () => {
    setDirection(1)
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setDirection(-1)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Intersection Observer para animación al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const container = containerRef.current
    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 overflow-hidden" ref={containerRef}>
      <div className="container px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-lustria text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para transformar sus espacios
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {displayedTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 shadow-sm bg-secondary/50 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />

                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-lustria text-lg font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Testimonio anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Testimonio siguiente</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

