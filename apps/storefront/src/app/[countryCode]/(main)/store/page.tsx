import { Metadata } from "next"
import { Suspense } from "react"
import StorePage from "@components/store/store-page"

export const metadata: Metadata = {
  title: "Tienda | CAMERA PRO",
  description: "Explora cámaras, lentes y accesorios profesionales.",
}

export default function Store() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark-100 pt-24 text-text-secondary px-gutter py-24">
          Cargando catálogo...
        </div>
      }
    >
      <StorePage />
    </Suspense>
  )
}
