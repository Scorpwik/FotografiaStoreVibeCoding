"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-dark-100 pt-24">
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-gutter space-y-4">
          <p className="text-accent font-bold uppercase tracking-widest text-sm">
            CONTACTO
          </p>
          <h1 className="text-6xl md:text-7xl font-black">
            HABLEMOS
            <br />
            DE TU PROYECTO
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-12">
            {[
              { icon: Mail, label: "EMAIL", value: "info@camerapro.com" },
              { icon: Phone, label: "TELÉFONO", value: "+593 2 234 5678" },
              { icon: MapPin, label: "UBICACIÓN", value: "Quito, Ecuador" },
            ].map((contact) => {
              const Icon = contact.icon
              return (
                <div key={contact.label} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-accent" />
                    <p className="text-accent font-black uppercase tracking-wider text-sm">
                      {contact.label}
                    </p>
                  </div>
                  <p className="text-xl font-bold">{contact.value}</p>
                </div>
              )
            })}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            {sent && (
              <p className="border border-accent bg-accent/10 px-6 py-4 text-accent font-bold uppercase tracking-wider text-sm">
                Gracias. Te contactaremos pronto.
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white/10 border border-white/15 rounded-full text-text-primary px-6 py-4 placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors uppercase tracking-wider font-bold text-sm"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white/10 border border-white/15 rounded-full text-text-primary px-6 py-4 placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors uppercase tracking-wider font-bold text-sm"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Asunto"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full bg-white/10 border border-white/15 rounded-full text-text-primary px-6 py-4 placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors uppercase tracking-wider font-bold text-sm"
              required
            />

            <textarea
              placeholder="Tu Mensaje"
              rows={8}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-dark-50 border border-white/15 rounded-3xl text-text-primary px-6 py-4 placeholder-text-muted focus:outline-none focus:border-accent/60 transition-colors uppercase tracking-wider font-bold text-sm resize-none"
              required
            />

            <button
              type="submit"
              className="btn-glass-primary w-full py-5 font-black uppercase tracking-wider text-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
