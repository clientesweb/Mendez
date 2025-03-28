"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "María Fernández",
    location: "Villa del Dique, Córdoba",
    content:
      "Los muebles de Mendez son excepcionales. La calidad y el diseño superan cualquier expectativa. He recomendado sus productos a todos mis clientes y siempre quedan encantados.",
    rating: 5,
    date: "Hace 2 semanas",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Embalse, Córdoba",
    content:
      "Trabajar con Mendez Muebles ha sido una experiencia fantástica. Su atención al detalle y la calidad de sus productos son incomparables. Definitivamente seguiré colaborando con ellos en futuros proyectos.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Laura Gómez",
    location: "Villa Rumipal, Córdoba",
    content:
      "Compré un sofá y una mesa de comedor, y estoy encantada con ambos. La entrega fue puntual y el servicio al cliente excelente. Los muebles son hermosos y de gran calidad.",
    rating: 4,
    date: "Hace 3 meses",
  },
  {
    id: 4,
    name: "Javier Martínez",
    location: "Santa Rosa de Calamuchita, Córdoba",
    content:
      "Renovamos toda nuestra sala de estar con muebles de Mendez y ha quedado espectacular. La calidad es excepcional y el diseño atemporal. Totalmente recomendable.",
    rating: 5,
    date: "Hace 2 meses",
  },
  {
    id: 5,
    name: "Ana Pérez",
    location: "La Cruz, Córdoba",
    content:
      "Excelente atención y asesoramiento. Me ayudaron a elegir los muebles perfectos para mi nuevo departamento. La relación calidad-precio es inmejorable.",
    rating: 5,
    date: "Hace 1 semana",
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    location: "Río Tercero, Córdoba",
    content:
      "Compré una cama y dos mesas de luz. Todo llegó en perfectas condiciones y el armado fue muy sencillo. Muy satisfecho con mi compra.",
    rating: 4,
    date: "Hace 2 meses",
  },
  {
    id: 7,
    name: "Lucía Morales",
    location: "Almafuerte, Córdoba",
    content:
      "Encontré exactamente lo que buscaba para mi cocina. El mueble es de excelente calidad y el precio muy accesible. El envío fue rápido y sin problemas.",
    rating: 5,
    date: "Hace 3 semanas",
  },
  {
    id: 8,
    name: "Miguel Torres",
    location: "Villa General Belgrano, Córdoba",
    content:
      "Muy buena experiencia de compra. El personal es amable y conocedor. Los productos son de primera calidad y los precios justos. Volveré a comprar sin duda.",
    rating: 5,
    date: "Hace 1 mes",
  },
]

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const testimonialsPerPage = 3
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

  // Calcular la calificación promedio
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length
  const totalReviews = testimonials.length

  // Generar colores de avatar basados en el nombre
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ]

    // Usar la suma de los códigos de caracteres del nombre para seleccionar un color
    const charSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    return colors[charSum % colors.length]
  }

  return (
    <section className="py-20 overflow-hidden bg-secondary/30" ref={containerRef}>
      <div className="container px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Descubre por qué nuestros clientes confían en nosotros para transformar sus espacios
          </p>

          {/* Resumen de calificaciones estilo Google */}
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold">{averageRating.toFixed(1)}</span>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-500 fill-yellow-500"
                          : i < averageRating
                            ? "text-yellow-500 fill-yellow-500 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{totalReviews} reseñas</span>
              </div>
            </div>
          </div>
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {displayedTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border shadow-sm bg-white overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getAvatarColor(testimonial.name)}`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="font-medium text-base">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                          <span className="text-xs text-muted-foreground">•</span>
                          <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-gray-700">{testimonial.content}</p>
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
              className="rounded-full h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Testimonios anteriores</span>
            </Button>
            <div className="flex items-center gap-2 px-4">
              <span className="text-sm font-medium">{currentPage + 1}</span>
              <span className="text-sm text-muted-foreground">de</span>
              <span className="text-sm font-medium">{totalPages}</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full h-10 w-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Testimonios siguientes</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

