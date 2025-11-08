import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "./ui/button"
import { createWhatsappLink } from "../lib/utils"

const navLinks = [
  { to: "inicio", label: "Inicio" },
  { to: "catalogo", label: "Catálogo" },
  { to: "personalizadas", label: "Personalizadas" },
  { to: "contacto", label: "Contacto" },
]

const whatsappGeneralLink = createWhatsappLink(
  "Hola Excel Práctico, necesito asesoría sobre las plantillas VBA.",
)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : ""
  }, [openMenu])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          to="inicio"
          smooth
          duration={700}
          className="flex cursor-pointer items-center gap-3 text-lg font-semibold tracking-tight text-excel"
          onClick={() => setOpenMenu(false)}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-excel/20">
            <img
              src="/img/Logo.png"
              alt="Logo Excel Práctico"
              className="h-9 w-9 rounded-full object-cover"
              loading="lazy"
            />
          </span>
          Excel Práctico
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={700}
              offset={-80}
              className="cursor-pointer transition hover:text-excel"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href={whatsappGeneralLink} target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full bg-white/70 p-2 text-excel transition hover:bg-white lg:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {openMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="space-y-4 border-t border-white/50 bg-white/95 px-6 py-6 text-base font-semibold text-slate-700 shadow-lg backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={700}
                  offset={-70}
                  className="block cursor-pointer rounded-2xl px-4 py-3 transition hover:bg-excel/10"
                  onClick={() => setOpenMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full" asChild onClick={() => setOpenMenu(false)}>
                <a href={whatsappGeneralLink} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

