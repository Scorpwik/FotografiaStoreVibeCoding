export type CatalogProduct = {
  id: string
  name: string
  category: string
  categorySlug:
    | "camaras"
    | "lentes"
    | "accesorios"
    | "tripodes"
    | "almacenamiento"
  price: string
  image: string
  badge: string | null
}

const categoryNames: Record<string, string> = {
  camaras: "Cámaras",
  lentes: "Lentes",
  accesorios: "Accesorios",
  tripodes: "Trípodes",
  almacenamiento: "Almacenamiento",
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: "sony-alpha-7",
    name: "Sony α7",
    category: "Cámaras",
    categorySlug: "camaras",
    price: "2498 €",
    image: "/products/sony-alpha-7.jpg",
    badge: "NEW",
  },
  {
    id: "lentes-sony-fe",
    name: "Lentes Sony FE",
    category: "Lentes",
    categorySlug: "lentes",
    price: "1798 €",
    image: "/products/lentes-sony-fe.jpg",
    badge: null,
  },
  {
    id: "sony-fe-70-200-gm",
    name: "Sony FE 70-200mm GM OSS",
    category: "Lentes",
    categorySlug: "lentes",
    price: "2798 €",
    image: "/products/sony-fe-70-200.jpg",
    badge: "HOT",
  },
  {
    id: "tripode-fibra-carbono",
    name: "Trípode de fibra de carbono",
    category: "Trípodes",
    categorySlug: "tripodes",
    price: "449 €",
    image: "/products/tripode-carbono.jpg",
    badge: null,
  },
  {
    id: "kit-fotografia",
    name: "Kit de fotografía",
    category: "Accesorios",
    categorySlug: "accesorios",
    price: "1498 €",
    image: "/products/kit-fotografia.jpg",
    badge: null,
  },
]

type StoreRegion = {
  id: string
  currency_code: string
  countries?: { iso_2?: string }[]
}

type StoreProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string | null
  metadata?: Record<string, unknown> | null
  categories?: { name?: string; handle?: string }[] | null
  images?: { url?: string }[] | null
  variants?: {
    calculated_price?: {
      calculated_amount?: number
      currency_code?: string
    } | null
  }[] | null
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

function mapStoreProduct(product: StoreProduct): CatalogProduct {
  const slug = String(
    product.metadata?.category_slug ||
      product.categories?.[0]?.handle ||
      "accesorios"
  ) as CatalogProduct["categorySlug"]
  const price = product.variants?.[0]?.calculated_price
  const badge = product.metadata?.badge

  return {
    id: product.id,
    name: product.title,
    category: product.categories?.[0]?.name || categoryNames[slug] || "Accesorios",
    categorySlug: categoryNames[slug] ? slug : "accesorios",
    price:
      price?.calculated_amount != null
        ? formatPrice(price.calculated_amount, price.currency_code || "eur")
        : "",
    image:
      product.thumbnail ||
      product.images?.[0]?.url ||
      "/products/sony-alpha-7.jpg",
    badge: typeof badge === "string" ? badge : null,
  }
}

export async function fetchCatalogProducts(): Promise<CatalogProduct[]> {
  const backend =
    process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
  const publishableKey = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error("Falta la clave publicable de Medusa.")
  }

  const headers = { "x-publishable-api-key": publishableKey }
  const regionsResponse = await fetch(`${backend}/store/regions?limit=20`, {
    headers,
    cache: "no-store",
  })

  if (!regionsResponse.ok) {
    throw new Error("No se pudieron leer las regiones de la tienda.")
  }

  const { regions } = (await regionsResponse.json()) as {
    regions: StoreRegion[]
  }
  const region =
    regions.find((item) =>
      item.countries?.some((country) => country.iso_2 === "dk")
    ) || regions[0]

  if (!region) {
    throw new Error("La tienda no tiene una región configurada.")
  }

  const productsResponse = await fetch(
    `${backend}/store/products?limit=20&region_id=${region.id}&fields=*variants.calculated_price,*categories,*images`,
    { headers, cache: "no-store" }
  )

  if (!productsResponse.ok) {
    throw new Error("No se pudieron leer los productos de la tienda.")
  }

  const { products } = (await productsResponse.json()) as {
    products: StoreProduct[]
  }

  return products.map(mapStoreProduct)
}
