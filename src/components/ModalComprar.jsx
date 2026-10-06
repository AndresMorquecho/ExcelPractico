import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { CreditCard, DollarSign, Mail, MessageCircle, Download, KeyRound } from "lucide-react"
import { createWhatsappLink } from "../lib/utils"

const pasosCompra = [
  {
    icon: CreditCard,
    titulo: "Realiza la compra",
    descripcion: "Ingresa a la plataforma segura, completa tus datos y confirma tu pedido.",
  },
  {
    icon: DollarSign,
    titulo: "Pago en tu moneda local",
    descripcion: "El sistema convierte automáticamente y muestra métodos disponibles en tu país.",
  },
  {
    icon: Mail,
    titulo: "Recibe la plantilla al instante",
    descripcion: "Obtén el archivo y el acceso al tutorial directamente en tu correo.",
  },
]

export function ModalComprar({ hotmartLink, plantillaNombre, tipoProducto = "plantilla", precio }) {
  const esSoftware = tipoProducto === "software"
  const pasos = esSoftware ? [
    {
      icon: CreditCard,
      titulo: `Compra GRADA por $${precio} USD`,
      descripcion: "Abre el pago de Hotmart y revisa el importe final y los métodos de pago disponibles para tu país.",
    },
    {
      icon: Download,
      titulo: "Descarga el programa y el manual",
      descripcion: "Accede al contenido de tu compra y descarga el instalador para Windows de 64 bits y el manual PDF. No necesitas Microsoft Excel.",
    },
    {
      icon: KeyRound,
      titulo: "Activa tu licencia",
      descripcion: "La clave se entrega por separado. Con internet, abre Configuración → Licencia y pégala en GRADA. Si aún no la recibiste, contáctanos con tu comprobante.",
    },
  ] : pasosCompra
  const whatsappCompraLink = createWhatsappLink(
    plantillaNombre
      ? `Hola Excel Práctico, soy de Ecuador y quiero comprar ${esSoftware ? "el programa" : "la plantilla"} ${plantillaNombre}.${esSoftware ? ` Su precio es de ${precio} USD.` : ""}`
      : "Hola Excel Práctico, soy de Ecuador y quiero comprar una de sus plantillas.",
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Cómo comprar</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle>{esSoftware ? "Cómo comprar GRADA" : "Pasos para comprar"}</DialogTitle>
          <DialogDescription>
            {esSoftware ? "Licencia de pago único para una computadora con Windows." : "Sigue estos pasos y recibe tu plantilla profesional en cuestión de minutos."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4 rounded-3xl bg-excel/5 p-5">
            <p className="text-sm font-medium text-slate-700">
              {esSoftware ? "Puedes comprar en Hotmart desde Ecuador u otro país. Si prefieres consultar el pago local, usa el botón Soy de Ecuador." : "Si no eres de Ecuador, realiza tu pago desde nuestra plataforma segura: el valor se convierte automáticamente a tu moneda local."}
            </p>
            <ul className="space-y-4">
              {pasos.map((paso) => (
                <li
                  key={paso.titulo}
                  className="flex items-start gap-4 rounded-3xl bg-white p-4 shadow-sm"
                >
                  <div className="rounded-full bg-excel/10 p-3">
                    <paso.icon className="h-5 w-5 text-excel" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-excel-dark">{paso.titulo}</h3>
                    <p className="text-sm text-slate-600">{paso.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {esSoftware && (
            <p className="rounded-2xl border border-excel/15 bg-excel/5 p-4 text-sm text-slate-700">
              Demo de 48 horas sin internet. La licencia requiere conexión para activarse y verificarse al menos cada 7 días. Los datos de tu liga se guardan en tu computadora.
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild className="w-full justify-center bg-orange-500 hover:bg-orange-600 text-white shadow-lg text-base h-12">
              <a href={hotmartLink} target="_blank" rel="noreferrer">
                {esSoftware ? "Comprar en Hotmart" : "Comprar Ahora"}
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-center text-base h-12">
              <a href={whatsappCompraLink} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Soy de Ecuador
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComprar

