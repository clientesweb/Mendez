import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { PromoBanner } from "@/components/promo-banner"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

