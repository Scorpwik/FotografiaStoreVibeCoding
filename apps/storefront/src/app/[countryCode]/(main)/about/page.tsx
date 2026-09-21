import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes somos | CAMERA PRO",
  description:
    "Pasión por la fotografía. Equipamiento profesional certificado para creadores visuales.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-dark-100 pt-24">
      <section className="border-b border-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-gutter space-y-8">
          <p className="text-accent font-bold uppercase tracking-widest text-sm">
            QUIÉNES SOMOS
          </p>
          <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-3xl">
            PASIÓN POR LA
            <br />
            <span className="text-accent">FOTOGRAFÍA</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            CAMERA PRO nace de la obsesión por la excelencia en equipamiento
            fotográfico. Somos fotógrafos, videógrafos e ingenieros
            comprometidos con calidad sin compromisos.
          </p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-black">NUESTRA MISIÓN</h3>
              <p className="text-text-secondary text-lg leading-relaxed font-light">
                Proporcionar a fotógrafos y videógrafos profesionales el mejor
                equipamiento disponible, con garantía, soporte y servicio que
                los creadores merecen.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-black">NUESTRA VISIÓN</h3>
              <p className="text-text-secondary text-lg leading-relaxed font-light">
                Ser el referente global de equipamiento fotográfico de grado
                profesional, donde cada creador visual encuentre exactamente lo
                que necesita para contar sus historias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-gutter space-y-16">
          <h2 className="text-5xl font-black">NUESTROS VALORES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "CALIDAD",
                desc: "Cada producto es certificado y verificado por expertos.",
              },
              {
                num: "02",
                title: "INNOVACIÓN",
                desc: "Siempre a la vanguardia de la tecnología fotográfica.",
              },
              {
                num: "03",
                title: "COMUNIDAD",
                desc: "Apoyamos y empoderamos a creadores visuales globales.",
              },
            ].map((value) => (
              <div
                key={value.num}
                className="space-y-6 bg-dark-50 border border-border p-10"
              >
                <p className="text-6xl font-black text-accent">{value.num}</p>
                <h3 className="text-3xl font-black">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-gutter text-center space-y-8">
          <h2 className="text-5xl font-black">¿TIENES PREGUNTAS?</h2>
          <p className="text-xl text-text-secondary">
            Nuestro equipo está listo para ayudarte.
          </p>
          <LocalizedClientLink
            href="/contact"
            className="btn-glass-primary inline-flex items-center gap-3 px-12 py-5 font-black uppercase tracking-wider text-lg"
          >
            CONTACTAR
          </LocalizedClientLink>
        </div>
      </section>
    </div>
  )
}
