import type { Product } from "@/lib/types"

export const bazarProducts: Product[] = [
  {
    id: "fabripasta-winco-w150",
    name: "Fabripasta Winco W-150",
    description:
      "Máquina para hacer pasta casera de forma manual. Amasa y estira todo tipo de pastas, corta cintas y tallarines. Cuenta con 7 niveles de estirado y perilla de regulación de gran tamaño. Su cuerpo es de aluminio y acero inoxidable con engranajes de acero. Incluye soporte para sujetar a la mesada, permitiéndote elaborar pasta fresca de manera fácil y rápida.",
    price: 73000,
    discount: 0,
    category: "Bazar",
    image: "/products/fabripasta-winco-1.webp",
    featured: true,
    specifications: {
      Marca: "Winco",
      Modelo: "W150",
      "Tipo de alimentación": "Manual",
      Material: "Acero inoxidable",
      "Tipos de pastas": "Fideos",
      "Largo del rodillo": "15 cm",
      "Niveles de estirado": "7",
      Incluye: "Soporte para sujetar a la mesada",
    },
    gallery: [
      "/products/fabripasta-winco-1.webp",
      "/products/fabripasta-winco-2.webp",
      "/products/fabripasta-winco-3.webp",
    ],
  },
  {
    id: "tensiometro-aneroide-as102",
    name: "TENSIÓMETRO ANEROIDE TRADICIONAL AS102",
    description:
      "Tensiómetro aneroide tradicional con estetoscopio profesional. Ofrece exactitud en las mediciones, cuenta con inflado manual y fácil lectura. Aprobado por A.N.M.A.T., este dispositivo es ideal para el monitoreo de la presión arterial tanto en entornos profesionales como domésticos.",
    price: 50000,
    discount: 0,
    category: "Bazar",
    image: "/products/tensiometro-as102-2.jpeg",
    featured: true,
    specifications: {
      Incluye: "Estetoscopio profesional",
      Tipo: "Aneroide tradicional",
      Inflado: "Manual",
      Origen: "China",
      "Aprobado por": "A.N.M.A.T.",
      Peso: "0,58 kg",
      Alto: "6 cm",
      Ancho: "22 cm",
      Profundidad: "14 cm",
    },
    gallery: [
      "/products/tensiometro-as102-2.jpeg",
      "/products/tensiometro-as102-1.jpeg",
      "/products/tensiometro-as102-3.jpeg",
      "/products/tensiometro-as102-4.jpeg",
      "/products/tensiometro-as102-5.jpeg",
    ],
  },
]

