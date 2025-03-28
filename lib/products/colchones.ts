import type { Product } from "@/lib/types"

export const colchonesProducts: Product[] = [
  {
    id: "respaldo-sommier",
    name: "Respaldo Sommier Capitoné",
    description:
      "Elegante respaldo para sommier con diseño capitoné que añade un toque de sofisticación a tu dormitorio. Tapizado en tela de alta calidad color gris, este respaldo es ideal para complementar cualquier estilo de decoración. Su acolchado con botones proporciona un aspecto clásico y lujoso, mientras que su estructura resistente garantiza durabilidad y estabilidad.",
    price: 125000,
    discount: 0,
    category: "Colchones",
    image: "/products/respaldo-sommier.png",
    featured: true,
    specifications: {
      Material: "Estructura de madera con tapizado textil",
      Color: "Gris",
      Diseño: "Capitoné con botones",
      Instalación: "Fácil montaje a la pared",
      Limpieza: "Paño húmedo o limpieza en seco",
    },
    gallery: ["/products/respaldo-sommier.png"],
  },
  {
    id: "base-sommier",
    name: "Base de Sommier | 1 plaza y media | 100×190 | Arcoiris",
    description:
      "Base de sommier de UNA PLAZA Y MEDIA para colchones de 100×190 tapizada en ecocuero negro. Ideal para complementar tu colchón y brindar mayor soporte y durabilidad.",
    price: 63000,
    discount: 0,
    category: "Colchones",
    image: "/products/base-sommier.jpeg",
    featured: true,
    specifications: {
      Tamaño: "1 plaza y media",
      Medidas: "100×190 cm",
      Material: "Ecocuero",
      Color: "Negro",
    },
    gallery: ["/products/base-sommier.jpeg"],
  },
]

