import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryHeader } from "@/components/category-header"
import { ShopFilters } from "@/components/shop-filters"
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

  // Get price range parameters
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : undefined

  // Get discount filter
  const onlyDiscounted = searchParams.discount === "true"

  // Filter products based on parameters
  let filteredProducts = [...products]

  // Apply price range filter
  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => {
      const discountedPrice = product.price - (product.price * product.discount) / 100
      return discountedPrice >= minPrice
    })
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => {
      const discountedPrice = product.price - (product.price * product.discount) / 100
      return discountedPrice <= maxPrice
    })
  }

  // Apply discount filter
  if (onlyDiscounted) {
    filteredProducts = filteredProducts.filter((product) => product.discount > 0)
  }

  // Sort products based on the sort parameter
  switch (sort) {
    case "price-asc":
      filteredProducts.sort((a, b) => {
        const priceA = a.price - (a.price * a.discount) / 100
        const priceB = b.price - (b.price * b.discount) / 100
        return priceA - priceB
      })
      break
    case "price-desc":
      filteredProducts.sort((a, b) => {
        const priceA = a.price - (a.price * a.discount) / 100
        const priceB = b.price - (b.price * b.discount) / 100
        return priceB - priceA
      })
      break
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
    case "discount":
      filteredProducts.sort((a, b) => b.discount - a.discount)
      break
    default:
      // For 'featured', we keep the original order which should have featured items first
      filteredProducts = filteredProducts.sort((a, b) => {
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con filtros */}
            <div className="lg:col-span-1">
              <ShopFilters
                productCount={filteredProducts.length}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onlyDiscounted={onlyDiscounted}
                sortOrder={sort}
              />
            </div>

            {/* Productos */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-16 bg-secondary/30 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No se encontraron productos</h3>
                  <p className="text-muted-foreground">
                    No hay productos que coincidan con los filtros seleccionados. Intenta con otros criterios.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

