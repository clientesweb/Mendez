import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryHeader } from "@/components/category-header"
import { products } from "@/lib/products/index"

export const metadata = {
  title: "Tienda | Mendez Muebles & Hogar",
  description:
    "Explora nuestra colección completa de muebles de alta calidad para tu hogar. Encuentra sofás, mesas, sillas y más.",
}

export default function TiendaPage() {
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

          <ProductGrid products={products} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

