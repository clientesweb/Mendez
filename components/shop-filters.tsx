"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Filter, SortAsc, ChevronDown, Percent, Tag, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatPrice } from "@/lib/utils"

interface ShopFiltersProps {
  productCount: number
  minPrice?: number
  maxPrice?: number
  onlyDiscounted?: boolean
  sortOrder?: string
}

// Precios mínimo y máximo para el slider
const PRICE_MIN = 0
const PRICE_MAX = 300000

export function ShopFilters({
  productCount,
  minPrice = PRICE_MIN,
  maxPrice = PRICE_MAX,
  onlyDiscounted = false,
  sortOrder = "featured",
}: ShopFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Estados locales para los filtros
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice || PRICE_MIN, maxPrice || PRICE_MAX])
  const [isDiscountOnly, setIsDiscountOnly] = useState(onlyDiscounted)
  const [sort, setSort] = useState(sortOrder)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Actualizar estados cuando cambian los props
  useEffect(() => {
    setPriceRange([minPrice || PRICE_MIN, maxPrice || PRICE_MAX])
    setIsDiscountOnly(onlyDiscounted)
    setSort(sortOrder)
  }, [minPrice, maxPrice, onlyDiscounted, sortOrder])

  // Función para aplicar los filtros
  const applyFilters = () => {
    // Crear nuevo objeto de parámetros
    const params = new URLSearchParams(searchParams.toString())

    // Actualizar parámetros de precio
    if (priceRange[0] > PRICE_MIN) {
      params.set("minPrice", priceRange[0].toString())
    } else {
      params.delete("minPrice")
    }

    if (priceRange[1] < PRICE_MAX) {
      params.set("maxPrice", priceRange[1].toString())
    } else {
      params.delete("maxPrice")
    }

    // Actualizar parámetro de descuento
    if (isDiscountOnly) {
      params.set("discount", "true")
    } else {
      params.delete("discount")
    }

    // Actualizar parámetro de ordenamiento
    if (sort !== "featured") {
      params.set("sort", sort)
    } else {
      params.delete("sort")
    }

    // Navegar a la nueva URL
    router.push(`${pathname}?${params.toString()}`)
  }

  // Función para resetear los filtros
  const resetFilters = () => {
    setPriceRange([PRICE_MIN, PRICE_MAX])
    setIsDiscountOnly(false)
    setSort("featured")
    router.push(pathname)
  }

  // Determinar si hay filtros activos
  const hasActiveFilters =
    priceRange[0] > PRICE_MIN || priceRange[1] < PRICE_MAX || isDiscountOnly || sort !== "featured"

  return (
    <div className="bg-white rounded-lg shadow-sm border p-5 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-medium text-lg">Filtros</h3>
        </div>
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      <div className={`space-y-5 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
        {/* Contador de productos */}
        <div className="bg-secondary/50 px-3 py-2 rounded-md text-sm">
          <span className="font-medium">{productCount}</span> productos encontrados
        </div>

        {/* Ordenamiento */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Tag className="h-4 w-4 text-primary" />
            Ordenar por:
          </label>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Destacados</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a menor</SelectItem>
              <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
              <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
              <SelectItem value="discount">Mayor descuento</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Accordion type="single" collapsible defaultValue="price" className="w-full">
          {/* Filtro de precio */}
          <AccordionItem value="price" className="border-b">
            <AccordionTrigger className="py-3 text-sm font-medium flex items-center gap-2">
              <SortAsc className="h-4 w-4 text-primary" />
              Rango de precio
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 px-1">
                <Slider
                  value={priceRange}
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  step={1000}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="my-6"
                />
                <div className="flex items-center justify-between text-sm mt-2">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Filtro de descuentos */}
          <AccordionItem value="discount" className="border-b">
            <AccordionTrigger className="py-3 text-sm font-medium flex items-center gap-2">
              <Percent className="h-4 w-4 text-primary" />
              Descuentos
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="discount-only"
                    checked={isDiscountOnly}
                    onCheckedChange={(checked) => setIsDiscountOnly(checked === true)}
                  />
                  <label
                    htmlFor="discount-only"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Solo productos con descuento
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Botones de acción */}
        <div className="flex flex-col gap-2 pt-2">
          <Button onClick={applyFilters} className="w-full">
            Aplicar filtros
          </Button>
          {hasActiveFilters && (
            <Button variant="outline" onClick={resetFilters} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Resetear filtros
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

