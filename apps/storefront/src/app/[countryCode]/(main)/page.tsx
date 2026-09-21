import { Metadata } from "next"
import HomePage from "@components/home/home-page"

export const metadata: Metadata = {
  title: "CAMERA PRO - Equipamiento Fotográfico Profesional",
  description:
    "Cámaras mirrorless, lentes premium y accesorios de grado cinematográfico.",
}

export default function Home() {
  return <HomePage />
}
