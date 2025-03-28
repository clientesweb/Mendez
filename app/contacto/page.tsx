import { Header } from "@/components/header"
import { TopBanner } from "@/components/top-banner"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contacto | Mendez Muebles & Hogar",
  description: "Ponte en contacto con nosotros para consultas, presupuestos o cualquier información adicional.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mb-4">Contacto</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para consultas, presupuestos o cualquier
              información adicional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="font-playfair text-2xl font-medium mb-6">Envíanos un mensaje</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium">
                      Apellido
                    </label>
                    <Input id="apellido" name="apellido" placeholder="Tu apellido" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input id="telefono" name="telefono" placeholder="Tu número de teléfono" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="asunto" name="asunto" placeholder="Asunto de tu mensaje" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} required />
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-medium mb-6">Información de contacto</h2>
              <div className="bg-secondary/50 p-6 rounded-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Dirección</h3>
                      <p className="text-muted-foreground">Tucumán 15, Villa del Dique, Córdoba, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+54 9 3546 52-4360</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">info@mendezmuebles.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horario de atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full h-[300px] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13461.476303281282!2d-64.41244205!3d-32.1826646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b0f8b6a7f56f%3A0x7c6830f72c125d39!2sVilla%20del%20Dique%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1648146342379!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

