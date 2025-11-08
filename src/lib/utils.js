export function cn(...classes) {
  return classes
    .flatMap((cls) => {
      if (!cls) return []
      if (typeof cls === "string") return cls.split(" ")
      if (Array.isArray(cls)) return cls
      if (typeof cls === "object") {
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
      }
      return []
    })
    .filter(Boolean)
    .join(" ")
}

export function createWhatsappLink(message) {
  const base = "https://wa.me/593989485584"
  const text = message ? `?text=${encodeURIComponent(message)}` : ""
  return `${base}${text}`
}

