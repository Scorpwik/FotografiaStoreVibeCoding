import { retrieveCart } from "@lib/data/cart"
import Navbar from "./navbar"

export default async function NavbarShell() {
  const cart = await Promise.race([
    retrieveCart().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500)),
  ])
  const cartCount =
    cart?.items?.reduce((total, item) => total + (item.quantity || 0), 0) ?? 0

  return <Navbar cartCount={cartCount} />
}

