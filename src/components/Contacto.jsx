import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"
import { createWhatsappLink } from "../lib/utils"

export function Contacto() {
  const whatsappContactoLink = createWhatsappLink(
    "Hola Excel Práctico, necesito asesoría personalizada sobre las plantillas VBA.",
  )

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-excel">
            Hablemos
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Conversemos por WhatsApp
          </h2>
          <p className="text-base text-slate-700">
            Estamos listos para ayudarte a implementar soluciones en Excel VBA que impulsen tu productividad. Escríbenos y responderemos lo antes posible.
          </p>

          <div className="flex flex-col gap-4 rounded-3xl bg-excel/5 p-6 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-excel" />
              <span>Recibe asesoría inmediata por WhatsApp para resolver dudas puntuales.</span>
            </div>
          </div>

          <Button asChild className="w-full sm:w-auto">
            <a href={whatsappContactoLink} target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 rounded-3xl bg-slate-50/80 p-8 shadow-soft text-sm text-slate-700"
        >
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-excel"></span>
            Orientación para elegir la plantilla ideal según tu sector.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-excel"></span>
            Detalles sobre personalizaciones, costos y tiempos de implementación.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-excel"></span>
            Soporte postventa para resolver dudas puntuales de uso.
          </li>
        </motion.ul>
      </div>
    </section>
  )
}

export default Contacto

