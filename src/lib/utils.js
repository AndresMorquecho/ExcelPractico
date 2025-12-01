const RAW_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ""

/**
 * Helper para combinar clases de Tailwind de forma segura.
 * Ignora valores falsy (undefined, null, false, "").
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Genera un enlace válido de WhatsApp usando wa.me
 * - Si se define VITE_WHATSAPP_NUMBER, se usa como número por defecto.
 * - Si no hay número configurado, abre WhatsApp solo con el mensaje
 *   para que el usuario elija el contacto.
 *
 * Ejemplo de VITE_WHATSAPP_NUMBER:
 *   593999999999   (sin + ni espacios)
 */
export function createWhatsappLink(message = "") {
  const normalizedNumber = RAW_WHATSAPP_NUMBER.replace(/[^\d]/g, "")
  const baseUrl = "https://wa.me"
  const encodedMessage = encodeURIComponent(message)

  if (normalizedNumber) {
    return `${baseUrl}/${normalizedNumber}?text=${encodedMessage}`
  }

  // Sin número definido: permite que WhatsApp pregunte a qué contacto enviar
  return `${baseUrl}/?text=${encodedMessage}`
}


