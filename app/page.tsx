import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { PromoBanner } from "@/components/promo-banner"
import { CategorySections } from "@/components/category-sections"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Muebles de Calidad para tu Hogar",
  description:
    "Descubre nuestra colección de muebles de alta calidad para transformar tu hogar. Diseños modernos y clásicos para todos los espacios.",
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <CategorySections />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}