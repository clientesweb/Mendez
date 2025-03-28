"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5493546524360"
    const message = encodeURIComponent("Hola, estoy interesado/a en sus productos. ¿Podría darme más información?")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={handleWhatsAppClick}
            className="rounded-full h-14 w-14 p-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <div className="relative h-10 w-10 overflow-hidden">
              <Image src="/logo.png" alt="Logo Mendez" fill className="object-contain" />
            </div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

