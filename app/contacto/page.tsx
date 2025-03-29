import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"
import { siteConfig } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Contacto | Estamos para ayudarte",
  description:
    "Ponte en contacto con nosotros para consultas, presupuestos o cualquier información adicional. Estamos para ayudarte.",
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
}

export default function ContactoPage() {
  return <ContactoClientPage />
}

