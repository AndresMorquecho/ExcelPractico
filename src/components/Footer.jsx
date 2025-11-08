import { Facebook, MessageCircle, Youtube } from "lucide-react"
import { createWhatsappLink } from "../lib/utils"

const TikTokIcon = (props) => (
  <svg
    viewBox="0 0 256 256"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      fill="currentColor"
      d="M240 88.85c-27.49 0-51.58-8.67-68.54-22.67V168a52 52 0 1 1-52-52 51.09 51.09 0 0 1 12.2 1.48V96.48a83.36 83.36 0 0 0-12.2-.88 76 76 0 1 0 76 76V107.9c17.07 10.47 39.5 16 64 16Zm0-24c-27.49 0-51.58-8.67-68.54-22.67V64c17.07 10.47 39.5 16 64 16Z"
    />
  </svg>
)

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100076374125754",
    label: "Facebook",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@excel_practico_?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@excelpractico?si=P1DKyWbPkt-oB336",
    label: "YouTube",
  },
  {
    icon: MessageCircle,
    href: createWhatsappLink("Hola Excel Práctico, deseo contactarme por WhatsApp."),
    label: "WhatsApp",
  },
]

export function Footer() {
  return (
    <footer className="bg-excel-dark py-10 text-white">
      <div className="container flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/90">
          © 2025 Excel Práctico — Plantillas profesionales en VBA para Excel.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex min-w-[80px] flex-col items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-excel-dark shadow">
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

