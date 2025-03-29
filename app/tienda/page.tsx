import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryHeader } from "@/components/category-header"
import { ProductSort } from "@/components/product-sort"
import { products } from "@/lib/products/index"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Tienda | Explora nuestra colección completa",
  description:
    "Explora nuestra colección completa de muebles de alta calidad para tu hogar. Encuentra sofás, mesas, sillas y más.",
  alternates: {
    canonical: `${siteConfig.url}/tienda`,
  },
}

export default function TiendaPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Get sort parameter
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "featured"

  // Sort products based on the sort parameter
  let sortedProducts = [...products]

  switch (sort) {
    case "price-asc":
      sortedProducts.sort((a, b) => {
        const priceA = a.price - (a.price * a.discount) / 100
        const priceB = b.price - (b.price * b.discount) / 100
        return priceA - priceB
      })
      break
    case "price-desc":
      sortedProducts.sort((a, b) => {
        const priceA = a.price - (a.price * a.discount) / 100
        const priceB = b.price - (b.price * b.discount) / 100
        return priceB - priceA
      })
      break
    case "name-asc":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
    default:
      // For 'featured', we keep the original order which should have featured items first
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
  }

  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <CategoryHeader
            title="Nuestra Colección"
            description="Explora nuestra selección de productos de alta calidad diseñados para transformar tu hogar. Encuentra todo lo que necesitas para crear espacios únicos y funcionales."
            image="/banner-colchon.webp"
          />

          <CategoryFilter activeCategory="todos" />

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-medium">Todos los productos</h2>
                <p className="text-muted-foreground text-sm">{sortedProducts.length} productos encontrados</p>
              </div>
              <ProductSort />
            </div>
          </div>

          <ProductGrid products={sortedProducts} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

