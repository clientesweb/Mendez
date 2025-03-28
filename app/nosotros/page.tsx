import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { CheckCircle, Users, Award, ThumbsUp } from "lucide-react"

export const metadata = {
  title: "Nosotros | Mendez Muebles & Hogar",
  description: "Conoce más sobre Mendez Muebles & Hogar, nuestra historia, valores y compromiso con la calidad.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mb-4">Sobre Nosotros</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce más sobre Mendez Muebles & Hogar, nuestra historia, valores y compromiso con la calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
            <div className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden rounded-2xl">
              <Image src="/logo.png" alt="Sobre Mendez Muebles & Hogar" fill className="object-contain p-8" />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">Nuestra Historia</h2>
                <div className="w-16 md:w-24 h-1 bg-black"></div>
              </div>

              <p className="text-muted-foreground">
                Desde 2024, en Mendez Muebles & Hogar, como empresa familiar, nos dedicamos a transformar casas en
                hogares. Nuestra pasión es ofrecer muebles y artículos que combinan diseño, calidad y funcionalidad a
                precios accesibles, permitiéndote crear espacios que inspiran y acogen sin comprometer tu presupuesto.
              </p>

              <p className="text-muted-foreground">
                Cada pieza en nuestra colección ha sido cuidadosamente seleccionada para garantizar la mejor calidad y
                durabilidad. Trabajamos con proveedores nacionales e internacionales que comparten nuestra visión de
                excelencia y compromiso con el medio ambiente.
              </p>

              <p className="text-muted-foreground">
                A lo largo de los años, hemos crecido gracias a la confianza de nuestros clientes, quienes valoran
                nuestro servicio personalizado y nuestra dedicación para encontrar las soluciones perfectas para sus
                hogares.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 p-8 rounded-lg mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Calidad</h3>
                <p className="text-muted-foreground text-sm">
                  Nos comprometemos a ofrecer productos de la más alta calidad que superen las expectativas de nuestros
                  clientes.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Familia</h3>
                <p className="text-muted-foreground text-sm">
                  Como empresa familiar, tratamos a nuestros clientes como parte de nuestra familia, ofreciendo un
                  servicio cercano y personalizado.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Excelencia</h3>
                <p className="text-muted-foreground text-sm">
                  Buscamos la excelencia en cada aspecto de nuestro negocio, desde la selección de productos hasta la
                  atención al cliente.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Compromiso</h3>
                <p className="text-muted-foreground text-sm">
                  Estamos comprometidos con la satisfacción de nuestros clientes y con ofrecer soluciones que mejoren su
                  calidad de vida.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Detrás de Mendez Muebles & Hogar hay un equipo de profesionales apasionados por el diseño y comprometidos
              con ofrecer el mejor servicio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Juan Mendez" fill className="object-cover" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-1">Juan Mendez</h3>
                <p className="text-primary font-medium mb-2">Fundador y Director</p>
                <p className="text-muted-foreground text-sm">
                  Con más de 15 años de experiencia en el sector del mueble, Juan fundó Mendez Muebles & Hogar con la
                  visión de ofrecer productos de calidad a precios accesibles.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="María Mendez" fill className="object-cover" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-1">María Mendez</h3>
                <p className="text-primary font-medium mb-2">Directora de Diseño</p>
                <p className="text-muted-foreground text-sm">
                  María es la responsable de seleccionar cada pieza de nuestra colección, asegurando que combine
                  estética y funcionalidad para crear hogares acogedores.
                </p>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Carlos Mendez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-1">Carlos Mendez</h3>
                <p className="text-primary font-medium mb-2">Director Comercial</p>
                <p className="text-muted-foreground text-sm">
                  Carlos lidera nuestro equipo de ventas y atención al cliente, asegurando que cada cliente reciba un
                  servicio personalizado y de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

