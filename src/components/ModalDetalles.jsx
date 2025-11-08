import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Check, ExternalLink, MessageCircle, MonitorSmartphone, ShoppingBag } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { createWhatsappLink } from "../lib/utils"

export function ModalDetalles({ plantilla }) {
  if (!plantilla) return null

  const whatsappLink = createWhatsappLink(
    plantilla.whatsappMessage ??
      `Hola Excel Práctico, me interesa la plantilla ${plantilla.nombre}. ¿Podemos conversar?`,
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Más detalles</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="mb-6">
          <DialogTitle>{plantilla.nombre}</DialogTitle>
          <DialogDescription>
            {plantilla.descripcionExtendida}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-[260px] sm:h-[320px]"
            >
              {plantilla.imagenes.map((imagen, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-full w-full items-center justify-center bg-slate-100">
                    <img
                      src={imagen}
                      alt={`${plantilla.nombre} - captura ${index + 1}`}
                      className="max-h-[320px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="aspect-video overflow-hidden rounded-3xl border border-slate-200">
            <iframe
              src={plantilla.videoUrl}
              title={`Video demo ${plantilla.nombre}`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="grid gap-6 rounded-3xl bg-excel/5 p-6 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-excel-dark">Requisitos</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {plantilla.requisitos?.map((item, index) => {
                  const isNoCompatible = /no compatibles/i.test(item)
                  const Icon = isNoCompatible ? MonitorSmartphone : Check
                  const iconClass = isNoCompatible ? "text-red-500" : "text-excel"
                  return (
                    <li key={index} className="flex items-start gap-2">
                      <Icon className={`mt-0.5 h-4 w-4 ${iconClass}`} />
                      <span>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="rounded-3xl bg-white p-4 shadow-sm">
                {plantilla.personalizacion ??
                  "Esta plantilla puede personalizarse según tus necesidades. Escríbeme por WhatsApp para adaptarla."}
              </p>
              <p className="rounded-3xl bg-white p-4 text-sm font-semibold text-excel shadow-sm">
                🇪🇨 Si eres de Ecuador, escríbeme por WhatsApp para pagar por transferencia bancaria.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild>
                  <a href={plantilla.hotmartLink} target="_blank" rel="noreferrer">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Comprar ahora
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
            ¿Necesitas adaptar esta plantilla? Podemos conversar personalizaciones específicas para tu negocio.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalDetalles

