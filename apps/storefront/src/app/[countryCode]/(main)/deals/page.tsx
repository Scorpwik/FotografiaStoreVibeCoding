import { Metadata } from "next"
import { Suspense } from "react"
import StorePage from "@components/store/store-page"

export const metadata: Metadata = {
  title: "Ofertas | CAMERA PRO",
  description: "Equipos destacados y ofertas de CAMERA PRO.",
}

export default function Deals() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark-100 pt-24 text-text-secondary px-gutter py-24">
          Cargando ofertas...
        </div>
      }
    >
      <StorePage
        title={"OFERTAS\nDESTACADAS"}
        subtitle="SELECCIÓN"
        dealsOnly
      />
    </Suspense>
  )
}
