"use client"

import { CategorySlider } from "@/components/category-slider"
import { products } from "@/lib/products/index"

export function CategorySections() {
  // Obtener productos por categoría
  const mueblesProducts = products.filter((product) => product.category === "Muebles").slice(0, 10)

  const electroProducts = products.filter((product) => product.category === "Electro").slice(0, 10)

  const colchonesProducts = products.filter((product) => product.category === "Colchones").slice(0, 10)

  const bazarProducts = products.filter((product) => product.category === "Bazar").slice(0, 10)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4">
        <CategorySlider title="Muebles" categorySlug="muebles" products={mueblesProducts} />

        <CategorySlider title="Electro" categorySlug="electro" products={electroProducts} />

        <CategorySlider title="Colchones" categorySlug="colchones" products={colchonesProducts} />

        <CategorySlider title="Bazar" categorySlug="bazar" products={bazarProducts} />
      </div>
    </section>
  )
}

