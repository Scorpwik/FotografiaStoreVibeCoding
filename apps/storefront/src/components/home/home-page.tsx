"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Star } from "lucide-react"

const heroLines = [
  { text: "CAPTURA", accent: false },
  { text: "LA LUZ", accent: false },
  { text: "PERFECTA", accent: true },
]

const categories = [
  {
    title: "CÁMARAS",
    subtitle: "Mirrorless & Cinema",
    image: "/products/category-cameras.jpg?v=3",
    href: "/store?category=camaras",
  },
  {
    title: "TRÍPODES",
    subtitle: "Soporte profesional",
    image: "/products/category-tripods.jpg?v=3",
    href: "/store?category=tripodes",
  },
  {
    title: "ACCESORIOS",
    subtitle: "Complementos Esenciales",
    image: "/products/category-accessories.jpg?v=3",
    href: "/store?category=accesorios",
  },
  {
    title: "LENTES",
    subtitle: "Óptica Premium",
    image: "/products/category-lenses.jpg?v=3",
    href: "/store?category=lentes",
  },
]

function AnimatedHeadline() {
  let charIndex = 0

  return (
    <h1 className="font-black leading-[0.82] tracking-tighter">
      {heroLines.map((line) => (
        <span key={line.text} className="block">
          {line.text.split("").map((char) => {
            const index = charIndex
            charIndex += 1
            return (
              <span
                key={`${line.text}-${index}`}
                className="inline-block animate-hero-wave"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="inline-block overflow-hidden align-bottom">
                  <span
                    className={`inline-block text-[18vw] md:text-[11vw] xl:text-[10.5rem] animate-hero-letter ${
                      line.accent ? "text-accent" : "text-white"
                    }`}
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export default function HomePage() {
  return (
    <div className="bg-dark-100">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-100 pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src="/products/hero-main.jpg?v=2"
            alt="Fujifilm profesional en acción"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25"></div>
        </div>

        <div className="relative z-10 max-w-none w-full px-gutter">
          <div className="max-w-7xl space-y-8">
            <div className="space-y-6">
              <div className="btn-glass-dark inline-flex items-center gap-2 px-4 py-2">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-accent text-xs font-bold tracking-widest">
                  NUEVA COLECCIÓN 2026
                </span>
              </div>

              <AnimatedHeadline />
            </div>

            <p className="text-xl text-text-secondary max-w-md leading-relaxed font-light">
              Equipamiento profesional de grado cinematográfico. Cámaras
              mirrorless, lentes premium y accesorios diseñados para creadores
              visuales sin compromisos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <LocalizedClientLink
                href="/store"
                className="btn-glass-primary inline-flex items-center justify-center gap-3 px-10 py-5 font-black tracking-wider group uppercase text-lg"
              >
                EXPLORAR AHORA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                className="btn-glass inline-flex items-center justify-center gap-3 px-10 py-5 font-black tracking-wider uppercase text-lg"
              >
                VER CATÁLOGO
              </LocalizedClientLink>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
              <div>
                <p className="text-4xl font-black text-accent">800+</p>
                <p className="text-text-secondary text-sm uppercase tracking-widest">
                  Productos
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-accent">25K+</p>
                <p className="text-text-secondary text-sm uppercase tracking-widest">
                  Clientes
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-accent">50+</p>
                <p className="text-text-secondary text-sm uppercase tracking-widest">
                  Marcas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-dark-100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat, index) => (
            <LocalizedClientLink key={cat.title} href={cat.href}>
              <div
                className="relative h-[420px] xl:h-[520px] group overflow-hidden cursor-pointer bg-dark-100 animate-catalog-rise"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover animate-ken-burns"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent group-hover:from-accent/75 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
                  <h3 className="text-4xl xl:text-5xl font-black mb-2 tracking-tighter">
                    {cat.title}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
                    {cat.subtitle}
                  </p>
                  <span className="btn-glass inline-flex px-6 py-3 font-bold uppercase tracking-wider">
                    Ver Colección →
                  </span>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </section>
    </div>
  )
}
