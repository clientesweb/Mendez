"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  // Reiniciar la imagen principal cuando cambian las imágenes (cambio de producto)
  useEffect(() => {
    setMainImage(images[0])
  }, [images])

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
        <Image src={mainImage || "/placeholder.svg"} alt={productName} fill className="object-cover" priority />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              className={`relative aspect-square overflow-hidden rounded-md border ${
                mainImage === image ? "ring-2 ring-black" : ""
              }`}
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Vista ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

