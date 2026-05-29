import { Star } from "lucide-react"

const testimonios = [
  {
    nombre: "Dr. Carlos M.",
    profesion: "Ginecólogo",
    comentario: "La plantilla de ginecología me ahorra al menos 2 horas diarias de papeleo. Las historias clínicas se generan solas y el soporte es excelente.",
    calificacion: 5,
  },
  {
    nombre: "Laura S.",
    profesion: "Administradora de Óptica",
    comentario: "Teníamos un desorden con las graduaciones y los cobros. Desde que instalamos Gestión Óptica Plus, todo está cuadradísimo. Vale cada centavo.",
    calificacion: 5,
  },
  {
    nombre: "Roberto G.",
    profesion: "Dueño de Gimnasio",
    comentario: "Buscaba algo sin pagos mensuales y esto fue la salvación. Controlo los pagos de los socios rapidísimo y la interfaz es súper intuitiva.",
    calificacion: 5,
  },
]

export function Testimonios() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-excel">
            Lo Que Dicen Nuestros Clientes
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Personas reales ahorrando tiempo real
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonios.map((t, idx) => (
            <div key={idx} className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition hover:shadow-md">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(t.calificacion)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{t.comentario}"</p>
              <div>
                <p className="font-semibold text-slate-900">{t.nombre}</p>
                <p className="text-sm text-slate-500">{t.profesion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonios
