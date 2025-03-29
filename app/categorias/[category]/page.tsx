import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryHeader } from "@/components/category-header"
import { ProductSort } from "@/components/product-sort"
import { getProductsByCategory } from "@/lib/products/index"
import { notFound } from "next/navigation"

// Mapeo de categorías para URLs y títulos
const categoryMap: Record<string, { title: string; description: string; image: string; features: string[] }> = {
  muebles: {
    title: "Muebles",
    description:
      "Explora nuestra colección de muebles de alta calidad para transformar tu hogar. Encuentra sofás, mesas, sillas y más.",
    image: "/categories/muebles.jpeg",
    features: [
      "Diseños modernos y clásicos",
      "Materiales de alta calidad",
      "Opciones para todos los espacios",
      "Fabricación nacional e importada",
    ],
  },
  colchones: {
    title: "Colchones",
    description:
      "Descubre nuestra selección de colchones, sommiers y accesorios para un descanso perfecto. Calidad y confort garantizados.",
    image: "/banner-colchon.webp",
    features: [
      "Diferentes niveles de firmeza",
      "Tecnologías avanzadas de descanso",
      "Opciones para todas las necesidades",
      "Garantía de calidad",
    ],
  },
  electro: {
    title: "Electro",
    description:
      "Conoce nuestra línea de electrodomésticos para equipar tu hogar con la mejor tecnología y eficiencia energética.",
    image: "/categories/electro.jpeg",
    features: [
      "Marcas reconocidas",
      "Eficiencia energética",
      "Tecnología de vanguardia",
      "Garantía y servicio técnico",
    ],
  },
  bazar: {
    title: "Bazar",
    description:
      "Explora nuestra variedad de artículos para cocina, baño y decoración. Todo lo que necesitas para completar tu hogar.",
    image: "/categories/banner-bazar.jpeg",
    features: ["Utensilios de cocina", "Artículos de decoración", "Accesorios para el hogar", "Productos de calidad"],
  },
}

// Metadatos estáticos para la página de categoría
export const metadata = {
  title: "Categoría de Productos",
  description: "Explora nuestra selección de productos por categoría. Encuentra lo que necesitas para tu hogar.",
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const categoryInfo = categoryMap[params.category]

  if (!categoryInfo) {
    notFound()
  }

  // Get products for this category
  const categoryProducts = getProductsByCategory(categoryInfo.title)

  // Get sort parameter
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "featured"

  // Sort products based on the sort parameter
  let sortedProducts = [...categoryProducts]

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
            title={categoryInfo.title}
            description={categoryInfo.description}
            image={categoryInfo.image}
          />

          <CategoryFilter activeCategory={params.category} />

          <div className="mb-8 bg-secondary/50 rounded-xl p-6">
            <h2 className="font-lustria text-xl font-bold mb-4">Características de nuestros {categoryInfo.title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categoryInfo.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-medium">{categoryInfo.title}</h2>
                <p className="text-muted-foreground text-sm">{sortedProducts.length} productos encontrados</p>
              </div>
              <ProductSort />
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <ProductGrid products={sortedProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No hay productos disponibles en esta categoría actualmente.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

