"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, Search, Phone, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }

    // Set initial value
    handleResize()

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const routes = [
    {
      href: "/tienda",
      label: "Tienda",
      hasSubmenu: true,
      submenu: [
        { href: "/categorias/muebles", label: "Muebles" },
        { href: "/categorias/electro", label: "Electro" },
        { href: "/categorias/bazar", label: "Bazar" },
        { href: "/categorias/colchones", label: "Colchones" },
      ],
    },
    { href: "/blog", label: "Blog", hasSubmenu: false },
    { href: "/nosotros", label: "Nosotros", hasSubmenu: false },
    { href: "/contacto", label: "Contacto", hasSubmenu: false },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between px-4">
        {/* En móvil: Menú a la izquierda, Logo en el centro, Carrito a la derecha */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] lg:w-[400px]">
              <div className="flex items-center gap-2 mb-8 mt-4">
                <Image
                  src="/logo.png"
                  alt="Mendez Muebles & Hogar"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-playfair text-lg font-medium tracking-tight">MENDEZ</span>
                  <span className="text-[10px] text-muted-foreground">MUEBLES & HOGAR</span>
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <div key={route.href}>
                    {route.hasSubmenu ? (
                      <div className="space-y-2">
                        <button
                          className={`flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-primary ${
                            pathname.includes(route.href) ? "text-primary" : "text-muted-foreground"
                          }`}
                          onClick={() => setOpenSubmenu(openSubmenu === route.href ? null : route.href)}
                          aria-expanded={openSubmenu === route.href}
                        >
                          {route.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${openSubmenu === route.href ? "rotate-180" : ""}`}
                          />
                        </button>
                        {openSubmenu === route.href && (
                          <div className="pl-4 space-y-2 border-l border-muted">
                            {route.submenu?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-base text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => {
                                  setOpenSubmenu(null)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={route.href}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href))
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t">
                <div className="space-y-3">
                  <h3 className="font-playfair text-lg font-medium">Contacto</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+54 9 3546 52-4360</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5" />
                    <span>Tucumán 15, Villa del Dique, Córdoba, Argentina</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - Centrado en móvil, a la izquierda en desktop */}
        <div className={`flex items-center gap-2 group ${isMobile ? "absolute left-1/2 -translate-x-1/2" : ""}`}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative overflow-hidden rounded-full">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/logo.png"
                  alt="Mendez Muebles & Hogar"
                  width={50}
                  height={50}
                  className="h-10 md:h-12 w-auto object-contain transition-transform"
                />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg md:text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                MENDEZ
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground">MUEBLES & HOGAR</span>
            </div>
          </Link>
        </div>

        {/* Navegación - Solo visible en desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {routes.map((route) => (
            <div key={route.href} className="relative group">
              {route.hasSubmenu ? (
                <>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                      pathname.includes(route.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setOpenSubmenu(openSubmenu === route.href ? null : route.href)}
                    aria-expanded={openSubmenu === route.href}
                    aria-haspopup="true"
                  >
                    {route.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openSubmenu === route.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSubmenu === route.href && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-background shadow-md rounded-md overflow-hidden z-50">
                      {route.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={route.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href))
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                  {(pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href))) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                      layoutId="underline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Botones de acción - Carrito a la derecha en móvil */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:bg-secondary transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Buscar productos"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-secondary transition-colors"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Ver carrito con ${items.length} productos`}
          >
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground"
              >
                {items.length}
              </motion.span>
            )}
          </Button>

          {/* Menú hamburguesa - Solo visible en desktop */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex hover:bg-secondary transition-colors"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-background shadow-md py-4"
        >
          <div className="container px-4">
            <form className="flex gap-2 max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Buscar productos..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Buscar
              </Button>
            </form>
          </div>
        </motion.div>
      )}

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}
