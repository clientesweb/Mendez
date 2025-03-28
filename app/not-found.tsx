import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-16">
        <div className="container px-4 text-center">
          <h1 className="font-lustria text-6xl font-bold mb-4">404</h1>
          <h2 className="font-lustria text-2xl font-bold mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

