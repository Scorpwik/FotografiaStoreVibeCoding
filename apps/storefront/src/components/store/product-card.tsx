"use client"

import { CatalogProduct } from "@lib/catalog"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductCardProps = {
  product: CatalogProduct
  imageHeight?: string
  cover?: boolean
}

export default function ProductCard({
  product,
  imageHeight = "h-80",
  cover = false,
}: ProductCardProps) {
  return (
    <LocalizedClientLink href="/store" className="block h-full">
      <div className="group cursor-pointer h-full">
        <div
          className={`relative ${imageHeight} overflow-hidden rounded-t-[28px] border border-white/10 bg-dark-200 group-hover:border-accent/40 transition-colors`}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
              cover ? "object-cover" : "object-contain p-4"
            }`}
          />

          {product.badge && (
            <div className="btn-glass-primary absolute top-6 right-6 px-4 py-2 font-black uppercase text-xs tracking-wider">
              {product.badge}
            </div>
          )}

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="btn-glass-primary px-8 py-3 font-black uppercase tracking-wider">
              Ver Detalles
            </span>
          </div>
        </div>

        <div className="bg-dark-50/80 backdrop-blur-xl border border-t-0 border-white/10 rounded-b-[28px] p-6 space-y-3">
          <p className="text-accent font-bold text-xs uppercase tracking-widest">
            {product.category}
          </p>
          <h3 className="text-lg font-black group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-accent font-black text-lg">{product.price}</p>
          <span className="btn-glass-primary block w-full text-center py-3 font-bold uppercase tracking-wider">
            Agregar al Carrito
          </span>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
