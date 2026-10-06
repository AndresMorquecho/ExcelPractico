import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    pregunta: "¿GRADA necesita Microsoft Excel?",
    respuesta: "No. GRADA es un programa independiente para Windows de 64 bits. Su licencia cuesta 25 USD, es de pago único para una computadora y necesita internet para activarse y verificarse al menos cada 7 días. El demo dura 48 horas y no requiere conexión.",
  },
  {
    pregunta: "¿Necesito saber programar en Excel o VBA?",
    respuesta: "No, para nada. Las plantillas vienen totalmente listas para usar. Solo abres el archivo y empiezas a registrar tus datos a través de los formularios intuitivos.",
  },
  {
    pregunta: "¿Funciona en Mac, Excel Online o Google Sheets?",
    respuesta: "No, debido a que usamos macros avanzadas de VBA para automatizar los procesos, nuestras plantillas solo son compatibles con Microsoft Excel de escritorio para Windows (versiones 2016 en adelante).",
  },
  {
    pregunta: "¿Es un pago único o mensualidad?",
    respuesta: "Es un pago ÚNICO. Una vez que compras la plantilla, es tuya para siempre y puedes usarla sin restricciones. No cobramos suscripciones ni pagos ocultos.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-excel">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Resuelve todas tus dudas
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.pregunta}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
