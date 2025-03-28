"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      })
    }, 1000)
  }

  return (
    <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden max-w-[100vw]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-lustria text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Mantente informado</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-white mx-auto mb-4"
          />
          <p className="mb-6 md:mb-8 opacity-90 text-sm md:text-lg">
            Suscríbete a nuestro newsletter para recibir las últimas novedades, tendencias y ofertas exclusivas.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-black h-10 md:h-12 px-4 md:px-6"
            />
            <Button
              type="submit"
              variant="outline"
              disabled={isLoading}
              className="h-10 md:h-12 px-4 md:px-6 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
            >
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  Suscribirse
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>

          <p className="text-xs md:text-sm text-white/70 mt-4">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

