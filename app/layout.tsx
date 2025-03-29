import type React from "react"
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

export const metadata = {
  title: {
    default: "Mendez Muebles & Hogar",
    template: "%s | Mendez Muebles & Hogar",
  },
  description:
    "Muebles de calidad y artículos para el hogar. Diseño, confort y los mejores precios en Villa del Dique, Córdoba.",
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
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

