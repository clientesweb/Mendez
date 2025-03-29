import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"
import { getProductById, getRelatedProducts } from "@/lib/products/index"
import { formatPrice } from "@/lib/utils"
import { siteConfig } from "@/lib/metadata"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Producto no encontrado | Mendez Muebles & Hogar",
      description: "Lo sentimos, el producto que buscas no existe o ha sido removido.",
    }
  }

  // Asegurarse de que la URL de la imagen sea absoluta
  const productImage = product.image.startsWith("http") ? product.image : `${siteConfig.url}${product.image}`

  return {
    title: `${product.name} | Mendez Muebles & Hogar`,
    description: product.description.substring(0, 160),
    alternates: {
      canonical: `${siteConfig.url}/producto/${params.id}`,
    },
    openGraph: {
      title: `${product.name} | Mendez Muebles & Hogar`,
      description: product.description.substring(0, 160),
      url: `${siteConfig.url}/producto/${params.id}`,
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "product",
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const discountedPrice = product.price - (product.price * product.discount) / 100

  // Generar imágenes para la galería
  const productImages = product.gallery || [product.image]

  // Encontrar productos relacionados de la misma categoría
  const relatedProducts = getRelatedProducts(params.id, 4)

  // Asegurarse de que la URL de la imagen sea absoluta
  const productImage = product.image.startsWith("http") ? product.image : `${siteConfig.url}${product.image}`

  // Datos estructurados para el producto
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: productImage,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Mendez Muebles & Hogar",
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/producto/${params.id}`,
      priceCurrency: "ARS",
      price: discountedPrice,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Mendez Muebles & Hogar",
      },
    },
  }

  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />

      {/* Script para datos estructurados */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="container px-4 py-8">
        <Link href="/tienda" className="inline-flex items-center text-muted-foreground hover:text-black mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver a la tienda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery key={product.id} images={productImages} productName={product.name} />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.discount > 0 && <Badge className="bg-black text-white">-{product.discount}% DESCUENTO</Badge>}
              </div>
              <h1 className="font-lustria text-2xl md:text-3xl lg:text-4xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-2xl font-bold">{formatPrice(discountedPrice)}</span>
                {product.discount > 0 && (
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-lustria text-lg font-bold">Descripción</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-muted-foreground">
                Este producto ha sido diseñado pensando en la funcionalidad y la estética, para adaptarse perfectamente
                a tu hogar. Fabricado con materiales de alta calidad que garantizan su durabilidad y resistencia al uso
                diario.
              </p>
            </div>

            {product.specifications && (
              <div className="space-y-3">
                <h3 className="font-lustria text-lg font-bold">Especificaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-1">
                      <span className="text-sm font-medium">{key}:</span>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <AddToCartButton product={product} />

              <Button variant="secondary" className="w-full mt-3" asChild>
                <Link href="/checkout">Comprar ahora</Link>
              </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-3">
                <Truck className="h-6 w-6 text-black mb-2" />
                <h3 className="font-medium text-sm">Envío a todo el país</h3>
                <p className="text-xs text-muted-foreground">Consulta tiempos de entrega</p>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <ShieldCheck className="h-6 w-6 text-black mb-2" />
                <h3 className="font-medium text-sm">Garantía de calidad</h3>
                <p className="text-xs text-muted-foreground">12 meses de garantía</p>
              </div>
              <div className="flex flex-col items-center text-center p-3">
                <RotateCcw className="h-6 w-6 text-black mb-2" />
                <h3 className="font-medium text-sm">Devoluciones</h3>
                <p className="text-xs text-muted-foreground">Hasta 30 días después de la compra</p>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

