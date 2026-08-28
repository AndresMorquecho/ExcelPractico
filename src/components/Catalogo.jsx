import { useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, Search, Star, Flame, ExternalLink, Sparkles, Smartphone } from "lucide-react"
import { plantillas } from "../data/plantillas"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { ModalDetalles } from "./ModalDetalles"
import { ModalComprar } from "./ModalComprar"

export function Catalogo() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("Todas")

  const categories = ["Todas", ...new Set(plantillas.map(p => p.categoria).filter(Boolean))]

  const filteredPlantillas = plantillas.filter(plantilla => {
    const matchesSearch = plantilla.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          plantilla.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "Todas" || plantilla.categoria === activeCategory
    return matchesSearch && matchesCategory
  })

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

        <div className="mt-8 flex flex-col items-center justify-center gap-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar plantillas..." 
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm focus:border-excel focus:outline-none focus:ring-1 focus:ring-excel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-excel text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlantillas.length > 0 ? (
            filteredPlantillas.map((plantilla, index) => (
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
                      {plantilla.mockupScreens ? (
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-[#0B1528] to-[#0A2540] p-3 flex items-center justify-center">
                          {/* Glow accents */}
                          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />
                          <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-teal-500/20 blur-xl pointer-events-none" />

                          {/* Stage */}
                          <div className="relative h-full w-full flex items-center justify-center pt-2">
                            {/* Phone 1 (Atrás / Odontograma) */}
                            <div className="absolute right-[8%] top-[12%] w-[47%] rounded-[18px] bg-slate-900 border-[2.5px] border-slate-700/80 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8)] transform rotate-[6deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 z-0">
                              <div className="overflow-hidden rounded-[14px] bg-white">
                                <div className="bg-[#1366D9] px-2 py-0.5 text-[8px] font-bold text-white flex items-center justify-between">
                                  <span>Odontograma</span>
                                  <span className="text-[7px] font-normal opacity-90">FDI</span>
                                </div>
                                <img
                                  src={plantilla.mockupScreens.odontograma}
                                  alt="Odontograma FDI"
                                  className="w-full aspect-[9/16] object-cover object-top"
                                  loading="lazy"
                                />
                              </div>
                            </div>

                            {/* Phone 2 (Frente / Home) */}
                            <div className="absolute left-[8%] top-[14%] w-[49%] rounded-[18px] bg-slate-900 border-[2.5px] border-blue-500/60 shadow-[0_20px_35px_-8px_rgba(19,102,217,0.5)] transform -rotate-[4deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 z-10">
                              <div className="overflow-hidden rounded-[14px] bg-white">
                                <div className="bg-[#1366D9] px-2 py-0.5 text-[8px] font-bold text-white flex items-center justify-between">
                                  <span>DentaSmile</span>
                                  <span className="text-[7px] font-normal opacity-90">09:41</span>
                                </div>
                                <img
                                  src={plantilla.mockupScreens.home}
                                  alt="DentaSmile Inicio"
                                  className="w-full aspect-[9/16] object-cover object-top"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={plantilla.miniatura}
                          alt={plantilla.nombre}
                          className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute left-4 top-4 flex flex-col gap-2">
                        {plantilla.precio > 0 ? (
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-excel shadow-sm">
                            <DollarSign className="h-4 w-4" />
                            <span className="line-through text-slate-400 font-medium">${plantilla.precio * 2}</span>
                            ${plantilla.precio} USD
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-excel shadow-sm">
                            <Smartphone className="h-3.5 w-3.5" />
                            <span>{plantilla.etiquetaPrecio || "App Móvil & Web"}</span>
                          </div>
                        )}
                      </div>
                      {plantilla.hotSale && (
                        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                          <Flame className="h-4 w-4" />
                          HOT SALE
                        </div>
                      )}
                      {plantilla.badge && !plantilla.hotSale && (
                        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-excel px-3 py-1 text-xs font-bold text-white shadow-sm">
                          <Sparkles className="h-3.5 w-3.5" />
                          {plantilla.badge}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        {plantilla.categoria && (
                          <span className="text-xs font-semibold text-excel uppercase tracking-wider">{plantilla.categoria}</span>
                        )}
                        {plantilla.calificacion && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-slate-700">
                              {plantilla.calificacion}
                              {plantilla.ventas && <span className="ml-1 text-xs font-normal text-slate-500">({plantilla.ventas})</span>}
                            </span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{plantilla.nombre}</h3>
                      <p className="mt-2 text-sm text-slate-600">{plantilla.descripcion}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto" />
                  <CardFooter className="flex-col gap-3 sm:flex-row sm:items-center">
                    {plantilla.isApp || plantilla.landingUrl ? (
                      <Button asChild className="w-full">
                        <a
                          href={plantilla.landingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span>Ver más detalles</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <>
                        <ModalDetalles plantilla={plantilla} />
                        <ModalComprar hotmartLink={plantilla.hotmartLink} plantillaNombre={plantilla.nombre} />
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-slate-500">
              No se encontraron plantillas que coincidan con la búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Catalogo

