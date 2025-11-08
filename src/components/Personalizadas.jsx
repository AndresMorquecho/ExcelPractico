import { motion } from "framer-motion"
import { Cog, Lightbulb, LineChart } from "lucide-react"
import { Button } from "./ui/button"
import { createWhatsappLink } from "../lib/utils"
import ModalPersonalizados from "./ModalPersonalizados"

const beneficios = [
  {
    icon: Cog,
    titulo: "Automatización completa",
    descripcion: "Procesos diseñados para reducir tareas manuales y errores.",
  },
  {
    icon: Lightbulb,
    titulo: "Diseños adaptados",
    descripcion: "Interfaces pensadas para tu equipo y flujo de trabajo.",
  },
  {
    icon: LineChart,
    titulo: "Reportes personalizados",
    descripcion: "Paneles e indicadores a la medida de tus objetivos.",
  },
]

export function Personalizadas() {
  const whatsappPersonalizadasLink = createWhatsappLink(
    "Hola Excel Práctico, necesito una plantilla personalizada en Excel VBA.",
  )

  return (
    <section
      id="personalizadas"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-excel/10 via-white to-excel/5" />
      <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-soft backdrop-blur-sm lg:p-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-excel/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-excel">
            <span className="h-2 w-2 rounded-full bg-excel" />
            Personalizaciones
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            ¿Necesitas una plantilla a medida?
          </h2>
          <p className="text-base text-slate-700 lg:text-lg">
            En Excel Práctico desarrollamos sistemas personalizados en VBA según tus necesidades.
            Ideal para negocios, médicos, contadores, educación y más.
          </p>
          <div className="grid gap-4 text-sm text-slate-600">
            <p className="inline-flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-excel/10 text-excel">
                <Cog className="h-4 w-4" />
              </span>
              Diseñamos flujos y pantallas a medida de tu proceso real.
            </p>
            <p className="inline-flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-excel/10 text-excel">
                <LineChart className="h-4 w-4" />
              </span>
              KPIs, reportes y dashboards listos para presentar.
            </p>
            <p className="inline-flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-excel/10 text-excel">
                <Lightbulb className="h-4 w-4" />
              </span>
              Integración con otros sistemas, plantillas o datos existentes.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="w-full sm:w-auto">
              <a href={whatsappPersonalizadasLink} target="_blank" rel="noreferrer">
                Solicitar plantilla personalizada
              </a>
            </Button>
            <ModalPersonalizados triggerVariant="default" />
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {beneficios.map((beneficio, index) => (
            <li
              key={beneficio.titulo}
              className="flex gap-4 rounded-3xl bg-white/90 p-6 shadow-soft backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-excel/10">
                <beneficio.icon className="h-6 w-6 text-excel" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm text-slate-600">{beneficio.descripcion}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Personalizadas

