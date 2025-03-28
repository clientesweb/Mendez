"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Store, Home, Truck, Award } from "lucide-react"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden rounded-2xl bg-secondary/30 p-8 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md max-h-md">
              <Image src="/logo.png" alt="Sobre Mendez Muebles & Hogar" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Sobre Mendez Muebles & Hogar
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary"></div>
            </div>

            <p className="text-muted-foreground text-base">
              Desde 2024, en Mendez Muebles & Hogar, como empresa familiar, nos dedicamos a transformar casas en
              hogares. Nuestra pasión es ofrecer muebles y artículos que combinan diseño, calidad y funcionalidad a
              precios accesibles, permitiéndote crear espacios que inspiran y acogen sin comprometer tu presupuesto.
            </p>

            <p className="text-muted-foreground text-base">
              Cada pieza en nuestra colección ha sido cuidadosamente seleccionada para garantizar la mejor calidad y
              durabilidad. Trabajamos con proveedores nacionales e internacionales que comparten nuestra visión de
              excelencia y compromiso con el medio ambiente.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-secondary rounded-xl p-5 transition-all hover:shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-black mb-1">Negocio Familiar</h4>
                <p className="text-muted-foreground text-sm">Atención personalizada</p>
              </div>

              <div className="bg-secondary rounded-xl p-5 transition-all hover:shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-black mb-1">Calidad</h4>
                <p className="text-muted-foreground text-sm">Productos duraderos</p>
              </div>

              <div className="bg-secondary rounded-xl p-5 transition-all hover:shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-black mb-1">Envíos</h4>
                <p className="text-muted-foreground text-sm">A todo el país</p>
              </div>

              <div className="bg-secondary rounded-xl p-5 transition-all hover:shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-black mb-1">Precios Bajos</h4>
                <p className="text-muted-foreground text-sm">Excelente relación calidad-precio</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto mt-4"
            >
              <Link href="/nosotros">Conoce nuestra historia</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

