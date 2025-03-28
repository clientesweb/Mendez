import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Linkedin,
  Clock,
  CreditCard,
  Heart,
  ArrowUpRight,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Medios de pago y envío
  const paymentAndShipping = [
    { name: "Visa", image: "/payment/visa.png" },
    { name: "MasterCard", image: "/payment/mastercard.png" },
    { name: "Naranja", image: "/payment/naranja.png" },
    { name: "Pago Fácil", image: "/payment/pagofacil.png" },
    { name: "Rapipago", image: "/payment/rapipago.png" },
    { name: "Efectivo", image: "/payment/efectivo.png" },
    { name: "Andreani", image: "/payment/andreani.png" },
    { name: "Correo Argentino", image: "/payment/correo-argentino.png" },
  ]

  return (
    <footer className="bg-secondary pt-16 md:pt-20 pb-8 overflow-hidden">
      <div className="container px-4">
        {/* Footer Top - Newsletter y Redes Sociales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-12 border-b">
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-playfair text-xl md:text-2xl font-medium">¿Tienes alguna pregunta?</h3>
            <p className="text-muted-foreground max-w-md">
              Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <Link href="/contacto">
                  Contactar ahora
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                <Link href="tel:+5493546524360">
                  <Phone className="mr-2 h-4 w-4" />
                  +54 9 3546 52-4360
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 lg:text-right">
            <h3 className="font-playfair text-xl md:text-2xl font-medium">Síguenos en redes sociales</h3>
            <p className="text-muted-foreground lg:ml-auto lg:max-w-md">
              Mantente conectado con nosotros y descubre contenido exclusivo, inspiración y ofertas especiales.
            </p>
            <div className="flex gap-4 lg:justify-end">
              <Link
                href="#"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full p-3 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full p-3 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full p-3 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full p-3 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full p-3 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Middle - Enlaces y Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-12 border-b">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Mendez Muebles & Hogar"
                width={60}
                height={60}
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-playfair text-xl md:text-2xl font-medium">MENDEZ</span>
                <span className="text-xs text-muted-foreground">MUEBLES & HOGAR</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando espacios con diseño y calidad. Muebles para cada rincón de tu hogar, fabricados con los
              mejores materiales y con atención al detalle.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg md:text-xl font-medium mb-4 md:mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="/tienda"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg md:text-xl font-medium mb-4 md:mb-6">Categorías</h3>
            <div className="grid grid-cols-1 gap-y-3 md:gap-y-4">
              <Link
                href="/categorias/muebles"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                Muebles
              </Link>
              <Link
                href="/categorias/electro"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                Electro
              </Link>
              <Link
                href="/categorias/bazar"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                Bazar
              </Link>
              <Link
                href="/categorias/colchones"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-[1px] bg-primary transition-all group-hover:w-3"></span>
                Colchones
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg md:text-xl font-medium mb-4 md:mb-6">Contacto</h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Tucumán 15, Villa del Dique, Córdoba, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+54 9 3546 52-4360</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@mendezmuebles.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright, Políticas y Medios de pago */}
        <div className="pt-8">
          <div className="flex flex-col gap-6">
            {/* Medios de pago y envío */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Medios de pago y envío</span>
                <Truck className="h-4 w-4 text-muted-foreground ml-1" />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {paymentAndShipping.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-none p-1.5 h-8 w-12 flex items-center justify-center"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={20}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6"></div>

            {/* Copyright y enlaces */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  &copy; {currentYear} Mendez Muebles & Hogar. Todos los derechos reservados.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Desarrollado por{" "}
                  <a
                    href="https://dualitydomain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Duality Domain
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </Link>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
                <Link href="/envios" className="text-muted-foreground hover:text-primary transition-colors">
                  Envíos
                </Link>
                <Link href="/devoluciones" className="text-muted-foreground hover:text-primary transition-colors">
                  Devoluciones
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Hecho con</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span className="text-xs text-muted-foreground">en Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

