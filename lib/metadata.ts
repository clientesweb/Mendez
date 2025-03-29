export const siteConfig = {
  name: "Mendez Muebles & Hogar",
  url: "https://mendezmuebles.com.ar",
  description:
    "Muebles de calidad y artículos para el hogar. Diseño, confort y los mejores precios en Villa del Dique, Córdoba.",
  keywords: [
    "muebles",
    "hogar",
    "decoración",
    "electrodomésticos",
    "colchones",
    "Villa del Dique",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Mendez Muebles & Hogar" }],
  creator: "Mendez Muebles & Hogar",
  themeColor: "#1A202C", // Color oscuro basado en tu paleta
  ogImage: "/og-image.jpeg", // Cambiado a ruta relativa
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // Datos para SEO local
  localBusiness: {
    type: "FurnitureStore",
    name: "Mendez Muebles & Hogar",
    address: {
      streetAddress: "Tucumán 15",
      addressLocality: "Villa del Dique",
      addressRegion: "Córdoba",
      postalCode: "5862",
      addressCountry: "AR",
    },
    geo: {
      latitude: "-32.1826646",
      longitude: "-64.41244205",
    },
    telephone: "+5493546524360",
    email: "info@mendezmuebles.com.ar",
    openingHours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
  },
  // Categorías principales para el sitemap
  mainCategories: [
    { name: "Muebles", slug: "muebles" },
    { name: "Electro", slug: "electro" },
    { name: "Bazar", slug: "bazar" },
    { name: "Colchones", slug: "colchones" },
  ],
}

