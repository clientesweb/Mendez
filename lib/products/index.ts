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

// Obtener un producto por ID - Añadimos manejo de errores
export const getProductById = (id: string): Product | undefined => {
  try {
    return products.find((product) => product.id === id)
  } catch (error) {
    console.error("Error al buscar producto por ID:", error)
    return undefined
  }
}

// Obtener productos relacionados (misma categoría, excluyendo el producto actual)
export const getRelatedProducts = (productId: string, limit = 4) => {
  try {
    const currentProduct = getProductById(productId)
    if (!currentProduct) return []

    return products
      .filter((product) => product.category === currentProduct.category && product.id !== productId)
      .slice(0, limit)
  } catch (error) {
    console.error("Error al obtener productos relacionados:", error)
    return []
  }
}

