export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "como-elegir-el-sofa-perfecto-para-tu-salon",
    title: "Cómo elegir el sofá perfecto para tu salón",
    excerpt:
      "Guía completa para seleccionar el sofá ideal según el tamaño de tu espacio, estilo de decoración y necesidades familiares.",
    content: `
# Cómo elegir el sofá perfecto para tu salón

El sofá es, sin duda, una de las piezas centrales de cualquier salón. No solo es un elemento funcional donde descansar y socializar, sino que también define el estilo y la personalidad de tu espacio. Elegir el sofá adecuado puede transformar por completo la apariencia y funcionalidad de tu hogar.

## Considera el tamaño de tu espacio

Antes de enamorarte de un diseño específico, es fundamental medir el espacio disponible en tu salón. Un sofá demasiado grande puede hacer que la habitación se sienta abarrotada, mientras que uno demasiado pequeño puede perderse en un espacio amplio.

- **Para espacios pequeños**: Opta por sofás de 2 plazas o chaise longues compactos.
- **Para espacios medianos**: Un sofá de 3 plazas suele ser la opción ideal.
- **Para espacios grandes**: Considera seccionales en L o U, o combina un sofá grande con sillones individuales.

Recuerda dejar al menos 45-50 cm de espacio para circular alrededor del sofá.

## Elige el material adecuado

El material de tapizado no solo afecta la estética, sino también la durabilidad y el mantenimiento del sofá.

### Tela
- **Ventajas**: Gran variedad de colores y texturas, generalmente más económica.
- **Desventajas**: Puede mancharse más fácilmente y requiere mayor mantenimiento.

### Piel
- **Ventajas**: Elegante, duradera y fácil de limpiar.
- **Desventajas**: Mayor costo, puede agrietarse con el tiempo si no se cuida adecuadamente.

### Ecopiel
- **Ventajas**: Más económica que la piel auténtica, fácil de limpiar.
- **Desventajas**: Menos duradera, puede pelarse con el uso intensivo.

## Estilo y diseño

El estilo del sofá debe complementar la decoración general de tu hogar:

- **Clásico**: Sofás con líneas curvas, patas torneadas y detalles ornamentados.
- **Moderno**: Líneas limpias, formas geométricas y minimalismo.
- **Escandinavo**: Diseños simples, patas de madera a la vista y colores neutros.
- **Industrial**: Estructuras robustas, a menudo combinando metal y cuero.

## Comodidad y funcionalidad

No sacrifiques la comodidad por la estética. Considera:

- **Profundidad del asiento**: Los asientos más profundos son ideales para relajarse, mientras que los menos profundos facilitan levantarse.
- **Altura del respaldo**: Un respaldo alto proporciona mayor soporte.
- **Densidad de la espuma**: Afecta directamente la comodidad y durabilidad.
- **Funcionalidades adicionales**: Sofás cama, reclinables o con almacenamiento pueden ser opciones prácticas.

## Conclusión

Invertir tiempo en elegir el sofá adecuado vale la pena considerando que es una pieza que usarás diariamente durante muchos años. Equilibra tus necesidades prácticas con tus preferencias estéticas para encontrar la opción perfecta para tu hogar.

¿Necesitas ayuda para elegir el sofá ideal? En Mendez Muebles & Hogar contamos con asesores especializados que te guiarán en tu compra. ¡Visítanos!
    `,
    coverImage: "/blog/sofa-perfecto.jpg",
    date: "2023-10-15",
    author: {
      name: "María González",
      avatar: "/blog/authors/maria.jpg",
    },
    category: "Decoración",
    tags: ["sofás", "decoración", "salón", "muebles"],
    readTime: 5,
  },
  {
    id: "2",
    slug: "tendencias-en-decoracion-para-2023",
    title: "Tendencias en decoración para 2023",
    excerpt:
      "Descubre las tendencias que dominarán la decoración de interiores este año y cómo incorporarlas a tu hogar.",
    content: `
# Tendencias en decoración para 2023

El mundo de la decoración de interiores está en constante evolución, y cada año trae consigo nuevas tendencias que reflejan cambios en nuestros estilos de vida, valores y preferencias estéticas. El 2023 no es una excepción, con tendencias que combinan sostenibilidad, funcionalidad y bienestar.

## 1. Naturaleza en interiores

La conexión con la naturaleza sigue siendo una prioridad en la decoración:

- **Plantas de interior**: Desde pequeños cactus hasta grandes plantas de hoja, la vegetación es protagonista.
- **Materiales naturales**: Madera sin tratar, piedra, ratán y fibras naturales.
- **Colores inspirados en la naturaleza**: Verdes, terrosos y azules que evocan paisajes naturales.

## 2. Sostenibilidad como prioridad

La conciencia ambiental se refleja en nuestras elecciones decorativas:

- **Muebles de segunda mano**: El vintage y lo restaurado gana terreno frente a lo nuevo.
- **Materiales reciclados y reciclables**: Desde plásticos reciclados hasta textiles sostenibles.
- **Artesanía local**: Apoyo a artesanos y productores locales.

## 3. Espacios multifuncionales

Nuestros hogares siguen adaptándose a múltiples necesidades:

- **Muebles versátiles**: Piezas que pueden transformarse o cumplir varias funciones.
- **Zonas de trabajo integradas**: Espacios de home office que se integran armoniosamente en el hogar.
- **Divisiones flexibles**: Paneles, estanterías y biombos que permiten reconfigurar espacios.

## 4. Curvas y formas orgánicas

Las líneas rectas dan paso a formas más suaves:

- **Sofás y sillones curvos**: Piezas que abrazan y crean sensación de confort.
- **Mesas y espejos orgánicos**: Formas irregulares que añaden dinamismo.
- **Arquitectura curvilínea**: Arcos y nichos que suavizan la estructura.

## 5. Maximalismo controlado

Después de años de minimalismo, vuelve la expresión personal:

- **Mezcla de estampados**: Combinaciones audaces pero armoniosas.
- **Colores vibrantes**: Tonos que expresan personalidad y energía.
- **Objetos con historia**: Piezas que cuentan historias personales.

## 6. Bienestar y confort

El hogar como santuario de bienestar:

- **Textiles envolventes**: Tejidos suaves y acogedores.
- **Iluminación adaptable**: Sistemas que se ajustan a diferentes momentos del día.
- **Espacios para el autocuidado**: Rincones dedicados a la relajación y meditación.

## Cómo incorporar estas tendencias

No es necesario rediseñar completamente tu hogar para estar al día. Pequeños cambios como añadir plantas, incorporar textiles sostenibles o reorganizar espacios pueden hacer una gran diferencia.

En Mendez Muebles & Hogar encontrarás piezas que te ayudarán a actualizar tu espacio siguiendo estas tendencias, siempre respetando tu estilo personal y necesidades específicas.

¿Qué tendencia te gustaría incorporar a tu hogar este año?
    `,
    coverImage: "/blog/tendencias-decoracion.jpg",
    date: "2023-09-28",
    author: {
      name: "Carlos Martínez",
      avatar: "/blog/authors/carlos.jpg",
    },
    category: "Tendencias",
    tags: ["decoración", "tendencias", "2023", "interiores"],
    readTime: 6,
  },
  {
    id: "3",
    slug: "como-organizar-una-cocina-pequena",
    title: "Cómo organizar una cocina pequeña",
    excerpt:
      "Consejos prácticos y soluciones inteligentes para maximizar el espacio en cocinas de dimensiones reducidas.",
    content: `
# Cómo organizar una cocina pequeña

Las cocinas pequeñas presentan desafíos únicos, pero con las estrategias adecuadas pueden convertirse en espacios funcionales y agradables. La clave está en maximizar cada centímetro disponible y mantener un orden impecable.

## Aprovecha las paredes

Las paredes son tu mejor aliado en una cocina pequeña:

- **Barras magnéticas**: Ideales para cuchillos y utensilios metálicos.
- **Rieles con ganchos**: Perfectos para colgar tazas, cucharones y otros utensilios.
- **Estanterías abiertas**: Aprovechan la altura y mantienen todo a la vista.
- **Organizadores de pared**: Desde especieros hasta portarrollos de papel.

## Optimiza los armarios

El interior de tus armarios puede albergar más de lo que crees:

- **Organizadores de puerta**: Aprovechan ese espacio a menudo desaprovechado.
- **Divisores ajustables**: Permiten adaptar el espacio a tus necesidades.
- **Bandejas giratorias**: Facilitan el acceso a productos en esquinas.
- **Apiladores**: Duplican el espacio de almacenamiento en estantes.

## Muebles multifuncionales

Cada mueble debe cumplir más de una función:

- **Islas con almacenamiento**: Proporcionan superficie de trabajo y espacio de guardado.
- **Mesas plegables**: Se pueden recoger cuando no se utilizan.
- **Carritos auxiliares**: Aportan movilidad y almacenamiento adicional.
- **Taburetes con espacio interior**: Asientos que también guardan objetos.

## Electrodomésticos a medida

Elige electrodomésticos pensados para espacios reducidos:

- **Versiones compactas**: Muchas marcas ofrecen líneas específicas para cocinas pequeñas.
- **Electrodomésticos 2 en 1**: Como hornos con microondas integrado.
- **Modelos empotrados**: Aprovechan nichos y no ocupan superficie de trabajo.

## Estrategias de organización

El orden es fundamental en espacios pequeños:

- **Agrupar por frecuencia de uso**: Lo más utilizado debe estar más accesible.
- **Eliminar duplicados**: ¿Realmente necesitas tres espátulas?
- **Almacenar fuera de la cocina**: Los artículos de uso ocasional pueden guardarse en otro lugar.
- **Contenedores transparentes**: Permiten ver el contenido sin abrir.

## Iluminación estratégica

Una buena iluminación hace que el espacio parezca más amplio:

- **Luces bajo armarios**: Iluminan las superficies de trabajo sin ocupar espacio.
- **Iluminación en estanterías**: Destaca elementos decorativos y facilita encontrar lo que buscas.
- **Luz natural**: Maximiza las ventanas existentes con cortinas ligeras.

## Colores y materiales

Las decisiones estéticas también influyen en la percepción del espacio:

- **Colores claros**: Amplían visualmente el espacio.
- **Superficies reflectantes**: Los acabados brillantes y espejos multiplican la luz.
- **Continuidad visual**: Usar el mismo material en diferentes superficies crea sensación de amplitud.

## Conclusión

Una cocina pequeña no tiene por qué ser limitante. Con creatividad y las soluciones adecuadas, puede convertirse en un espacio eficiente y acogedor donde preparar tus comidas sea un placer.

En Mendez Muebles & Hogar encontrarás muebles y accesorios diseñados específicamente para optimizar cocinas de dimensiones reducidas. ¡Visítanos y descubre todas las posibilidades!
    `,
    coverImage: "/blog/cocina-pequena.jpg",
    date: "2023-08-10",
    author: {
      name: "Laura Rodríguez",
      avatar: "/blog/authors/laura.jpg",
    },
    category: "Organización",
    tags: ["cocina", "organización", "espacios pequeños", "almacenamiento"],
    readTime: 7,
  },
  {
    id: "4",
    slug: "guia-para-elegir-el-colchon-ideal",
    title: "Guía para elegir el colchón ideal",
    excerpt:
      "Todo lo que necesitas saber para seleccionar el colchón que mejor se adapte a tus necesidades de descanso.",
    content: `
# Guía para elegir el colchón ideal

Un buen descanso es fundamental para nuestra salud física y mental, y el colchón juega un papel crucial en la calidad de nuestro sueño. Con tantas opciones disponibles en el mercado, elegir el colchón adecuado puede resultar abrumador. Esta guía te ayudará a tomar una decisión informada.

## Tipos de colchones

Cada tipo de colchón ofrece características diferentes:

### Colchones de muelles
- **Muelles Bonell**: Económicos y duraderos, pero transmiten el movimiento.
- **Muelles ensacados**: Cada muelle va en una bolsa individual, ofreciendo mayor independencia de lechos.
- **Muelles continuos**: Formados por una única pieza de alambre, proporcionan buen soporte.

### Colchones de espuma
- **Espuma tradicional**: Económicos y ligeros, pero menos duraderos.
- **Espuma de alta densidad**: Mayor durabilidad y soporte.
- **Viscoelástica**: Se adapta al cuerpo, aliviando puntos de presión.
- **Látex**: Natural o sintético, ofrece gran elasticidad y es hipoalergénico.

### Colchones híbridos
Combinan diferentes tecnologías para aprovechar lo mejor de cada material.

## Firmeza adecuada

La firmeza ideal depende de varios factores:

- **Peso corporal**: Personas con mayor peso suelen necesitar colchones más firmes.
- **Posición para dormir**:
  - Boca arriba: Firmeza media a alta.
  - De lado: Firmeza media, que permita el hundimiento de hombro y cadera.
  - Boca abajo: Firmeza alta para evitar la curvatura excesiva de la columna.
- **Problemas de espalda**: Consulta con un especialista para recomendaciones específicas.

## Tamaño correcto

El tamaño debe adaptarse a:
- Número de personas que lo utilizarán
- Dimensiones de la habitación
- Altura de los usuarios
- Movimiento durante el sueño

## Factores adicionales a considerar

### Transpirabilidad
Especialmente importante en climas cálidos o para personas que tienden a acalorarse durante la noche.

### Hipoalergenicidad
Fundamental para personas con alergias o asma.

### Aislamiento de movimiento
Crucial si compartes cama y tu pareja se mueve mucho durante la noche.

### Garantía y durabilidad
Un buen colchón es una inversión a largo plazo. Verifica la garantía y la vida útil esperada.

## Prueba antes de comprar

Siempre que sea posible, prueba el colchón antes de comprarlo:
- Túmbate en tu posición habitual para dormir
- Permanece al menos 10-15 minutos
- Evalúa si sientes puntos de presión o incomodidad

## Mantenimiento del colchón

Para prolongar la vida útil de tu colchón:
- Gíralo regularmente (si el fabricante lo recomienda)
- Utiliza un protector de colchón
- Aspíralo periódicamente
- Sigue las instrucciones de limpieza del fabricante

## Conclusión

Invertir en un buen colchón es invertir en tu salud y bienestar. Tómate el tiempo necesario para investigar y probar diferentes opciones antes de decidirte.

En Mendez Muebles & Hogar contamos con una amplia selección de colchones de las mejores marcas y nuestros asesores especializados pueden ayudarte a encontrar el modelo perfecto para tus necesidades específicas.

¿Necesitas renovar tu colchón? ¡Visítanos y descubre todas las opciones disponibles!
    `,
    coverImage: "/blog/colchon-ideal.jpg",
    date: "2023-07-05",
    author: {
      name: "Javier López",
      avatar: "/blog/authors/javier.jpg",
    },
    category: "Descanso",
    tags: ["colchones", "descanso", "dormitorio", "sueño"],
    readTime: 8,
  },
]

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}

