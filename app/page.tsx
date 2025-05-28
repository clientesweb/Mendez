import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, Clock, CreditCard, Heart, Sparkles, Star, Gift, Zap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Página en Mantenimiento - Volvemos Pronto",
  description:
    "Estamos trabajando para ofrecerte una mejor experiencia. Volvemos pronto con nuevos ingresos, ofertas y los mejores precios.",
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background con gradientes animados */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header con logo y título */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/50">
                <Image
                  src="/logo.png"
                  alt="Mendez Muebles & Hogar"
                  width={120}
                  height={120}
                  className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                MENDEZ
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 tracking-[0.2em] font-medium">
                MUEBLES & HOGAR
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>

          {/* Mensaje principal */}
          <Card className="mb-8 lg:mb-12 border-0 shadow-2xl bg-white/70 backdrop-blur-md">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <Sparkles className="h-8 w-8 text-blue-500 animate-pulse" />
                    <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg"></div>
                  </div>
                  <Clock className="h-8 w-8 text-purple-500 animate-bounce" />
                  <div className="relative">
                    <Sparkles className="h-8 w-8 text-pink-500 animate-pulse delay-500" />
                    <div className="absolute inset-0 bg-pink-400/30 rounded-full blur-lg"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 border-0"
                  >
                    🔧 Estamos mejorando para ti
                  </Badge>

                  <h2 className="font-playfair text-2xl sm:text-3xl lg:text-5xl font-medium bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                    Volvemos Pronto con Sorpresas
                  </h2>

                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Estamos trabajando para ofrecerte una experiencia increíble con
                    <span className="font-semibold text-blue-600"> nuevos ingresos</span>,
                    <span className="font-semibold text-purple-600"> ofertas exclusivas</span> y
                    <span className="font-semibold text-pink-600"> los mejores precios</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid de promociones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Promoción Miércoles */}
            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl">
              <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-200/40 rounded-full blur-xl"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <Calendar className="h-12 w-12 text-blue-600" />
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg scale-150"></div>
                    </div>
                  </div>

                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-medium">
                    TODOS LOS MIÉRCOLES
                  </Badge>

                  <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800">3 Cuotas</h3>
                  <p className="text-lg sm:text-xl font-semibold text-blue-700">Sin Interés</p>

                  <div className="flex items-center justify-center gap-2 text-blue-600">
                    <CreditCard className="h-5 w-5" />
                    <span className="text-sm font-medium">Pago fácil y cómodo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promoción Todos los días */}
            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-2xl">
              <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-purple-200/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-200/40 rounded-full blur-xl"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <Zap className="h-12 w-12 text-purple-600" />
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg scale-150"></div>
                    </div>
                  </div>

                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 text-xs font-medium">
                    TODOS LOS DÍAS
                  </Badge>

                  <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800">
                    9 y 12 Cuotas
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-purple-700">Sin Interés</p>
                  <p className="text-sm text-purple-600 font-medium">Cuota Fácil</p>

                  <div className="flex items-center justify-center gap-2 text-purple-600">
                    <Gift className="h-5 w-5" />
                    <span className="text-sm font-medium">Máxima flexibilidad</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Actions */}
          <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-md mb-8">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-800">
                    ¡No te pierdas nada!
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                    Síguenos para estar al día con nuestros nuevos ingresos y ofertas exclusivas
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center max-w-2xl mx-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white border-0 rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link
                      href="https://www.instagram.com/mendezmuebleshogar?igsh=aml3a3ExaTQzOG5j"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-3 h-6 w-6" />
                      Síguenos en Instagram
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="tel:+5493546524360">
                      <Phone className="mr-3 h-6 w-6" />
                      +54 9 3546 52-4360
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Phone className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Teléfono</p>
                <p className="text-xs text-slate-600">+54 9 3546 52-4360</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Lun - Vie</p>
                <p className="text-xs text-slate-600">9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Sábados</p>
                <p className="text-xs text-slate-600">9:00 - 13:00</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Heart className="h-6 w-6 text-red-500 mx-auto mb-2 fill-red-500" />
                <p className="text-sm font-medium text-slate-700">Villa del Dique</p>
                <p className="text-xs text-slate-600">Córdoba, Argentina</p>
              </CardContent>
            </Card>
          </div>

          {/* Footer final */}
          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-blue-50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                  <span>Hecho con</span>
                  <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                  <span>para nuestros clientes</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  © 2025 Mendez Muebles & Hogar. Todos los derechos reservados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
