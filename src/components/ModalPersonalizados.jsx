import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { ejemplosPersonalizados } from "../data/personalizados"
import { MessageCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { createWhatsappLink } from "../lib/utils"

export function ModalPersonalizados({ triggerVariant = "outline" }) {
  const whatsappLink = createWhatsappLink(
    "Hola Excel Práctico, me gustaron los ejemplos de plantillas personalizadas y quiero conversar la mía.",
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant === "default" ? "outline" : triggerVariant}
          className={
            triggerVariant === "outline"
              ? "border-white/60 bg-white/10 text-white hover:bg-white/20"
              : "border border-excel bg-white text-excel hover:bg-excel/10"
          }
        >
          Ver ejemplos reales
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl border-0 bg-white/95 p-0 shadow-2xl backdrop-blur">
        <DialogHeader className="space-y-3 border-b border-slate-100 bg-excel/5 px-8 py-6">
          <DialogTitle className="flex items-center gap-3 text-2xl text-slate-900">
            <Sparkles className="h-6 w-6 text-excel" />
            Conversamos la idea y la volvemos una plantilla completa
          </DialogTitle>
          <p className="text-sm text-slate-600">
            Estos son ejemplos reales de cómo iniciamos con bocetos compartidos por WhatsApp y terminamos con
            soluciones profesionales listas para usar.
          </p>
        </DialogHeader>

        <div className="space-y-10 px-8 py-10">
          {ejemplosPersonalizados.map((ejemplo, index) => (
            <motion.div
              key={ejemplo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grid gap-8 lg:grid-cols-[1fr_1fr]"
            >
              <div className="space-y-4 rounded-3xl bg-slate-50 p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-excel/10 px-3 py-1 text-xs font-semibold uppercase text-excel">
                  <MessageCircle className="h-4 w-4" />
                  Conversación inicial
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{ejemplo.titulo}</h3>
                <p className="text-sm text-slate-600">{ejemplo.descripcionCliente}</p>
                <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-inner">
                  <img
                    src={ejemplo.imagenCliente}
                    alt={`Chat inicial ${ejemplo.titulo}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 rounded-3xl bg-white p-6 shadow-soft">
                <span className="inline-flex items-center gap-2 rounded-full bg-excel px-3 py-1 text-xs font-semibold uppercase text-white">
                  Resultado final
                </span>
                <p className="text-sm text-slate-600">{ejemplo.descripcionResultado}</p>
                <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <img
                    src={ejemplo.imagenEntrega}
                    alt={`Entrega final ${ejemplo.titulo}`}
                    className="max-h-[320px] w-full object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 -z-10 bg-slate-50" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex justify-center pt-4">
            <Button asChild className="w-full max-w-sm bg-excel text-white hover:bg-excel-dark">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Solicitar plantilla personalizada
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalPersonalizados

