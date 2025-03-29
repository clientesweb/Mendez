"use client"
import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { Award, Star, Store, Home, Truck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

// Testimonios destacados para la página Nosotros
const featuredTestimonials = [
  {
    id: 1,
    name: "María Fernández",
    location: "Villa del Dique, Córdoba",
    content:
      "Los muebles de Mendez son excepcionales. La calidad y el diseño superan cualquier expectativa. He recomendado sus productos a todos mis clientes y siempre quedan encantados.",
    rating: 5,
    date: "Hace 2 semanas",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Embalse, Córdoba",
    content:
      "Trabajar con Mendez Muebles ha sido una experiencia fantástica. Su atención al detalle y la calidad de sus productos son incomparables. Definitivamente seguiré colaborando con ellos en futuros proyectos.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    id: 5,
    name: "Ana Pérez",
    location: "La Cruz, Córdoba",
    content:
      "Excelente atención y asesoramiento. Me ayudaron a elegir los muebles perfectos para mi nuevo departamento. La relación calidad-precio es inmejorable.",
    rating: 5,
    date: "Hace 1 semana",
  },
  {
    id: 7,
    name: "Lucía Morales",
    location: "Almafuerte, Córdoba",
    content:
      "Encontré exactamente lo que buscaba para mi cocina. El mueble es de excelente calidad y el precio muy accesible. El envío fue rápido y sin problemas.",
    rating: 5,
    date: "Hace 3 semanas",
  },
]

// Preguntas frecuentes
const faqs = [
  {
    question: "¿Realizan envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a todo el país. El costo y tiempo de entrega varía según la localidad. Para más información sobre envíos a tu zona, puedes contactarnos directamente.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos efectivo, transferencia bancaria, tarjetas de crédito y débito, y pagos a través de MercadoPago. También ofrecemos opciones de financiamiento en cuotas.",
  },
  {
    question: "¿Los muebles vienen armados?",
    answer:
      "Algunos productos vienen armados y otros requieren ensamblaje. En la descripción de cada producto especificamos si requiere armado. Ofrecemos servicio de armado por un costo adicional.",
  },
  {
    question: "¿Tienen garantía los productos?",
    answer:
      "Sí, todos nuestros productos cuentan con garantía. Los muebles tienen una garantía de 12 meses por defectos de fabricación, y los electrodomésticos según lo especificado por el fabricante.",
  },
  {
    question: "¿Puedo devolver un producto si no estoy satisfecho?",
    answer:
      "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original y con el embalaje completo. Los costos de envío para devoluciones corren por cuenta del cliente, excepto en casos de productos defectuosos.",
  },
  {
    question: "¿Tienen tienda física?",
    answer:
      "Sí, contamos con una tienda física ubicada en Tucumán 15, Villa del Dique, Córdoba. Te invitamos a visitarnos de lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 13:00.",
  },
]

export default function NosotrosClientPage() {
  // Función para generar iniciales y colores de avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ]

    const charSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
    return colors[charSum % colors.length]
  }

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
              <div className="bg-background p-6 rounded-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Negocio Familiar</h3>
                <p className="text-muted-foreground text-sm">
                  Como empresa familiar, tratamos a nuestros clientes como parte de nuestra familia, ofreciendo un
                  servicio cercano y personalizado.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Calidad</h3>
                <p className="text-muted-foreground text-sm">
                  Nos comprometemos a ofrecer productos de la más alta calidad que superen las expectativas de nuestros
                  clientes y perduren en el tiempo.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Excelencia</h3>
                <p className="text-muted-foreground text-sm">
                  Buscamos la excelencia en cada aspecto de nuestro negocio, desde la selección de productos hasta la
                  atención al cliente.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">Precios Bajos</h3>
                <p className="text-muted-foreground text-sm">
                  Estamos comprometidos con ofrecer la mejor relación calidad-precio, haciendo que buenos muebles sean
                  accesibles para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Testimonios */}
          <div className="mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-8">
              Lo que dicen nuestros clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border shadow-sm bg-white overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getAvatarColor(testimonial.name)}`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="font-medium text-base">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                          <span className="text-xs text-muted-foreground">•</span>
                          <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-gray-700">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sección de FAQs */}
          <div className="mb-16" id="preguntas-frecuentes">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-lg py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

