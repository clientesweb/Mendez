export interface Product {
  id: string
  name: string
  description: string
  price: number
  discount: number
  category: string
  image: string
  featured: boolean
  specifications?: Record<string, string>
  gallery?: string[]
}

