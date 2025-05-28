import type { Metadata } from "next"
import { MaintenancePage } from "@/components/maintenance-page"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Sitio en Mantenimiento - Mendez Muebles",
  description: "Estamos trabajando para mejorar tu experiencia. Contáctanos por WhatsApp para pedidos y consultas.",
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return <MaintenancePage />
}
