import { motion } from "framer-motion"
import { DollarSign } from "lucide-react"
import { plantillas } from "../data/plantillas"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { ModalDetalles } from "./ModalDetalles"
import { ModalComprar } from "./ModalComprar"

export function Catalogo() {
  return (
    <section id="catalogo" className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-excel"
          >
            Catálogo de Plantillas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Soluciones profesionales listas para implementar
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {plantillas.map((plantilla, index) => (
            <motion.div
              key={plantilla.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <CardHeader className="gap-4">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                    <img
                      src={plantilla.miniatura}
                      alt={plantilla.nombre}
                      className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-excel">
                      <DollarSign className="h-4 w-4" />
                      ${plantilla.precio} USD
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{plantilla.nombre}</h3>
                    <p className="mt-2 text-sm text-slate-600">{plantilla.descripcion}</p>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto" />
                <CardFooter className="flex-col gap-3 sm:flex-row sm:items-center">
                  <ModalDetalles plantilla={plantilla} />
                  <ModalComprar hotmartLink={plantilla.hotmartLink} plantillaNombre={plantilla.nombre} />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalogo

