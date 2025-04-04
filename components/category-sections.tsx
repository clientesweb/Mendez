"use client"

import { CategorySlider } from "@/components/category-slider"
import { products } from "@/lib/products/index"
import { getHeroProductIds } from "@/components/hero"
import { getFeaturedProductIds } from "@/components/featured-products"

export function CategorySections() {
  // Obtener los IDs de los productos del hero y de productos destacados para excluirlos
  const heroProductIds = getHeroProductIds()
  const featuredProductIds = getFeaturedProductIds()

  // Combinar todos los IDs a excluir
  const excludedProductIds = [...heroProductIds, ...featuredProductIds]

  // Obtener productos por categoría, excluyendo los que ya aparecen en el hero y en productos destacados
  const mueblesProducts = products
    .filter((product) => product.category === "Muebles" && !excludedProductIds.includes(product.id))
    .slice(0, 10)

  const electroProducts = products
    .filter((product) => product.category === "Electro" && !excludedProductIds.includes(product.id))
    .slice(0, 10)

  const colchonesProducts = products
    .filter((product) => product.category === "Colchones" && !excludedProductIds.includes(product.id))
    .slice(0, 10)

  const bazarProducts = products
    .filter((product) => product.category === "Bazar" && !excludedProductIds.includes(product.id))
    .slice(0, 10)

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

