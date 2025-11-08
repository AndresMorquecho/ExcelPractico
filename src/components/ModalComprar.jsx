import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { CreditCard, DollarSign, Mail, MessageCircle } from "lucide-react"
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

export function ModalComprar({ hotmartLink, plantillaNombre }) {
  const whatsappCompraLink = createWhatsappLink(
    plantillaNombre
      ? `Hola Excel Práctico, soy de Ecuador y quiero comprar la plantilla ${plantillaNombre}.`
      : "Hola Excel Práctico, soy de Ecuador y quiero comprar una de sus plantillas.",
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Cómo comprar</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle>Pasos para comprar</DialogTitle>
          <DialogDescription>
            Sigue estos pasos y recibe tu plantilla profesional en cuestión de minutos.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4 rounded-3xl bg-excel/5 p-5">
            <p className="text-sm font-medium text-slate-700">
              Si no eres de Ecuador, realiza tu pago desde nuestra plataforma segura: el valor se convierte automáticamente a tu moneda local.
            </p>
            <ul className="space-y-4">
              {pasosCompra.map((paso) => (
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

          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild className="w-full justify-center">
              <a href={hotmartLink} target="_blank" rel="noreferrer">
                Comprar en línea
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-center">
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

