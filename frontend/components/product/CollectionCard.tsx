"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Collection } from "@/lib/types";

const COLLECTION_PLACEHOLDERS = [
  "https://picsum.photos/seed/dukaans-snacks/800/600",
  "https://picsum.photos/seed/dukaans-sweets/800/600",
  "https://picsum.photos/seed/dukaans-spices/800/600",
  "https://picsum.photos/seed/dukaans-rice/800/600"
];

type Props = {
  collection: Collection;
};

const CollectionCard = ({ collection }: Props) => {
  const fallbackIndex =
    Math.abs((collection.slug || collection.title || "collection").length) %
    COLLECTION_PLACEHOLDERS.length;
  const imageSrc =
    collection.image || COLLECTION_PLACEHOLDERS[fallbackIndex] || COLLECTION_PLACEHOLDERS[0];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card group flex cursor-pointer flex-col overflow-hidden"
    >
      <Link href={`/collections/${collection.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-40 w-full overflow-hidden bg-[#f5f7fb] sm:h-48">
          <Image
            src={imageSrc}
            alt={collection.title}
            fill
            sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900">
            {collection.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Shop
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default CollectionCard;

