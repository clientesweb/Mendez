// Corregir las rutas de importación para que sean absolutas
import { mueblesProducts } from "@/lib/products/muebles"
import { colchonesProducts } from "@/lib/products/colchones"
import { electroProducts } from "@/lib/products/electro"
import { bazarProducts } from "@/lib/products/bazar"
import type { Product } from "@/lib/types"

// Combinar todos los productos en un solo array
export const products: Product[] = [...mueblesProducts, ...colchonesProducts, ...electroProducts, ...bazarProducts]

// Obtener productos destacados
export const featuredProducts = products.filter((product) => product.featured)

// Obtener productos por categoría
export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

// Obtener un producto por ID
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}

// Obtener productos relacionados (misma categoría, excluyendo el producto actual)
export const getRelatedProducts = (productId: string, limit = 4) => {
  const currentProduct = getProductById(productId)
  if (!currentProduct) return []

  return products
    .filter((product) => product.category === currentProduct.category && product.id !== productId)
    .slice(0, limit)
}

