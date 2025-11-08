import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "./ui/button"
import { createWhatsappLink } from "../lib/utils"

export function Hero() {
  const whatsappHeroLink = createWhatsappLink(
    "Hola Excel Práctico, quiero conversar sobre sus plantillas VBA.",
  )

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-excel to-excel-dark pt-28 pb-24 text-white sm:pt-32 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-[url('https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-15 mix-blend-soft-light"></div>
      <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Excel Práctico
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Automatiza tu negocio con plantillas profesionales en Excel VBA.
          </h1>
          <p className="mt-6 text-lg text-white/85 sm:text-xl">
            Desarrolladas por Excel Práctico — sistemas listos para usar, fáciles y eficientes.
            Optimiza tus procesos en cuestión de minutos.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild>
              <ScrollLink to="catalogo" smooth duration={700} offset={-80}>
                Ver catálogo
              </ScrollLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/60 bg-white/10 text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <a href={whatsappHeroLink} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="hidden rounded-4xl bg-white/15 p-14 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:flex lg:flex-col lg:gap-8"
        >
          <div className="flex items-center gap-6">
            <span className="inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl ring-2 ring-excel/30">
              <img
                src="/img/Logo.png"
                alt="Logo Excel Práctico"
                className="h-24 w-24 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">Excel Práctico</p>
              <p className="text-2xl font-semibold text-white">Soluciones creadas para tu negocio</p>
            </div>
          </div>
          <ul className="space-y-3 text-base text-white/85">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white"></span>
              Plantillas completas con macros VBA listas para usar.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white"></span>
              Personalización disponible según tu sector y flujo.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white"></span>
              Soporte cercano desde Ecuador para toda Latinoamérica.
            </li>
            <li className="flex items-start gap-3 font-semibold text-white">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white"></span>
              Pago único, sin mensualidades ni costos ocultos.
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="pointer-events-none absolute -bottom-20 left-1/2 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-white/30 blur-3xl sm:block"
      />
    </section>
  )
}

export default Hero

