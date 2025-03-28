"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 relative">
      <div className="container flex items-center justify-center text-center px-4">
        <p className="text-sm md:text-base font-medium">
          ¡Conoce nuestras promociones!{" "}
          <Link href="/tienda" className="underline font-bold ml-1">
            Compra ahora
          </Link>
        </p>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

