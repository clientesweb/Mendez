"use client"

import type React from "react"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface ProductSortProps {
  className?: string
}

export function ProductSort({ className }: ProductSortProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [sortValue, setSortValue] = useState(searchParams.get("sort") || "featured")

  useEffect(() => {
    // Update the sort value when the URL changes
    const sort = searchParams.get("sort")
    if (sort) {
      setSortValue(sort)
    }
  }, [searchParams])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSortValue(value)

    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams.toString())

    // Update or add the sort parameter
    if (value === "featured") {
      params.delete("sort") // Remove sort parameter for default sorting
    } else {
      params.set("sort", value)
    }

    // Navigate to the new URL
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground">Ordenar por:</span>
      <select className="text-sm border rounded-md px-2 py-1" value={sortValue} onChange={handleSortChange}>
        <option value="featured">Destacados</option>
        <option value="price-asc">Precio: Menor a mayor</option>
        <option value="price-desc">Precio: Mayor a menor</option>
        <option value="name-asc">Nombre: A-Z</option>
        <option value="name-desc">Nombre: Z-A</option>
      </select>
    </div>
  )
}

