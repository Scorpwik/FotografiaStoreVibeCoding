import { Metadata } from "next"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"
import Footer from "@components/layout/footer"
import NavbarShell from "@components/layout/navbar-shell"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "CAMERA PRO - Equipamiento Fotográfico Profesional",
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await Promise.race([
    retrieveCustomer().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500)),
  ])
  const cart = await Promise.race([
    retrieveCart().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500)),
  ])
  let shippingOptions: StoreCartShippingOption[] = []

  if (cart) {
    const { shipping_options } = await listCartOptions().catch(() => ({
      shipping_options: [] as StoreCartShippingOption[],
    }))

    shippingOptions = shipping_options
  }

  return (
    <>
      <NavbarShell />
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}

      {cart && (
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
