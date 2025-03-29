import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryHeader } from "@/components/category-header"
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
    image: "/categories/bazar.jpeg",
    features: ["Utensilios de cocina", "Artículos de decoración", "Accesorios para el hogar", "Productos de calidad"],
  },
}

// Metadatos estáticos para la página de categoría
export const metadata = {
  title: "Categoría de Productos",
  description: "Explora nuestra selección de productos por categoría. Encuentra lo que necesitas para tu hogar.",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = categoryMap[params.category]

  if (!categoryInfo) {
    notFound()
  }

  const products = getProductsByCategory(categoryInfo.title)

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
                <p className="text-muted-foreground text-sm">{products.length} productos encontrados</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>Destacados</option>
                  <option>Precio: Menor a mayor</option>
                  <option>Precio: Mayor a menor</option>
                  <option>Más recientes</option>
                </select>
              </div>
            </div>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
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

