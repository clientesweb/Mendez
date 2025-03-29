import type { Metadata } from "next"
import NosotrosClientPage from "./NosotrosClientPage"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Nosotros | Conoce nuestra historia",
  description: "Conoce más sobre Mendez Muebles & Hogar, nuestra historia, valores y compromiso con la calidad.",
  alternates: {
    canonical: `${siteConfig.url}/nosotros`,
  },
}

export default function NosotrosPage() {
  return <NosotrosClientPage />
}

