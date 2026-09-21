import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "CAMERA PRO - Equipamiento Fotográfico Profesional",
  description:
    "Equipamiento fotográfico profesional para creadores visuales.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" className="bg-dark-100">
      <body className="bg-dark-100 text-text-primary antialiased">
        {props.children}
      </body>
    </html>
  )
}
