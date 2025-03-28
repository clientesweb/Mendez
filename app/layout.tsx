import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { ThemeProvider } from "@/components/theme-provider"

// Fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Mendez Muebles & Hogar | Muebles de Calidad para tu Hogar",
  description:
    "Descubre nuestra colección de muebles de alta calidad para transformar tu hogar. Diseños modernos y clásicos para todos los espacios.",
  keywords: "muebles, hogar, decoración, sofás, mesas, sillas, dormitorio, salón, comedor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'