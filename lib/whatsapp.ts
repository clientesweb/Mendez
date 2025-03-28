import type { Product } from "@/lib/types"

interface CartItem extends Product {
  quantity: number
}

interface CheckoutFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  province: string
  paymentMethod: string
  notes: string
}

export async function sendToWhatsApp(items: CartItem[], subtotal: number) {
  // Número de WhatsApp
  const phoneNumber = "5493546524360"

  // Crear el mensaje con los detalles del pedido
  let message = "¡Hola! Me gustaría realizar el siguiente pedido:\n\n"

  // Agregar cada producto al mensaje
  items.forEach((item) => {
    const price = item.price - (item.price * item.discount) / 100
    const totalPrice = price * item.quantity

    message += `*${item.name}*\n`
    message += `Cantidad: ${item.quantity}\n`
    message += `Precio unitario: $${price.toFixed(2)}\n`
    message += `Subtotal: $${totalPrice.toFixed(2)}\n\n`
  })

  // Agregar el total
  message += `*TOTAL: $${subtotal.toFixed(2)}*\n\n`

  // Agregar mensaje para datos de envío
  message += "Por favor, necesito los siguientes datos para completar mi pedido:\n"
  message += "- Nombre completo\n"
  message += "- Dirección de entrega\n"
  message += "- Teléfono de contacto\n"
  message += "- Método de pago preferido\n\n"
  message += "¡Gracias!"

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message)

  // Crear la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Abrir WhatsApp en una nueva ventana
  window.open(whatsappUrl, "_blank")

  return true
}

export async function sendCheckoutToWhatsApp(items: CartItem[], subtotal: number, formData: CheckoutFormData) {
  // Número de WhatsApp
  const phoneNumber = "5493546524360"

  // Costo de envío fijo
  const shipping = 1500
  const total = subtotal + shipping

  // Crear el mensaje con los detalles del pedido
  let message = "🛒 *NUEVO PEDIDO*\n\n"

  // Información del cliente
  message += "👤 *DATOS DEL CLIENTE*\n"
  message += `Nombre: ${formData.firstName} ${formData.lastName}\n`
  message += `Email: ${formData.email}\n`
  message += `Teléfono: ${formData.phone}\n\n`

  // Dirección de envío
  message += "📍 *DIRECCIÓN DE ENVÍO*\n"
  message += `${formData.address}\n`
  message += `${formData.city}, ${formData.province}\n`
  message += `CP: ${formData.postalCode}\n\n`

  // Método de pago
  message += "💳 *MÉTODO DE PAGO*\n"
  message += `${formData.paymentMethod.charAt(0).toUpperCase() + formData.paymentMethod.slice(1)}\n\n`

  // Productos
  message += "📦 *PRODUCTOS*\n"
  items.forEach((item, index) => {
    const price = item.price - (item.price * item.discount) / 100
    const totalPrice = price * item.quantity

    message += `${index + 1}. ${item.name}\n`
    message += `   Cantidad: ${item.quantity}\n`
    message += `   Precio unitario: $${price.toFixed(2)}\n`
    message += `   Subtotal: $${totalPrice.toFixed(2)}\n\n`
  })

  // Resumen del pedido
  message += "💰 *RESUMEN DEL PEDIDO*\n"
  message += `Subtotal: $${subtotal.toFixed(2)}\n`
  message += `Envío: $${shipping.toFixed(2)}\n`
  message += `TOTAL: $${total.toFixed(2)}\n\n`

  // Notas adicionales
  if (formData.notes) {
    message += "📝 *NOTAS ADICIONALES*\n"
    message += `${formData.notes}\n\n`
  }

  message += "¡Gracias por tu compra! Nos pondremos en contacto contigo pronto para confirmar los detalles."

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message)

  // Crear la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Abrir WhatsApp en una nueva ventana
  window.open(whatsappUrl, "_blank")

  return true
}

