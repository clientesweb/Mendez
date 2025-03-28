"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function About() {
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
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
            className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden rounded-2xl"
          >
            <Image src="/logo.png" alt="Sobre Mendez Muebles & Hogar" fill className="object-contain p-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Sobre Mendez Muebles & Hogar
              </h2>
              <div className="w-16 md:w-24 h-1 bg-black"></div>
            </div>

            <p className="text-muted-foreground text-sm md:text-base">
              Desde 2024, en Mendez Muebles & Hogar, como empresa familiar, nos dedicamos a transformar casas en
              hogares. Nuestra pasión es ofrecer muebles y artículos que combinan diseño, calidad y funcionalidad a
              precios accesibles, permitiéndote crear espacios que inspiran y acogen sin comprometer tu presupuesto.
            </p>

            <p className="text-muted-foreground text-sm md:text-base">
              Cada pieza en nuestra colección ha sido cuidadosamente seleccionada para garantizar la mejor calidad y
              durabilidad. Trabajamos con proveedores nacionales e internacionales que comparten nuestra visión de
              excelencia y compromiso con el medio ambiente.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 pt-2 md:pt-4">
              <div className="bg-black/5 p-3 md:p-5 rounded-xl">
                <h4 className="font-playfair text-xl md:text-2xl font-bold text-black">13+</h4>
                <p className="text-muted-foreground text-xs md:text-sm">Años de experiencia</p>
              </div>
              <div className="bg-black/5 p-3 md:p-5 rounded-xl">
                <h4 className="font-playfair text-xl md:text-2xl font-bold text-black">2000+</h4>
                <p className="text-muted-foreground text-xs md:text-sm">Clientes satisfechos</p>
              </div>
              <div className="bg-black/5 p-3 md:p-5 rounded-xl">
                <h4 className="font-playfair text-xl md:text-2xl font-bold text-black">800+</h4>
                <p className="text-muted-foreground text-xs md:text-sm">Proyectos completados</p>
              </div>
              <div className="bg-black/5 p-3 md:p-5 rounded-xl">
                <h4 className="font-playfair text-xl md:text-2xl font-bold text-black">100%</h4>
                <p className="text-muted-foreground text-xs md:text-sm">Garantía de calidad</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 w-full sm:w-auto">
              <Link href="/nosotros">Conoce nuestra historia</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

