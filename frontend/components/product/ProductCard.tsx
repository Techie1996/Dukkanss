 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

const PRODUCT_PLACEHOLDERS = [
  "https://picsum.photos/seed/dukaans-biscuits/900/900",
  "https://picsum.photos/seed/dukaans-chocolates/900/900",
  "https://picsum.photos/seed/dukaans-namkeen/900/900",
  "https://picsum.photos/seed/dukaans-sweets-box/900/900"
];

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const primaryImageFromData = product.images?.[0];
  const fallbackIndex =
    Math.abs((product.slug || product.title || "product").length) %
    PRODUCT_PLACEHOLDERS.length;
  const primaryImage =
    primaryImageFromData ||
    PRODUCT_PLACEHOLDERS[fallbackIndex] ||
    PRODUCT_PLACEHOLDERS[0];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card flex flex-col overflow-hidden"
    >
      <Link href={`/product/${product.slug}`} className="relative block">
        <div className="relative h-56 w-full overflow-hidden bg-[#f5f7fb] sm:h-64">
          {primaryImage && (
            <Image
              src={primaryImage}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-2 text-sm font-semibold text-slate-900"
        >
          {product.title}
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-slate-900">
            €{product.price.toFixed(2)}
          </p>
          {product.rating && (
            <div className="flex items-center gap-1 text-xs text-amber-500">
              <span>★</span>
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;

